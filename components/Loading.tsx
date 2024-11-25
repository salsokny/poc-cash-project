// src/components/Loading.tsx
import Image from 'next/image';
import React from 'react';

const Loading = () => {
    return (
        <div className="w-screen h-screen bg-[#6DB33F] flex items-center justify-center">
            <Image
                src="/images/logo.png" // The image is inside the public folder
                alt="Logo"
                width={200}
                height={200}
                priority // Optional: Ensure the image is loaded quickly
                
                className="animate-zoom"
            />
        </div>
    );
};

export default Loading;
