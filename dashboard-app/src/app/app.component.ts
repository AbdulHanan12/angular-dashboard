import { Component } from '@angular/core';
import { GraduationTrackComponent } from './graduation-track/graduation-track.component';
import { BadgesListComponent } from './badges-list/badges-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GraduationTrackComponent, BadgesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard-app';
}
