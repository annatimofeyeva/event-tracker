import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { VisitComponent } from './visit/visit.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ExhibitionDetailComponent } from './exhibition-detail/exhibition-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    ExhibitionsComponent,
    VisitComponent,
    TicketsComponent,
    ExhibitionDetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
