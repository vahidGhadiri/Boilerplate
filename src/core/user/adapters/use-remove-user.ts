import { atomsWithMutation } from "jotai-tanstack-query";

import { ErrorResponse } from "@config";

import type { RemoveUserRequest, RemoveUserResponse } from "../types";
import { REMOVE_USER } from "../constants";
import userInteractorProvider from "./provider";

const useRemoveUser = ({ id }: RemoveUserRequest) => {
  return atomsWithMutation<
    RemoveUserResponse,
    ErrorResponse,
    RemoveUserRequest
  >(() => ({
    mutationKey: [REMOVE_USER, id],
    mutationFn: () => userInteractorProvider().removeUser({ id }),
  }));
};

export default useRemoveUser;
