import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MedicalComponent } from './components/events/annual/medical/medical.component';
import { ConcertComponent } from './components/events/annual/concert/concert.component';
import { VesakComponent } from './components/events/annual/vesak/vesak.component';
import { TripComponent } from './components/events/annual/trip/trip.component';
import { MeetupComponent } from './components/events/annual/meetup/meetup.component';
import { BathComponent } from './components/events/daily/bath/bath.component';
import { TreatComponent } from './components/events/daily/treat/treat.component';
import { EntertainComponent } from './components/events/daily/entertain/entertain.component';
import { DonationComponent } from './components/events/daily/donation/donation.component';
import { OtherComponent } from './components/events/daily/other/other.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'home',
    component: HomeComponent
    //canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'sign-in',
    component: SignInComponent
    //canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'register-user',
    component: SignUpComponent
    //canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
    //canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'verify-email-address',
    component: VerifyEmailComponent
    //canActivate: [SecureInnerPagesGuard]
  },

  //start start for the events
  {
    path: 'medical',
    component: MedicalComponent
  },
  {
    path: 'concert',
    component: ConcertComponent
  },
  {
    path: 'vesak',
    component: VesakComponent
  },
  {
    path: 'trip',
    component: TripComponent
  },
  {
    path: 'meet',
    component: MeetupComponent
  },
  {
    path: 'bath',
    component: BathComponent
  },
  {
    path: 'treat',
    component: TreatComponent
  },
  {
    path: 'enter',
    component: EntertainComponent
  },
  {
    path: 'donate',
    component: DonationComponent
  },
  {
    path: 'other',
    component: OtherComponent
  }

  //end of the events
  // { path: '', redirectTo: 'Pages', pathMatch: 'full' },
  // { path: '**', redirectTo: 'Pages' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
