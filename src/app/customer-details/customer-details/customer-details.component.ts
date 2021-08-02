import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  users?: any[] = [];
  selectedUser?: any = "";
  selectedIndex?: any;
  showBack?: boolean = true;
  showNext?: boolean = true;
  totalUser: number = 0;
  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.usersService.getUsersList().pipe(
      tap((users) => {
        console.log(users, users.length);
        this.users = users;
        this.totalUser = users.length;
      })
    ).subscribe()
  }
  userClick(data: any) {
    this.selectedUser = data;
    this.selectedIndex = (data?.id - 1);
    this.displayButtons(this.selectedIndex);
    console.log(data);
  }
  stepperChange(event: any) {
    console.log("event", event);
    this.displayButtons(event.selectedIndex);
  }
  displayButtons(index: number) {
    if (index === 0) {
      this.showBack = false;
    }
    else if (index === (this.totalUser - 1)) {
      this.showNext = false;
    }
    else {
      this.showBack = true;
      this.showNext = true
    }
  }

}
