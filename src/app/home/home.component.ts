import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public product = { id: '1', name: 'Angular'};

  constructor(private router: Router) {
  }

  gotoDynamic() {
    // this.router.navigateByUrl('/dynamic', { state: { id:1 , name:'Angular' } });
    this.router.navigateByUrl('/dynamic', { state: this.product });
  }

  ngOnInit(): void {
  }

}
