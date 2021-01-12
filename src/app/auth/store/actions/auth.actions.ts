import { IRegisterRequest } from './../../types/register-request.interface';
import { BackendErrorsInterface } from './../../../shared/types/backend-errors.interface';
import { CurrentUserInterface } from './../../../shared/types/current-user.interface';

import { Action } from '@ngrx/store';
import { authActionTypes } from '../enums/auth.enum';

export class signUp implements Action {
    readonly type = authActionTypes.SIGN_UP;
  
    constructor(public payload: IRegisterRequest) {}
}
  
export class signUpSuccess implements Action {
    readonly type = authActionTypes.SIGN_UP_SUCCESS;
  
    constructor(public payload: CurrentUserInterface) {}
}
  
export class signUpFail implements Action {
    readonly type = authActionTypes.SIGN_UP_FAIL;
  
    constructor(public payload: BackendErrorsInterface) {}
}

export type AuthActions = 
 | signUp 
 | signUpSuccess 
 | signUpFail;