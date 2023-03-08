import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Customer } from '../customers.interface';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  customer?: Customer;
  sub?: Subscription;
  form?: FormGroup;


  buildForm(item?: Customer) {
    this.form = new FormGroup({
      firstName: new FormControl(item?.firstName, [
        Validators.required,
        Validators.maxLength(20),
      ]),
      lastName: new FormControl(item?.lastName, [
        Validators.required,
        Validators.maxLength(30),

      ]),
      phone: new FormControl(item?.phone, [
        Validators.required,
        Validators.maxLength(30),

      ]),
      email: new FormControl(item?.email, [
        Validators.required,
        Validators.email, Validators.maxLength(40),

      ]),
      country: new FormControl(item?.country, [
        Validators.required, Validators.maxLength(20),

      ]),
      city: new FormControl(item?.city, [
        Validators.required, Validators.maxLength(25),

      ]),
      street: new FormControl(item?.street, [
        Validators.required, Validators.maxLength(25),

      ]),
      remark: new FormControl(item?.remark, [
        Validators.maxLength(100),
      ]),
    });
  }

  add() {
    const sub = this.http.post<Customer>(`customers`, this.form?.value).subscribe(item => {
      this.router.navigate(['customers']);
      sub.unsubscribe();
    });
  }

  save() {
    const sub = this.http.put<void>(`customers/${this.customer?.id}`, this.form?.value).subscribe(() => {
      this.router.navigate(['customers']);
      sub.unsubscribe();
    });
  }

  getCustomer(id: string) {
    const sub = this.http.get<Customer>(`customer/${id}`).subscribe(item => {
      this.customer = item;
      this.buildForm(item);
      sub.unsubscribe();
    });
  }


  reset() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.getCustomer(params['id']);
      } else {
        this.buildForm();
      }
    });
  }
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpService) {

    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.getCustomer(params['id']);
      } else {
        this.buildForm();
      }
    });

  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }


}
