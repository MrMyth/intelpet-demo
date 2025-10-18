import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Plus, Settings, Camera, Calendar, Users, Heart } from "lucide-react";
import ownerMarcus from "@/assets/owner-marcus.jpg";
import petLucas from "@/assets/pet-lucas.jpg";
import petBella from "@/assets/pet-bella.jpg";
import petMax from "@/assets/pet-max.jpg";
import petLuna from "@/assets/pet-luna.jpg";
import petCharlie from "@/assets/pet-charlie.jpg";

export default function MyPage() {
  // Mock data - in a real app this would come from a database
  const user = {
    name: "Marcus Bell",
    age: 26,
    city: "New York",
    daysOnSite: 456,
    lastSeen: "15/10/2025",
    registrationType: "pet + gps",
    coordinates: { lat: 54.97158, lng: 73.38318 },
    online: true,
  };

  const pets = [
    {
      id: 1,
      name: "Lucas",
      type: "Dog",
      breed: "Labrador Retriever",
      gender: "Male",
      age: "2 years",
      coordinates: { lat: 54.97158, lng: 73.38318 },
      image: petLucas,
      petlist: 32,
    },
    {
      id: 2,
      name: "Bella",
      type: "Cat",
      breed: "Persian",
      gender: "Female",
      age: "3 years",
      coordinates: { lat: 54.97200, lng: 73.38400 },
      image: petBella,
      petlist: 45,
    },
    {
      id: 3,
      name: "Max",
      type: "Dog",
      breed: "German Shepherd",
      gender: "Male",
      age: "4 years",
      coordinates: { lat: 54.97100, lng: 73.38250 },
      image: petMax,
      petlist: 28,
    },
    {
      id: 4,
      name: "Luna",
      type: "Cat",
      breed: "Siamese",
      gender: "Female",
      age: "1 year",
      coordinates: { lat: 54.97180, lng: 73.38350 },
      image: petLuna,
      petlist: 52,
    },
    {
      id: 5,
      name: "Charlie",
      type: "Dog",
      breed: "Golden Retriever",
      gender: "Male",
      age: "5 years",
      coordinates: { lat: 54.97140, lng: 73.38280 },
      image: petCharlie,
      petlist: 38,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - User Info */}
          <div className="lg:col-span-1">
            <Card className="p-6 shadow-medium animate-fade-in">
              <div className="relative mb-6">
                <img
                  src={ownerMarcus}
                  alt={user.name}
                  className="w-full aspect-square object-cover rounded-xl"
                />
                <Badge 
                  className={`absolute top-4 right-4 ${user.online ? 'bg-green-500' : 'bg-gray-500'}`}
                >
                  {user.online ? 'Online' : 'Offline'}
                </Badge>
              </div>

              <h2 className="text-2xl font-bold mb-4">{user.name}</h2>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Age: {user.age} years old</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>City: {user.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Days on site: {user.daysOnSite}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Last seen: {user.lastSeen}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Type: {user.registrationType}</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Button className="w-full bg-gradient-primary">
                  <Camera className="mr-2 h-4 w-4" />
                  Add new photo
                </Button>
                <Button variant="outline" className="w-full">
                  Set status
                </Button>
                <Button variant="outline" className="w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Content - Map and Pets */}
          <div className="lg:col-span-2 space-y-6">
            {/* Coordinates & Map */}
            <Card className="p-6 shadow-medium animate-scale-in">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Your coordinates:</h3>
                  <p className="text-muted-foreground">
                    {user.coordinates.lat}, {user.coordinates.lng}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Pet tracked: {pets.length}/{pets.length}
                  </p>
                  <p className="text-sm text-green-600 font-medium">No warning...</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-muted rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20" />
                <div className="relative z-10 text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-2 text-primary animate-float" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-xs text-muted-foreground">GPS tracking enabled</p>
                </div>
              </div>
            </Card>

            {/* Pets Section */}
            <div className="animate-slide-up">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">My Pets</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {pets.map((pet, index) => (
                  <Card 
                    key={pet.id} 
                    className="overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-48">
                      <img
                        src={pet.image}
                        alt={pet.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary">
                          <Heart className="h-3 w-3 mr-1" />
                          {pet.petlist}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-3">Nickname: {pet.name}</h4>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">GPS coordinates:</span>
                          <span className="font-medium">{pet.coordinates.lat}, {pet.coordinates.lng}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Type:</span>
                          <span className="font-medium">{pet.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Breed:</span>
                          <span className="font-medium">{pet.breed}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Gender:</span>
                          <span className="font-medium">{pet.gender}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Age:</span>
                          <span className="font-medium">{pet.age}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Petlist:</span>
                          <span className="font-medium">+ {pet.petlist}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}

                {/* Add New Pet Card */}
                <Card className="overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-1 border-2 border-dashed">
                  <button className="w-full h-full min-h-[400px] flex flex-col items-center justify-center gap-4 p-6 hover:bg-muted/50 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Plus className="h-10 w-10 text-white" />
                    </div>
                    <span className="text-xl font-bold">Add new pet</span>
                    <span className="text-sm text-muted-foreground">Click to add a new pet to your profile</span>
                  </button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
