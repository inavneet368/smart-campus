import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {
  student: any = {
    s_name: 'navneet ',
    reg_no: '12345',
    email: 'navn@example.com',
    phone: '2345678',
    address: '123 Main St, City, Country'
  };

  timetable: any[] = [
    { day: 'Monday', subject: 'Mathematics', time: '9:00 AM - 10:00 AM' },
    { day: 'Tuesday', subject: 'Physics', time: '10:00 AM - 11:00 AM' },
    // Add more days as needed
  ];

  notifications: string[] = [
    'Exam scheduled on Friday.',
    'Assignment due next Monday.',
    'Library book return deadline this week.'
  ];

  activeTab: string = 'dashboard';

  switchTab(tab: string) {
    this.activeTab = tab;
  }

  logout() {
    console.log("User logged out.");
  }

  updateProfile(updatedStudent: any) {
    console.log("Profile updated with:", updatedStudent);
  }
}
