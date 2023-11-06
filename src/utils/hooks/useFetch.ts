import { useEffect, useRef, useState } from "react";

export interface Idle {
  type: "idle";
}

export interface Pending {
  type: "pending";
}

export interface Success<T> {
  type: "successful";
  data: T;
}

export interface Fail {
  type: "fail";
  error: unknown;
}

export type PromiseFn<T> = (K: AbortSignal) => Promise<T>;

export type State<T> = Idle | Pending | Success<T> | Fail;

export type Signal = AbortController["signal"];

export type SuccessFn = Function;

export type ErrorFn = Function;

const useFetch = <T>() => {
  const ctrl = useRef<AbortController | null>(null);
  const [state, setState] = useState<State<T>>({ type: "idle" });

  const abort = () => ctrl.current?.abort();

  const handleFetch = async (
    promiseFn: PromiseFn<T>,
    onSuccess: SuccessFn,
    onError: ErrorFn
  ) => {
    abort();
    ctrl.current = new AbortController();
    setState({ type: "pending" });
    try {
      const data = await promiseFn(ctrl.current.signal);
      setState({ type: "successful", data });
      onSuccess();
    } catch (error: unknown) {
      if (ctrl.current.signal.aborted) {
        throw new Error("متاسفانه خطایی رخ داده است");
      }
      setState({ type: "fail", error });
      onError();
    }
    useEffect(() => {
      return () => abort();
    }, []);
  };

  return [state, handleFetch, abort] as const;
};

export default useFetch;
