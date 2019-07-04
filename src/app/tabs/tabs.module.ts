import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'tabs',
    component: TabsPage,
    children: [
      { path: 'tab1', loadChildren: '../tab1/tab1.module#Tab1PageModule'},
      { path: 'tab4', loadChildren: '../tab4/tab4.module#Tab4PageModule'},
      { path: 'tab5', loadChildren: '../tab5/tab5.module#Tab5PageModule'}
    ]
  },
  {
    path:'',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
