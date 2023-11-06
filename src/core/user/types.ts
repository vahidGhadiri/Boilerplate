import type { User } from "./entities";

export interface GetUserResponse {}
export interface RemoveUserResponse {}
export interface GetUserRequest {
  id: number;
}
export interface RemoveUserRequest {
  id: number;
}
export interface GetUsersResponse {
  users: User[];
}
