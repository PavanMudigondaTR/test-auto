import { IPage } from "./IPage";
import * as siteUser from "../configs/Users";
import { decrypt } from "../utils/Crypter";
import { expect, test } from "../../tests/__testBootstrap";
import { IUser } from "../configs/IUser";
import { Locator, Page } from "@playwright/test";
import { BrowserContext } from "playwright";

/**
 * This is a Page Object Model (POM) class for the application's verifyEmailPage. It
 * provides locators and common operations that make writing tests easier.
 * @see https://playwright.dev/docs/test-pom
 */
/**
 * Locators are used to reflect a element on the page with a selector.
 * @see https://playwright.dev/docs/api/class-locator
 */

export class PlansPricingPage implements IPage {
  readonly context: BrowserContext;
  readonly page: Page;
  readonly homePageHeading: Locator;
  readonly chooseAccountingFirmButton: Locator;
  readonly accountingFirmUnselectButton: Locator;
  readonly accountingFirmSelectedTick: Locator;
  readonly chooseCorporationButton: Locator;
  readonly corporationUnselectButton: Locator;
  readonly businessSectorNextButton: Locator;
  readonly taxRadioButton: Locator;
  readonly accountingRadioButton: Locator;
  readonly auditRadioButton: Locator;
  readonly practiceAreaNextButton: Locator;
  readonly compareRecommendedPlans: Locator;
  readonly numberOfUsersTextField: Locator;
  readonly goodPlanButton: Locator;
  readonly betterPlanButton: Locator;
  readonly bestPlanButton: Locator;
  readonly planNextButton: Locator;
  readonly stateReportersDropDown: Locator;
  readonly selectState: Locator;
  readonly stateReportersNextButton: Locator;
  readonly addon192DollarsPlanButton: Locator;
  readonly addon240DollarsPlanButton: Locator;
  readonly confirmationOnSelectionOfStates: Locator;
  readonly continueToYourPlanSummaryButton: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.homePageHeading = page.locator(
      "text=Checkpoint Edge plans and pricing"
    );
    this.chooseAccountingFirmButton = page.locator(
      'button:has-text("Choose Accounting firm")'
    );
    this.accountingFirmUnselectButton = page.locator(
      'button:has-text("Accounting firm Selected")'
    );
    this.accountingFirmSelectedTick = page.locator(
      "span.tr-SelectionLabel-title.tr-Typography.tr-Typography--left"
    );
    this.chooseCorporationButton = page.locator(
      `//span[contains(text(),'Choose Corporation')]`
    );
    this.corporationUnselectButton = page.locator(
      `//span[contains(text(),'Corporation Selected')]`
    );
    this.businessSectorNextButton = page.locator(
      `#content-2 button:has-text("Next step")`
    );
    this.taxRadioButton = page.locator(`text=TaxReceive access >> span`);
    this.accountingRadioButton = page.locator(
      `text=AccountingReceive access >> span`
    );
    this.auditRadioButton = page.locator(`text=AuditReceive access >> span`);
    this.practiceAreaNextButton = page.locator(
      `#content-4 button:has-text("Next step")`
    );
    this.compareRecommendedPlans = page.locator(
      "text=Compare recommended plans"
    );
    this.numberOfUsersTextField = page.locator("id=numberofusers");
    this.goodPlanButton = page.locator(
      "text=$114.00/MonthSelect Plan >> button"
    );
    this.betterPlanButton = page.locator(
      "text=$175.00/MonthSelect Plan >> button"
    );
    this.bestPlanButton = page.locator(
      "text=$236.00/MonthSelect Plan >> button"
    );
    this.planNextButton = page.locator(
      '#content-6 button:has-text("Next step")'
    );
    this.stateReportersDropDown = page.locator(
      'div[role="combobox"] >> text=Select'
    );
    this.selectState = page.locator(
      'div[role="combobox"] >> text=place holder'
    );
    this.stateReportersNextButton = page.locator(
      '#content-14 div:has-text("Next step") >> nth=2'
    );
    this.addon192DollarsPlanButton = page.locator(
      "text=Checkpoint Catalyst, Annual subscription"
    );
    this.addon240DollarsPlanButton = page.locator("text=Checkpoint 50 States");
    this.confirmationOnSelectionOfStates = page.locator(
      "text=Youve successfully selected 3 State Reporters."
    );
    this.continueToYourPlanSummaryButton = page.locator(
      'button:has-text("Continue to your plan summary")'
    );
  }
  /**
   * Write your reusable functions or operations here
   * @see https://playwright.dev/docs/test-pom
   */

  async load(): Promise<this> {
    const context = await browser.newContext({
      httpCredentials: {
        username: gdhdj,
        password: jhdksj,
      },
    const this.page = await context.newPage();
    await this.page.goto("/");
    return this;
  }

  async verifyPageHeading() {
    await expect(this.homePageHeading).toHaveText(
      "Checkpoint Edge plans and pricing"
    );
  }

  async clickChooseAccountingFirmButton() {
    await this.chooseAccountingFirmButton.click();
  }

  async verifyUnselectButtonisDisplayed() {
    await this.accountingFirmUnselectButton.isEnabled();
  }
  async clickBusinessSectorNextButton() {
    await this.businessSectorNextButton.click();
  }

  async clickTaxRadioButton() {
    await this.taxRadioButton.click();
  }

  async clickPracticeAreaNextButton() {
    await this.practiceAreaNextButton.click();
  }
  async verifyRecommendedPlansSectionDisplay() {
    await this.compareRecommendedPlans.isVisible();
  }
  async enterSelectNumberOfUsers(users = "1") {
    await this.numberOfUsersTextField.fill(users);
  }

  async selectGoodPlanButton() {
    await this.goodPlanButton.click();
  }

  async selectCustomizePlanNextButton() {
    await this.planNextButton.click();
  }
}
