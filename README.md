11:20 - 
reference: https://github.com/iamshaunjp/next-netlify-identity/tree/lesson-1-starter/pages


npx create-next-app  -e https://github.com/iamshaunjp/next-netlify-identity/tree/lesson-1-starter

npx create-next-app next_tutu_gamming_vibes

npm run dev
npm install netlify-identity-widget # install package
# deployment with github


# protecting pages <access to only users logged in>
export async function getServerSideProps(){
    // check auth status of user
    // fetch & return dataif they are logged in
    // Return a redirect if they are loggeed out
// but currently you cant access user id by getServerSideProp
alternative: betlify serverless Functions

npm install npm-cli // to run functions locally
// comment line {authReady && in Navbar.js
netlify dev // to run functions locally



for private community
# identity -> registration -> invite only <allow registration of invited users only>
# identity -> registratin -> external  providers -> for google, facebook, twitter, github, gitlab, bitbucket













This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
