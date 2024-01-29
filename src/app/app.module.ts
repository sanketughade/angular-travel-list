import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FarAwayAppComponent } from './components/far-away-app/far-away-app.component';
import { LogoComponent } from './components/logo/logo.component';
import { FormComponent } from './components/form/form.component';
import { PackingListComponent } from './components/packing-list/packing-list.component';
import { ItemComponent } from './components/packing-list/item/item.component';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    FarAwayAppComponent,
    LogoComponent,
    FormComponent,
    PackingListComponent,
    ItemComponent,
    StatsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
