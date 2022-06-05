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

export class CreateAccountPage implements IPage {
  readonly page: Page
  readonly pageHeading: Locator
  readonly signInLink: Locator
  readonly firstNameBox: Locator
  readonly lastNameBox: Locator
  readonly emailBox: Locator
  readonly newPassword: Locator
  readonly confirmNewPassword: Locator
  readonly preferredLanguage: Locator
  readonly AcceptTerms: Locator
  readonly ContinueButton: Locator

  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.locator('text=Create an account');
    this.signInLink = page.locator('text=sign in to your existing account');
    this.firstNameBox = page.locator('#firstName');
    this.lastNameBox = page.locator('#lastName');
    this.emailBox = page.locator('#email');
    this.newPassword = page.locator('#newPassword');
    this.confirmNewPassword = page.locator('#passwordConfirmation');
    this.preferredLanguage = page.locator('id=expand-button-1');
    this.AcceptTerms = page.locator('.Checkbox-checkbox');
    this.ContinueButton = page.locator('button:has-text("Continue")');
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








