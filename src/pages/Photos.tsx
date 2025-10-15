import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Upload, Heart, MessageCircle, Share2, Grid3x3, List } from "lucide-react";
import { useState } from "react";

export default function Photos() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const albums = [
    {
      id: 1,
      title: "Summer Adventures",
      photoCount: 24,
      cover: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Training Sessions",
      photoCount: 15,
      cover: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Best Moments",
      photoCount: 42,
      cover: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
    },
  ];

  const recentPhotos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&h=400&fit=crop",
      likes: 24,
      comments: 5,
      caption: "Beautiful day at the park!",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&h=400&fit=crop",
      likes: 32,
      comments: 8,
      caption: "My best friend ❤️",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
      likes: 18,
      comments: 3,
      caption: "Playing fetch",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=400&h=400&fit=crop",
      likes: 45,
      comments: 12,
      caption: "Nap time 😴",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?w=400&h=400&fit=crop",
      likes: 27,
      comments: 6,
      caption: "Ready for adventure!",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
      likes: 39,
      comments: 9,
      caption: "Happy pup!",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Photos</h1>
          <p className="text-muted-foreground">Share your pet's best moments</p>
        </div>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload Photos
        </Button>
      </div>

      <Tabs defaultValue="recent" className="w-full">
        <div className="flex items-center justify-between mb-6">
          <TabsList>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="albums">Albums</TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-2">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search photos..." className="pl-10" />
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
            >
              {viewMode === "grid" ? <List className="h-4 w-4" /> : <Grid3x3 className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <TabsContent value="recent">
          <div className={`grid gap-4 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
            {recentPhotos.map((photo) => (
              <Card key={photo.id} className="overflow-hidden hover:shadow-large transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photo.url}
                    alt="Pet photo"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="mb-3">{photo.caption}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Heart className="h-4 w-4" />
                      {photo.likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      {photo.comments}
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors ml-auto">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="albums">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album) => (
              <Card key={album.id} className="overflow-hidden hover:shadow-large transition-shadow cursor-pointer">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{album.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {album.photoCount} photos
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}