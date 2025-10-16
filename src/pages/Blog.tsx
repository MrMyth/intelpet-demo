import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { PenSquare, Calendar, Clock, Heart, MessageCircle } from "lucide-react";
import blogTraining from "@/assets/blog-training.jpg";
import blogParks from "@/assets/blog-parks.jpg";
import blogLanguage from "@/assets/blog-language.jpg";
import ownerMarcus from "@/assets/owner-marcus.jpg";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "10 Tips for Training Your Puppy",
      excerpt: "Discover the essential techniques to train your new puppy effectively and create a strong bond from the start.",
      image: blogTraining,
      author: "Marcus Bell",
      avatar: ownerMarcus,
      date: "March 15, 2024",
      readTime: "5 min read",
      likes: 45,
      comments: 12,
      tags: ["Training", "Puppies", "Tips"],
    },
    {
      id: 2,
      title: "Best Pet-Friendly Parks in the City",
      excerpt: "A comprehensive guide to the most amazing parks where you and your furry friend can enjoy quality time together.",
      image: blogParks,
      author: "Marcus Bell",
      avatar: ownerMarcus,
      date: "March 10, 2024",
      readTime: "8 min read",
      likes: 67,
      comments: 23,
      tags: ["Places", "Outdoor", "Activities"],
    },
    {
      id: 3,
      title: "Understanding Your Pet's Body Language",
      excerpt: "Learn to read the subtle signs and signals that your pet uses to communicate their feelings and needs.",
      image: blogLanguage,
      author: "Marcus Bell",
      avatar: ownerMarcus,
      date: "March 5, 2024",
      readTime: "6 min read",
      likes: 89,
      comments: 34,
      tags: ["Behavior", "Care", "Health"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Blog</h1>
          <p className="text-muted-foreground">Share your pet care experiences and stories</p>
        </div>
        <Button>
          <PenSquare className="h-4 w-4 mr-2" />
          Write Post
        </Button>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-large transition-shadow">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src={post.avatar} alt={post.author} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{post.author}</p>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      {post.comments}
                    </span>
                  </div>
                  <Button variant="outline">Read More</Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}