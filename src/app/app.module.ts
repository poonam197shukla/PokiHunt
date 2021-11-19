import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsModule } from 'angular-bootstrap-md';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AddPokemonComponent } from './components/add-pokemon/add-pokemon.component';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AddPokemonComponent
  ],
  imports: [
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    FormsModule,
    Ng2SearchPipeModule,
    IconsModule,
    MatPaginatorModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
       {path:'addPokemon', component:AddPokemonComponent},
      // {path:'talkToAstrologer', component:TalkToAstrologerComponent},
      // {path:'pageNotFound', component:PageNotFoundComponent}
    ])
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
