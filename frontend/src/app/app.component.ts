import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { HttpService } from './http.service';
import { UserLogin } from './login/login.interface';
import { UtilityService } from './utility.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ניהול לקוחות';
    logout() {
        const sub = this.http.get("logout").pipe(finalize(() => {
            if (sub?.unsubscribe) {
                sub.unsubscribe();
            }
        })).subscribe(() => {
            this.utility.setUser();
            this.authService.signOut();
            this.router.navigate(['login']);
        });
    }

    constructor(public utility: UtilityService, private http: HttpService, private router: Router, private authService: SocialAuthService) { }

    ngOnInit() {
        this.utility.loader(true);
        const sub = this.http.get<UserLogin>("login").pipe(finalize(() => {
            if (sub?.unsubscribe) {
                sub.unsubscribe();
            }
        })).subscribe(data => {
            if (data.status == 'error') {
                this.router.navigate(['login']);
            } else {
                this.utility.setUser(data.user);
            }
        });
    }
}
