import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  template: `
    <div class="btn-group">
      <button 
        routerLink="./profile"
        routerLinkActive="text-bg-warning"
        class="btn btn-primary text"
      >Profile</button>
      <button 
        routerLink="./configuration" 
        routerLinkActive="text-bg-warning" 
        class="btn btn-primary "
      >Configuration</button>
    </div>
    
    <router-outlet></router-outlet>
  `,
})
export class SettingsComponent {}
