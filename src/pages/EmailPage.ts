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

export class EmailPage implements IPage {
  readonly page: Page
  readonly publicMailBox: Locator
  readonly goHomeButton: Locator
  readonly emailRecord: Locator
  readonly jsonTab: Locator
  readonly jsonContent: Locator
  readonly verificationCode: Locator

  constructor(page: Page) {
    this.page = page;
    this.publicMailBox = page.locator('[placeholder="Enter Public Mailinator Inbox"]');
    this.goHomeButton = page.locator('text=GO');
    this.emailRecord = page.locator('text=Verify Your Account');
    this.jsonTab = page.locator('text=JSON');
    this.jsonContent = page.locator('');
    this.verificationCode = page.locator('');

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








