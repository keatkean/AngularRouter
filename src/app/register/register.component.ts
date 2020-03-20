import { Component, OnInit } from '@angular/core';
import {IDeactivateComponent} from '../deactivate-guard.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, IDeactivateComponent {

  // Check if there any unsaved data etc. If yes then as for confirmation
  canExit(): boolean {

    return confirm('Do you wish to Cancel? Please confirm');
  }

  ngOnInit(): void {
  }

}
