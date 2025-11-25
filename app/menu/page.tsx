import { Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MenuPdfViewer } from "@/components/menu-pdf-viewer"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IndianRupee } from "lucide-react"

export const metadata = {
  title: "Menu - HALL-12 Canteen",
  description: "Explore our delicious menu options at HALL-12 Canteen",
}

export default function MenuPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">Menu</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-[700px]">
            Don't pay extra.Regarding prices/pieces,refer the menu price`s below.
            WHATSAPP for any complaints: 9056011913
            </p>
          </div>
          {/* WhatsApp Complaint Button */}
        <div className="flex justify-center">
                    <a
                      href="https://wa.me/919056011913?text=Hello,%20I%20have%20a%20complaint%20regarding%20the%20service."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium shadow-md transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.52 3.48A12.3 12.3 0 0012.02.4C5.73.4.69 5.43.69 11.72a11.58 11.58 0 001.6 5.93L.4 23.6l6.21-1.88a12.25 12.25 0 005.39 1.29h.01c6.29 0 11.32-5.03 11.32-11.31a11.3 11.3 0 00-3.81-8.22zM12.02 21c-1.58 0-3.13-.42-4.48-1.23l-.32-.19-3.68 1.11 1.17-3.59-.21-.37a9.6 9.6 0 01-1.45-5.14c0-5.31 4.33-9.63 9.99-9.63 2.57 0 4.99 1 6.8 2.82a9.48 9.48 0 012.8 6.8c0 5.3-4.32 9.62-9.62 9.62z" />
                      </svg>
                      Complaint via WhatsApp
                    </a>
                  </div>
        </div>
        
      </section>

      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="pdf" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="pdf">Current Menu</TabsTrigger>
              {/* <TabsTrigger value="categories">Full Menu</TabsTrigger> */}
              
            </TabsList>
            <TabsContent value="pdf" className="w-full">
            <div className="grid gap-8">
                {currentmenu.map((category) => (
                  <Card key={category.name} className="overflow-hidden dark:border-gray-800">
                    <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white dark:from-orange-600 dark:to-red-700">
                      <CardTitle className="text-2xl">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {category.items.map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between border-b pb-2 last:border-0 dark:border-gray-700"
                          >
                            <div>
                              <p className="font-medium">{item.name}</p>
                              {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
                            </div>
                            <div className="flex items-center font-semibold">
                              <IndianRupee className="h-3 w-3 mr-1" />
                              {item.price}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="categories">
              <div className="grid gap-8">
                {menuCategories.map((category) => (
                  <Card key={category.name} className="overflow-hidden dark:border-gray-800">
                    <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white dark:from-orange-600 dark:to-red-700">
                      <CardTitle className="text-2xl">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {category.items.map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between border-b pb-2 last:border-0 dark:border-gray-700"
                          >
                            <div>
                              <p className="font-medium">{item.name}</p>
                              {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
                            </div>
                            <div className="flex items-center font-semibold">
                              <IndianRupee className="h-3 w-3 mr-1" />
                              {item.price}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
const currentmenu = [
  {
    name: "BREAKFAST & LIGHT",
    items: [
      { name: "Puri Sabji (4 pcs)", price: "30" },
      { name: "4 Roti Sabji", price: "50" },
      { name: "Bread Omelette", price: "35" },
      { name: "Aloo Paratha", price: "20" },
      { name: "Paneer Paratha", price: "40" },
      { name: "Sattu Paratha", price: "25" },
      { name: "Chana Bhatura", price: "50" },
      { name: "Bread Butter / Jam", price: "25" },
      { name: "Boiled Egg (2 pcs)", price: "25" },
      { name: "Uttapam", price: "45" },
      { name: "Idli (2 pcs)", price: "40" },
      { name: "Masala Dosa", price: "60" },
      { name: "Plain Dosa", price: "50" },
      { name: "Plain Maggi", price: "25" },
      { name: "Veg Maggi", price: "35" },
      { name: "Egg Maggi", price: "45" },
      { name: "Veg Sandwich", price: "25" },
      { name: "Grilled Veg Sandwich", price: "30" },
      { name: "Omelette (Double Egg)", price: "30" },
    ],
  },
  {
    name: "MEALS & RICE",
    items: [
      { name: "Veg Meal (Rice, Dal, Sabji)", price: "60" },
      { name: "Plain Rice", price: "40" },
      { name: "Veg Biryani", price: "85" },
      { name: "Egg Biryani", price: "60" },
      { name: "Chicken Biryani", price: "80" },
      { name: "Chicken Egg Biryani", price: "70" },
    ],
  },
  {
    name: "CURRIES & MAIN",
    items: [
      { name: "Egg Curry (2 pcs)", price: "40" },
      { name: "Chicken Curry (2 pcs)", price: "70" },
      { name: "Fish Curry (2 pcs)", price: "60" },
      { name: "Mutton Curry (2 pcs)", price: "150" },
      { name: "Paneer Butter Masala", price: "75" },
      { name: "Matar Paneer", price: "50" },
      { name: "Palak Paneer", price: "70" },
      { name: "Chana Masala", price: "50" },
      { name: "Aloo Jeera", price: "50" },
      { name: "Aloo Bhujia", price: "30" },
      { name: "Dal Fry", price: "40" },
      { name: "Dal Tadka", price: "40" },
    ],
  },
  {
    name: "ROTI & PARATHAS",
    items: [
      { name: "Roti (per pc)", price: "5" },
      { name: "Plain Paratha", price: "15" },
      { name: "Laccha Paratha", price: "25" },
    ],
  },
  {
    name: "SNACKS & ROLLS",
    items: [
      { name: "Samosa", price: "10" },
      { name: "Aloo Chop", price: "10" },
      { name: "Bread Pakoda", price: "12" },
      { name: "Veg Roll", price: "40" },
      { name: "Egg Roll", price: "50" },
      { name: "Chicken Roll", price: "60" },
      { name: "Chicken Egg Roll", price: "70" },
    ],
  },
  {
    name: "NOODLES & FRIED RICE",
    items: [
      { name: "Veg Chowmein", price: "50" },
      { name: "Egg Chowmein", price: "60" },
      { name: "Chicken Chowmein", price: "70" },
      { name: "Veg Fried Rice", price: "50" },
      { name: "Egg Fried Rice", price: "60" },
      { name: "Chicken Fried Rice", price: "70" },
    ],
  },
  {
    name: "SPECIALS & GRAVY",
    items: [
      { name: "Paneer Chilli", price: "70" },
      { name: "Chicken Chilli", price: "80" },
      { name: "Veg Manchurian", price: "60" },
    ],
  },
  {
    name: "SOUPS",
    items: [
      { name: "Veg Soup", price: "40" },
      { name: "Chicken Soup", price: "50" },
    ],
  },
  
]

const menuCategories = [
  {
    name: "BREAKFAST",
    items: [
      { name: "Puri Sabzi (4 poori)", price: "20" },
      { name: "Bread Omelette", price: "30" },
      { name: "Omelette (2 eggs)", price: "25" },
      { name: "Plain Maggi", price: "25" },
      { name: "Aloo Paratha (1pc)", price: "15" },
      { name: "CornFlakes with milk", price: "25" },
      { name: "Poha", price: "30" },
      { name: "Upma (Suji/Sewai)", price: "30" },
      { name: "Utthapam (3pc)", price: "25" },
      { name: "Plain Dosa", price: "40" },
      { name: "Masala Dosa", price: "50" },
      { name: "Idli (3pc)", price: "25" },
      { name: "Pasta", price: "20" },
      { name: "Chola Bhatura (2pc)", price: "30" },
      { name: "Sandwich (veg)", price: "20" },
      { name: "Tea/Coffee/milk", price: "10" },
    ],
  },
  {
    name: "MUTTON",
    items: [
      { name: "Mutton Kosha (2pcs)", price: "120" },
      { name: "Mutton Curry(2pc)", price: "120" },
      { name: "Mutton Keema", price: "180" },
      { name: "Mutton Kaleeji", price: "120" },
      { name: "Mutton Biryani (Saturday)", price: "130" },
    ],
  },
  {
    name: "STARTERS",
    items: [
      { name: "Paneer Tikka (6pc)", price: "80" },
      { name: "Chilly Paneer (6pc)", price: "80" },
      { name: "Veg Manchurian (6pc)", price: "60" },
      { name: "Pappad (2pc)", price: "12" },
      { name: "Green Salad", price: "20" },
      { name: "Chilly Chicken (6pc)", price: "80" },
      { name: "Chicken 65 (8pc)", price: "90" },
      { name: "Chicken Tikka (8pc)", price: "100" },
      { name: "Chicken Manchurian (6pc)", price: "70" },
    ],
  },
  {
    name: "BIRYANI & SPECIAL RICE",
    items: [
      { name: "Plain Rice", price: "30" },
      { name: "Jeera Rice", price: "35" },
      { name: "Pulao (Veg, Non-Veg)", price: "50" },
      { name: "Veg Fried Rice", price: "60" },
      { name: "Egg Fried Rice", price: "65" },
      { name: "Chicken Fried Rice", price: "70" },
      { name: "Mixed Fried Rice", price: "80" },
      { name: "Veg Biryani with paneer", price: "70" },
      { name: "Chicken Biryani", price: "100" },
      { name: "Mutton Biryani (Saturday)", price: "130" },
      { name: "Veg Meal (Miniket Rice)", price: "40" },
      { name: "Veg Meal (Basmati Rice)", price: "45" },
      { name: "Egg Meal (Miniket Rice)", price: "50" },
      { name: "Egg Meal (Basmati Rice)", price: "55" },
      { name: "Chicken Meal (Miniket Rice)", price: "60" },
      { name: "Chicken Meal (Basmati Rice)", price: "65" },
    ],
  },
  {
    name: "VEG MAIN COURSE",
    items: [
      { name: "Dal Tadka/Dal Fry", price: "30" },
      { name: "Chana Masala", price: "30" },
      { name: "Mixed Veg", price: "30" },
      { name: "Bhindi Fry", price: "30" },
      { name: "Gobi Aloo", price: "25" },
      { name: "Capsicum Aloo", price: "30" },
      { name: "Aloo Matar", price: "30" },
      { name: "Rajma Masala", price: "30" },
      { name: "Mushroom Butter Masala", price: "90" },
      { name: "Veg Manchurian Gravy", price: "60" },
      { name: "Kadhai Paneer", price: "65" },
      { name: "Saahi Paneer", price: "75" },
      { name: "Matar Paneer", price: "65" },
      { name: "Palak Paneer", price: "60" },
      { name: "Butter Paneer Masala", price: "50" },
      { name: "Paneer Bhurji", price: "70" },
      { name: "Tandoori Paneer Masala", price: "70" },
      { name: "Paneer Tikka Masala", price: "70" },
      { name: "Chilli Paneer Gravy", price: "80" },
    ],
  },
  {
    name: "CHICKEN MAIN COURSE",
    items: [
      { name: "Chicken Bharta (half/full)", price: "50/90" },
      { name: "Chicken Kasa (half/full)", price: "50/90" },
      { name: "Butter Chicken (half/full)", price: "50/90" },
      { name: "Kadhai Chicken (half/full)", price: "50/90" },
      { name: "Hyd. Chicken (Half/Full)", price: "50/90" },
      { name: "Chicken Curry (Half/Full)", price: "50/90" },
      { name: "Tandoori Chicken", price: "80" },
      { name: "Chicken Tikka Masala", price: "85" },
      { name: "Garlic Chicken", price: "75" },
      { name: "Lemon Chicken", price: "75" },
      { name: "Chicken Stew", price: "30" },
    ],
  },
  {
    name: "FISH & EGGS",
    items: [
      { name: "Fish Curry (1pc)", price: "25" },
      { name: "Fish Fry (1pc)", price: "25" },
      { name: "Pomfret Masala (1pc)", price: "150" },
      { name: "Sorse Illish (1pc)", price: "250" },
      { name: "Egg Curry (2pc)", price: "25" },
      { name: "Egg Kossa (2pc)", price: "25" },
      { name: "Egg Bharta (2pc)", price: "25" },
      { name: "Egg Bhujia/Bhurji", price: "30" },
      { name: "Boiled egg Bhurji", price: "30" },
      { name: "Egg Masala", price: "25" },
      { name: "Egg Tadka", price: "35" },
    ],
  },
  {
    name: "DRINKS & DESSERTS",
    items: [
      { name: "COLD DRINKS", price: "MRP" },
      { name: "Curd (Sweet, Plain)", price: "MRP" },
      { name: "ICE-CREAM", price: "MRP" },
      { name: "Lassi", price: "30" },
      { name: "Brownie", price: "Varies" },
      { name: "Pastry", price: "Varies" },
      { name: "Juices", price: "Varies" },
      { name: "Sweets", price: "Varies" },
      { name: "Chocolate pancake", price: "Varies" },
      { name: "Banana pancake", price: "Varies" },
    ],
  },
  {
    name: "ROTI & PARATHAS",
    items: [
      { name: "Tawa Roti (100% Atta)", price: "5" },
      { name: "Tawa Roti Butter", price: "8" },
      { name: "Tandoori Roti (1pc)", price: "10" },
      { name: "Tandoori Butter Roti", price: "13" },
      { name: "Tandoori Naan (1pc)", price: "20" },
      { name: "Tandoori Butter Naan (1pc)", price: "23" },
      { name: "Plain Paratha (1pc)", price: "10" },
      { name: "Laccha Paratha (1pc)", price: "15" },
      { name: "Paneer Paratha", price: "20" },
      { name: "Sattu Paratha", price: "15" },
      { name: "Chicken Paratha", price: "25" },
      { name: "Aloo Paratha", price: "15" },
      { name: "Onion Paratha", price: "15" },
    ],
  },
  {
    name: "ROLLS & SANDWICH",
    items: [
      { name: "Veg Chowmein", price: "40" },
      { name: "Egg Chowmein", price: "50" },
      { name: "Chicken Chowmein", price: "55" },
      { name: "Egg Chicken Chowmein", price: "65" },
      { name: "Egg Roll (single egg)", price: "30" },
      { name: "Paneer Roll", price: "35" },
      { name: "Chicken Roll", price: "35" },
      { name: "Egg Chicken Roll", price: "45" },
      { name: "Chicken Cheese Roll", price: "55" },
      { name: "Paneer Sandwich", price: "50" },
      { name: "Corn Cheese Sandwich", price: "50" },
      { name: "Chicken Sandwich", price: "50" },
      { name: "Chicken Cheese Sandwich", price: "60" },
      { name: "Cheese Maggi", price: "35" },
      { name: "Egg bhujia/Poached Maggi", price: "35" },
    ],
  },
  {
    name: "SNACKS",
    items: [
      { name: "Veg Burger", price: "60" },
      { name: "Chicken Burger", price: "75" },
      { name: "French fry", price: "50" },
      { name: "Samosa (1pc)", price: "10" },
      { name: "Kachori (1pc)", price: "10" },
      { name: "Veg Pizza", price: "100" },
      { name: "Chicken Pizza", price: "120" },
      { name: "Veg Pakora (1 plate)", price: "20" },
      { name: "Onion Pakora (1 plate)", price: "20" },
      { name: "Paneer Pakora (1 plate)", price: "30" },
      { name: "Chicken Pakora (1 plate)", price: "40" },
      { name: "Fish Fingers (1pc)", price: "30" },
      { name: "Chicken Lollipop (1pc)", price: "25" },
      { name: "Pav Bhaji (1 plate)", price: "40" },
    ],
  },
]
