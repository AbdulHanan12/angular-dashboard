import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  constructor() { }

  getSummary() {
    return {
      totalStudents: 50,
      badges: 5,
      completionRate: 68,
      studentsAtRisk: 5,
      trackCompletion: [
        { label: 'Not Started', value: 7, color: '#C4C4C4' },
        { label: 'Completed', value: 7, color: '#4FD18B' },
        { label: 'In Progress', value: 7, color: '#F6C244' },
        { label: 'At Risk', value: 7, color: '#F36C6C' }
      ]
    };
  }

  getBadges() {
    return Array(5).fill({
      title: 'Badge Title',
      totalGoals: 5,
      completed: 4,
      inProgress: 1,
      notStarted: 0,
      completionRate: 73,
      image: 'https://img.icons8.com/color/48/000000/rocket--v1.png'
    });
  }
}
