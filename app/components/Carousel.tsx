import Image from "next/image";

const homepageImages = [
  "/homepage/pexels-cedric-fauntleroy-4269274.jpg",
  "/homepage/pexels-fr3nks-287237.jpg",
  "/homepage/pexels-fr3nks-305568.jpg",
  "/homepage/pexels-karola-g-6627703.jpg",
  "/homepage/pexels-pixabay-208474.jpg",
  "/homepage/pexels-shvetsa-3845759.jpg",
  "/homepage/pexels-shvetsa-3845841.jpg",
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
