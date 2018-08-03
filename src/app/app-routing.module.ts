import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from '@app/features/home/components/example/example.component';

const publicRoutes: Routes = [
  { path: '', component: ExampleComponent },
];

const routes: Routes = [
  ...publicRoutes,
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

