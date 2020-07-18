import { Component, OnInit } from '@angular/core';
import { IContact } from './contact.interface';
import { Contact } from './contact.person';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-hw15',
  templateUrl: './hw15.component.html',
  styleUrls: ['./hw15.component.scss']
})
export class Hw15Component implements OnInit {
  arrContacts: Array<IContact> = [{ id: 1, firstName: "Petro", lastName: 'Petriv', phoneNumber: '0639999999' },
  { id: 2, firstName: "Ivan", lastName: 'Ivanov', phoneNumber: '0637777777' },
  { id: 3, firstName: "Pavlo", lastName: 'Pavliv', phoneNumber: '0635555555' },
  { id: 4, firstName: "Vaselyna", lastName: 'Banakh', phoneNumber: '0973333333' }
  ];

  sortedArrContacts = [];
  order: string = 'name';
  reverse: boolean = false;
  searchName: string;

  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  addStatus = false;

  constructor(private orderPipe: OrderPipe) {
    this.sortedArrContacts = orderPipe.transform(this.arrContacts, 'name');
    console.log(this.sortedArrContacts);
  }

  ngOnInit(): void {
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

  changeAddStatus() {
    this.addStatus = true;
  }
  editContact(contact: IContact) {
    this.id = contact.id;
    this.firstName = contact.firstName;
    this.lastName = contact.lastName;
    this.phoneNumber = contact.phoneNumber;
    this.addStatus = false;
  }
  // функція, яка або додає контакт, або зберігає зміни
  addOrSaveContact() {
    const newContact = new Contact(this.id, this.firstName, this.lastName, this.phoneNumber);
    if (this.addStatus) {
      if (this.arrContacts.length > 0) {
        newContact.id = this.arrContacts.slice(-1)[0].id + 1;
      }
      this.arrContacts.push(newContact);
      this.resetForm();
    }
    else {
      const index = this.arrContacts.findIndex(elem => elem.id === newContact.id);
      this.arrContacts.splice(index, 1, newContact);
      this.addStatus = false;
      this.resetForm();
    }
  }

  deleteContact(id: number): void {
    const index = this.arrContacts.findIndex(contact => contact.id === id);
    if (confirm(`Are you sure that you want to delete ${this.arrContacts[index].firstName} ?`)) {
      this.arrContacts.splice(index, 1);
    }
  }

  private resetForm(): void {
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = null;
  }
}
