import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardDataService } from '../services/dashboard-data.service';

@Component({
  selector: 'app-badges-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badges-list.component.html',
  styleUrl: './badges-list.component.css'
})
export class BadgesListComponent {
  badges: any[] = [];

  constructor(private dashboardData: DashboardDataService) {
    this.badges = this.dashboardData.getBadges();
  }
}
