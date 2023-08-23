import { Component } from '@angular/core';
import { Shelter } from '../shelter';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shelter-detail',
  templateUrl: './shelter-detail.component.html',
  styleUrls: ['./shelter-detail.component.css']
})
export class ShelterDetailComponent {
  shelter!: Shelter;
  shelterId!: number;

  constructor(private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('id');
    this.shelterId = Number(id);
  }
}
