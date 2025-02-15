import React from "react";
import { Link, Head } from "@inertiajs/react";

export default function Homepage(props) {
    return (
        <div className="min-h-screen bg-neutral-800 text-white px-8 py-10">
            <Head title={props.title} />

            {/* Judul & Deskripsi */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">{props.title}</h1>
                <p className="text-lg text-gray-300 mt-2">
                    {props.description}
                </p>
            </div>

            {/* Grid Layout untuk Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {props.news && props.news.length > 0 ? (
                    props.news.map((data, i) => (
                        <div
                            key={i}
                            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <h2 className="text-2xl font-semibold text-yellow-400">
                                {data.title}
                            </h2>
                            <p className="text-gray-300 mt-2">
                                {data.description}
                            </p>
                            <p className="text-sm text-gray-400 mt-4">
                                <strong>Kategori:</strong> {data.category}
                            </p>
                            <p className="text-sm text-gray-400">
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
    );
}
