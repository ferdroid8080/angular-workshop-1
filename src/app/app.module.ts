import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { HabitDetailComponent } from './habit-detail/habit-detail.component';
import { HabitItemComponent } from './habit-item/habit-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HabitFormComponent } from './habit-form/habit-form.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { SystemInfoComponent } from './system-info/system-info.component';
import { SystemItemsComponent } from './system-items/system-items.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  {
    path: 'account/:id',
    component: AccountDetailComponent,
    children: [
      { path: 'info', component: SystemInfoComponent },
      { path: 'items', component: SystemItemsComponent },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HabitListComponent,
    HabitDetailComponent,
    HabitItemComponent,
    HabitFormComponent,
    HomeComponent,
    AccountComponent,
    AccountDetailComponent,
    SystemInfoComponent,
    SystemItemsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
