import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { HttpService } from '../http.service';
import { Contact } from './contacts.interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  data: Contact[] = [];
  displayMode: 'tickets' | 'table' | 'folders' = 'table';
  searchVal?: any;
  select?: string = '';

  remove(item: Contact) {
    const sub = this.http.delete<void>(`contacts/${item.id}`).pipe(finalize(() => {
      if (sub?.unsubscribe) {
        sub.unsubscribe();
      }
    })).subscribe(() => {
      const i = this.data.findIndex(x => x.id === item.id);
      this.data.splice(i, 1);
    });

  }
  goToDetails(item: Contact) {
    this.router.navigate([`/contacts/contactDetails/${item.id}`]);
  }

  table() {
    this.displayMode = 'table';
  }

  tickets() {
    this.displayMode = 'tickets';
  }

  folders() {
    this.displayMode = 'folders';
  }

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    const sub = this.http.get<Contact[]>("contacts").pipe(finalize(() => {
      if (sub?.unsubscribe) {
        sub.unsubscribe();
      }
    })).subscribe(data => {
      this.data = data;
    });

  }
}