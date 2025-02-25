import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function DashboardLayout({ header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const categories = [
        { name: "Olahraga", url: "/sport" },
        { name: "Politik", url: "/politics" },
        { name: "Pemilu", url: "/pemilu" },
        { name: "Ekonomi", url: "/economics" },
        { name: "Lingkungan", url: "/environtment" },
        { name: "Sains", url: "/sains" },
        { name: "Tokoh", url: "/tokoh" },
        { name: "News Letter", url: "/newsletter" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <nav className="fixed w-full border-b bg-white">
                <div className="container mx-auto flex h-16 items-center justify-between px-6">
                    {/* Logo + Navigation */}
                    <div className="flex">
                        <div className="flex shrink-0 items-center">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                            </Link>
                        </div>

                        <div className="hidden space-x-2 sm:-my-px sm:ms-10 sm:flex">
                            <NavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Berita Jaman Doloe
                            </NavLink>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="sm:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    !showingNavigationDropdown
                                )
                            }
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "block"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "block"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Login & Register Buttons */}
                    <div className="hidden sm:flex space-x-4">
                        <a
                            href="/login"
                            className="px-4 py-2 text-sm font-medium text-gray-700 transition bg-gray-200  hover:bg-gray-300"
                        >
                            Login
                        </a>
                        <a
                            href="/register"
                            className="px-4 py-2 text-sm font-medium text-white transition bg-[#B22222]  hover:bg-blue-700"
                        >
                            Register
                        </a>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {showingNavigationDropdown && (
                    <div className="sm:hidden">
                        <div className="space-y-1 pb-3 pt-2">
                            <ResponsiveNavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Dashboard
                            </ResponsiveNavLink>
                        </div>

                        <div className="flex flex-col items-center space-y-2 pb-4">
                            <a
                                href="/login"
                                className="w-full max-w-xs px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                            >
                                Login
                            </a>
                            <a
                                href="/register"
                                className="w-full max-w-xs px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                            >
                                Register
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            <div className="fixed flex w-full top-16 px-8  justify-evenly bg-gray-200">
                {categories.map((category) => (
                    <div key={category.url} className="p-2">
                        <a href={category.url} className="text-gray-500">
                            {category.name}
                        </a>
                    </div>
                ))}
            </div>

            <main className="">{children}</main>
        </div>
    );
}
