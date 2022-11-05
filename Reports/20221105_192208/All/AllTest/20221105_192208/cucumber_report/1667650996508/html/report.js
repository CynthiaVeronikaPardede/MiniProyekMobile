$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/SEMESTER 7/MBKM/MiniProyek/CICD/MiniProyekMobile/Include/features/Register/Register.feature");
formatter.feature({
  "name": "Register",
  "description": "  I want to register to the aplication",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@register"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test Register with valid user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "User input valid \u003cfullname\u003e fullname",
  "keyword": "When "
});
formatter.step({
  "name": "User input email \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User enter password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Login button and navigate to dasb page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fullname",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "Bagus Cipta",
        "bagus13@gmail.com",
        "bagus124"
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
  "name": "User navigates to register page",
  "keyword": "Given "
});
formatter.match({
  "location": "register.userClickRegister()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Register with valid user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@register"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "User input valid Bagus Cipta fullname",
  "keyword": "When "
});
formatter.match({
  "location": "register.UserInputValidFullname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input email bagus13@gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "register.UserInputValidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter password bagus124",
  "keyword": "And "
});
formatter.match({
  "location": "register.UserInputValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button and navigate to dasb page",
  "keyword": "Then "
});
formatter.match({
  "location": "register.userClickRegisterButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test Register with invalid user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "User enter valid \u003cfullname\u003e fullname",
  "keyword": "When "
});
formatter.step({
  "name": "User enter invalid email \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User input password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Click Login button and navigate to dasb page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fullname",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "Bagus M",
        "()",
        "bagus17"
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
  "name": "User navigates to register page",
  "keyword": "Given "
});
formatter.match({
  "location": "register.userClickRegister()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Register with invalid user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@register"
    },
    {
      "name": "@register"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "User enter valid Bagus M fullname",
  "keyword": "When "
});
formatter.match({
  "location": "register.UserEnterValidFullname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter invalid email ()",
  "keyword": "And "
});
formatter.match({
  "location": "register.UserNotEnterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password bagus17",
  "keyword": "And "
});
formatter.match({
  "location": "register.UserInputPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Login button and navigate to dasb page",
  "keyword": "Then "
});
formatter.match({
  "location": "register.ClickLoginButtonAndNavigate()"
});
formatter.result({
  "status": "passed"
});
});