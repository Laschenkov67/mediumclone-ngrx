import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    StoreModule.forRoot({}),
    //Настройка Redux Devtools
    StoreDevtoolsModule.instrument({
      //Макс. количество экшенов
      maxAge: 25,
      //Делаем лог только для чтения на продакшн                     
      logOnly: environment.production 
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
