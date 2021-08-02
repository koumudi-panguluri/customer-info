import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customer-info';
  selected = "customers";
  constructor(
    private router: Router
  ) { }
  routing(data: any) {
    this.selected = data;
    switch (data) {
      case "customers":
        this.router.navigate([""]);
        break;
      case "customerDetails":
        this.router.navigate(["customer-details"]);
        break;
    }
  }
}
