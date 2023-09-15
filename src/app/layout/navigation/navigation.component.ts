import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

interface Menu {
  title: string;
  icon: string;
  link: string;
  color: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(private route: Router) {

  }
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  router = "";

  changeRoute(input: string) {
    this.router = input
    this.route.navigate([input])
  }

  menu: Menu[] = [
    {
      title: 'Dashboard',
      icon: 'icon-home',
      link: 'dashboard',
      color: '',
    },
    {
      title: 'Admin Management',
      icon: 'icon-admin',
      link: 'admin',
      color: '',
    },
    {
      title: 'Transaction History',
      icon: 'icon-transaction',
      link: 'transaction',
      color: '',
    },
    {
      title: 'Client Mangement',
      icon: 'icon-client',
      link: 'client',
      color: '',
    },
    // {
    //   title: 'Api',
    //   icon: 'icon-api',
    //   link: 'api',
    //   color: '',
    // },
    {
      title: 'Logout',
      icon: 'icon-logout',
      link: 'signin',
      color: '',
    },
  ];
}
