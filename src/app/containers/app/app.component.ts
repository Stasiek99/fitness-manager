import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

import {AuthService, User} from "../../../auth/shared/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'fitness_manager';
  user$: Observable<User | null> | null = null;
  subscription: Subscription | null = null;
  isAuthenticated: boolean = false;
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.user$ = this.authService.user$;
    this.subscription = this.authService.user$.subscribe(user => {
      this.isAuthenticated = user?.authenticated || false;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onLogout(): void {
    this.authService.logoutUser();
    this.router.navigate(["/auth"]);
  }
}
