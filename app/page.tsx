"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
// import type { AppProps } from "next/app";
import Loading from "../components/Loading";
import "../app/globals.css";
import SignIn from "./sign-in/page";

export default function Home() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      router.push("/sign-in");
    }, 2000); // Show loading screen for 2 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [router]); // Add 'router' to the dependency array

    
  return (
    <div className="w-full h-full">
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <SignIn />
        </div>
      )}
    </div>
  );
}
