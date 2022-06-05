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

export class VerifyEmailPage implements IPage {
  readonly page: Page
  readonly firstTextField: Locator
  readonly secondTextField: Locator
  readonly thirdTextField: Locator
  readonly fourthTextField: Locator
  readonly fifthTextField: Locator
  readonly createYourAccountButton: Locator

  constructor(page: Page) {
    this.page = page;
    this.firstTextField = page.locator('[aria-label="1 field out of 5"]')
    this.secondTextField = page.locator('[aria-label="2 field out of 5"]')
    this.thirdTextField = page.locator('[aria-label="3 field out of 5"]')
    this.fourthTextField = page.locator('[aria-label="4 field out of 5"]')
    this.fifthTextField = page.locator('[aria-label="5 field out of 5"]')
    this.createYourAccountButton = page.locator('button:has-text("Create your account")');

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








