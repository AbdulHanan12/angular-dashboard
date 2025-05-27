import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardDataService } from '../services/dashboard-data.service';

@Component({
  selector: 'app-graduation-track',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graduation-track.component.html',
  styleUrl: './graduation-track.component.css'
})
export class GraduationTrackComponent {
  public summary: any;

  constructor(private dashboardData: DashboardDataService) {
    this.summary = this.dashboardData.getSummary();
  }
}
