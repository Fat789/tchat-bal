import { Component, OnInit } from '@angular/core';
import {SalonService} from './salon.service';
import {ActivatedRoute} from '@angular/router';
import {Salon} from './salon';
import {User} from '../user/user';

@Component({
  selector: 'app-salon-detail',
  templateUrl: './salon-detail.component.html',
})
export class SalonDetailComponent implements OnInit {
  salon: Salon = new Salon();

  constructor(private route: ActivatedRoute, private salonService: SalonService) {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.salonService
        .findById(Number(params['id']), true)
        .subscribe(resp => this.salon = resp.json());
    });
  }

  ngOnInit() {
  }


}
