import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactDetailsComponent } from "./contacts/contact-details/contact-details.component";
import { ContactComponent } from "./contacts/contact/contact.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { CustomerDetailsComponent } from "./customers/customer-details/customer-details.component";
import { CustomerComponent } from "./customers/customer/customer.component";
import { CustomersComponent } from "./customers/customers.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

export const routes: Routes = [
    { path: '', component: CustomersComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'about', component: AboutComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'customer/:id', component: CustomerComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'customers/customerDetails/:id', component: CustomerDetailsComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'contacts/contactDetails/:id', component: ContactDetailsComponent },
    { path: 'contact/:id', component: ContactComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: ErrorPageComponent },
];