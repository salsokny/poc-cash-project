"use client";

import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import Loading from "../components/Loading";
import "../app/globals.css";
import SignIn from "./sign-in/page";

import { useRouter } from 'next/navigation';

export default function Home({ Component, pageProps }: AppProps) {

    const router = useRouter();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            router.push('/sign-in');
        }, 2000); // Show loading screen for 2 seconds

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

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
