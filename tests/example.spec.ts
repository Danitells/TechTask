import { test, expect } from "@playwright/test";
import { ENV } from "../env";
import { LoginPage } from "../page_objects/login.page";
import { HomePage } from "../page_objects/home.page";

test.beforeEach(async ({ page }) => {
  await page.goto(ENV.DEV_ADMIN_URL);
});
test("Login valid", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginInput.fill(ENV.DEV_ADMIN_LOGIN);
  await loginPage.passwordInput.fill(ENV.DEV_ADMIN_PASSWORD);
  const signInPromise = page.waitForResponse(
    (resp) => resp.url().includes("/api/v1/sign-in") && resp.status() === 201,
    { timeout: 8000 }
  );

  await loginPage.submitBtn.click();
  await signInPromise;
  page.url().includes("/chats");
  const homePage = new HomePage(page);
  await expect(homePage.searchInput).toBeVisible();
});

test("Login invalid", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginInput.fill(ENV.DEV_ADMIN_LOGIN);
  await loginPage.passwordInput.fill("blabla");
  const signInPromise = page.waitForResponse(
    (resp) => resp.url().includes("/api/v1/sign-in") && resp.status() === 400,
    { timeout: 8000 }
  );
  await loginPage.submitBtn.click();
  await signInPromise;
  page.url().includes("/login");
});
