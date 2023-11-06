import type { ReactNode } from "react";
import React from "react";

import { generalConstants } from "@constants";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

const FallbackComponent = () => {
  const onReset = () => {
    window.location.href = window.location.origin;
  };
  //on an appropriate time can handle this so much better
  return <div onClick={onReset}>{generalConstants.runtimeErrorMessage}</div>;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    //Can handle sentry, webengage or another tracking applications
    console.log("Runtime error:", error);
  }

  render() {
    return this.state.hasError ? <FallbackComponent /> : this.props.children;
  }
}

const ErrorBoundaryWrapper: React.FC<ErrorBoundaryProps> = ({
  children,
}: Pick<ErrorBoundaryProps, "children">) => {
  return <ErrorBoundary>{children}</ErrorBoundary>;
};

export default ErrorBoundaryWrapper;
