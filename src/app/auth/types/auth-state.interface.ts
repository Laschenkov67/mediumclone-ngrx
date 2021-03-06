import { BackendErrorsInterface } from './../../shared/types/backend-errors.interface';
import { CurrentUserInterface } from './../../shared/types/current-user.interface';

export interface IAuthState {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
}
