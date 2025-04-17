import Image from "next/image"
import { CalendarDays, Clock, Tag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Offers - HALL-12 Canteen",
  description: "Check out our special offers and deals at HALL-12 Canteen",
}

export default function OffersPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">Special Offers</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-[700px]">
              Discover amazing deals and discounts on your favorite food items
            </p>
          </div>
        </div>
      </section>

      {/* <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image src={offer.image || "/placeholder.svg"} alt={offer.title} fill className="object-cover" />
                  {offer.tag && <Badge className="absolute top-2 right-2 bg-red-600">{offer.tag}</Badge>}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Tag className="h-4 w-4 mr-2 text-green-600" />
                      <span>{offer.discount}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarDays className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Valid till: {offer.validTill}</span>
                    </div>
                    {offer.timings && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2 text-orange-600" />
                        <span>Available: {offer.timings}</span>
                      </div>
                    )}
                  </div>
                  {offer.code && (
                    <div className="mt-4 p-2 bg-gray-100 rounded-md text-center">
                      <p className="text-sm text-gray-500">Use Code:</p>
                      <p className="font-bold text-lg text-gray-800">{offer.code}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <section className="w-full py-12 md:py-16 bg-gradient-to-r from-yellow-100 to-orange-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Combo Deals</h2>
            {/* <p className="text-xl text-gray-600 max-w-[700px]">Get more for less with our special combo offers</p> */}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {combos.map((combo, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-40">
                  <Image src={combo.image || "/placeholder.svg"} alt={combo.name} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-1 text-gray-800">{combo.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{combo.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-lg font-bold text-green-600">₹{combo.price}</span>
                      {combo.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">₹{combo.originalPrice}</span>
                      )}
                    </div>
                    <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-200">
                      Save {combo.saving}%
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const offers = [
  {
    title: "Happy Hours",
    description: "Enjoy 20% off on all beverages between 3 PM to 5 PM every weekday",
    discount: "20% off on all beverages",
    validTill: "31 May 2025",
    timings: "3 PM - 5 PM (Mon-Fri)",
    image: "/placeholder.svg?height=200&width=300",
    tag: "Limited Time",
  },
  {
    title: "Student Special",
    description: "Show your student ID and get 15% off on your total bill",
    discount: "15% off on total bill",
    validTill: "Ongoing",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Weekend Brunch",
    description: "Special weekend brunch menu with complimentary dessert",
    discount: "Free dessert with brunch",
    validTill: "Ongoing",
    timings: "10 AM - 2 PM (Sat-Sun)",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "First Order Discount",
    description: "Get 25% off on your first order at HALL-12 Canteen",
    discount: "25% off on first order",
    validTill: "Ongoing",
    code: "WELCOME25",
    image: "/placeholder.svg?height=200&width=300",
    tag: "New Users",
  },
  {
    title: "Loyalty Program",
    description: "Collect stamps with every purchase and get your 10th meal free",
    discount: "Free meal after 9 purchases",
    validTill: "Ongoing",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Birthday Special",
    description: "Show your ID and get a free dessert on your birthday",
    discount: "Free dessert on birthday",
    validTill: "Ongoing",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const combos = [
  {
    name: "Chinese Combo",
    description: "Chilli Paneer with Fried Rice",
    price: 120,
    originalPrice: 100,
    // saving: 25,
    image: "/images/chillipaneer-friedrice.jpg",
  },
  {
    name: "Dinner Combo",
    description: "Chicken Kasa (Full) with 7 parathas",
    price: 160,
    originalPrice: 150,
    // saving: 20,
    image: "/images/kasa-paratha.jpg",
  },
  {
    name: "Chinese Combo",
    description: "Hakka Noodles with Chilli Chicken",
    price: 130,
    originalPrice: 100,
    // saving: 25,
    image: "/images/chillichicken-noodles.jpg",
  },
 
]

// {
//   title: "Chinese Combo",
//   description: "Chilli Paneer with Fried Rice",
//   badge: "Special Offer",
//   validTill: "Limited Time",
//   originalPrice: "₹120",
//   offerPrice: "₹100",
//   image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500&auto=format&fit=crop",
//   isNew: true,
// },
// {
//   title: "Dinner Combo",
//   description: "Chicken Kasa (Full) with 7 parathas",
//   badge: "Best Value",
//   validTill: "Limited Time",
//   originalPrice: "₹160",
//   offerPrice: "₹150",
//   image: "/images/chicken-combo.jpg",
//   isNew: true,
// },
// {
//   title: "Chinese Combo",
//   description: "Hakka Noodles with Chilli Chicken",
//   badge: "Popular",
//   validTill: "Limited Time",
//   originalPrice: "₹130",
//   offerPrice: "₹100",
//   image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=500&auto=format&fit=crop",
//   isNew: true,
// },