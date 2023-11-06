import { Http } from "@config";
import type {
  GetUserRequest,
  GetUserResponse,
  GetUsersResponse,
  RemoveUserRequest,
  RemoveUserResponse,
} from "./types";

export const userService = {
  domainUrl: "/user",
};

export type UserService = typeof userService;

export interface IUserRepository {
  getUser: ({ id }: GetUserRequest) => Promise<GetUserResponse>;
  removeUser: ({ id }: RemoveUserRequest) => Promise<RemoveUserResponse>;
  getUsers: () => Promise<GetUsersResponse>;
}
export default class UserRepository
  extends Http<UserService>
  implements IUserRepository
{
  async getUser(body: GetUserRequest): Promise<GetUserResponse> {
    return await this.request({
      endpointUrl: `/${body.id}`,
      method: "GET",
      body,
    });
  }

  async removeUser(body: RemoveUserRequest): Promise<RemoveUserResponse> {
    return await this.request({
      endpointUrl: `/${body.id}`,
      method: "DELETE",
      body,
    });
  }

  async getUsers(): Promise<GetUsersResponse> {
    return await this.request({
      method: "GET",
    });
  }
}
