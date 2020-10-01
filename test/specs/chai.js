import { expect as chaiExpect, assert } from 'chai'; // Expect, Assert
import 'chai/register-should';  // Should

describe('Watches Pages', () => {
    it('should show the banner container', () => {
        browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535'
        );
        const pageHeader = $('h1.b-pageheader');
        expect(pageHeader).toBeDisplayed();
    });

    it('should show the banner test', () => {
        const infoText = $('span.b-pageheader__text');
        const infoTitleText = infoText.getText();

        expect(infoText).toHaveTextContaining('Watches, Parts');
        chaiExpect(infoTitleText).to.not.be.empty;
        // Chai - Should
        infoTitleText.should.not.be.empty;
        // Chai - Assert
        assert.isNotEmpty
    });

    it('should contain link on shop by category menu item button and verify its clickable', () => {
        const menuButton = $('a.b-textlink.b-textlink--parent');
        const tag = menuButton.getTagName();

        expect(menuButton).toHaveLinkContaining('/Jewelry-Watches/');
        expect(menuButton).toBeClickable();
        // Chai - Expect
        chaiExpect(tag).to.equal('a');
        //Chai - Should
        tag.should.be.equal('a');
    });
    
    it('should click on the Jewelry & Watches button ', () => {
        const menuButton = $('a.b-textlink.b-textlink--parent');
        menuButton.click();

        const url = browser.getUrl();
        chaiExpect(url).to.include('Watches')        
        expect(browser).toHaveUrl(
            'https://www.ebay.com/b/Jewelry-Watches/281/bn_1865273'
        );
    }); 
});