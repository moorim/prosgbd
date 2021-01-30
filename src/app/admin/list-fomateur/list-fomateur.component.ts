import { Component, OnInit } from '@angular/core';
import {FormateurNavigService} from '../formateur-navig.service'
@Component({
  selector: 'app-list-fomateur',
  templateUrl: './list-fomateur.component.html',
  styleUrls: ['./list-fomateur.component.css']
})
export class ListFomateurComponent implements OnInit {
  formateurs;
  constructor(private FormateurService:FormateurNavigService) { }

  ngOnInit(): void {
    this.formateurs=this.FormateurService.get();
  }

}
