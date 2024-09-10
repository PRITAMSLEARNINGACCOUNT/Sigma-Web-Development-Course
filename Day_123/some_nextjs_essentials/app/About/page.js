import Script from "next/script";
import React from "react";

const Page = () => {
  return <div>
    <Script id="ScriptComponent" strategy="beforeInteractive">
      {`alert("This Is An About Page And This Alert Is Shown By Script Component From A Server Side Component In NextJs");`}
    </Script>
  </div>;
};
export const metadata = {
  title: "About Page On Essentials Of NextJs",
  description: "This Page Only Demonstrates The Script Component In NextJs",
};

export default Page;
 