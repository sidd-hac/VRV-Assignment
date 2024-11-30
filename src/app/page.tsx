
"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4"
            >
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center">
                    Login
                </h1>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 dark:text-gray-200 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 dark:text-gray-200 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                
                <Button  className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Submit</Button>
            </form>
        </div>
    );
};

export default LoginForm;


