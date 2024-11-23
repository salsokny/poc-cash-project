// "use client";

// import Image from "next/image";
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router'; // Import useRouter from next/router
// import type { AppProps } from 'next/app';
// import Loading from '../components/Loading';
// import '../app/globals.css';

// export default function Home({ Component, pageProps }: AppProps) {
//     const [loading, setLoading] = useState(true);
//     const router = useRouter();  // Initialize the router

//     useEffect(() => {
//         // Simulate a delay for the loading screen
//         const timer = setTimeout(() => {
//             setLoading(false);
//             // router.push('/home');  // Redirect to /home after loading
//         }, 2000); // Show loading screen for 2 seconds

//         return () => clearTimeout(timer); // Cleanup on unmount
//     });   // [router] Add router as a dependency for useEffect

//     return (
//         <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//             {loading ? <Loading /> : ":Hellloo"} {/* Show loading until the state changes */}
//         </div>
//     );
// }


// "use client"; should be the first line in the file to mark this as a client component
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const [loading, setLoading] = useState(true);
    // const router = useRouter(); // Safe to use now

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            // router.push('/home'); // Redirect after loading
        }, 2000); // Show loading for 2 seconds

        return () => clearTimeout(timer); // [router] Cleanup on unmount
    }, );

    return (
        <div>
            {loading ? <p>Loading...</p> : <p>Content loaded!</p>}
        </div>
    );
}
