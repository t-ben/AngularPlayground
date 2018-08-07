import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { RouterModule } from '@angular/router';
import { DetailGuard } from './components/details/detail.guard';
import { DecoratorPipe } from './components/list/decorator.pipe';

const routes = [
  { path: 'list', component: ListComponent },
  { path: 'list/:id', canActivate: [DetailGuard], component: DetailsComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ListComponent,
    DetailsComponent,
    DecoratorPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
