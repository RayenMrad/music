import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChansonsComponent } from './chansons/chansons.component';
import { AddChansonComponent } from './add-chanson/add-chanson.component';
import { UpdateChansonComponent } from './update-chanson/update-chanson.component';

const routes: Routes = [
  { path: 'chansons', component: ChansonsComponent },
  { path: 'add-chanson', component: AddChansonComponent },
  { path: '', redirectTo: 'chansons', pathMatch: 'full' },
  { path: 'updateChanson/:id', component: UpdateChansonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
