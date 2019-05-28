import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public contacts = [];

  constructor(private contact:ContactServiceService) { }

  ngOnInit() {
    this.contact.getContacts()
        .subscribe(data => this.contacts = data);
  }

}
