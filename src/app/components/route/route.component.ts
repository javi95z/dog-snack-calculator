import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutesService, Route } from '../../services/routes.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {
  route: Route;
  snacks: number;

  constructor(private service: RoutesService, private ar: ActivatedRoute) {}

  ngOnInit(): void {
    const id = parseInt(this.ar.snapshot.paramMap.get('id'), null);
    this.loadData(id);
  }

  /**
   * Get specific route data
   * @param id Route ID
   */
  private loadData(id: number): void {
    this.service
      .getRoute(id)
      .then((data: Route) => {
        this.route = data;
        this.snacks = this.calculateSnack(data.locations.map(l => l.altitude));
      })
      .catch(() => alert('Could\'t load routes'));
  }

  /**
   * Calculate the amount of snacks a
   * dog needs to complete the route
   * @param locations Array of altitudes
   */
  private calculateSnack(locations: number[]) {
    let snacks = 0;
    let store = 0;
    let previous = locations.shift();
    for (const value of locations) {
      if (value < previous) {
        // Going downhill
        store += previous - value;
      } else if (value > previous) {
        // Going uphill
        const cost = value - previous;
        if (cost <= store) {
          // If enough momentum, decrease store
          store -= cost;
        } else {
          // If not, add snacks and reset store
          snacks += cost - store;
          store = 0;
        }
      }
      previous = value;
    }
    return snacks;
  }
}
