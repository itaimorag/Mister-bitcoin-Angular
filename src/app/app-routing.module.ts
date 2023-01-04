import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactResolver } from './services/contact.resolver';
import { AuthGuard } from './guards/auth.guard';
import { ContactIndexComponent } from './views/contact-index/contact-index.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { HomeComponent } from './views/home/home.component';
import { SignupPageComponent } from './views/signup-page/signup-page.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { StatisticsComponent } from './views/statistics/statistics.component';

const routes: Routes = [
  {path: 'contactIndex',component: ContactIndexComponent,canActivate: [AuthGuard]},
  {path: 'contact/:id',component: ContactDetailsComponent,resolve: {contact: ContactResolver},canActivate: [AuthGuard]},
  {path: 'signup',component: SignupPageComponent},
  {path: 'statistics',component: StatisticsComponent},
  {path: 'edit/:id',component: ContactEditComponent,resolve: {contact: ContactResolver}},
  {path: 'edit',component: ContactEditComponent},
  {path: '', component: HomeComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
