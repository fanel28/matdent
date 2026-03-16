import Image from "next/image";

const homepageImages = [
  "/homepage/WhatsApp Image 2026-03-09 at 16.00.02.jpeg",
  "/homepage/WhatsApp Image 2026-03-09 at 16.00.02 (1).jpeg",
  "/homepage/WhatsApp Image 2026-03-09 at 16.00.02 (2).jpeg",
  "/homepage/WhatsApp Image 2026-03-09 at 16.00.02 (3).jpeg",
  "/homepage/WhatsApp Image 2026-03-09 at 16.00.02 (5).jpeg",
  "/homepage/WhatsApp Image 2026-03-09 at 16.00.02 (6).jpeg",
  "/homepage/WhatsApp Image 2026-03-10 at 13.54.48.jpeg",
];

export default function Carousel() {
  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-2xl sm:h-[400px] md:h-[480px]">
      {homepageImages.map((src, i) => (
        <div
          key={src}
          className="carousel-slide absolute inset-0"
          style={{ zIndex: i }}
        >
          <Image
            src={src}
            alt={`MatDent clinica ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
}
