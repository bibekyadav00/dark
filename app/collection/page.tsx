import NextImage from "next/image"
import { ImageCarousel } from "@/components/image-carousel"
import { ThumbnailGallery } from "@/components/thumbnail-gallery"

const images = [
  {
    src: "/images/pics/canteen-entrance.jpeg",
    alt: "Canteen entrance decorated with marigold garlands",
  },
  {
    src: "/images/pics/group-photo-1.jpeg",
    alt: "Group photo of canteen staff and visitors",
  },
  {
    src: "/images/pics/group-photo-2.jpeg",
    alt: "Group photo of canteen staff and visitors",
  },
  {
    src: "/images/pics/ribbon-cutting.jpeg",
    alt: "Ribbon cutting ceremony at the canteen",
  },
  {
    src: "/images/pics/group-photo-3.jpeg",
    alt: "Group photo of canteen staff and visitors",
  },
  {
    src: "/images/pics/group-photo-4.jpeg",
    alt: "Group photo of canteen staff and visitors",
  },
]

export default function CollectionPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Our Collection</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Explore our gallery of memorable moments, celebrations, and the vibrant community at our canteen.
          </p>
        </div>

        {/* Featured Carousel */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">Featured Moments</h2>
          <ImageCarousel images={images} />
        </div>

        {/* Photo Gallery */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">Photo Gallery</h2>
          <ThumbnailGallery images={images} />
        </div>

        {/* Slideshow Section */}
        <div className="space-y-8">
          <div className="rounded-xl bg-gradient-to-r from-amber-100 to-orange-100 p-8">
            <div className="space-y-4 text-center">
              <h2 className="text-2xl font-semibold">Canteen Celebrations</h2>
              <p className="text-muted-foreground">
                Our canteen is more than just a place to eat - it's a space where community comes together to celebrate
                and create memories.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="overflow-hidden rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105">
                  <div className="relative aspect-video overflow-hidden rounded-md">
                    <NextImage
                      src="/images/pics/canteen-entrance.jpeg"
                      alt="Canteen entrance"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-medium">Festive Decorations</h3>
                  <p className="text-sm text-muted-foreground">Beautiful marigold garlands adorning our entrance</p>
                </div>
                <div className="overflow-hidden rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105">
                  <div className="relative aspect-video overflow-hidden rounded-md">
                    <NextImage
                      src="/images/pics/ribbon-cutting.jpeg"
                      alt="Ribbon cutting ceremony"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-medium">Grand Opening</h3>
                  <p className="text-sm text-muted-foreground">The ribbon cutting ceremony of our dining area</p>
                </div>
                <div className="overflow-hidden rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105">
                  <div className="relative aspect-video overflow-hidden rounded-md">
                    <NextImage src="/images/pics/group-photo-1.jpeg" alt="Group photo" fill className="object-cover" />
                  </div>
                  <h3 className="mt-4 font-medium">Our Community</h3>
                  <p className="text-sm text-muted-foreground">The wonderful people who make our canteen special</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
