type Props = {
  title: string;
  thumbnail: string;
  download: string;
};

export default function ResultCard({
  title,
  thumbnail,
  download,
}: Props) {
  return (
    <div className="glass mt-10 p-5 rounded-2xl">

      <img
        src={thumbnail}
        alt="thumbnail"
        className="rounded-xl mb-4 w-full"
      />

      <h2 className="text-lg font-semibold mb-2 line-clamp-2">
        {title}
      </h2>

      <a
        href={download}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block mt-3 px-4 py-2 rounded-lg
          bg-green-500 hover:bg-green-600
          transition-all
        "
      >
        Download Now
      </a>
    </div>
  );
}
