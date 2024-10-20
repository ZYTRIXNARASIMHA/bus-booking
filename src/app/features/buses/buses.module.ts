import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusesRoutingModule } from './buses-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { BusesComponent } from './buses.component';

@NgModule({
  imports: [CommonModule, SharedModule, BusesRoutingModule],
  declarations: [BusesComponent],
})
export class BusesModule {}
