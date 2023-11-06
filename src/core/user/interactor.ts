import { IUserRepository } from "./repository";
import type {
  GetUserRequest,
  GetUserResponse,
  RemoveUserRequest,
  RemoveUserResponse,
} from "./types";

interface IUserInteractor {
  getUser: ({ id }: GetUserRequest) => Promise<GetUserResponse>;
  removeUser: ({ id }: RemoveUserRequest) => Promise<RemoveUserResponse>;
  getUsers: () => Promise<GetUserResponse>;
}

export default class UserInteractor implements IUserInteractor {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  getUser({ id }: GetUserRequest) {
    return this.userRepository.getUser({ id });
  }

  getUsers() {
    return this.userRepository.getUsers();
  }

  removeUser({ id }: RemoveUserRequest) {
    return this.userRepository.removeUser({ id });
  }
}
