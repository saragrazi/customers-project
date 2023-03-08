import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Contact } from '../contacts.interface';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  contact?: Contact;
  sub?: Subscription;

  getContact(id: string) {
    const sub = this.http.get<Contact>(`contacts/contactDetails/${id}`).subscribe(item => {
      this.contact = item;
      sub.unsubscribe();
    });
  }

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpService) {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.getContact(params['id']);
      }
    });

  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}