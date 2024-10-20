import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuration',
  template: `
    <p>
      configuration works!
    </p>

    <button (click)="gotoProfile()" class="btn btn-outline-primary">
      Go to Profile
    </button>
  `,
})
export class ConfigurationComponent {
  constructor(private router: Router) { }

  gotoProfile() {
    this.router.navigateByUrl('/settings/profile');
  }
}
