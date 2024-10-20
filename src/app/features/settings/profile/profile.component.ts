import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <p>
      profile works!
    </p>
    <button 
      routerLink="/settings/configuration" 
      class="btn btn-outline-primary"
    >
      Go to configuration 
    </button>
  `,
})
export class ProfileComponent {}
