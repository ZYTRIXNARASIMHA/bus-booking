import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './features/bookings/bookings.component';

const routes: Routes = [
  {
    path: 'settings',
    loadChildren: () =>
      import('./features/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'bookedlist',
    component: BookingsComponent,
  },
  {
    path: 'buses',
    loadChildren: () =>
      import('./features/buses/buses.module').then((m) => m.BusesModule),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./features/locations/locations.module').then(
        (m) => m.LocationsModule
      ),
  },
  {
    path: 'schedules',
    loadChildren: () =>
      import('./features/schedules/schedules.module').then(
        (m) => m.SchedulesModule
      ),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
