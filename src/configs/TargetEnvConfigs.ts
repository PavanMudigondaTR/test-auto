import { IConfig } from "./IConfig";

export const LOCAL: IConfig = {
  // Local Test
  targetUrl: "https://www.saucedemo.com/",
  testMsg: "Hello from LOCAL Test environment",
};
export const QA: IConfig = {
  // System Test
  targetUrl: "https://www.saucedemo.com/",
  testMsg: "Hello from ST: System Test environment",
  TEST_DATA_FILE: "qa_data.json",
  SALESFORCE_URL: "",
  SALESFORCE_API_URL: " ",
  DCP_URL: "",
  CSP_URL: "",
  SAP_URL: " ",
  EMAIL_API_URL: "https://mailinator.com/",
  SALESFORCE_PASSWORD: " ",
  DCP_USERNAME: "",
  DCP_PASSWORD:  "",
  SAP_PASSWORD: " ",
  dbUsername: " ",
  dbPassword: " ",
  dbServerName: " ",
  dbPort: " ",
  dbName: " ",
};
export const UAT: IConfig = {
  // User Acceptance Testing Environment
  targetUrl: "https://www.saucedemo.com/",
  testMsg: "Hello from SIT: System Integration Testing environment",
  DCP_URL: "",
  CSP_URL: "",
  DCP_USERNAME: "",
  DCP_PASSWORD: "",
};
export const PREPROD: IConfig = {
  // Pre-Production Testing Environment
  targetUrl: "https://www.saucedemo.com/",
  testMsg: "Hello from OAT: Operations Acceptance Testing environment",
};
