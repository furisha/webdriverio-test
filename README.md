# How to Install WebdriverIO-test with Allure reports

- Clone Project to desired project folder
- Navigate to project folder
- Run:
1. npm i
2. npx wdio wdio.conf.js && allure generate allure-results/ --clean && allure open
3. When the tests is completed, the allure reporter opens in a browser with the generated results
