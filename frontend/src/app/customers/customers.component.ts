import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { __values } from 'tslib';
import { HttpService } from '../http.service';
import { Customer } from './customers.interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  data: Customer[] = [];

  displayMode: 'tickets' | 'table' | 'folders' = 'table';
  searchVal?: any;
  select?: string = '';


  remove(item: Customer) {
    const sub = this.http.delete<void>(`customers/${item.id}`).pipe(finalize(() => {
      if (sub?.unsubscribe) {
        sub.unsubscribe();
      }
    })).subscribe(() => {
      const i = this.data.findIndex(x => x.id === item.id);
      this.data.splice(i, 1);
    });

  }
  goToDetails(item: Customer) {
    this.router.navigate([`/customers/customerDetails/${item.id}`]);
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
    const sub = this.http.get<Customer[]>("customers").pipe(finalize(() => {
      if (sub?.unsubscribe) {
        sub.unsubscribe();
      }
    })).subscribe(data => {
      this.data = data;
    });
  }
}

