import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Search, Navigation, Star, Clock } from "lucide-react";
import placePark from "@/assets/place-park.jpg";
import placeVet from "@/assets/place-vet.jpg";
import placeGrooming from "@/assets/place-grooming.jpg";
import placeTrail from "@/assets/place-trail.jpg";
import placeStore from "@/assets/place-store.jpg";
import placeCafe from "@/assets/place-cafe.jpg";

export default function Places() {
  const places = [
    {
      id: 1,
      name: "Central Dog Park",
      type: "Park",
      address: "123 Park Avenue, Downtown",
      distance: "0.5 km",
      rating: 4.8,
      reviews: 245,
      image: placePark,
      hours: "6:00 AM - 10:00 PM",
      features: ["Off-leash area", "Water fountain", "Agility equipment"],
    },
    {
      id: 2,
      name: "Pet Haven Clinic",
      type: "Veterinary",
      address: "456 Health Street",
      distance: "1.2 km",
      rating: 4.9,
      reviews: 189,
      image: placeVet,
      hours: "8:00 AM - 8:00 PM",
      features: ["Emergency care", "Grooming", "Dental services"],
    },
    {
      id: 3,
      name: "Happy Tails Grooming",
      type: "Grooming",
      address: "789 Beauty Lane",
      distance: "2.0 km",
      rating: 4.7,
      reviews: 156,
      image: placeGrooming,
      hours: "9:00 AM - 7:00 PM",
      features: ["Professional grooming", "Spa treatments", "Nail trimming"],
    },
    {
      id: 4,
      name: "Riverside Walking Trail",
      type: "Trail",
      address: "River Road, East Side",
      distance: "3.5 km",
      rating: 4.6,
      reviews: 312,
      image: placeTrail,
      hours: "Open 24/7",
      features: ["Scenic views", "Dog-friendly", "Picnic areas"],
    },
    {
      id: 5,
      name: "Pet Paradise Store",
      type: "Shop",
      address: "321 Commerce Boulevard",
      distance: "1.8 km",
      rating: 4.5,
      reviews: 198,
      image: placeStore,
      hours: "10:00 AM - 9:00 PM",
      features: ["Wide selection", "Expert advice", "Delivery available"],
    },
    {
      id: 6,
      name: "Beach Paws Cafe",
      type: "Cafe",
      address: "555 Coastal Drive",
      distance: "4.2 km",
      rating: 4.8,
      reviews: 267,
      image: placeCafe,
      hours: "7:00 AM - 6:00 PM",
      features: ["Pet-friendly dining", "Outdoor seating", "Special pet menu"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Pet-Friendly Places</h1>
        <p className="text-muted-foreground">Discover the best spots for you and your pet</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <TabsList>
            <TabsTrigger value="all">All Places</TabsTrigger>
            <TabsTrigger value="parks">Parks</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="dining">Dining</TabsTrigger>
          </TabsList>
          
          <div className="flex gap-2 md:ml-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search places..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Navigation className="h-4 w-4 mr-2" />
              Near Me
            </Button>
          </div>
        </div>

        <TabsContent value="all">
          <div className="grid md:grid-cols-2 gap-6">
            {places.map((place) => (
              <Card key={place.id} className="overflow-hidden hover:shadow-large transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-lg mb-1">{place.name}</h3>
                        <Badge variant="secondary" className="mb-2">{place.type}</Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{place.rating}</span>
                        <span className="text-sm text-muted-foreground">({place.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-3 text-sm">
                      <div className="flex items-start gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>{place.address} • {place.distance}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 flex-shrink-0" />
                        <span>{place.hours}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {place.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Navigation className="h-4 w-4 mr-2" />
                        Directions
                      </Button>
                      <Button size="sm" variant="outline">
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="parks">
          <p className="text-center text-muted-foreground py-8">Showing parks and trails...</p>
        </TabsContent>

        <TabsContent value="services">
          <p className="text-center text-muted-foreground py-8">Showing veterinary and grooming services...</p>
        </TabsContent>

        <TabsContent value="dining">
          <p className="text-center text-muted-foreground py-8">Showing pet-friendly cafes and restaurants...</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}