import Image from "next/image";

const page = () => {
  return (
    <>
      <div>
        Demonstrating Image Component Which Resolves The Problem Of Image
        Optimization In Webpages
      </div>

      <Image
        src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
        alt="NextJs Image Component"
        width={200}
        height={200}
      ></Image>
    </>
  );
};
export const metadata = {
  title: "Image Component On Essentials Of NextJs",
  description: "This Page Only Demonstrates The Image Component In NextJs",
};

export default page;
