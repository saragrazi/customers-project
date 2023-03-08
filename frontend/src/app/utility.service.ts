import { Injectable } from '@angular/core';
import { User } from './signup/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    private user?: User;
    cartAmount: number = 0;

    setUser(user?: User) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }

    isLoader?: boolean;

    loader(isStart: boolean) {
        this.isLoader = isStart;
        document.body.style.overflow = isStart ? 'hidden' : 'initial';
    }

    constructor() {
    }


}
