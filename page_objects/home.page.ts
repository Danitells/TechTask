import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.searchInput = page.locator('input[placeholder="Search"]');
  }
}
