import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { DropsComponent } from './drops/drops.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'drops' },
  { path: 'drops', component: DropsComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: DropsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [AppComponent, RegisterComponent];