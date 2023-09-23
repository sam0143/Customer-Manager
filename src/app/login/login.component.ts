import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email!: string;
  password!: string;

  constructor(private _router:Router, private _activateRouter : ActivatedRoute) { }

  ngOnInit(): void {
  }
  checkdata()
  {
    if(this.email==="admin" && this.password==="admin")
    { 
    this._router.navigate(['Page1Component']);
    }
  }

}
