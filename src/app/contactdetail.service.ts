import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactdetailService {

  constructor() { }
  contactList : Contact[] = [];

  //to add contacts in the list
  addcontact = (contact:Contact) => {
    let col = '';
    const findExistingContact = this.contactList.findIndex((c) => {
      if (contact.name === c.name)
      {
        col = 'name';
        return true;
      } 
      else if (contact.phone === c.phone) 
      {
        col = 'phone';
        return true;
      } 
      else if (contact.email === c.email) 
      {
        col = 'email';
        return true;
      }
      return false;
    });
    console.log(findExistingContact);
    if (findExistingContact === -1) 
    {
      this.contactList.push(contact);
    } 
    else 
    {
      alert(`Contact with same ${col} already exists!`);
    }
    return this.contactList;
  }

  //display contacts
  // display()
  // {
  //   return this.contactList;
  // }

  //edit take input as phone and email, name
  edit(newcontact:Contact)
  {
    let col = '';
    let ocindex = this.contactList.findIndex(e => e.name == newcontact.name);
    const findExistingContact = this.contactList.findIndex((c) => {
     if (newcontact.phone === c.phone) 
      {
        col = 'phone';
        return true;
      } 
      else if (newcontact.email === c.email) 
      {
        col = 'email';
        return true;
      }
      return false;
    });
    if(findExistingContact === -1 || ocindex === findExistingContact)
    {
      console.warn(newcontact);
      console.log("Old contact list : "+this.contactList);
      console.warn("index: "+ocindex);
      console.log(this.contactList.splice(ocindex,1,newcontact));
      console.log("Updated contact list : "+this.contactList);
      if(ocindex>=0)
      {
      alert("Contact "+newcontact.name+" updated!");
      }
    }
    else 
    {
      alert(`Contact with same ${col} already exists!`);
    }
    return this.contactList;
  }

  delete = (contact:Contact) =>
  {
    let delindex = this.contactList.findIndex(e => e.name == contact.name);
    console.log("Index:",delindex);
    this.contactList.splice(delindex,1);
    console.log(this.contactList);
    if(delindex>=0)
    {
      alert("Contact "+contact.name+" deleted!");
    }
    return this.contactList;
  }


  sortcontact(field:string)
  {
    if(field == 'name')
    {
      let tempContactList: Contact[] = this.contactList.slice();
      tempContactList.sort((a, b) => {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
      console.log(tempContactList);
      this.contactList = tempContactList;
    }
    else if(field == 'phone')
    {
      let tempContactList: Contact[] = this.contactList.slice();
      tempContactList.sort((a, b) => {
        let fa = a.phone.toLowerCase(),
            fb = b.phone.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
      console.log(tempContactList);
      this.contactList = tempContactList;
    }
    else if(field == 'email')
    {
      let tempContactList: Contact[] = this.contactList.slice();
      tempContactList.sort((a, b) => {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
      console.log(tempContactList);
      this.contactList = tempContactList;
    }
    return this.contactList;
  }

}
