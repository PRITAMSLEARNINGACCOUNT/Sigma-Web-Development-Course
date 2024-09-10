import Navbar from "@/Components/Navbar";
const page = () => {
  return (
    <>
      <h1>Navbar Is Rendering In The Server Component</h1>
      <Navbar />
      <div>Server Rendering Will Be Done Here</div>
    </>
  );
};

export default page;
