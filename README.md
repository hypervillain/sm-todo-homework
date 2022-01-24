This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


1. How to run the project:
    'npm run dev`

2. How to launch jest tests:
    `npm test`
    
3. How to launch cypress tests:
    needs two terminals
    one running the app and the other running `npm run cypress:open`
    
List of dependencies used (redux, yup, react, next)

The app can:
- create a todo
- toggle status: set todo to "done" or "not done"
- filter todos by "show all", "show done", "show not done"
- save to FileSystem via an API call (file name: todos.json)
    - expected format of todos is validated server-side
- fetch todos.json on page load
- delete a todo

Test frameworks installed are jest and cypress.
You're free to install other tools.

Action for QA engineer:
- Design & create an E2E test using Cypress.
- Design & create an Integration test using Jest.
