import Page from './page';

class WatchesPage extends Page {
    get pageHeader() {
        return $('h1.b-pageheader');
    }
    get infoText() {
        return $('span.b-pageheader__text');
    }
    get menuButton() {
        return $('a.b-textlink.b-textlink--parent');
    }
    get watchesCategoryList() {
        return $$('section[id="s0-29-13_2-0-1[0]-0-0"] ul li'); // Return a Collection of 6 Elements
    }
    get fashionLink() {
        return $$('.hl-cat-nav__js-tab a[href*="Fashion"]')[0];
    }
    get watchesLink() {
        return $$('.hl-cat-nav__sub-cat-col a[href*="Watches-Parts"]')[0];
    }

    open() {
        super.open('/');
    }
    
    getWatchesCategoryListText() {
        const watchesList = [];
        this.watchesCategoryList.map((element) =>
            watchesList.push(element.getText())
        );
        return watchesList;
    }
}
export default new WatchesPage();