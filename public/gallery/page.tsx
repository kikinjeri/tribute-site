import Image from "next/image";

const photos = [
  { src: "/gallery/1.jpg", alt: "George Githii" },
  { src: "/gallery/2.jpg", alt: "George Githii" },
  { src: "/gallery/3.jpg", alt: "George Githii" },
  { src: "/gallery/4.jpg", alt: "George Githii" },
  { src: "/gallery/5.jpg", alt: "George Githii" },
];

export default function GalleryPage() {
  return (
    <section className="py-32 fade-in">
      <h1 className="font-display text-4xl md:text-6xl font-bold text-center tracking-tight">
        Photo Gallery
      </h1>

      <p className="mt-4 text-center text-navy-200 max-w-xl mx-auto">
        A curated collection of moments that reflect his strength, warmth, and
        legacy.
      </p>

      <div className="mt-20 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="break-inside-avoid overflow-hidden rounded-xl shadow-lg hover:opacity-90 transition"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
