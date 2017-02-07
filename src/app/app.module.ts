import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }          from './app.component';
import { HomeComponent }   from './home/home.component';
import { WelcomeComponent }     from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: WelcomeComponent }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
