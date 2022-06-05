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

export class CheckoutPage implements IPage {
  readonly page: Page
  readonly pageHeading: Locator
  readonly firstNameBox: Locator
  readonly lastNameBox: Locator
  readonly businessEmailBox: Locator
  readonly orgTypeDropDown: Locator
  readonly orgNameBox: Locator
  readonly continueToPaymentButton: Locator
  readonly billingAddressLabel: Locator
  readonly addressFirstLineBox: Locator
  readonly addressFirstLineDropDown: Locator
  readonly addressSecondLineBox: Locator
  readonly addressCityBox: Locator
  readonly phoneNumberBox: Locator
  readonly zipCodeBox: Locator
  readonly selectBankAccountRadio: Locator
  readonly selectCreditCardRadio: Locator
  readonly routingNumberBox: Locator
  readonly accountNumberBox: Locator
  readonly termsCheck: Locator
  readonly continueToAddUserButton: Locator
  readonly addFirstUserLabel: Locator
  readonly primaryUserYesRadio: Locator
  readonly primaryUserNoRadio: Locator
  readonly primaryFirstNameBox: Locator
  readonly primaryLastNameBox: Locator
  readonly primaryEmailBox: Locator
  readonly positionDropDown: Locator
  readonly reviewOrderButton: Locator


  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.locator('text=Checkout');
    this.firstNameBox = page.locator('input[name="firstName"]');
    this.lastNameBox = page.locator('input[name="lastName"]');
    this.businessEmailBox = page.locator('input[name="businessEmailAddress"]');
    this.orgTypeDropDown = page.locator('select[name="typeOfOrganization"]');
    this.orgNameBox = page.locator('input[name="organizationName"]');
    this.continueToPaymentButton = page.locator('button:has-text("Continue to payment")');
    this.billingAddressLabel = page.locator('text=Billing address');
    this.addressFirstLineBox = page.locator('input[role="combobox"]');
    this.addressFirstLineDropDown = page.locator('button:has-text("`${address}`")');
    this.addressSecondLineBox = page.locator('input[name="addressLineOptional"]');
    this.addressCityBox = page.locator('input[name="city"]');
    this.phoneNumberBox = page.locator('input[name="phoneNumber"]');
    this.zipCodeBox = page.locator('input[name="postalCode"]');
    this.selectBankAccountRadio = page.locator('[type=radio]:left-of(:text("Bank account"))');
    this.selectCreditCardRadio = page.locator('[type=radio]:left-of(:text("Credit card"))');
    this.routingNumberBox = page.locator('input[name="routingNumber"]');
    this.accountNumberBox = page.locator('input[name="accountNumber"]');
    this.termsCheck = page.locator('text=I acknowledge');
    this.continueToAddUserButton = page.locator('button:has-text("Continue to add user")');
    this.addFirstUserLabel = page.locator('button:has-text("Add first user")');
    this.primaryUserYesRadio = page.locator('[type=radio]:left-of(:text("Yes"))');
    this.primaryUserNoRadio = page.locator('[type=radio]:left-of(:text("No"))');
    this.primaryFirstNameBox = page.locator('id=addUserFirstName');
    this.primaryLastNameBox = page.locator('addUserLastName');
    this.primaryEmailBox = page.locator('emailAddress');
    this.positionDropDown = page.locator('select[name="position"]');
    this.reviewOrderButton = page.locator('button:has-text("Review order")');

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








