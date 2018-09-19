import { Component, OnInit } from '@angular/core';
import {SalonService} from './salon.service';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
})
export class SalonComponent implements OnInit {

  constructor(private salonService: SalonService) { }

  ngOnInit() {
  }
  public list() {
    return this.salonService.findAll();
  }

  public detail(id:  number){
    return this.salonService.findById(id);
  }
}
