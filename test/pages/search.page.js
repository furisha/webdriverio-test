import Page from './page';

class SearchPage extends Page {
    get searchInput() {
        return $('#gh-ac');
    }
    get searchButton() {
        return $('#gh-btn');
    }
    get category(){
        return $('#gh-cat option:nth-child(1)')
    }

    open() {
        super.open('/');
        //If we want to use different url
        // super.open('/watches');
    }
}

export default new SearchPage();