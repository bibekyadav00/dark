"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Star, IndianRupee } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function MostOrderedCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {mostOrderedItems.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pl-4 first:pl-0"
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800">
                <div className="relative h-48">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  {item.badge && <Badge className="absolute top-2 right-2 bg-orange-500">{item.badge}</Badge>}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < item.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                          />
                        ))}
                      <span className="text-xs ml-1 text-muted-foreground">({item.reviews})</span>
                    </div>
                    <span className="font-bold flex items-center">
                      <IndianRupee className="h-4 w-4 mr-1" />
                      {item.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Button
        size="icon"
        variant="outline"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background dark:bg-gray-800 shadow-md z-10"
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        size="icon"
        variant="outline"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background dark:bg-gray-800 shadow-md z-10"
        onClick={scrollNext}
        disabled={nextBtnDisabled}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  )
}

const mostOrderedItems = [
  {
    name: "Paneer Butter Masala",
    description: "Creamy and rich paneer dish cooked in a buttery tomato gravy",
    price: 50,
    rating: 5,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=300&auto=format&fit=crop",
    badge: "Bestseller",
  },
  {
    name: "Mutton Biryani @SUNDAY",
    description: "Aromatic basmati rice layered with tender mutton pieces and spices",
    price: 130,
    rating: 5,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=300&auto=format&fit=crop",
    badge: "Sunday Special",
  },
  {
    name: "Chicken Kasa",
    description: "Spicy chicken curry with a blend of traditional spices",
    price: 50,
    rating: 4,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Chilli Chicken 6pcs",
    description: "Spicy and tangy chicken starter with bell peppers and onions",
    price: 80,
    rating: 5,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=300&auto=format&fit=crop",
    badge: "Popular",
  },
  {
    name: "Chicken Egg Fried Rice",
    description: "Delicious fried rice with chicken and scrambled eggs",
    price: 80,
    rating: 4,
    reviews: 65,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=300&auto=format&fit=crop",
  },
]
