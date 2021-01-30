import { Component, Input, OnInit } from '@angular/core';
import {FormateurNavigService} from '../formateur-navig.service'
@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {
  @Input() formateur:any ;
  constructor( private FormateurService:FormateurNavigService) { }

  ngOnInit(): void {
  }
  

}
