import { client } from "../../client";

export default function Home({ products }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-8 pt-28`}
    >
      <h1 className="text-5xl">My webshop</h1>
    </main>
  );
}

export async function getStaticProps(context) {
  const slug = context.params;
  const products = await client.fetch(`*[_type == "product" ]`);
  return {
    props: {
      products,
    },
  };
}
