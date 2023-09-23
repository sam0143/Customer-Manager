import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-commonheader',
  templateUrl: './commonheader.component.html',
  styleUrls: ['./commonheader.component.css']
})
export class CommonheaderComponent implements OnInit {

  constructor(private _router:Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
 
}