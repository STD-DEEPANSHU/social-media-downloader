"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!url) return;

    setLoading(true);
    setData(null);

    try {
      const res = await fetch("/api/download", {
        method: "POST",
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
    <main className="relative flex items-center justify-center min-h-screen px-4">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-30 blur-[120px] rounded-full"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-600 opacity-20 blur-[120px] rounded-full right-0 bottom-0"></div>

      <div className="w-full max-w-2xl text-center z-10">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          ⚡ Downloader
        </motion.h1>

        <p className="text-gray-400 mb-8">
          Download videos from any platform instantly
        </p>

        {/* Input Box */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass p-3 rounded-2xl flex gap-2"
        >
          <input
            type="text"
            placeholder="Paste video URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
          />

          <button
            onClick={handleDownload}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition"
          >
            {loading ? "..." : "Download"}
          </button>
        </motion.div>

        {/* Loader */}
        {loading && (
          <div className="mt-6 animate-spin w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full mx-auto"></div>
        )}

        {/* Result */}
        {data && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-10 p-5 rounded-2xl"
          >
            <img
              src={data.thumbnail}
              alt="thumb"
              className="rounded-xl mb-4 w-full"
            />

            <h2 className="text-lg font-semibold mb-2">
              {data.title}
            </h2>

            <a
              href={data.download}
              target="_blank"
              className="inline-block mt-3 px-4 py-2 bg-green-500 rounded-lg hover:scale-105 transition"
            >
              Download Now
            </a>
          </motion.div>
        )}

      </div>
    </main>
  );
}
