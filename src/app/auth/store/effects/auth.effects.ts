import { Action } from '@ngrx/store';
import { CurrentUserInterface } from './../../../shared/types/current-user.interface';
import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType, Effect} from '@ngrx/effects'
import {map, switchMap, tap} from 'rxjs/operators'


import {of, Observable} from 'rxjs'
import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {Router} from '@angular/router'
import { AuthService } from '../../service/auth.service'

import { authActionTypes } from '../enums/auth.enum';
import * as AuthActions  from '../actions/auth.actions';


@Injectable()
export class RegisterEffect {

constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
) {}

@Effect()
  register$: Observable<Action> = 
    this.actions$.pipe(
      ofType<AuthActions.signUp>(authActionTypes.SIGN_UP),
      switchMap((action: AuthActions.signUp) => 
      this.authService.signUp(action.payload).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token)
            return new AuthActions.signUpSuccess(currentUser)
          }),
    
        )
    )
  )

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<AuthActions.signUpSuccess>(authActionTypes.SIGN_UP_SUCCESS),
        tap(
            () => { 
                this.router.navigateByUrl('/')
            }
        )
      ),
    {dispatch: false}
  )


}
