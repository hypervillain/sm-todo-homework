This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


1. How to run the project
2. How to launch jest tests
3. How to launch cypress tests

List of dependencies used (redux, yup, react, next)

The app can:
- create a todo
- set todo to "done" or "not done"
- filter todos by "show all", "show done", "show not done"
- save to FileSystem via an API call (file name: todos.json)
    - expected format of todos is validated server-side
- fetch todos.json on page load

Test frameworks installed are jest and cypress.
You're free to install other tools.