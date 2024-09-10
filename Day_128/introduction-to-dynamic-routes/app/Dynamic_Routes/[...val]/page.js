"use client";
export default function Page(params) {
  console.log(params);

  return (
    <p>
      Slug Is After Dynamic_Route Endpoint:{" "}
      {params.params.val.map((e) => {
        return e + ",";
      })}
    </p>
  );
}
