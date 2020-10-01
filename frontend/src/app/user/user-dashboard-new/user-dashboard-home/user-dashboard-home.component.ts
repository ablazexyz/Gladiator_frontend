import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationDetails } from './../../../applicationDetails';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-dashboard-home',
  templateUrl: './user-dashboard-home.component.html',
  styleUrls: ['./user-dashboard-home.component.css'],
})
export class UserDashboardHomeComponent implements OnInit {
  accountExists: boolean = true;
  applications: ApplicationDetails[];
  isFirstTimeUser: boolean;
  isLoaded: boolean = false;
  constructor(
    private service: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (!sessionStorage.getItem('username')) {
      this.router.navigate(['/userLogin']);
    }
    this.applications = new Array();
  }

  ngOnInit(): void {
    this.service.getApplicationsByCustomerId().subscribe((data) => {
      this.applications = data;
    });
    this.service.isFirstTimeUser(sessionStorage.getItem('username')).subscribe(
      (data) => {
        this.isFirstTimeUser = data;
      },
      (error) => console.log(error),
      () => (this.isLoaded = true)
    );
  }

  viewApplicationDetailsOf(application_id: number) {
    console.log(application_id);
    console.log(this.route.parent);
    this.router.navigate(['../viewApplicationDetails'], {
      relativeTo: this.route,
    });
  }
}
