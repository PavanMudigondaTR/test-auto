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

export class BuyNowPage implements IPage {
  readonly page: Page
  readonly emailTextField: Locator
  readonly numberOfUsersTextField: Locator
  readonly plusIcon: Locator
  readonly minusIcon: Locator
  readonly addAdditionalFeaturesLink: Locator
  readonly removeAddedFeatureLink: Locator
  readonly buyNowButton: Locator

  constructor(page: Page) {
    this.page = page;
    this.emailTextField = page.locator("input[name='email']");
    this.numberOfUsersTextField = page.locator('input[type=text]');
    this.plusIcon = page.locator('[aria-label="Increase Number of users"]');
    this.minusIcon = page.locator('[aria-label="Decrease Number of users"]');
    this.addAdditionalFeaturesLink = page.locator('text=+ Add additional features');
    this.removeAddedFeatureLink = page.locator('text=Remove');
    this.buyNowButton = page.locator('button:has-text=("Buy now")');

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








