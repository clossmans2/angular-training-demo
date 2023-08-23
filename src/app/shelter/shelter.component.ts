import { Component } from '@angular/core';
import { Shelter } from '../shelter';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.css']
})
export class ShelterComponent {
  shelters!: Shelter[];

}
