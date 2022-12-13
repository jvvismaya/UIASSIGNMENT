import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountersComponent } from './counters/counters.component';
import { EntitiesComponent } from './entities/entities.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    component : CountersComponent,
    path:'counters'
  },
  {
    component: MainComponent,
    path:""
  },
  {
    component: HeaderComponent,
    path:"task2"
  },
  {
    component:EntitiesComponent,
    path:'entities'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  CountersComponent,
  MainComponent,
  HeaderComponent
]
