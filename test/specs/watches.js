import { expect as chaiExpect } from 'chai';
import WatchesPage from '../pages/watches.page'
import resources from '../resources';
import { waitAndClick } from '../utilities/helper';

describe('Watches Pages', () => {
    before(() => {
        WatchesPage.open();
        WatchesPage.fashionLink.moveTo();
        // browser.pause(1000); //Implicit Wait
        waitAndClick(WatchesPage.watchesLink, 5000);
    });

    it('should verify the watches category list', () => {
        const watchesCategoryList = WatchesPage.getWatchesCategoryListText();
        browser.pause(5000);
        chaiExpect(watchesCategoryList).to.deep.equal(
            resources.watchesCategoryList
        );
    });

    it('should show the pahe header', () => {
        expect(WatchesPage.pageHeader).toBeDisplayed();
    });

    it('should show the header text', () => {
        expect(WatchesPage.infoText).toHaveTextContaining('Shoes')
    });

    it('should contain link on shop by category menu item button and verify its clickable', () => {
        expect(WatchesPage.menuButton).toHaveLinkContaining('/Jewelry-Watches/');
        expect(WatchesPage.menuButton).toBeClickable();
    });

    it('should click on the Jewelry & Watches button ', () => {
        WatchesPage.menuButton.click();

        const url = browser.getUrl();
        chaiExpect(url).to.include('Watches');
    }); 
});