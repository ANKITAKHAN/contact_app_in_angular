import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactdetailService } from '../contactdetail.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.scss']
})
export class AddcontactComponent implements OnInit {
  contactList : Contact[] = [];
  mobNumberPattern = "^[1-9]{1}[0-9]{9}$";  
  constructor(private contactdetail:ContactdetailService) { }
  // emailPattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  emailPattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  ngOnInit(): void {
  }
  
  add(form: any)
  {
    if(form.value.name!== '' && form.value.phone!== '' && form.value.email!== '')
    {
    console.log(form.value); //{name: "iri", phone: "524323", email: "ankitakhanndmendm2nme1995@gmail.com"}
    console.log(form.value.name,form.value.phone,form.value.email); //iri 524323 ankitakhanndmendm2nme1995@gmail.com
    this.contactList=this.contactdetail.addcontact(new Contact(form.value.name,form.value.phone,form.value.email));
    console.log(this.contactList);
    }
    else
    {
      alert("Cannot submit null values for any field!");
    }
  }

}