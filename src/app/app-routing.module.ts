import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
 
  {
    path: 'ejercicio1',
    loadChildren: () => import('./ejercicios/ejercicio1/ejercicio1.module').then( m => m.Ejercicio1PageModule)
  },
  {
    path: 'ejercicio2',
    loadChildren: () => import('./ejercicios/ejercicio2/ejercicio2.module').then( m => m.Ejercicio2PageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'ejerciciof1',
    loadChildren: () => import('./ejercicios/ejerciciof1/ejerciciof1.module').then( m => m.Ejerciciof1PageModule)
  },
  {
    path: 'ejerciciol1',
    loadChildren: () => import('./ejercicios/ejerciciol1/ejerciciol1.module').then( m => m.Ejerciciol1PageModule)
  },
  {
    path: 'ejercicio3',
    loadChildren: () => import('./ejercicios/ejercicio3/ejercicio3.module').then( m => m.Ejercicio3PageModule)
  },
  {
    path: 'ejercicio4',
    loadChildren: () => import('./ejercicios/ejercicio4/ejercicio4.module').then( m => m.Ejercicio4PageModule)
  },
  {
    path: 'ejercicio5',
    loadChildren: () => import('./ejercicios/ejercicio5/ejercicio5.module').then( m => m.Ejercicio5PageModule)
  },
  {
    path: 'ejercicio6',
    loadChildren: () => import('./ejercicios/ejercicio6/ejercicio6.module').then( m => m.Ejercicio6PageModule)
  },
  {
    path: 'ejercicio7',
    loadChildren: () => import('./ejercicios/ejercicio7/ejercicio7.module').then( m => m.Ejercicio7PageModule)
  },
  {
    path: 'ejerciciof2',
    loadChildren: () => import('./ejercicios/ejerciciof2/ejerciciof2.module').then( m => m.Ejerciciof2PageModule)
  },
  {
    path: 'ejerciciof3',
    loadChildren: () => import('./ejercicios/ejerciciof3/ejerciciof3.module').then( m => m.Ejerciciof3PageModule)
  },
  {
    path: 'ejerciciof4',
    loadChildren: () => import('./ejercicios/ejerciciof4/ejerciciof4.module').then( m => m.Ejerciciof4PageModule)
  },
  {
    path: 'ejerciciof5',
    loadChildren: () => import('./ejercicios/ejerciciof5/ejerciciof5.module').then( m => m.Ejerciciof5PageModule)
  },
  {
    path: 'ejerciciof6',
    loadChildren: () => import('./ejercicios/ejerciciof6/ejerciciof6.module').then( m => m.Ejerciciof6PageModule)
  },
  {
    path: 'ejerciciol2',
    loadChildren: () => import('./ejercicios/ejerciciol2/ejerciciol2.module').then( m => m.Ejerciciol2PageModule)
  },
  {
    path: 'ejerciciol3',
    loadChildren: () => import('./ejercicios/ejerciciol3/ejerciciol3.module').then( m => m.Ejerciciol3PageModule)
  },
  {
    path: 'ejerciciol4',
    loadChildren: () => import('./ejercicios/ejerciciol4/ejerciciol4.module').then( m => m.Ejerciciol4PageModule)
  },
  {
    path: 'ejerciciol5',
    loadChildren: () => import('./ejercicios/ejerciciol5/ejerciciol5.module').then( m => m.Ejerciciol5PageModule)
  },
  {
    path: 'ejerciciol6',
    loadChildren: () => import('./ejercicios/ejerciciol6/ejerciciol6.module').then( m => m.Ejerciciol6PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
