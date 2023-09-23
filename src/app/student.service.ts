import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
getStudent()
{
  return[
    {"id":1, 'name':"ramesh", "course":"Angular"},
    {"id":2, "name":"rakesh", "course":"reactjs"},
    {"id":3, "name":"rajesh", "course":"Angular"}
      ];
}
  constructor() { }
}
