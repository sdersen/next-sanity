import Link from "next/link";
import { client } from "../../../client";

export default function Slug({ data }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-8 pt-28`}
    >
      <h1 className="text-5xl">My amazing product</h1>
    </main>
  );
}

export const getServerSideProps = async (ctx) => {
  const slug = ctx.query.slug;
  const data = await client.fetch(
    `*[_type == "product" && slug.current =='${slug}']`
  );
  return { props: { data } };
};
