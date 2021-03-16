import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact';
import { ContactdetailService } from '../contactdetail.service';

@Component({
  selector: 'app-displaycontact',
  templateUrl: './displaycontact.component.html',
  styleUrls: ['./displaycontact.component.scss']
})
export class DisplaycontactComponent implements OnInit {

  selectedcontact : Contact = {name:'',phone:'',email:''};
  contactList : Contact[] = [];
  showdata:boolean = false;
  showedit:boolean = false;
  mobNumberPattern = "^[1-9]{1}[0-9]{9}$";  
  emailPattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  constructor(private contactdetail:ContactdetailService) { }

  ngOnInit(): void {
    this.contactList=this.contactdetail.sortcontact('name');
    // this.contactList=this.contactdetail.display();
    if(this.contactList.length>0)
    {
      this.showdata=true;
    }
    else
    {
      this.showdata=false;
    }
    console.log("Inside oninit");
    console.log(this.contactList);
  }

  delete(contact:Contact)
  {
    this.selectedcontact=contact;
    console.log("Inside delete! Deleting contact with name: ",this.selectedcontact.name);
    this.contactList=this.contactdetail.delete(this.selectedcontact);
    if(this.contactList.length>0)
    {
      this.showdata=true;
    }
    else
    {
      this.showdata=false;
    }
  }

  edit(contact:Contact)
  {
    this.selectedcontact=contact;
    this.showedit=true;
    this.showdata=false;
    console.log("Inside edit! Editing contact with name: ",this.selectedcontact.name);
  }


  // contactChange($event: Contact)
  // {
  //   this.selectedcontact=$event;
  //   this.contactList=this.contactdetail.edit(this.selectedcontact);
  // }

  update(form:any)
  {
    console.log(this.selectedcontact);
    console.log(form.value); //{name: "iri", phone: "524323", email: "ankitakhanndmendm2nme1995@gmail.com"}
    console.log(this.selectedcontact.name,form.value.phone,form.value.email); //iri 524323 ankitakhanndmendm2nme1995@gmail.com
    this.contactList=this.contactdetail.edit(new Contact(this.selectedcontact.name,form.value.phone,form.value.email));
    this.showedit=false;
    this.showdata=true;
    console.warn("Submitted new values to edit for contact : "+this.selectedcontact.name);
    // this.updatecontact.emit(new Contact(this.contact.name,form.value.phone,form.value.email))
  }

  onSelectChange(event:any) {
    console.log(event.target.value);
    this.contactList=this.contactdetail.sortcontact(event.target.value);
  }
 
}
