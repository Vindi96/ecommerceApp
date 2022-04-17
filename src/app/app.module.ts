import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { AddvertismentCardComponent } from './components/addvertisment-card/addvertisment-card.component';
import { AddvertismentCard1Component } from './components/addvertisment-card1/addvertisment-card1.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CategoryListComponent,
    NavigationComponent,
    ImageCarouselComponent,
    AddvertismentCardComponent,
    AddvertismentCard1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
