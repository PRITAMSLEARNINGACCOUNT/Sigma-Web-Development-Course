
export default function Home() {
  async function RunFunc(){
    const res = await fetch("http://localhost:3000/api",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({Data:" This Is A Client Side Data"})});
    const data = await res.json();
    return data.Data + "," + data.Data_2
  }
  return (
    <div>
      <h1 className="text-3xl text-center p-5">Demonstrating Api Routes In NextJs</h1>
      <p className="text-3xl text-center p-5">The Response From The API Route Is: - {RunFunc()}</p>
    </div>
  );
}
