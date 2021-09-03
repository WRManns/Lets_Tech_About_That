const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    get inputEmail () { return $('#email-login') }
    get inputPassword () { return $('#password-login') }
    get btnSubmit () { return $('#login') }

    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('login');
    }
}





module.exports = new LoginPage();
