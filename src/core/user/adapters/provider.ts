import UserRepository from "../repository";
import UserInteractor from "../interactor";

export default function userInteractorProvider() {
  const userRepository = new UserRepository();
  const userInteractor = new UserInteractor(userRepository);
  return userInteractor;
}
