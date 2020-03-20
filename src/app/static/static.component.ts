import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css']
})
export class StaticComponent implements OnInit {

  product: any;
  constructor(private activatedroute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedroute.data.subscribe(data => {
      this.product = data;
    });
  }

}
