import { Component, OnInit } from '@angular/core';
import { User }  from '../../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  model = new User('mitchel','mitchel')
  submitted = false;
  onSubmit(){ this.submitted = true;}
  get diagnostic(){
    return JSON.stringify(this.model);
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
