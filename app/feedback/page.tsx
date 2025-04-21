"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { MessageSquare, Send, ThumbsUp, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent } from "@/components/ui/card"

export default function FeedbackPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [rating, setRating] = useState(0)

    < div className = "space-y-3 pt-4" >
      <div className="flex items-center gap-3">
        <WhatsApp className="h-5 w-5 text-green-500" />
        <a
          href="https://wa.me/9056011913"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-green-400 transition-colors"
        >
          +91 9056011913
        </a>
      </div>
                      </div >
  const formSchema = z.object({
        rating: z.number().min(1, {
          message: "Please select a rating.",
        }),
        foodQuality: z.number().min(1, {
          message: "Please rate the food quality.",
        }),
        serviceQuality: z.number().min(1, {
          message: "Please rate the service quality.",
        }),
        cleanliness: z.number().min(1, {
          message: "Please rate the cleanliness.",
        }),
        comments: z.string().optional(),
      })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 0,
      foodQuality: 0,
      serviceQuality: 0,
      cleanliness: 0,
      comments: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // Submit to Google Sheets
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw_aGMAwDnFAAEF2PAsivK-Q50RIMARMqNFyBG-73V8WAF-6J7aEQkdL8qxd48RwaQj/exec",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors", // Google Apps Script requires no-cors mode
        },
      )

      setIsSuccess(true)
      toast({
        title: "Feedback Submitted",
        description: "Thank you for your valuable feedback!",
        variant: "default",
      })
      form.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your feedback. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const StarRating = ({
    value,
    onChange,
    disabled = false,
  }: { value: number; onChange: (value: number) => void; disabled?: boolean }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`${disabled ? "cursor-default" : "cursor-pointer"}`}
            onClick={() => !disabled && onChange(star)}
          >
            <Star className={`h-6 w-6 ${star <= value ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
          </button>
        ))}
      </div>
    )
  }

  if (isSuccess) {
    return (
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-white p-3">
                <ThumbsUp className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">Thank You!</h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-[700px]">
                Your feedback has been submitted successfully. We appreciate your input!
              </p>
              <Button onClick={() => setIsSuccess(false)} className="bg-white text-green-600 hover:bg-white/90">
                Submit Another Feedback
              </Button>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <MessageSquare className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">Your Feedback Matters</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-[700px]">
              Feedback is taken seriously.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Overall Rating</FormLabel>
                        <FormControl>
                          <StarRating value={field.value} onChange={(value) => field.onChange(value)} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-6 md:grid-cols-3">
                    <FormField
                      control={form.control}
                      name="foodQuality"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Food Quality</FormLabel>
                          <FormControl>
                            <StarRating value={field.value} onChange={(value) => field.onChange(value)} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="serviceQuality"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Quality</FormLabel>
                          <FormControl>
                            <StarRating value={field.value} onChange={(value) => field.onChange(value)} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cleanliness"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cleanliness</FormLabel>
                          <FormControl>
                            <StarRating value={field.value} onChange={(value) => field.onChange(value)} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="comments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Comments</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please share your thoughts, suggestions, or concerns..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Submit Feedback
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
