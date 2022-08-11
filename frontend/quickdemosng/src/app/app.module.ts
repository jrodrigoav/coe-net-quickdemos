import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ENV_CONFIG } from './interfaces/ienvironment-config';
import { TypicodeService } from './services/typicode.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './pages/user/edit/user-edit.component';
import { UsersComponent } from './pages/user/users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserListComponent,
    UserEditComponent,
    UserListComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TypicodeService, { provide: ENV_CONFIG, useValue: environment }],
  bootstrap: [AppComponent]
})
export class AppModule { }
