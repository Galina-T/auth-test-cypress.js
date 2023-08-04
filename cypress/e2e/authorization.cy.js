import * as login from "../PageObjects/loginPage.js";

describe("authorization on the site 'QA studio'", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const dataForIts = [
    {
      name: "checks for input: correct email/correct password",
      fixture: "current_user_true",
      isRestore: false,
    },
    {
      name: "checks the password recovery logic",
      fixture: "current_user_forgot",
      isRestore: true,
    },
    {
      name: "checks for input:: NOT correct email/correct password",
      fixture: "current_user_incorrect_login",
      isRestore: false,
    },
    {
      name: "checks for input: correct email/ NOT correct password",
      fixture: "current_user_incorrect_pass",
      isRestore: false,
    },
    {
      name: "checks for input: email WITHOUT @/correct password",
      fixture: "current_user_inval_login_without@",
      isRestore: false,
    },
    {
      name: "checks case sensitivity in email",
      fixture: "current_user_true_case_sensitivity",
      isRestore: false,
    },
  ];

  dataForIts.forEach((test) => {
    const isRestore = test.isRestore;

    it(test.name, function () {
      cy.fixture(test.fixture).then((data) => {
        login.isAuthSubmitDisabled();

        if (isRestore) {
          login.clickBtnForgot();
          login.expectedClickForgot();
          login.setEmail(isRestore, data.email);
        } else {
          login.setEmail(isRestore, data.email);
          login.isAuthSubmitDisabled();
          login.setPassword(data.password);
        }
        login.clickBtnSubmit(isRestore);
        login.expectedClickSubmit(data.expected);
      });
    });
  });
});
