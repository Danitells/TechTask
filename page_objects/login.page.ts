import {Locator,Page} from '@playwright/test'

export class LoginPage{
    readonly loginInput: Locator;
    readonly passwordInput: Locator;
    readonly submitBtn: Locator;
    readonly forgotPassBtn: Locator;


constructor(page:Page){
    this.loginInput = page.locator('[type="email"]');
    this.passwordInput = page.locator('[type="password"]');
    this.submitBtn = page.locator('[type="button"]');

}
}