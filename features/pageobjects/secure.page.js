const Page = require('./page');

class SecurePage extends Page {

    get inputTitle() { return $('#blog-title') }
    get inputBlogBody() { return $('#blog-post-text') }
    get btnSubmit() { return $('#postBtn') }
    get deleteBtn() { return $('#delete-btn') }


    async blogPost(title, body) {
        await this.inputTitle.setValue(title);
        await this.inputBlogBody.setValue(body);
        await this.btnSubmit.click();
    }

    async deletePost() {
        await this.deleteBtn.click();
    }

    open() {
        return super.open('dashboard');
    }
}

module.exports = new SecurePage();
