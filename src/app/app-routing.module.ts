import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimModule } from './claim/claim.module';
import { InsurerComponent } from './claim/insurer/insurer.component';
import { KnowComponent } from './claim/know/know.component';
import { NewclaimComponent } from './claim/newclaim/newclaim.component';
import { TrackComponent } from './claim/track/track.component';

const routes: Routes = [
  // {path:"newclaim",component: NewclaimComponent},
  // {path:"insurer",component: InsurerComponent},
  // {path:"know",component: KnowComponent},
  // {path:"track",component: TrackComponent},

  {path:"claim",loadChildren:()=>import("./claim/claim.module").then(mod=>mod.ClaimModule)},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
