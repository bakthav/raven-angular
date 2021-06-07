import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './ui-share/layout/header/header.component';
import { UiShareModule } from './ui-share/ui-share.module';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // RecommendedComponent,
    // DevelopmentPlanComponent,
    // AllChannelsComponent,
    // MyStudioComponent,
    // MySubscriptionComponent,
    // SharedWithMeComponent,
    // ManageFiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    NgSelectModule,
   // BrowserAnimationsModule,
    //NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    UiShareModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
