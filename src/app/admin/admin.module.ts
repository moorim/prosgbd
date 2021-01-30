import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin/admin.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { FormsModule } from '@angular/forms';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { FakeSessionItemService } from './fake-session-item.service';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormateurComponent } from './formateur/formateur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListFomateurComponent } from './list-fomateur/list-fomateur.component';
import { AddformateurComponent } from './addformateur/addformateur.component';
const adminRoutes:Routes=[
  {
    path:'',
    component:AdminComponent,
    children:
    [
      {
        path:'add',
        component:SessionAddFormComponent
      },
      {
        path:'edit/:id',
        component:SessionEditFormComponent
      },
      {
        path:'liste',
        component:SessionItemListComponent
      },
      {path:'dashboard',component:DashboardComponent},
      {path:'formateur',component:ListFomateurComponent},
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      {path:'addformateur',component:AddformateurComponent}
    ],
  }
];
@NgModule({
  declarations: [
    SessionItemComponent,
    SessionItemListComponent,
    AdminComponent,
    SessionAddFormComponent,
    SessionEditFormComponent,
    FormateurComponent,
    DashboardComponent,
    ListFomateurComponent,
    AddformateurComponent],
  imports: [
    RouterModule.forChild(adminRoutes),
    CommonModule,
    FormsModule
  ],
  providers:[FakeSessionItemService],
  bootstrap:[AdminComponent]
})
export class AdminModule { }
