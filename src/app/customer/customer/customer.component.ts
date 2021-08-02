import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/users.service';
import { tap } from "rxjs/operators";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers$?: Observable<any>;
  selectedItem?: any;
  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.customers$ = this.usersService.getUsersList().pipe(
      tap((users: any) => {
        console.log("all customers", users)
      })
    )
  }
  userClick(data: any) {
    this.selectedItem = data?.username;
    console.log(this.selectedItem);
    this.router.navigate(["customer", this.selectedItem], { queryParams: { name: data?.username, phone: data?.phone, email: data?.email, address: data?.address?.city } })
  }

}
