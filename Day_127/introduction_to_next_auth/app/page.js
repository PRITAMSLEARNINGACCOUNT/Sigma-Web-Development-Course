"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <h1 className="text-center text-2xl p-5">
        Welcome To The Demonstration Of NextAuth/Auth.js
      </h1>
      <div className="flex flex-col text-xl justify-center">
        {session ? (
          <>
            <p className="text-center">Signed in as {session.user.email}</p>
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <>
            <p className="text-center">Not signed in</p>
            <button onClick={() => signIn("github")}>
              Sign in (Alternative Way)
            </button>
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
      </div>
    </div>
  );
}
