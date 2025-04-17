"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, IndianRupee } from "lucide-react"

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
                  <div className="flex justify-end">
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
    image: "/images/paneer-butter-masala.jpg",
    
  },
  {
    name: "Chicken Biryani",
    description: "Aromatic basmati rice layered with tender chicken pieces and spices",
    price: 100,
    image: "/images/chicken-biryani.jpg",
    
  },
  {
    name: "Chicken Kasa",
    description: "Spicy chicken curry with a blend of traditional spices",
    price: 50,
    image: "/images/chicken-kassa.jpg",
    badge: "Popular",
  },
  {
    name: "Mutton Curry @SATURDAY",
    description: "Tender mutton cooked in a rich, flavorful gravy with traditional spices.",
    price: 120,
    image: "/images/mutton-curry.jpg",
    badge: "Weekend Special",
  },
  {
    name: "Chilli Chicken 6pcs",
    description: "Spicy and tangy chicken starter with bell peppers and onions",
    price: 80,
    image: "/images/chilli-chicken.jpeg",
    badge: "Popular",
  },
  {
    name: "Dal Tadka",
    description: "Flavorful lentils tempered with tadka and spices.",
    price: 80,
    image: "/images/dal-tadka.jpg",
    
  },

  {
    name: "Chicken Egg Fried Rice",
    description: "Delicious fried rice with chicken and scrambled eggs",
    price: 80,
    image: "/images/chicken-egg-friedrice.jpg",
  },
  
  
]
