import { PersistanceService } from './../shared/services/persistance.service';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import { authReducer } from './store/reducers/auth.reducers';
import { RegisterEffect } from './store/effects/auth.effects';
import { AuthService } from './service/auth.service';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule
  ],
  providers: [AuthService, PersistanceService]
})
export class AuthModule { }
