import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, UserPlus, MessageSquare, MapPin } from "lucide-react";
import friendAlex from "@/assets/friend-alex.jpg";
import friendSophie from "@/assets/friend-sophie.jpg";
import friendDaniel from "@/assets/friend-daniel.jpg";
import friendMaria from "@/assets/friend-maria.jpg";
import friendJames from "@/assets/friend-james.jpg";

export default function Friends() {
  const friends = [
    {
      id: 1,
      name: "Alex Rivera",
      location: "New York, USA",
      pets: 2,
      avatar: friendAlex,
      mutualFriends: 5,
    },
    {
      id: 2,
      name: "Sophie Chen",
      location: "London, UK",
      pets: 1,
      avatar: friendSophie,
      mutualFriends: 3,
    },
    {
      id: 3,
      name: "Daniel Park",
      location: "Seoul, South Korea",
      pets: 3,
      avatar: friendDaniel,
      mutualFriends: 8,
    },
  ];

  const suggestions = [
    {
      id: 4,
      name: "Maria Garcia",
      location: "Madrid, Spain",
      pets: 1,
      avatar: friendMaria,
      mutualFriends: 2,
    },
    {
      id: 5,
      name: "James Wilson",
      location: "Sydney, Australia",
      pets: 2,
      avatar: friendJames,
      mutualFriends: 4,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Friends</h1>
        <p className="text-muted-foreground">Connect with pet lovers around the world</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Friends ({friends.length})</TabsTrigger>
          <TabsTrigger value="suggestions">Suggestions ({suggestions.length})</TabsTrigger>
        </TabsList>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search friends..." className="pl-10" />
          </div>
        </div>

        <TabsContent value="all">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {friends.map((friend) => (
              <Card key={friend.id} className="p-6 hover:shadow-large transition-shadow">
                <div className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={friend.avatar} alt={friend.name} />
                    <AvatarFallback>{friend.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-lg mb-1">{friend.name}</h3>
                  <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    {friend.location}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {friend.pets} {friend.pets === 1 ? "pet" : "pets"} • {friend.mutualFriends} mutual friends
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button variant="ghost" size="sm">
                      View Profile
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="suggestions">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestions.map((person) => (
              <Card key={person.id} className="p-6 hover:shadow-large transition-shadow">
                <div className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={person.avatar} alt={person.name} />
                    <AvatarFallback>{person.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-lg mb-1">{person.name}</h3>
                  <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    {person.location}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {person.pets} {person.pets === 1 ? "pet" : "pets"} • {person.mutualFriends} mutual friends
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Add Friend
                    </Button>
                    <Button variant="outline" size="sm">
                      Remove
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}