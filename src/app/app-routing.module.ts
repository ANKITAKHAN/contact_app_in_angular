import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { DisplaycontactComponent } from './displaycontact/displaycontact.component';

const routes: Routes = [
  {path:'addcontact', component:AddcontactComponent},
  {path:'displaycontact', component:DisplaycontactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddcontactComponent,DisplaycontactComponent]