import { test as base } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";
import { MainPage } from "../src/pages/MainPage";
import { Navigate } from "../src/helpers/Navigate";
import { BuyNowPage } from "../src/pages/BuyNowPage";
import { CheckoutPage } from "../src/pages/CheckoutPage";
import { CreateAccountPage } from "../src/pages/CreateAccountPage";
import { EmailPage } from "../src/pages/EmailPage";
import { OrderSummaryPage } from "../src/pages/OrderSummaryPage";
import { PlansPricingPage } from "../src/pages/PlansPricingPage";
import { SignInPopUpPage } from "../src/pages/SignInPopUpPage";
import { SignInExistingAccountPage } from "../src/pages/SignInExistingAccountPage";
import { VerifyEmailPage } from "../src/pages/VerifyEmailPage";
import { pageObjectProvider } from "../src/helpers/PageObjectProvider";

type Pages = {
    loginPage: LoginPage,
    mainPage: MainPage,
    buyNowPage: BuyNowPage,
    checkoutPage: CheckoutPage,
    createAccountPage: CreateAccountPage,
    emailPage: EmailPage,
    orderSummaryPage: OrderSummaryPage,
    plansPricingPage: PlansPricingPage,
    signInExistingAccountPage: SignInExistingAccountPage,
    signInPopUpPage: SignInPopUpPage,
    verifyEmailPage: VerifyEmailPage
}

type Helpers = {
    navigateTo: Navigate,
    // @ts-ignore
    pageProvider: pageObjectProvider
}
/**
 * Provide everything a test could need e.g. Page-objects, helpers, utils etc. here as fixtures.
 * If in case you want to separate out the helpers, utils etc. just create a new type eg. type Helpers = {}, type Utils = {} ,etc.
 * Then just add them to the base. Extend params e.g. base.extend< Pages & Helpers & Utils >
 */
export const test = base.extend<Pages & Helpers>({
    // Pages Section
    loginPage: async ({page}, use) => {
        await use( await new LoginPage(page) )
    },
    mainPage: async ({page}, use) => {
        await use( await new MainPage(page) )
    },
    // Utilities Section

    // Helpers Section
    navigateTo: async ({page}, use)=> {
      await use(await new Navigate(page))
    },
    // @ts-ignore
    pageProvider: async ({page}, use)=> {
        // @ts-ignore
        await use(await pageObjectProvider(page))
    },
    buyNowPage: async ({page}, use) => {
        await use( await new BuyNowPage(page) )
    },
    checkoutPage: async ({page}, use) => {
        await use( await new CheckoutPage(page) )
    },
    createAccountPage: async ({page}, use) => {
        await use( await new CreateAccountPage(page) )
    },
    emailPage: async ({page}, use) => {
        await use( await new EmailPage(page) )
    },
    orderSummaryPage: async ({page}, use) => {
        await use( await new OrderSummaryPage(page) )
    },
    plansPricingPage: async ({page}, use) => {
        await use( await new PlansPricingPage(page) )
    },
    signInExistingAccountPage: async ({page}, use) => {
        await use( await new SignInExistingAccountPage(page) )
    },
    signInPopUpPage: async ({page}, use) => {
        await use( await new SignInPopUpPage(page) )
    },
    verifyEmailPage: async ({page}, use) => {
        await use( await new VerifyEmailPage(page) )
    },
})

export { expect } from "@playwright/test"
