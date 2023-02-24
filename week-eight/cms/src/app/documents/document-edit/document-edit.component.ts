import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.scss']
})
export class DocumentEditComponent implements OnInit{

  originalDocument: Document;
  document: Document;
  editMode: boolean = false;
  
  constructor() { }
  
  ngOnInit(): void {

  }

}
