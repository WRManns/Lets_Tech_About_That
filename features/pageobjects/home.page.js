const Page = require('./page');

class HomePage extends Page {

    get homepageBtn() { return $('#home-page') }
    get postBtn() { return $('#postBtn') }
    get logoutBtn() { return $('#logout') }


    async homePage() {
        await this.homepageBtn.click();
    }

    async postBtnClick() {
        await this.postBtn.click();
    }

    async logoutClick() {
        await this.logoutBtn.click();
    }

    open() {
        return super.open();
    }
}


module.exports = new HomePage();