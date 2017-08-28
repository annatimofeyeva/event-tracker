import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { VisitComponent } from './visit/visit.component';
import { TicketsComponent} from './tickets/tickets.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'exhibitions',
    component: ExhibitionsComponent
  },

  {
    path: 'visit',
    component: VisitComponent
  },

  {
    path: 'tickets',
    component: TicketsComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
