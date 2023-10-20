import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  intValue = 7;
  stringValue = 'Mahendra Singh Dhoni - Mahi';
  dateValue = new Date();
}
