import { test, expect } from '@playwright/test';


test('Data - Login Validation', async ({ page, context }) => {
  const variables: Map<string, any> = new Map();
  variables.set('web.defaults.credentials.username', process.env.USERNAME);
  variables.set('web.defaults.credentials.password', process.env.PASSWORD);
  variables.set('web.defaults.url', 'https://www.saucedemo.com/');
  // Set viewport size to width 1920 and height 1080
  await page.setViewportSize({width: 1920, height: 1080});
  // Visit URL assigned to variable "app.url"
  await page.goto(replaceMablVariables(`{{@web.defaults.url}}`, variables));
  // Insert value of variable "User" into the "Username" text field
  // These selectors are also valid: '.input_error.form_input'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/input[1]`).first().type(replaceMablVariables(`{{@user.User}}`, variables));
  // Insert value of variable "Password" into the "Password" text field
  // These selectors are also valid: '.input_error.form_input'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[2]/input[1]`).first().type(replaceMablVariables(`{{@user.Password}}`, variables));
  // Click on the button with ID "login-button"
  // These selectors are also valid: '.submit-button.btn_action'. But we can't guarantee they will be unique
  await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/input[1]`).first().click();
  // IF "pathname" of current URL equals "/"
  if (await page.evaluate(arg => window.location.pathname === arg, `/`)) {
    // IF "innerText" of the <h3> element with text "Epic sadface: Username and password do not match any user in this service" equals "Epic sadface: Username and password d..."
    // These selectors are also valid: 'getByText('Epic sadface: Username and password do not match any user in this service')'. But we can't guarantee they will be unique
    if (await page.locator(`//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[3]/h3[1]`).first().innerText()) {
      // Assert "innerText" of the <h3> element with text "Epic sadface: Username and password do not match any user in this service" equals "Epic sadface: Username and password d..."
      // These selectors are also valid: 'getByText('Epic sadface: Username and password do not match any user in this service')'. But we can't guarantee they will be unique
      await expect(page.locator(`//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[3]/h3[1]`).first()).toHaveText(`Epic sadface: Username and password do not match any user in this service`);
      // ELSE
    } else {
      // Assert "innerText" of the <h3> element with text "Epic sadface: Username is required" equals "Epic sadface: Username is required"
      // These selectors are also valid: 'getByText('Epic sadface: Username is required')'. But we can't guarantee they will be unique
      await expect(page.locator(`//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[3]/h3[1]`).first()).toHaveText(`Epic sadface: Username is required`);
      // END
    }
    // ELSE IF "pathname" of current URL equals "/inventory.html"
  } else if (await page.evaluate(arg => window.location.pathname === arg, `/inventory.html`)) {
    // Assert "pathname" of current URL equals "/inventory.html"
    expect(await page.evaluate(arg => window.location.pathname === arg, `/inventory.html`)).toBeTruthy();
    // ELSE
  } else {
    // END
  }
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

