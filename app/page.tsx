import Link from "next/link"
import Image from "next/image"
import { MapPin, Clock, ChevronRight, IndianRupee } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MostOrderedCarousel } from "@/components/most-ordered-carousel"
import { OffersCarousel } from "@/components/offers-carousel"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-image.jpeg"
              alt="HALL-12 Building"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Welcome to{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                    HALL-12
                  </span>{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text">
                    Canteen
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90">
                  Delicious food, great ambiance, and affordable prices!
                </p>
                <p className="text-lg text-white/80">
                  <span className="font-semibold">Open for all students</span> at NIT Durgapur
                </p>
                <p className="text-lg text-white/80">
                  <span className="font-semibold">Currently serving with limited menu, full menu will be available soon.</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-red-600 hover:bg-white/90">
                    <Link href="/menu">View Menu</Link>
                  </Button>
                  <Button asChild size="lg" className="bg-white text-red-600 hover:bg-white/90">
                    <Link href="/offers">Special Offers</Link>
                  </Button>
                </div>
              </div>
              {/* <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/70 to-red-600/70 rounded-xl flex items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">Today's Special</h2>
                    <p className="text-xl">Mutton Biryani @SUNDAY</p>
                    <p className="text-2xl font-bold flex items-center justify-center">
                      <IndianRupee className="h-5 w-5 mr-1" />
                      130
                    </p>
                    <Button className="bg-white text-red-600 hover:bg-white/90">Order Now</Button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Most Ordered Section */}
        <section className="w-full py-12 md:py-16 bg-amber-50 dark:bg-amber-950/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-orange-700 dark:text-orange-400">Most Ordered</h2>
              <Link
                href="/menu"
                className="flex items-center text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
              >
                View All Menu <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <MostOrderedCarousel />
          </div>
        </section>

        {/* Offers Section */}
        <section className="w-full py-12 md:py-16 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-orange-700 dark:text-orange-400">Special Offers</h2>
              <Link
                href="/offers"
                className="flex items-center text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
              >
                View All Offers <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <OffersCarousel />
          </div>
        </section>

        {/* Location Section */}
        <section className="w-full py-12 md:py-16 bg-green-50 dark:bg-green-950/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-green-700 dark:text-green-400 mb-8">Find Us</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">Hall-12, Ground Floor, NIT Durgapur</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold">Opening Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">Monday - Sunday: 7:00 AM - 10:00 PM</p>
                  </div>
                </div>
                <Button
                  asChild
                  className="mt-4 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
                >
                  <a href="https://maps.app.goo.gl/V2Qef373MGa8nMq89" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </Button>
              </div>
              <div className="h-[300px] md:h-[400px] rounded-xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <iframe
                  src="https://maps.google.com/maps?q=NIT+Durgapur+Hall+12&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        {/* <section className="w-full py-12 md:py-16 bg-purple-50 dark:bg-purple-950/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-purple-700 dark:text-purple-400 mb-8 text-center">
              Quick Links
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-red-500 to-orange-500 text-white border-none hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Image
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=100&h=100&auto=format&fit=crop"
                    alt="Menu"
                    width={80}
                    height={80}
                    className="mb-4 rounded-full object-cover"
                  />
                  <h3 className="text-xl font-bold">Menu</h3>
                  <p className="text-white/90 mb-4">Explore our delicious options</p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/menu">View Menu</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-yellow-500 to-amber-500 text-white border-none hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Image
                    src="https://images.unsplash.com/photo-1576402187878-974f70c890a5?q=80&w=100&h=100&auto=format&fit=crop"
                    alt="Offers"
                    width={80}
                    height={80}
                    className="mb-4 rounded-full object-cover"
                  />
                  <h3 className="text-xl font-bold">Offers</h3>
                  <p className="text-white/90 mb-4">Check out our special deals</p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/offers">View Offers</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-500 to-emerald-500 text-white border-none hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Image
                    src="https://images.unsplash.com/photo-1576402187878-974f70c890a5?q=80&w=100&h=100&auto=format&fit=crop"
                    alt="Feedback"
                    width={80}
                    height={80}
                    className="mb-4 rounded-full object-cover"
                  />
                  <h3 className="text-xl font-bold">Feedback</h3>
                  <p className="text-white/90 mb-4">Share your experience with us</p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/feedback">Give Feedback</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white border-none hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Image
                    src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=100&h=100&auto=format&fit=crop"
                    alt="Location"
                    width={80}
                    height={80}
                    className="mb-4 rounded-full object-cover"
                  />
                  <h3 className="text-xl font-bold">Location</h3>
                  <p className="text-white/90 mb-4">Find us on campus</p>
                  <Button asChild variant="secondary" className="w-full">
                    <a href="https://maps.app.goo.gl/V2Qef373MGa8nMq89" target="_blank" rel="noopener noreferrer">
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  )
}
