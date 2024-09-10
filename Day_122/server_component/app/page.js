"use client";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [Count, setCount] = useState(0);
  return (
    <div>
      <Head>
        <title>Client Component</title>
      </Head>
      Count Value - {Count}
      <br />
      <button onClick={() => setCount(Count + 1)}>Increase Count</button>
    </div>
  );
}
