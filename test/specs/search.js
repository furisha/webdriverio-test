import SearchPage from '../pages/search.page';
import resources from '../resources';
import { waitForTextChange } from '../utilities/helper';
import allureReporter from '@wdio/allure-reporter'

describe('eBay Product Search', () => {
    it('should open the main url and verify the title', () => {
        SearchPage.open();
        expect(browser).toHaveTitle(
            resources.homeTitle
        );
    })

    it('should search for the product and verify the search text value', () => {
        allureReporter.addSeverity('Critical'); // If Want to show in allure like Critical!!!
        SearchPage.searchInput.addValue('Laptop');
        SearchPage.searchButton.click();

        expect(SearchPage.searchInput).toHaveValue('Laptop')        
    });

    it('should redirect to a new page and verify the title', () => {
        expect(browser).toHaveTitle(
            resources.laptopTitle
        );        
    });

    it('should update the search category', () => {
        allureReporter.addFeature('search category');
        waitForTextChange(SearchPage.category, 'PC Laptops & Netbooks', 10000);
        expect(SearchPage.category).toHaveText('PC Laptops & Netbooks');
    });
});