import { atomsWithQuery } from "jotai-tanstack-query";

import { ErrorResponse } from "@config";

import type { GetUserRequest, GetUserResponse } from "../types";
import userInteractorProvider from "./provider";
import { GET_USER } from "../constants";

const useGetUser = ({ id }: GetUserRequest) => {
  const queryKey = [GET_USER, id].filter(Boolean);
  return atomsWithQuery<GetUserResponse, ErrorResponse>(() => ({
    queryKey,
    queryFn: () => userInteractorProvider().getUser({ id }),
  }));
};

export default useGetUser;
