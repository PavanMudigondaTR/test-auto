import { IPage } from "./IPage";
import { Locator, Page } from "@playwright/test";
import * as siteUser from '../configs/Users'
import { decrypt } from "../utils/Crypter";
import { expect } from "../../tests/__testBootstrap";
import { IUser } from "../configs/IUser";

/**
 * This is a Page Object Model (POM) class for the application's verifyEmailPage. It
 * provides locators and common operations that make writing tests easier.
 * @see https://playwright.dev/docs/test-pom
 */
/**
 * Locators are used to reflect a element on the page with a selector.
 * @see https://playwright.dev/docs/api/class-locator
 */

export class OrderSummaryPage implements IPage {
  readonly page: Page
  readonly placeOrderButton: Locator
  readonly reviewOrderHeading: Locator
  readonly orderDetails: Locator

  constructor(page: Page) {
    this.page = page;
    this.placeOrderButton = page.locator('button:has-text("Place order")');
    this.reviewOrderHeading = page.locator('text=Review order');
    this.orderDetails = page.locator('text=Order details');

  }
  /**
   * Write your reusable functions or operations here
   * @see https://playwright.dev/docs/test-pom
   */
  async load(): Promise<this> {
    await this.page.goto('/')
    return this
  }

}








