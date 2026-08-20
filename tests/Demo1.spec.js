const {test} = require('@playwright/test');

test("Login sauce Demo", async ({page}) =>{

    await page.goto("https://www.saucedemo.com/");

    await page.locator("#user-name").fill("standard_user");

    await page.locator("#password").fill("secret_sauce");

    await page.getByText("Login").click();

    await page.waitForTimeout(4000);

    await page.title();

})