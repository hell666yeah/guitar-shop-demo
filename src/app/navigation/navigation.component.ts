import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateService } from '../services/authenticate/authenticate.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public isAdmin: Boolean = false;

  constructor(private authenticateService: AuthenticateService) {
      this.isAdmin = this.authenticateService.username === 'admin' ? true : false;
  }

  ngOnInit() {
  }

}
