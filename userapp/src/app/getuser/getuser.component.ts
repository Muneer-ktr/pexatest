import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent {

  constructor(private http: HttpClient) {}
  items:any=[]
  ngOnInit() {
    this.http.get<{ data: User[] }>('https://reqres.in/api/users/')
      .subscribe(
        (response) => {
          this.items = response.data;
          console.log(this.items);
        },
        (error) => {
          console.error('Error fetching user data:', error);
        }
      );
  }
}





























