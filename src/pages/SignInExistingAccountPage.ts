import { IPage } from "./IPage";
import * as siteUser from "../configs/Users";
import { decrypt } from "../utils/Crypter";
import { expect } from "../../tests/__testBootstrap";
import { IUser } from "../configs/IUser";
import { Locator, Page } from "@playwright/test";

/**
 * This is a Page Object Model (POM) class for the application's verifyEmailPage. It
 * provides locators and common operations that make writing tests easier.
 * @see https://playwright.dev/docs/test-pom
 */
/**
 * Locators are used to reflect a element on the page with a selector.
 * @see https://playwright.dev/docs/api/class-locator
 */

export class SignInExistingAccountPage implements IPage {
  readonly page: Page;
  readonly TRLogo: Locator;
  readonly pageTitle: Locator;
  readonly emailTextField: Locator;
  readonly signInButton: Locator;
  readonly passwordTextField: Locator;
  readonly resetPasswordLink: Locator;
  readonly editUserNameLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.TRLogo = page.locator('img[alt="Thomson Reuters"]');
    this.pageTitle = page.locator(
      "text=Sign in to Digital Commerce Platform (DCP)"
    );
    this.emailTextField = page.locator('input[name="username"]');
    this.signInButton = page.locator('button:has-text("Sign in")');
    this.passwordTextField = page.locator('input[name="password"]');
    this.resetPasswordLink = page.locator("text=Reset your password");
    this.editUserNameLink = page.locator("text=Edit");
  }
  /**
   * Write your reusable functions or operations here
   * @see https://playwright.dev/docs/test-pom
   */

  async load(): Promise<this> {
    await this.page.goto("/");
    return this;
  }
}
