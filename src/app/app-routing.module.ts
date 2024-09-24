import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './components/explore/explore.component';
import { GestionCitas } from './shared/models/gestionCitas-models';


const routes: Routes = [
  { path: '', component: ExploreComponent },
  { path: 'gestionCitas', component: GestionCitas }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
