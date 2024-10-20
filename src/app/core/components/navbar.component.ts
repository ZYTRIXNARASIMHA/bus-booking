import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <header>
    <h1>Bus Booking</h1>
    <nav>
        <ul>
            <li routerLink="/home">Home</li>
            <li routerLink="/schedules">Schedule</li>
            <li routerLink="/bookedlist">Booked List</li>
            <li >Maintenance ▼
            <ul>
              <li routerLink="/buses">Bus List</li>
              <li routerLink="/locations">Locations</li>
                    
                </ul>
          </li>
            <li>Administrator ▼
                <ul>
                    <li routerLink="/users">Users</li>
                    <li>Manage Account</li>
                    <li>Logout</li>
                </ul>
            </li>
        </ul>
    </nav>
</header>
  `,
})
export class NavBarComponent {}
