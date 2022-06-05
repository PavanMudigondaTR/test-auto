import { test, expect } from "../__testBootstrap";
import { frameworkLog as log } from "../../src/utils/fLogger";



/**
 * This test follows the Page Object Model type of testing. Another option is to follow
 * the less structured type as shown in example.spec.ts
 */
/**
 * Fixtures are used here to create a TodoApp instance for every test. These are
 * defined inside the 'fixtures.ts' file. This will reduce the amount of
 * boilerplate created for each test and makes it more reusable.
 * @see https://playwright.dev/docs/test-fixtures
 */

test.describe("Accounting Tax Customer Placing Good Plan Order in DCP", () => {
  test.use({
    locale: `en-US`,
    // baseURL: DCP_URL,
    baseURL: `https://tax-tr-com-dev-ams.ewp.thomsonreuters.com/en-us/products/checkpoint-edge/plans-pricing`,
  });
  test("@e2e TC1 - E2E test between DCP, SFDC, SAP S4Hana and CSP", async ({
    pageProvider,
    navigateTo,
    buyNowPage,
    checkoutPage,
    createAccountPage,
    emailPage,
    orderSummaryPage,
    plansPricingPage,
    signInExistingAccountPage,
    signInPopUpPage,
    verifyEmailPage,
  }) => {
    await test.step("Given I have logged in to DCP Application", async () => {
      log("Loading test page...");
      await plansPricingPage.load();
      await plansPricingPage.verifyPageHeading();
    });
    await test.step("When i select Select Accounting Tax Button ", async () => {
      // await plansPricingPage.verifyPageHeading();
      await plansPricingPage.clickChooseAccountingFirmButton();
    });
    await test.step("Then i see Unselect button displayed", async () => {
      await plansPricingPage.verifyUnselectButtonisDisplayed();
    });
    await test.step("When i click Next step", async () => {
      await plansPricingPage.clickBusinessSectorNextButton();
    });
    // await test.step('Then i am navigated to next step Practice Area section', async () => {
    //
    // });
    await test.step(
      "When i select Tax radio button under Practice Area section",
      async () => {
        await plansPricingPage.clickPracticeAreaNextButton();
      }
    );
    await test.step(
      "Then i am navigated to next step which is Select your practice area",
      async () => {
        // await plansPricingPage.
      }
    );
    await test.step(
      "Then i am navigated to section with title Select and customize your plan",
      async () => {
        await plansPricingPage.verifyRecommendedPlansSectionDisplay();
      }
    );
  });
});

// await test.step('9. When i select Checkpoint Tax Compliance button and click Select Plan', async () => {
//
// });
// await test.step('10. Then button becomes Plan selected button corresponding to plan is selected', async () => {
//
// });
// await test.step('11. When i click Next step button under Select and Customize your plan', async () => {
//
// });
// await test.step('12. Then i am navigated to select your state reporter section', async () => {
//
// });
// await test.step('13. When i click click State Reporter DropDown i see all US States', async () => {
//
// });
// await test.step('14. When i select three US States Alaska, Arizona and Alabama', async () => {
//
// });
// await test.step('15. Then i see message confirming that i have selected three states', async () => {
//
// });
// await test.step('16. When i click Next Step button\n', async () => {
//
// });
// await test.step('17. Then i am navigated to select additional features which is also called Addons', async () => {
//
// });
// await test.step('18. When i skip addon selection and click Continue to your plan summary', async () => {
//
// });
// await test.step('19. Then i am navigated to Buy Now screen that has my feature selection details and option to made changes\n', async () => {
//
// });
// await test.step('20. When i skip modifications and click Buy now button', async () => {
//
// });
// await test.step('21. Then i am presented with Sign In screen with two options to use existing ID or to create new account\n', async () => {
//
// });
// await test.step('22. When i click Create an account option i am navigated to screen titled Create an account', async () => {
//
// });
// await test.step('23. When i enter all details in Create an account screen and press Continue button', async () => {
//
// });
// await test.step('24. Then i am navigated to screen titled Verify your email', async () => {
//
// });
// await test.step('25. When i go to my email box', async () => {
//
// });
// await test.step('26. Then i find email from Thompson Reuters with subject Verify your email with Verification Code\n', async () => {
//
// });
// await test.step('27. When I return to DCP and enter the Verification code and click Create your account button\n', async () => {
//
// });
// await test.step('28. Then i see Account Created', async () => {
//
// });
