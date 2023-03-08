import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Contact } from '../contacts.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contact?: Contact;
  sub?: Subscription;
  form?: FormGroup;
  data: any;
  birthdate: any;

  buildForm(item?: Contact) {
    this.form = new FormGroup({
      firstName: new FormControl(item?.firstName, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(17),
      ]),
      lastName: new FormControl(item?.lastName, [
        Validators.required,
        Validators.maxLength(22),
      ]),
      birthday: new FormControl(this.datePipe.transform(item?.birthday, "yyyy-MM-dd"), [
        Validators.required,
      ]),
      phone: new FormControl(item?.phone, [
        Validators.required,
        Validators.maxLength(15),
      ]),
      email: new FormControl(item?.email, [
        Validators.required,
        Validators.email,
        Validators.maxLength(30),
      ]),
      city: new FormControl(item?.city, [
        Validators.required,
        Validators.maxLength(25),
      ]),
      street: new FormControl(item?.street, [
        Validators.required,
        Validators.maxLength(25),

      ]),
    });
  }


  add() {
    const sub = this.http.post<Contact>(`contacts`, this.form?.value).subscribe(item => {
      this.router.navigate(['contacts']);
      sub.unsubscribe();
    });
  }


  save() {
    const sub = this.http.put<void>(`contacts/${this.contact?.id}`, this.form?.value).subscribe(() => {
      this.router.navigate(['contacts']);
      sub.unsubscribe();
    });
  }

  getContact(id: string) {
    const sub = this.http.get<Contact>(`contact/${id}`).subscribe(item => {
      this.contact = item;
      this.buildForm(item);
      sub.unsubscribe();
    });
  }


  reset() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.getContact(params['id']);
      } else {
        this.buildForm();
      }
    });
  }
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpService, private datePipe: DatePipe) {

    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.getContact(params['id']);
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
