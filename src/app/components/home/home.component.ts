import { Component, OnInit } from '@angular/core';
import { RoutesService, Route } from '../../services/routes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  routes: Route[];

  constructor(private service: RoutesService) {}

  ngOnInit(): void {
    this.loadData();
  }

  /**
   * Get all routes data
   */
  private loadData(): void {
    this.service
      .getAllRoutes()
      .then(data => (this.routes = data))
      .catch(() => alert('Could\'t load routes'));
  }
}
