"use client";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const AccessiblePage = () => {


    useEffect(() => {

        const user = localStorage.getItem("user");
        if (!user) {
            window.location.href = "/login";
            return;
        }

    })


    return (
        <div className="flex flex-col space-y-10 items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                This page is accessible for users.
            </h1>
            <Link href="/admin">

                <Button  >Admin dashboard
                    <MoveRight className="w-5 h-5" />
                </Button>

            </Link>
        </div>
    );
};

export default AccessiblePage;