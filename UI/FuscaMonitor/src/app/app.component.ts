import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./base/components/sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './base/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,

    //Application
    SidebarComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FuscaMonitor';
  sideNavStatus: boolean = false;
  public path: string = "";

  constructor(private router : Router) {}

  ngOnInit() {
    // this.path =  window.location.href;
  }
}
