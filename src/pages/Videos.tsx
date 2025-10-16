import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Upload, Eye, ThumbsUp, Share2, Clock } from "lucide-react";
import videoThumb1 from "@/assets/video-thumb-1.jpg";
import videoThumb2 from "@/assets/video-thumb-2.jpg";
import videoThumb3 from "@/assets/video-thumb-3.jpg";
import videoThumb4 from "@/assets/video-thumb-4.jpg";
import videoThumb5 from "@/assets/video-thumb-5.jpg";
import videoThumb6 from "@/assets/video-thumb-6.jpg";

export default function Videos() {
  const videos = [
    {
      id: 1,
      title: "First Day at Home",
      thumbnail: videoThumb1,
      duration: "2:45",
      views: 1240,
      likes: 89,
      date: "2 days ago",
    },
    {
      id: 2,
      title: "Learning New Tricks",
      thumbnail: videoThumb2,
      duration: "5:12",
      views: 2150,
      likes: 156,
      date: "1 week ago",
    },
    {
      id: 3,
      title: "Beach Day Fun",
      thumbnail: videoThumb3,
      duration: "3:30",
      views: 3420,
      likes: 234,
      date: "2 weeks ago",
    },
    {
      id: 4,
      title: "Playing with Friends",
      thumbnail: videoThumb4,
      duration: "4:15",
      views: 1890,
      likes: 142,
      date: "3 weeks ago",
    },
    {
      id: 5,
      title: "Morning Routine",
      thumbnail: videoThumb5,
      duration: "6:20",
      views: 4250,
      likes: 312,
      date: "1 month ago",
    },
    {
      id: 6,
      title: "Agility Training",
      thumbnail: videoThumb6,
      duration: "8:45",
      views: 5670,
      likes: 423,
      date: "1 month ago",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Videos</h1>
          <p className="text-muted-foreground">Share your pet's memorable moments</p>
        </div>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload Video
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden hover:shadow-large transition-shadow group">
            <div className="relative aspect-video overflow-hidden bg-muted">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="lg" className="rounded-full" variant="secondary">
                  <Play className="h-6 w-6 mr-2" />
                  Watch
                </Button>
              </div>
              <Badge className="absolute bottom-2 right-2 bg-black/70 text-white">
                <Clock className="h-3 w-3 mr-1" />
                {video.duration}
              </Badge>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{video.title}</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {video.views.toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  {video.likes}
                </span>
                <span>{video.date}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  Like
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}