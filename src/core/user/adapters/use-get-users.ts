import { atomsWithQuery } from "jotai-tanstack-query";

import { ErrorResponse } from "@config";

import type { GetUsersResponse } from "../types";
import userInteractorProvider from "./provider";
import { GET_USERS } from "../constants";

const useGetUsers = () => {
  const queryKey = [GET_USERS];
  return atomsWithQuery<GetUsersResponse, ErrorResponse>(() => ({
    queryKey,
    queryFn: () => userInteractorProvider().getUsers(),
  }));
};

export default useGetUsers;
