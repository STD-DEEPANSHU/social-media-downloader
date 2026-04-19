"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!url) return alert("Enter URL");

    setLoading(true);

    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4">

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 blur-[120px] opacity-30 rounded-full"></div>

      <div className="max-w-2xl w-full text-center z-10">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4"
        >
          ⚡ Social Downloader
        </motion.h1>

        <p className="text-gray-400 mb-8">
          Download videos instantly from any platform
        </p>

        {/* Input */}
        <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 flex gap-2">
          <input
            type="text"
            placeholder="Paste video URL..."
            className="flex-1 bg-transparent outline-none text-white"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <button
            onClick={handleDownload}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
          >
            {loading ? "..." : "Download"}
          </button>
        </div>

        {/* Result */}
        {data && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 bg-white/10 p-5 rounded-2xl border border-white/20"
          >
            <img
              src={data.thumbnail}
              alt="thumb"
              className="rounded-xl mb-4"
            />

            <h2 className="text-lg font-semibold mb-2">
              {data.title}
            </h2>

            <a
              href={data.download}
              className="inline-block mt-3 bg-green-500 px-4 py-2 rounded-lg hover:scale-105 transition"
            >
              Download Now
            </a>
          </motion.div>
        )}

      </div>
    </main>
  );
}
