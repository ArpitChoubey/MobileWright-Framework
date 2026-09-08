# 📱 MobileWright Framework — TypeScript Mobile Automation

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-4B3F72?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Mobile-Automation-0A66C2?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/MobileWright-Automation-6C5CE7?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Android-Testing-3DDC84?style=for-the-badge&logo=android&logoColor=white"/>
  <img src="https://img.shields.io/badge/iOS-Testing-000000?style=for-the-badge&logo=apple&logoColor=white"/>
  <img src="https://img.shields.io/badge/Playwright--Style-Test%20Automation-2EAD33?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/TypeScript-Automation-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Page%20Object%20Model-POM-FF6F00?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Test%20Data-Driven-8E44AD?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Mobile%20QA-Quality%20Engineering-0078D4?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Git-GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
  <img src="https://img.shields.io/badge/Open%20Source-success?style=for-the-badge"/>
</p>

<p align="center">
  <strong>A structured TypeScript-based mobile automation framework designed around reusable page objects, test data, fixtures and maintainable mobile test scenarios.</strong>
</p>

<p align="center">
  <a href="https://github.com/ArpitChoubey/MobileWright-Framework">📂 GitHub Repository</a>
  •
  <a href="https://www.linkedin.com/in/arpitchoubey/">💼 LinkedIn</a>
  •
  <a href="https://medium.com/@ArpitChoubey9">✍️ Medium</a>
</p>

---

# 🚀 Why This Framework?

Mobile applications introduce a different level of testing complexity.

A test may need to interact with:

- Native mobile controls
- Forms
- Gestures
- Swipes
- Drag interactions
- WebViews
- Authentication flows
- Application navigation
- Test data
- Reusable page components

A maintainable automation solution therefore needs more than individual test scripts.

This project focuses on building a **structured automation framework** where tests, page objects, fixtures and test data have clearly defined responsibilities.

```text
                 Mobile Application
                         │
                         ▼
                ┌─────────────────┐
                │  Test Scenarios  │
                └────────┬────────┘
                         │
                         ▼
                ┌─────────────────┐
                │   Page Objects   │
                └────────┬────────┘
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
          Fixtures    TestData    App
              │          │          │
              └──────────┼──────────┘
                         ▼
                Mobile Automation
                         │
                         ▼
                   Test Results                        







🎯 Project Objectives

The framework is designed around several important Quality Engineering principles:

♻️ Reusable automation components
🧩 Page Object Model architecture
🧪 Maintainable test scenarios
📊 Externalized test data
🧱 Fixture-based test setup
📱 Mobile application coverage
🔍 Clear separation between tests and implementation
📈 Scalable automation structure
🔧 TypeScript-based development
🎯 Readable and maintainable test code

The goal is simple:

Build mobile automation that remains maintainable as application coverage grows.







🏗️ Framework Architecture
                         ┌──────────────────────┐
                         │   Mobile Application │
                         └───────────┬──────────┘
                                     │
                                     ▼
                         ┌──────────────────────┐
                         │    Test Scenarios    │
                         │       tests/         │
                         └───────────┬──────────┘
                                     │
                                     ▼
                         ┌──────────────────────┐
                         │     Page Objects     │
                         │        pages/        │
                         └───────────┬──────────┘
                                     │
                    ┌────────────────┼────────────────┐
                    │                │                │
                    ▼                ▼                ▼
             ┌────────────┐   ┌────────────┐   ┌────────────┐
             │  Fixtures  │   │  TestData  │   │ Application│
             │            │   │            │   │    App     │
             └────────────┘   └────────────┘   └────────────┘
                    │                │                │
                    └────────────────┼────────────────┘
                                     ▼
                         ┌──────────────────────┐
                         │ Mobile Test Execution│
                         └───────────┬──────────┘
                                     │
                                     ▼
                         ┌──────────────────────┐
                         │   Results / Reports  │














📂 Repository Structure
MobileWright-Framework/
│
├── TestData/
│   ├── app-inventory.md
│   ├── forms.data.json
│   ├── login.data.json
│   └── test-cases.csv
│
├── app/
│   └── Android-NativeDemoApp-0.4.0...
│
├── fixtures/
│   └── fixtures.md
│
├── pages/
│   ├── .gitignore
│   ├── base.page.ts
│   ├── drag.page.ts
│   ├── forms.page.ts
│   ├── home.page.ts
│   ├── login.page.ts
│   ├── swipe.page.ts
│   └── webview.page.ts
│
├── tests/
│   ├── drag.spec.ts
│   ├── forms.spec.ts
│   ├── home.spec.ts
│   ├── login.spec.ts
│   ├── swipe.spec.ts
│   └── webview.spec.ts
│
├── mobilewright.config.ts
├── package.json
└── package-lock.json
🧩 Framework Components
📱 Application Layer

The repository includes an Android native demo application under:

app/

This provides an application target for exercising mobile automation scenarios.

📄 Page Object Model

The framework separates application interaction logic from test scenarios through page objects.

pages/
│
├── base.page.ts
├── login.page.ts
├── home.page.ts
├── forms.page.ts
├── drag.page.ts
├── swipe.page.ts
└── webview.page.ts
Why Page Objects?

Instead of putting all locators and interaction logic directly inside tests:

Test
  ↓
Page Object
  ↓
Mobile Application

This provides a cleaner separation of concerns and makes automation easier to maintain.

🧪 Test Automation Coverage

The repository contains dedicated test scenarios for:

🔐 Login
tests/login.spec.ts

Authentication and login-related automation scenarios.

🏠 Home
tests/home.spec.ts

Home/application navigation scenarios.

📝 Forms
tests/forms.spec.ts

Form interaction and validation scenarios.

🖱️ Drag
tests/drag.spec.ts

Drag-oriented mobile interaction scenarios.

👆 Swipe
tests/swipe.spec.ts

Swipe and gesture-oriented automation.

🌐 WebView
tests/webview.spec.ts

WebView interaction scenarios within the mobile automation flow.

🧠 Test Data Management

The framework maintains test data separately from automation implementation.

TestData/
│
├── app-inventory.md
├── forms.data.json
├── login.data.json
└── test-cases.csv

This approach supports:

Reusable test data
Cleaner test scripts
Easier data maintenance
Separation of test data and implementation
Data-driven testing strategies
🧱 Fixtures

The framework also contains:

fixtures/
└── fixtures.md

Fixtures provide a foundation for organizing reusable test setup and shared testing dependencies.

The architectural intention is:

Test Scenario
      ↓
Fixture / Setup
      ↓
Page Object
      ↓
Application Interaction
      ↓
Validation
📱 Mobile Testing Areas

The current framework structure provides coverage across several important mobile automation areas:

🔐 Authentication
🏠 Application navigation
📝 Forms
👆 Swipe interactions
🖱️ Drag interactions
🌐 WebView testing
🧪 Test data management
🧩 Reusable page objects
🧱 Fixtures
📊 Test scenario organization
🔍 Quality Engineering Approach

This project is built around an important principle:

Automation should be designed for maintainability, not simply execution.

A scalable automation framework should make it easy for a QA engineer to answer:

Where does this test belong?
Where is the locator maintained?
Where is the test data?
How is setup handled?
Can this interaction be reused?
Can another engineer understand the test quickly?
Can the framework grow without duplicating logic?

The separation of:

Tests
+
Pages
+
Fixtures
+
Test Data
+
Application

helps establish that foundation.

🛠️ Technology Stack
<p align="center"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/MobileWright-Automation-6C5CE7?style=flat-square"/> <img src="https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=white"/> <img src="https://img.shields.io/badge/Mobile%20Testing-0A66C2?style=flat-square"/> <img src="https://img.shields.io/badge/Page%20Object%20Model-FF6F00?style=flat-square"/> <img src="https://img.shields.io/badge/Fixtures-8E44AD?style=flat-square"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white"/> </p>
Core Areas
TypeScript
MobileWright
Mobile Automation
Android Automation
Page Object Model
Fixtures
Test Data
WebView Automation
Gesture Automation
Functional Testing
Quality Engineering
Git & GitHub
▶️ Getting Started
1️⃣ Clone the Repository
git clone https://github.com/ArpitChoubey/MobileWright-Framework.git

Navigate into the project:

cd MobileWright-Framework
2️⃣ Install Dependencies
npm install
3️⃣ Review Configuration

The primary configuration file is:

mobilewright.config.ts

Review the configuration before executing the mobile test suite.

4️⃣ Execute Tests

Use the project's configured test commands from:

package.json

Example:

npm test

The exact execution command should follow the scripts configured in the repository's package.json.

📊 Automation Strategy

The framework follows a layered approach:

             Test Layer
                 │
                 ▼
          Scenario Definition
                 │
                 ▼
          Page Object Layer
                 │
                 ▼
         Fixture / Test Data
                 │
                 ▼
         Mobile Interaction
                 │
                 ▼
             Validation

This design helps keep test intent separate from implementation details.

🎯 What This Repository Demonstrates

For QA and SDET roles, the project demonstrates experience with:

Automation Engineering
Mobile test automation
TypeScript automation
Reusable automation architecture
Page Object Model
Test organization
Test data management
Fixtures
Mobile Quality Engineering
Android application testing
Form interactions
Login workflows
Navigation
Gesture-oriented testing
Swipe interactions
Drag interactions
WebView scenarios
Framework Engineering
Separation of concerns
Reusable components
Maintainable test architecture
Structured repository organization
Configuration management
Test data externalization
👔 Why This Matters to QA Leaders

A mobile automation framework should not be evaluated only by the number of scripts it contains.

From an engineering leadership perspective, maintainability matters.

This repository demonstrates a structure that separates:

Business Scenario
      ↓
Automation Test
      ↓
Page Object
      ↓
Reusable Component
      ↓
Application

That separation can make future expansion easier when additional mobile flows, screens and test data need to be introduced.

🎯 Ideal For

This project is relevant to:

QA Automation Engineers
SDETs
Mobile QA Engineers
Quality Engineers
Automation Engineers
QA Leads
QA Managers
Test Automation Architects
Engineering Managers
Hiring Managers evaluating automation engineering skills
📈 Scalability Direction

As the framework grows, potential engineering directions include:

CI/CD integration
Cross-platform execution
Expanded Android coverage
iOS execution
Parallel test execution
Advanced reporting
Screenshot and video capture
Environment configuration
API integration
Database validation
Device matrix execution
Cloud device execution
Enhanced test data management
Automation observability
🧪 Quality Engineering Mindset

The purpose of automation is not:

❌ Write as many scripts as possible

It is:

✅ Create reliable
   maintainable
   reusable
   scalable
   quality feedback

A good automation framework should help the entire QA organization move faster without sacrificing maintainability.

🔗 Repository
📂 GitHub

MobileWright Framework

https://github.com/ArpitChoubey/MobileWright-Framework

👨‍💻 About Me
Arpit Choubey

SDET | QA Automation Engineer | Quality Engineering

I focus on building practical automation solutions across UI, API, mobile and AI-assisted testing.

Areas of Focus
Cypress
Selenium
Playwright
Mobile Automation
MobileWright
TypeScript
Java
Python
API Testing
UI Automation
Accessibility Testing
AI-Assisted Testing
Agentic AI
CI/CD
Quality Engineering
Automation Framework Development

I enjoy exploring modern approaches to test automation and sharing practical QA engineering knowledge with the testing community.

🔗 Connect With Me
💻 GitHub

https://github.com/ArpitChoubey

💼 LinkedIn

https://www.linkedin.com/in/arpitchoubey/

✍️ Medium

https://medium.com/@ArpitChoubey9

I regularly share practical content around:

QA Automation • Selenium • Cypress • Playwright • Mobile Testing • API Testing • AI Testing • Agentic AI • Quality Engineering

⭐ Support

If you find this project useful:

⭐ Star the repository
🍴 Fork the project
💬 Share feedback
🐛 Report issues
🔗 Share it with the QA community
🤝 Connect with me on LinkedIn

Your feedback helps improve the framework and encourages continued exploration of modern Quality Engineering practices.

💬 Final Thought

Mobile automation is not just about interacting with a screen.

A strong automation solution needs:

Good Architecture
      +
Reusable Components
      +
Reliable Test Data
      +
Maintainable Tests
      +
Clear Validation
      =
Scalable Mobile Quality Engineering

This project represents my approach to building that foundation with TypeScript, MobileWright, Page Objects, Fixtures and structured mobile test automation.

The goal isn't simply to automate mobile tests.

The goal is to engineer a framework that makes mobile quality easier to scale. 🚀
