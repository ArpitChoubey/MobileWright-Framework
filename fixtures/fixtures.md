# Fixtures in MobileWright

## 1. What is a fixture?

A **fixture** is something the test runner **sets up and injects** into your test. You declare what you need in the test arguments; the runner creates it, passes it in, then cleans up.

```ts
import { test } from '@mobilewright/test';

test('example', async ({ screen, device }) => {
  // screen and device are fixtures — you did not create them
  await screen.getByLabel('test-LOGIN').tap();
});
```

You do **not** write `const screen = ...` yourself. Asking for `{ screen }` is enough.

---

## 2. Why do we need fixtures?

| Without fixtures | With fixtures |
|------------------|---------------|
| Every test manually starts device, launches app, wires helpers | Runner does setup / teardown once per test |
| Easy to forget cleanup | Cleanup runs after the test (even on failure) |
| Setup code copied everywhere | Setup lives in one place; tests stay focused on the scenario |

**In one line:** fixtures give tests ready-made tools (`screen`, `device`, later your own helpers) with automatic lifecycle.

---

## 3. Fixture lifecycle

```
1. Test is about to start
2. Runner creates the fixtures that test asked for
3. Test body runs (uses those fixtures)
4. Test finishes (pass or fail)
5. Runner tears fixtures down / cleans up
```

Example for MobileWright’s `device` / `screen` (conceptually):

```
create device → create screen → run your test → dispose screen/device
```

---

## 4. Built-in fixtures (MobileWright)

These come from `@mobilewright/test`. You get them by listing them in the test callback.

| Fixture | What it gives you |
|---------|-------------------|
| `screen` | Find elements, `fill`, `tap`, assertions on UI |
| `device` | Install / launch / terminate apps, device-level actions |
| Others from config / use | e.g. values tied to `platform`, `bundleId`, `installApps` |

Example:

```ts
test('launch and login UI', async ({ screen, device }) => {
  // device — app / device control
  // screen — UI interaction
  await screen.getByLabel('test-Username').fill('demo_user');
});
```

You only request what you need:

```ts
test('ui only', async ({ screen }) => { /* ... */ });
test('device only', async ({ device }) => { /* ... */ });
```

---

## 5. What is a custom fixture?

A **custom fixture** is one **you** add for this project.

Built-in = MobileWright provides (`screen`, `device`).  
Custom = you extend the runner so tests can also receive your own objects (e.g. `loginPage`, `apiClient`, `testUser`).

**Why add custom fixtures?**

- Avoid repeating the same setup in every test
- Keep tests short and readable
- Centralize setup / teardown for shared helpers

**When to skip them**

- Early learning — built-in `screen` / `device` are enough
- Setup is used in only one or two tests — creating objects inside the test is fine

---

## 6. `fixtures.ts` — the file that defines custom fixtures

This file is **optional**. It exists only when you want custom fixtures.

### Full example

```ts
// fixtures.ts
import { test as base } from '@mobilewright/test';
import { LoginPage } from './pages/LoginPage';
import { CartPage } from './pages/CartPage';

// 1) Declare the shape of YOUR fixtures (for TypeScript)
type MyFixtures = {
  loginPage: LoginPage;
  cartPage: CartPage;
};

// 2) Extend MobileWright's test with those fixtures
export const test = base.extend<MyFixtures>({
  loginPage: async ({ screen }, use) => {
    // setup
    const loginPage = new LoginPage(screen);
    // hand value to the test; wait until test finishes
    await use(loginPage);
    // teardown (optional) — runs after the test
  },

  cartPage: async ({ screen }, use) => {
    await use(new CartPage(screen));
  },
});

// 3) Re-export expect so tests can import both from one place
export { expect } from '@mobilewright/test';
```

### How a test uses it

```ts
// IMPORTANT: import test from fixtures.ts, not from @mobilewright/test
import { test, expect } from '../fixtures';

test('login then open cart', async ({ loginPage, cartPage }) => {
  await loginPage.login('demo_user', 'demo_pass');
  await cartPage.open();
});
```

Built-in fixtures still work:

```ts
test('mixed', async ({ screen, loginPage }) => {
  await loginPage.login('demo_user', 'demo_pass');
  await expect(screen.getByLabel('test-Shop')).toBeVisible();
});
```

---

## 7. Step-by-step: each line in `fixtures.ts`

### Step 1 — `import { test as base } from '@mobilewright/test'`

- Import the original MobileWright `test`
- Rename to `base` because you will build a **new** `test` on top of it
- `base` still has `screen`, `device`, etc.

### Step 2 — `type MyFixtures = { ... }`

- Lists custom fixture **names** and **types**
- Gives autocomplete: `async ({ loginPage }) => ...`
- Does not create anything by itself — types only

### Step 3 — `export const test = base.extend<MyFixtures>({ ... })`

- Means: keep all built-in fixtures **and add** yours
- Export this as `test` so specs import your extended version

### Step 4 — The fixture function

```ts
loginPage: async ({ screen }, use) => {
  await use(new LoginPage(screen));
},
```

| Part | Meaning |
|------|---------|
| `loginPage:` | Name of the custom fixture |
| `{ screen }` | Dependencies — other fixtures this one needs |
| `use` | Function you **must** call to give the value to the test |
| `await use(value)` | Test runs while this is awaiting |
| Code after `use` | Optional cleanup |

### Step 5 — Timeline of `use` (most important idea)

```
fixture function starts
  → do setup (create object, maybe login, etc.)
  → await use(myValue)   ──►  TEST BODY RUNS  ──►
  → do teardown (optional)
fixture function ends
```

`use` is the bridge: **before** = setup, **during** = test, **after** = teardown.

### Step 6 — Multiple custom fixtures

Register each one the same way:

```ts
export const test = base.extend<MyFixtures>({
  loginPage: async ({ screen }, use) => {
    await use(new LoginPage(screen));
  },
  catalogPage: async ({ screen }, use) => {
    await use(new CatalogPage(screen));
  },
  cartPage: async ({ screen, device }, use) => {
    // can depend on more than one built-in fixture
    await use(new CartPage(screen, device));
  },
});
```

A test only creates what it asks for:

```ts
test('only login', async ({ loginPage }) => { /* catalogPage not created */ });
```

---

## 8. Built-in vs custom (quick compare)

| | Built-in | Custom (`fixtures.ts`) |
|--|----------|-------------------------|
| Who defines it | MobileWright | You |
| Examples | `screen`, `device` | `loginPage`, `cartPage` |
| Import `test` from | `@mobilewright/test` | your `fixtures.ts` |
| Required? | Yes (to automate) | No (optional convenience) |

---

## 9. Common patterns

### A) Fixture that only wraps an object

```ts
loginPage: async ({ screen }, use) => {
  await use(new LoginPage(screen));
},
```

### B) Fixture with setup + teardown

```ts
loggedInScreen: async ({ screen }, use) => {
  await screen.getByLabel('test-Username').fill('demo_user');
  await screen.getByLabel('test-Password').fill('demo_pass');
  await screen.getByLabel('test-LOGIN').tap();

  await use(screen); // test starts already logged in

  // teardown example: logout if needed
  // await screen.getByLabel('test-LOGOUT').tap();
},
```

### C) Fixture depending on another custom fixture

```ts
cartPage: async ({ loginPage, screen }, use) => {
  await loginPage.login('demo_user', 'demo_pass');
  await use(new CartPage(screen));
},
```

---

## 10. Rules to remember

1. **Fixtures are injected** — list them in `async ({ ... })`.
2. **`use` must be called** — that is how the value reaches the test.
3. **Custom fixtures require importing your `test`** from `fixtures.ts`.
4. **Custom fixtures are optional** — `new Helper(screen)` inside a test is still valid.
5. **Ask only for what you need** — keeps setup smaller and tests clearer.

---
