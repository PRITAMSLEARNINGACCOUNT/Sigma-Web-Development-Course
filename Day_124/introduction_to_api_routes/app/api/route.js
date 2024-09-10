import { NextResponse } from "next/server";

export async function POST(Request) {
  const { Data } = await Request.json();

  console.log(Data);
  console.log("hello world");

  return NextResponse.json({
    Data: "Data From Client Side - " + Data,
    Data_2: "Data From Server Side",
  });
}
