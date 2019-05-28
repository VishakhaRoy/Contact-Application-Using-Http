import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacts } from './contacts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http:HttpClient) { }

  getContacts():Observable<Contacts[]>{
    return this.http.get<Contacts[]>("http://www.mocky.io/v2/58fb4fb92500007b0e8fe3bf");
  }
}
