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

export class SignInPopUpPage implements IPage {
  readonly page: Page
  readonly signInHeadingButton: Locator
  readonly signInToContinueButton: Locator
  readonly createAnAccountButton: Locator
  readonly closeButton: Locator

  constructor(page: Page) {
    this.page = page;
    this.signInHeadingButton = page.locator('h2:has-text("Sign in")');
    this.signInToContinueButton = page.locator('button:has-text("Sign in to continue")');
    this.createAnAccountButton = page.locator('button:has-text("Create an account")');
    this.closeButton = page.locator('[aria-label="Close login popup"]');

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








