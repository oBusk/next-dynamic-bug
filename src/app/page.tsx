import { fakeDataFetch } from "^/fake-data-fetch";
import Component from "./Component";

export function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  return {
    title: `Page ${id}`,
    description: `Page ${id} description`,
    keywords: `page, ${id}`,
    robots: `index, follow`,
  };
}

// Try to ensure page is rendering in static mode
export const dynamic = "error";
// Behaviour is the same with 
// export const dynamic = "force-static";

export default async function TestPage({
  searchParams,
}: {
  searchParams: any;
}) {
  // Access to searchParams should cause error due to dynamic = "error"
  searchParams.ACCESS_TO_CAUESE_ERROR;

  // Fetch some data to see difference between dynamic and static
  const timestamp = await fakeDataFetch();

  return (
    <div>
      <h1>Page</h1>
      <p>timestamp: {timestamp}</p>
      {/* @ts-expect-error React Server Component */}
      <Component />
    </div>
  );
}
