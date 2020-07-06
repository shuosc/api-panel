import {Component, OnInit} from '@angular/core';
import {Service} from '../../../model/service';
import ServicesJSON from '../../../data/shared.json';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  public readonly services: Array<Service>;

  constructor() {
    this.services = ServicesJSON.services;
  }

  ngOnInit(): void {
  }

}
