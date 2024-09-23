import BasePage from "./base.page";
import { clickElement, setValueElement, browserPause } from '../core/core_operations.js';

class LoginPage extends BasePage {
    constructor() {
        super();
        this.emailInputField = '//input[@id="username"]';
        this.loginSubmitButton = '//button[@id="login-submit"]';
        this.passwordInputField = '//input[@id="password"]';
    }

    async login(email, password) {
        await setValueElement(this.emailInputField, email);
        await browserPause(1000);
        await clickElement(this.loginSubmitButton);
        await browserPause(2000);
        await setValueElement(this.passwordInputField, password);
        await clickElement(this.loginSubmitButton);
        await browserPause(1000);
    }
}

export default new LoginPage();
