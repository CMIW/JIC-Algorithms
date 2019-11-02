import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FloydComponent } from './components/floyd/floyd.component';
import { MochilaComponent } from './components/mochila/mochila.component';
import { MainComponent } from './components/main/main.component';
import { SeriesComponent } from './components/series/series.component';
import { ReemplazoComponent } from './components/reemplazo/reemplazo.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full' },
  {path:'floyd',component:FloydComponent},
  {path:'mochila',component:MochilaComponent},
  {path:'main',component:MainComponent},
  {path:'series',component:SeriesComponent},
  {path:'reemplazo',component:ReemplazoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
