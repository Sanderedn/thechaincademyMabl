import { test, expect } from '@playwright/test';


test('E2E - Login and Complete Key Journey', async ({ page, context }) => {
  const variables: Map<string, any> = new Map();
  variables.set('web.defaults.credentials.username', process.env.USERNAME);
  variables.set('web.defaults.credentials.password', process.env.PASSWORD);
  variables.set('web.defaults.url', 'https://www.saucedemo.com/');
  // Set viewport size to width 1920 and height 1080
  await page.setViewportSize({width: 1920, height: 1080});
  // Visit URL assigned to variable "app.url"
  await page.goto(replaceMablVariables(`{{@web.defaults.url}}`, variables));
  // Click on the "Username" text field
  // These selectors are also valid: '.input_error.form_input'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/input[1]`).first().click();
  // Enter "standard_user" in the "Username" text field
  // These selectors are also valid: '.input_error.form_input'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/input[1]`).first().type(`standard_user`);
  // Click on the "Password" text field
  // These selectors are also valid: '.input_error.form_input'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[2]/input[1]`).first().click();
  // Enter a password in the "Password" text field
  // These selectors are also valid: '.input_error.form_input'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[2]/input[1]`).first().type(`secret_sauce`);
  // Click on the button with ID "login-button"
  // These selectors are also valid: '.submit-button.btn_action'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/input[1]`).first().click();
  // Assert "pathname" of current URL equals "/inventory.html"
  expect(await page.evaluate(arg => window.location.pathname === arg, `/inventory.html`)).toBeTruthy();
  // Click on the "Add to cart" button
  // These selectors are also valid: '.btn.btn_primary.btn_small.btn_inventory.'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/button[1]`).first().click();
  // Assert "id" of the "Remove" button equals "remove-sauce-labs-backpack"
  // These selectors are also valid: '.btn.btn_secondary.btn_small.btn_inventory.'. But we can't guarantee they will be unique
  expect(await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/button[1]`).first().evaluate((el, arg) => el.getAttribute(`id`) === arg, `remove-sauce-labs-backpack`)).toBeTruthy();
  // Click on the "Add to cart" button
  // These selectors are also valid: '.btn.btn_primary.btn_small.btn_inventory.'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[2]/div[2]/button[1]`).first().click();
  // Assert "id" of the "Remove" button equals "remove-sauce-labs-fleece-jacket"
  // These selectors are also valid: '.btn.btn_secondary.btn_small.btn_inventory.'. But we can't guarantee they will be unique
  expect(await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[2]/div[2]/button[1]`).first().evaluate((el, arg) => el.getAttribute(`id`) === arg, `remove-sauce-labs-fleece-jacket`)).toBeTruthy();
  // Click on the <span> element with text "2"
  // These selectors are also valid: '.shopping_cart_badge'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/a[1]/span[1]`).first().click();
  // Click on the "Remove" button
  // These selectors are also valid: '.btn.btn_secondary.btn_small.cart_button'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[4]/div[2]/div[2]/button[1]`).first().click();
  // Click on the "Checkout" button
  // These selectors are also valid: '.btn.btn_action.btn_medium.checkout_button.'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/button[2]`).first().click();
  // Assert "innerText" of the <span> element with text "Checkout: Your Information" equals "Checkout: Your Information"
  // These selectors are also valid: '.title'. But we can't guarantee they will be unique
  await expect(page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/span[1]`).first()).toHaveText(`Checkout: Your Information`);
  // Click on the "First Name" text field
  // These selectors are also valid: '.input_error.form_input'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[1]/input[1]`).first().click();
  // Enter "Test" in the "First Name" text field
  // These selectors are also valid: '.input_error.form_input'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[1]/input[1]`).first().type(`Test`);
  // Click on the "Last Name" text field
  // These selectors are also valid: '.input_error.form_input'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[2]/input[1]`).first().click();
  // Enter "Mabl" in the "Last Name" text field
  // These selectors are also valid: '.input_error.form_input'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[2]/input[1]`).first().type(`Mabl`);
  // Click on the "Zip/Postal Code" text field
  // These selectors are also valid: '.input_error.form_input'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[3]/input[1]`).first().click();
  // Enter "a1a 1a1" in the "Zip/Postal Code" text field
  // These selectors are also valid: '.input_error.form_input'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[3]/input[1]`).first().type(`a1a 1a1`);
  // Click on the button with ID "continue"
  // These selectors are also valid: '.submit-button.btn.btn_primary.cart_button.btn_action'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/input[1]`).first().click();
  // Assert "innerText" of the <div> element with text "1 Sauce Labs Backpack carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99" equals "1 Sauce Labs Backpack carry.allTheThi..."
  // These selectors are also valid: '.cart_item'. But we can't guarantee they will be unique
  await expect(page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]`).first()).toHaveText(`1 Sauce Labs Backpack carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99`);
  // Assert "innerText" of the <div> element with text "Payment Information: SauceCard #31337 Shipping Information: Free Pony Express Delivery! Price Total Item total: $29.99 Tax: $2.40 Total: $32.39 Cancel Finish" equals "Payment Information: SauceCard #31337..."
  // These selectors are also valid: '.summary_info'. But we can't guarantee they will be unique
  await expect(page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]`).first()).toHaveText(`Payment Information: SauceCard #31337 Shipping Information: Free Pony Express Delivery! Price Total Item total: $29.99 Tax: $2.40 Total: $32.39 Cancel Finish`);
  // Click on the "Finish" button
  // These selectors are also valid: '.btn.btn_action.btn_medium.cart_button'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[9]/button[2]`).first().click();
  // Assert "id" of the <div> element with text "Thank you for your order! Your order has been dispatched, and will arrive just as fast as the pony can get there! Back Home" equals "checkout_complete_container"
  // These selectors are also valid: '.checkout_complete_container'. But we can't guarantee they will be unique
  expect(await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]`).first().evaluate((el, arg) => el.getAttribute(`id`) === arg, `checkout_complete_container`)).toBeTruthy();
  // Click on the "Back Home" button
  // These selectors are also valid: '.btn.btn_primary.btn_small'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/button[1]`).first().click();
  // Click on the "Open Menu" button
  // These selectors are also valid: ', or id=react-burger-menu-btn'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]`).first().click();
  // Click on the link "Logout" to https://www.saucedemo.com/inventory.html#
  // These selectors are also valid: '.bm-item.menu-item'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/a[3]`).first().click();
  // Assert "pathname" of current URL equals "/"
  expect(await page.evaluate(arg => window.location.pathname === arg, `/`)).toBeTruthy();
});



function replaceMablVariables(value: string, variables: Map<string, any>) {
  const regex = /{{@?([^{}]+)}}/g;
  return value.replace(regex, (_match, p1) => {
    const variable = variables.get(p1);
    if (variable) {
      return variable;
    }
    return p1;
  });
}

