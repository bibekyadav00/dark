"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, IndianRupee } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function OffersCarousel() {
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
          {offers.map((offer, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] pl-4 first:pl-0">
              <Card className="h-full overflow-hidden border-none shadow-lg dark:bg-gray-800">
                <div className="relative h-[200px]">
                  <Image src={offer.image || "/placeholder.svg"} alt={offer.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                    <Badge className="self-start mb-2 bg-red-600">{offer.badge}</Badge>
                    <h3 className="text-2xl font-bold mb-1">{offer.title}</h3>
                    <p className="text-white/90">{offer.description}</p>
                  </div>
                </div>
                <CardContent className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Valid till</p>
                      <p className="font-medium">{offer.validTill}</p>
                    </div>
                    {offer.offerPrice && (
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground line-through flex items-center justify-end">
                          <IndianRupee className="h-3 w-3 mr-1" />
                          {offer.originalPrice.replace("₹", "")}
                        </p>
                        <p className="font-bold text-orange-600 dark:text-orange-400 flex items-center justify-end">
                          <IndianRupee className="h-4 w-4 mr-1" />
                          {offer.offerPrice.replace("₹", "")}
                        </p>
                      </div>
                    )}
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

const offers = [
  {
    title: "Chinese Combo",
    description: "Chilli Paneer with Fried Rice",
    badge: "Special Offer",
    validTill: "Limited Time",
    originalPrice: "₹120",
    offerPrice: "₹100",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500&auto=format&fit=crop",
    isNew: true,
  },
  {
    title: "Dinner Combo",
    description: "Chicken Kasa (Full) with 7 parathas",
    badge: "Best Value",
    validTill: "Limited Time",
    originalPrice: "₹160",
    offerPrice: "₹150",
    image: "/images/chicken-combo.jpg",
    isNew: true,
  },
  {
    title: "Chinese Combo",
    description: "Hakka Noodles with Chilli Chicken",
    badge: "Popular",
    validTill: "Limited Time",
    originalPrice: "₹130",
    offerPrice: "₹100",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=500&auto=format&fit=crop",
    isNew: true,
  },
  // {
  //   title: "Weekend Special",
  //   description: "Special weekend brunch menu with complimentary dessert",
  //   badge: "Weekends Only",
  //   validTill: "Ongoing",
  //   image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=500&auto=format&fit=crop",
  // },
]
