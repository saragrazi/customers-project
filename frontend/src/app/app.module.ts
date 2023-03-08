import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { routes } from './routing';
import { HttpService } from './http.service';
import { UtilityService } from './utility.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { SearchPipe } from './search.pipe';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { DatePipe } from '@angular/common';
import { AgePipe } from './age.pipe';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { AboutComponent } from './about/about.component';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        NavbarComponent,
        ErrorPageComponent,
        SearchPipe,
        CustomersComponent,
        CustomerComponent,
        ContactsComponent,
        ContactComponent,
        AgePipe,
        CustomerDetailsComponent,
        ContactDetailsComponent,
        AboutComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SocialLoginModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        HttpService,
        UtilityService,
        DatePipe,
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider(
                            '182553670918-ehh8d1b0ee8kfr034g4mnmcm28cqm7tp.apps.googleusercontent.com'
                        )
                    },
                ],
                onError: (err) => {
                    console.error(err);
                }
            } as SocialAuthServiceConfig,
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
