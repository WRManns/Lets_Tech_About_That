const Page = require('./page');

class SignupPage extends Page {

    get inputUsername() { return $('#name-signup') }
    get inputEmail() { return $('#email-signup') }
    get inputPassword() { return $('#password-signup') }
    get btnSubmit() { return $('#signup') }

    async signup(username, email, password) {
        await this.inputUsername.setValue(username);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open() {
        return super.open('login');
    }
}

module.exports = new SignupPage();