import Image from "next/image"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EventCardProps {
  title: string
  description: string
  image: string
  date: string
  time: string
  location: string
  price: string
  spots: number
}

export default function EventCard({ title, description, image, date, time, location, price, spots }: EventCardProps) {
  return (
    <div className="glass-card overflow-hidden group">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 z-10">
          <span className="px-3 py-1 bg-yoga-saffron text-gray-900 rounded-full text-sm font-medium">{price}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-col space-y-2 mb-5 text-sm">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2 text-yoga-orange" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2 text-yoga-orange" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-2 text-yoga-orange" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-2 text-yoga-orange" />
            <span>{spots} spots available</span>
          </div>
        </div>

        <Button className="w-full bg-yoga-orange hover:bg-yoga-ochre">Book Now</Button>
      </div>
    </div>
  )
}
