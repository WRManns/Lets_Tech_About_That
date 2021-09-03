const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PostPage extends Page {
    /**
     * define selectors using getter methods
     */
    get commentBody () { return $('#comment-text') }
    get submitBtn() { return $('#comment-btn') }
    get deleteBtn() { return $('') }

    async postComment (comment, submit) {
        await this.commentBody.setValue(comment);
        await this.submitBtn.click(submit);
    }

    async deleteComment () {
        await this.deleteBtn.click();
    }


    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new PostPage();