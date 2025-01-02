# Next.js Missing Return Statement Bug

This repository demonstrates a common error in Next.js applications involving missing `return` statements within `getServerSideProps` or `getStaticProps` functions.  Forgetting to return the necessary props object results in a runtime error.

## Bug Description

A missing `return` statement within data fetching functions like `getServerSideProps` or `getStaticProps` prevents Next.js from properly hydrating the page. This leads to errors during runtime.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the error in the browser's console.