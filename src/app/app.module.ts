import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StyleDirective } from './directives/style.directive';
import { PipesComponent } from './pipes/pipes.component';
import MyltiPipe from './pipes/multi-by.pipe';
import { ExMarkPipe } from './pipes/ex-mark.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [AppComponent, StyleDirective, PipesComponent, MyltiPipe, ExMarkPipe, FilterPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
