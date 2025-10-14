import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";

export default function News() {
  const posts = [
    {
      id: 1,
      author: {
        name: "Masum Rana",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        timeAgo: "2 minutes ago",
      },
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop",
      likes: 128000,
      comments: 483,
      shares: 14,
    },
    {
      id: 2,
      author: {
        name: "Jason Borne",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        timeAgo: "5 minutes ago",
      },
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=600&fit=crop",
      likes: 128000,
      comments: 483,
      shares: 14,
    },
    {
      id: 3,
      author: {
        name: "Sarah Miller",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        timeAgo: "15 minutes ago",
      },
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=600&fit=crop",
      likes: 95000,
      comments: 342,
      shares: 28,
    },
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "k";
    }
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">News Feed</h1>
          <p className="text-muted-foreground">See what's happening in the pet community</p>
        </div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <Card 
              key={post.id} 
              className="overflow-hidden shadow-medium hover:shadow-large transition-shadow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Post Header */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold">{post.author.name}</h3>
                    <p className="text-sm text-muted-foreground">{post.author.timeAgo}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Bookmark className="h-5 w-5" />
                </Button>
              </div>

              {/* Post Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Post Actions */}
              <div className="p-4">
                <div className="flex items-center gap-6 mb-4">
                  <button className="flex items-center gap-2 hover:text-primary transition-colors group">
                    <Heart className="h-5 w-5 group-hover:fill-primary group-hover:scale-110 transition-all" />
                    <span className="text-sm font-medium">{formatNumber(post.likes)}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-secondary transition-colors group">
                    <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-accent transition-colors group">
                    <Share2 className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{post.shares}</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={post.author.avatar} />
                    <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="flex-1 px-4 py-2 bg-muted rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
