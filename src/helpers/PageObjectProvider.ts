import { Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { MainPage } from "../pages/MainPage";
import { BuyNowPage} from "../pages/BuyNowPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { CreateAccountPage } from "../pages/CreateAccountPage";
import { EmailPage } from "../pages/EmailPage";
import { OrderSummaryPage } from "../pages/OrderSummaryPage";
import { PlansPricingPage } from "../pages/PlansPricingPage";
import { SignInExistingAccountPage } from "../pages/SignInExistingAccountPage";
import  { SignInPopUpPage } from "../pages/SignInPopUpPage";
import { VerifyEmailPage} from "../pages/VerifyEmailPage";

import { frameworkLog as log } from "../utils/fLogger";

export const pageObjectProvider = async function (page: Page) {
    log("Initialising Page Object Provider...")
    // add initialised page objects here
    return {
        loginPage: await new LoginPage(page),
        mainPage: await new MainPage(page),
        buyNowPage: await new BuyNowPage(page),
        checkOutPage: await new CheckoutPage(page),
        createAccountPage: await new CreateAccountPage(page),
        emailPage: await new EmailPage(page),
        orderSummaryPage: await new OrderSummaryPage(page),
        plansPricingPage: await new PlansPricingPage(page),
        signInExistingAccountPage: await new SignInExistingAccountPage(page),
        signInPopUpPage: await new SignInPopUpPage(page),
        verifyEmailPage: await new VerifyEmailPage(page)
    }
}
