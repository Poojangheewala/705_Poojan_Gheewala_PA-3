import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { ComboComponent } from './combo/combo.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
  { path: 'data-display', component: DataComponent },
  { path: 'combo-display', component: ComboComponent },
  { path: 'userform', component: UserformComponent },
  { path: '', redirectTo: '/data-display', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
