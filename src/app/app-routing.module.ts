import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogingComponent } from './components/loging/loging.component';
import { GalleryComponent } from './components/gallery/gallery.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: GalleryComponent },
  {path: 'login', component: LogingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
