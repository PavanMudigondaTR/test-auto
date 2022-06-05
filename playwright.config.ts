import * as TARGET from "./src/configs/TargetEnvConfigs";
import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const TEST_TARGET = TARGET[process.env.TARGET || "QA"].DCP_URL; // Default target is local

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  fullyParallel: true,
  globalSetup: require.resolve("./src/core/__Framework-init"),
  testDir: "./tests",
  testMatch: "*spec.ts",
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    // [`./CustomReporterConfig.ts`],
    ["dot"], // -> console
    ["junit", { outputFile: "test-results/test-result.xml" }], // -> XML
    ["github"], // -> console
    ["dot"], // -> console
    ["json", { outputFile: "test-results/test-result.json" }], //  -> JSON
    [
      "html",
      {
        open: "never",
        outputFolder: "html-report",
      },
    ], // -> HTML
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: TEST_TARGET,
    ignoreHTTPSErrors: true,
    screenshot: "on",
    video: "on",
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when the test fails. See https://playwright.dev/docs/trace-viewer */
    trace: "on",
  },

  projects: [
    /* TEST TYPES projects */
    {
      name: "smoke",
      grep: /@smoke/,
      use: {
        baseURL: TEST_TARGET,
        browserName: "chromium",
      },
    },
    // {
    //   name: 'e2e',
    //   grep: /@smoke/,
    //   use: {
    //     baseURL: TEST_TARGET,
    //     browserName: 'chromium'
    //   }
    // },
    // {
    //   name: 'regression',
    //   grep: /@regression/,
    //   use: {
    //     baseURL: TEST_TARGET,
    //     browserName: 'chromium'
    //   }
    // },
    /* BROWSER TYPES projects */
    // {
    //   name: `Chromium`,
    //   use: {
    //     browserName: `chromium`,
    //     baseURL: '',
    //     headless: true,
    //     viewport: { width: 1500, height: 730 },
    //     ignoreHTTPSErrors: true,
    //     acceptDownloads: true,
    //     screenshot: `on`,
    //     video: `retain-on-failure`,
    //     trace: `on`,
    //     launchOptions: {
    //       slowMo: 0,
    //     },
    //   },
    // },

    // {
    //   name: `Firefox`,
    //   use: {
    //     browserName: `firefox`,
    //     baseURL: '',
    //     headless: true,
    //     viewport: { width: 1500, height: 730 },
    //     ignoreHTTPSErrors: true,
    //     acceptDownloads: true,
    //     screenshot: `on`,
    //     video: `retain-on-failure`,
    //     trace: `on`,
    //     launchOptions: {
    //       slowMo: 0,
    //     },
    //   },
    // },

    // {
    //   name: `Edge`,
    //   use: {
    //     browserName: `chromium`,
    //     channel: `msedge`,
    //     baseURL: '',
    //     headless: true,
    //     viewport: { width: 1500, height: 730 },
    //     ignoreHTTPSErrors: true,
    //     acceptDownloads: true,
    //     screenshot: `on`,
    //     video: `on`,
    //     trace: `on`,
    //     launchOptions: {
    //       slowMo: 0,
    //     },
    //   },
    // },
    // {
    //   name: `WebKit`,
    //   use: {
    //     browserName: `webkit`,
    //     headless: true,
    //     baseURL: '',
    //     viewport: { width: 1500, height: 730 },
    //     ignoreHTTPSErrors: true,
    //     acceptDownloads: true,
    //     screenshot: `on`,
    //     video: `on`,
    //     trace: `on`,
    //     launchOptions: {
    //       slowMo: 0,
    //     },
    //   },
    // },
    // {
    //   name: `Device`,
    //   use: {
    //     ...devices[`Pixel 4a (5G)`],
    //     browserName: `chromium`,
    //     baseURL: '',
    //     headless: true,
    //     ignoreHTTPSErrors: true,
    //     acceptDownloads: true,
    //     screenshot: `on`,
    //     video: `retain-on-failure`,
    //     trace: `retain-on-failure`,
    //     launchOptions: {
    //       slowMo: 0,
    //     },
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: "test-results/",

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

export default config;
