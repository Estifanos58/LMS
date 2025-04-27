// app/sign-in/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useSignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);
  const {signIn , setActive} = useSignIn();
  const {isLoaded, isSignedIn, user} = useUser()
  
  useEffect(()=>{
    const role = user?.publicMetadata.role;
    console.log("role: ",role)

    if(role == "admin"){
        router.push("/admin")
    }
    
  },[user, router])
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;
    try {
        setLoading(true)
        if (!signIn) {
            setLoading(false);
            setError("Sign-in functionality is unavailable.");
            return;
        }

      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        setLoading(false)
        await setActive({ session: result.createdSessionId });
        // router.push("/admin"); // Redirect after sign in
      } else {
        setLoading(false)
        alert("Error happend")
        console.log(result);
      }
    } catch (err: any) {
        setLoading(false)
      console.error(err.errors);
      setError(err.errors[0]?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-white px-10 py-8 shadow-md">
       <h1 className="text-2xl font-bold">SchoolLama</h1>
       <h4 className="my-2 text-sm text-gray-400">Sign in to your account</h4>

        {error && (
          <div className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter your username or email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {isLoading? "Loading...": "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
