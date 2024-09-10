import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-center font-bold p-5">
        Demonstrating Dynamic Routes In NextJs
      </h1>
      <p className="text-center">
        This is the home page. Click on the links below to see the dynamic
        routes in action.
      </p>
      <div className="flex gap-3">

      <Link href="/Dynamic_Route/hello">Dynamic_Route/hello</Link>
      <Link href="/Dynamic_Routes/hello/hiii">Dynamic_Routes/hello/hii</Link>
      </div>
    </div>
  );
}
