import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  toggleSidebar()
  {
       document.getElementById("wrapper")?.classList.toggle('toggled');
  }

  ngOnInit(): void {
  }


}




