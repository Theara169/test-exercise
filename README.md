# JavaScript Exercises

A beginner-friendly JavaScript practice project with **10 coding exercises** and **automated tests using Jest**.

The goal of this project is to practice JavaScript problem-solving while learning how automated testing and CI (Continuous Integration) work.

---

## 📚 Exercises

There are **10 exercises**, and each exercise has **3 test cases**.

| #  | Exercise            | Concept          |
| -- | ------------------- | ---------------- |
| 01 | Add Two Numbers     | Functions        |
| 02 | Find Largest Number | Loops            |
| 03 | Reverse String      | Strings          |
| 04 | Check Even Number   | Conditions       |
| 05 | Count Vowels        | Strings + Loops  |
| 06 | Sum Array           | Arrays + Loops   |
| 07 | Remove Duplicates   | Arrays           |
| 08 | Find Longest Word   | Arrays + Strings |
| 09 | Count Occurrences   | Objects          |
| 10 | Check Palindrome    | Strings + Logic  |

### Total

```text
10 Exercises
3 Cases per Exercise
30 Test Cases
```

---

## 📁 Project Structure

```text
javascript-exercises/
│
├── exercises/
│   ├── exercise01.js
│   ├── exercise02.js
│   ├── exercise03.js
│   ├── exercise04.js
│   ├── exercise05.js
│   ├── exercise06.js
│   ├── exercise07.js
│   ├── exercise08.js
│   ├── exercise09.js
│   └── exercise10.js
│
├── tests/
│   ├── exercise01.test.js
│   ├── exercise02.test.js
│   ├── exercise03.test.js
│   ├── exercise04.test.js
│   ├── exercise05.test.js
│   ├── exercise06.test.js
│   ├── exercise07.test.js
│   ├── exercise08.test.js
│   ├── exercise09.test.js
│   └── exercise10.test.js
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Enter the project

```bash
cd javascript-exercises
```

### 3. Install dependencies

```bash
npm install
```

---

## ✏️ Solve the Exercises

Open the `exercises` folder.

For example:

```text
exercises/
└── exercise01.js
```

You will see:

```js
function add(a, b) {
    // TODO: Write your solution
}

module.exports = add;
```

Your job is to write the solution.

For example:

```js
function add(a, b) {
    return a + b;
}

module.exports = add;
```

---

## 🧪 Run the Tests

After writing your solution, run:

```bash
npm test
```

Jest will automatically run all **30 test cases**.

Example:

```text
PASS tests/exercise01.test.js
  ✓ Case 1: 2 + 3 = 5
  ✓ Case 2: 10 + 20 = 30
  ✓ Case 3: -5 + 10 = 5

PASS tests/exercise02.test.js
  ✓ Case 1: [1, 5, 3] → 5
  ✓ Case 2: [10, 20, 7] → 20
  ✓ Case 3: [-5, -2, -10] → -2
```

At the bottom, Jest will show something like:

```text
Test Suites: 10 passed, 10 total
Tests:       30 passed, 30 total
```

---

## ❌ When a Test Fails

For example:

```text
PASS tests/exercise01.test.js

FAIL tests/exercise02.test.js
  ✓ Case 1
  ✓ Case 2
  ✕ Case 3

Tests: 1 failed, 29 passed, 30 total
```

This means:

```text
29 / 30 cases passed
```

Go back to the corresponding exercise and fix your solution.

Then run:

```bash
npm test
```

again.

---

## ⚠️ Do Not Modify the Tests

The `tests` folder contains the automated answer checker.

You should normally **only modify files inside**:

```text
exercises/
```

Do not change the expected answers in the test files just to make your solution pass.

The purpose is to test your actual JavaScript solution.

---

## 🔄 Recommended Workflow

Use this workflow for every exercise:

```text
Read the problem
      ↓
Write your solution
      ↓
Run npm test
      ↓
   ┌───────┐
   │ PASS? │
   └───────┘
    ↓     ↓
   YES    NO
    ↓     ↓
 Next    Fix code
 exercise   ↓
          npm test
```

---

## 🤖 CI — Continuous Integration

This project also uses **GitHub Actions** for CI.

The workflow is located at:

```text
.github/workflows/ci.yml
```

When you push your code to GitHub:

```bash
git add .
git commit -m "solve exercises"
git push
```

GitHub Actions automatically:

```text
Git Push
   ↓
GitHub Actions
   ↓
Create test environment
   ↓
Install Node.js
   ↓
Install dependencies
   ↓
Run tests
   ↓
PASS ✅ / FAIL ❌
```

This means your project is automatically checked after you push your code.

---

## 💡 What You Are Learning

This project is not only about solving JavaScript problems.

You are also learning:

* JavaScript fundamentals
* Functions
* Conditions
* Loops
* Arrays
* Strings
* Objects
* Problem solving
* Automated testing
* Jest
* Git
* GitHub
* GitHub Actions
* Continuous Integration (CI)

---

## 🎯 Goal

The main goal is:

> **Write → Test → Fix → Test Again → Push → CI**

Don't focus only on making the tests pass.

Try to understand **why your solution works**.

---

## 📈 Progress

You can track your progress here:

```text
[ ] Exercise 01 — Add Two Numbers
[ ] Exercise 02 — Find Largest Number
[ ] Exercise 03 — Reverse String
[ ] Exercise 04 — Check Even Number
[ ] Exercise 05 — Count Vowels
[ ] Exercise 06 — Sum Array
[ ] Exercise 07 — Remove Duplicates
[ ] Exercise 08 — Find Longest Word
[ ] Exercise 09 — Count Occurrences
[ ] Exercise 10 — Check Palindrome
```

When you finish an exercise:

```text
[x] Exercise 01 — Add Two Numbers
```

---

## 🏆 Challenge

Try to achieve:

```text
30 / 30 test cases passed
```

Then push your code to GitHub and make sure **GitHub Actions also passes successfully**.

```text
Local Tests       → 30 / 30 ✅
        ↓
      Push
        ↓
GitHub Actions    → PASS ✅
```

**Happy coding! 🚀**
