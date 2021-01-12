import { IRegisterRequest } from './../../types/register-request.interface';
import { BackendErrorsInterface } from './../../../shared/types/backend-errors.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { signUp } from '../../store/actions/auth.actions';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors/auth.selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  initializeForm(): void {
    console.log('initializeForm')
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid)
    const request: IRegisterRequest = {
      user: this.form.value
    }
    this.store.dispatch(new signUp(request))
  }

}
