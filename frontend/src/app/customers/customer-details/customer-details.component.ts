import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Customer } from '../customers.interface';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent {
  customer?: Customer;
  sub?: Subscription;


  getCustomer(id: string) {
    const sub = this.http.get<Customer>(`customers/customerDetails/${id}`).subscribe(item => {
      this.customer = item;
      sub.unsubscribe();
    });
  }


  constructor(private router: Router, private route: ActivatedRoute, private http: HttpService) {

    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.getCustomer(params['id']);
      }
    });

  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
