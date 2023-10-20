import { Component } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {
  user = {
    firstname: '',
    lastname: '',
    email: ''
  };
  submitted: boolean = false;

  onSubmit() {
    console.log("User Data:", this.user);
    this.submitted = true;
  }
}
