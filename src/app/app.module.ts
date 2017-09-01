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
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { masterFirebaseConfig } from './api-keys';
import { AdminComponent } from './admin/admin.component';
import { EditExhibitionComponent } from './edit-exhibition/edit-exhibition.component';
import { FormsModule } from '@angular/forms';



export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    ExhibitionsComponent,
    VisitComponent,
    TicketsComponent,
    ExhibitionDetailComponent,
    AdminComponent,
    EditExhibitionComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
