"use client"; // To mark this as a client-side component
import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import Image from 'next/image'; // For logo image
import logo from '/images/logo.png'
import IonGoogle from '@/public/icons/google';
import IconFacebook from '@/public/icons/facebook';


export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ email: '', password: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form validation and submission logic
        if (!email || !password) {
            setError({
                email: !email ? 'Email is required' : '',
                password: !password ? 'Password is required' : '',
            });
        } else {
            setError({ email: '', password: '' });
            // Perform sign-in logic
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Right side: Logo */}
            <div className="flex items-center justify-center w-1/2 bg-[#6DB33F]">
                <Image
                    src="/images/logo.png" // The image is inside the public folder
                    alt="Logo"
                    width={300}
                    height={300}
                />

            </div>

            {/* Left side: Form */}
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg ">
                {/* Title */}
                <Typography variant="h4" className="!text-[#6DB33F] !text-[40px] !font-medium mb-8">
                    Sign in
                </Typography>

                {/* Social Login */}
                <div className="space-y-4 !w-full">
                    <Button variant="outlined" className='!w-full !text-[18px] text-[#324C5B] border-[#C4CFD7] !rounded-full !font-normal !capitalize' >
                        <div className='flex justify-around gap-2 !items-center '>
                            <IonGoogle />  Continue with Google
                        </div>
                    </Button>
                    <Button variant="outlined" className='!w-full !text-[18px] text-[#324C5B] border-[#C4CFD7] !rounded-full !font-normal !capitalize' >
                        <div className='flex justify-around gap-2 !items-center '>
                            <IconFacebook /> Continue with Facebook
                        </div>
                    </Button>
                </div>

                <div className="flex items-center justify-between my-4">
                    <hr className="flex-grow border-t border-gray-300" />
                    <span className="px-4 text-gray-500">OR</span>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <TextField
                            label="Email Address"
                            variant="outlined"
                            fullWidth
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={!!error.email}
                            helperText={error.email}
                            className="text-sm"
                        />
                        <TextField
                            label="Your Password"
                            variant="outlined"
                            fullWidth
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={!!error.password}
                            helperText={error.password}
                            className="text-sm"
                        />
                    </div>

                    <div className="flex justify-between mt-2 text-sm text-blue-500">
                        <a href="#" className="hover:underline">
                            Forgot your password?
                        </a>
                        <a href="#" className="hover:underline">
                            Sign up
                        </a>
                    </div>

                    {/* Sign-in Button */}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="mt-6 bg-green-500 hover:bg-green-600"
                    >
                        Sign in
                    </Button>
                </form>
            </div>

        </div>
    );
}
