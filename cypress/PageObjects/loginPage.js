import utils from "../ helpers/utils.js";

const auth = {
  locatorEmail: "#mail",
  locatorPassword: "#pass",
  submit: {
    locator: "#loginButton",
    text: "Войти",
  },
  btnExit: {
    locator: "#exitMessageButton > .exitIcon",
    src: "static/cross.svg",
  },
};

const restore = {
  locatorEmail: "#mailForgot",
  btnForgot: {
    locator: "#forgotEmailButton",
    text: "Забыли пароль?",
  },
  submit: {
    locator: "#restoreEmailButton",
    text: "Отправить код",
  },
  expected: {
    locator: "#forgotForm",
    text: "Восстановите пароль",
  },
  btnExit: {
    locator: "#exitRestoreButton > .exitIcon",
    src: "static/cross.svg",
  },
};

const locatorVerifyMsg = "#messageHeader";

/**
 * @param {boolean} isRestore - is the form a password recovery form?
 * @param {string} text      - email
 */
export const setEmail = (isRestore, text) => {
  const locator = isRestore ? restore.locatorEmail : auth.locatorEmail;
  utils.setText(locator, text);
};

/**
 * @param {string} text - password
 */
export const setPassword = (text) => {
  utils.setText(auth.locatorPassword, text);
};

export const isAuthSubmitDisabled = () => {
  utils.isBtnDisabled(auth.submit);
};

export const isRestoreSubmitDisabled = () => {
  utils.isBtnDisabled(restore.submit);
};

/**
 * @param {boolean} isRestore - is the form a password recovery form?
 */
export const clickBtnSubmit = (isRestore) => {
  const btn = isRestore ? restore.submit : auth.submit;
  utils.clickBtn(btn);
};

export const clickBtnForgot = () => {
  utils.clickBtn(restore.btnForgot);
};

/**
 * @param {string} text - verification message
 */
export const expectedClickSubmit = (text) => {
  utils.expectedClick(auth.btnExit, {
    locator: locatorVerifyMsg,
    text,
  });
};

export const expectedClickForgot = () => {
  utils.expectedClick(restore.btnExit, restore.expected);
};
