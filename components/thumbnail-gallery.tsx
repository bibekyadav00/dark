"use client"

import { useState } from "react"
import NextImage from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface ThumbnailGalleryProps {
  images: {
    src: string
    alt: string
  }[]
}

export function ThumbnailGallery({ images }: ThumbnailGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(index)}
          >
            <NextImage
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
          </div>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <div className="relative aspect-[4/3] w-full">
            {selectedImage !== null && (
              <NextImage
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
