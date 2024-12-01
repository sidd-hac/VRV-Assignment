
"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [message , setMessage] = useState<string | null>(null);


    const handleSubmit = async (e :React.FormEvent) => {
        e.preventDefault();
        setMessage(null);

        console.log(email, name, password);
    
        try {
        
          const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, name, password})
          
        });
        
    
        console.log(response);
          if (!response.ok) {
            throw new Error('Failed to create user');
          }
          
    
          const data = await response.json();
          setMessage(`User ${data.name} added successfully!`);
        //   setEmail('');
        //   setPassword('');
        //   setName('');
        } catch (error: unknown ) {
            if (error instanceof Error) {
                setMessage(error.message);
              } else {
                setMessage('An unexpected error occurred.');
              }
        }
      };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4"
            >
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center">
                    Register
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
                    <label
                        htmlFor="name"
                        className=" mt-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Name
                    </label>
                    <input
                        type="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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

                <p className="text-red-500 font-bold text-sm" >{message}</p>
            </form>
        </div>
    );
};

export default RegisterForm;


