$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/SEMESTER 7/MBKM/MiniProyek/CICD/MiniProyekMobile/Include/features/Login/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  I want to login",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test login with valid user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "User input with valid \u003cemail\u003e email",
  "keyword": "When "
});
formatter.step({
  "name": "User input with valid \u003cpassword\u003e password",
  "keyword": "And "
});
formatter.step({
  "name": "User click Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User is Navigate to home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "frizzi12@gmail.com",
        "testing123"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User click login link",
  "keyword": "Given "
});
formatter.match({
  "location": "login.UserNavigatesToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test login with valid user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@login"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "User input with valid frizzi12@gmail.com email",
  "keyword": "When "
});
formatter.match({
  "location": "login.UserEnterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input with valid testing123 password",
  "keyword": "And "
});
formatter.match({
  "location": "login.UserEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "login.ClickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is Navigate to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "login.UserIsNavigateToHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test login with invalid user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "User input with invalid \u003cemail\u003e email",
  "keyword": "When "
});
formatter.step({
  "name": "User input with invalid \u003cpassword\u003e password",
  "keyword": "And "
});
formatter.step({
  "name": "User click Login buttom",
  "keyword": "And "
});
formatter.step({
  "name": "User is Navigate to dasboard page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "manusia",
        "12345"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User click login link",
  "keyword": "Given "
});
formatter.match({
  "location": "login.UserNavigatesToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test login with invalid user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@login"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "User input with invalid manusia email",
  "keyword": "When "
});
formatter.match({
  "location": "login.UserInputWithInvalid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input with invalid 12345 password",
  "keyword": "And "
});
formatter.match({
  "location": "login.UserInputWithInvalidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Login buttom",
  "keyword": "And "
});
formatter.match({
  "location": "login.UserClickLoginButtom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is Navigate to dasboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "login.UserIsNavigateToDasboardPage()"
});
formatter.result({
  "status": "passed"
});
});