"use client";

import { useState } from "react";
import Image from "next/image";
import { Blurhash } from "react-blurhash";

interface BlurImageProps {
  src: string;
  blurhash: string;
  alt: string;
  className?: string;
}

export default function BlurImage({
  src,
  blurhash,
  alt,
  className = "",
}: BlurImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blurhash placeholder */}
      {!loaded && (
        <Blurhash
          hash={blurhash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className="absolute inset-0 rounded-full"
        />
      )}

      {/* Optimized Next.js Image */}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover rounded-full transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
        priority
      />
    </div>
  );
}
