import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout>
            <div className="min-h-screen text-white px-8 py-10">
                <div className="bg-gray-200 top-24 p-4">
                    <h1>
                        Dari Pena ke Publik: Mengabarkan Dunia, Mencatat Sejarah
                    </h1>
                </div>
                {/* Grid Layout untuk Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {props.news && props.news.length > 0 ? (
                        props.news.map((data, i) => (
                            <div
                                key={i}
                                className="bg-[#f1efea] p-6  shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            >
                                <h2 className="text-2xl font-semibold text-yellow-400">
                                    {data.title}
                                </h2>
                                <p className="text-black mt-2">
                                    {data.description}
                                </p>
                                <p className="text-sm text-black mt-4">
                                    <strong>Kategori:</strong> {data.category}
                                </p>
                                <p className="text-sm text-black">
                                    <strong>Penulis:</strong> {data.author}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-400 text-xl col-span-full">
                            Saat ini belum ada berita.
                        </p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
