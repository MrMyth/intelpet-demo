import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Upload, Heart, MessageCircle, Share2, Grid3x3, List } from "lucide-react";
import { useState } from "react";
import albumCover1 from "@/assets/photo-album-1.jpg";
import albumCover2 from "@/assets/photo-album-2.jpg";
import albumCover3 from "@/assets/photo-album-3.jpg";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import photo6 from "@/assets/photo-6.jpg";

export default function Photos() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const albums = [
    {
      id: 1,
      title: "Summer Adventures",
      photoCount: 24,
      cover: albumCover1,
    },
    {
      id: 2,
      title: "Training Sessions",
      photoCount: 15,
      cover: albumCover2,
    },
    {
      id: 3,
      title: "Best Moments",
      photoCount: 42,
      cover: albumCover3,
    },
  ];

  const recentPhotos = [
    {
      id: 1,
      url: photo1,
      likes: 24,
      comments: 5,
      caption: "Beautiful day at the park!",
    },
    {
      id: 2,
      url: photo2,
      likes: 32,
      comments: 8,
      caption: "My best friend ❤️",
    },
    {
      id: 3,
      url: photo3,
      likes: 18,
      comments: 3,
      caption: "Playing fetch",
    },
    {
      id: 4,
      url: photo4,
      likes: 45,
      comments: 12,
      caption: "Nap time 😴",
    },
    {
      id: 5,
      url: photo5,
      likes: 27,
      comments: 6,
      caption: "Ready for adventure!",
    },
    {
      id: 6,
      url: photo6,
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