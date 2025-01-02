```javascript
// pages/index.js
export async function getServerSideProps(context) {
  // Fetch data from an external API
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  // Return the data as props
  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a paragraph of text: {data.someProperty}</p>
    </div>
  );
}
```
This corrected version explicitly returns the fetched data as props, resolving the error.  Ensure that the return statement is present and formatted correctly in data fetching functions.