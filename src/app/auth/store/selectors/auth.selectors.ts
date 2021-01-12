import { IAuthState } from './../../types/auth-state.interface';
import { AppStateInterface } from './../../../shared/types/app-state.interface';
import {createFeatureSelector, createSelector} from '@ngrx/store'

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  IAuthState
>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.validationErrors
)