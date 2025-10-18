import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Heart } from "lucide-react";
import authorImage from "@/assets/me.jpg";

export default function AboutAuthor() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-primary/20 shadow-elegant">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50"></div>
                  <img
                    src={authorImage}
                    alt="Project Author"
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-background shadow-soft"
                  />
                </div>
              </div>
              <CardTitle className="text-4xl mb-2 bg-gradient-primary bg-clip-text text-transparent">
                Dmitry Starchikov
              </CardTitle>
              <CardDescription className="text-lg">
                Author of the idea
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-center text-muted-foreground leading-relaxed">
                  This is just a website layout, I wanted to show the world my idea. Now I am in a difficult financial situation - I am unemployed and disabled. I can't walk on my own. The Email button is working: I am ready to sell the idea to you if such an offer comes from you.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2"
                  asChild
                >
                  <a href="mailto:dmstarchikov@outlook.com">
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                The Story Behind IntelPet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                IntelPet was born from a simple idea: pet owners need a dedicated space to connect,
                share experiences, and support each other in their pet parenting journey.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Vision Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-soft bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="text-2xl">Vision for the Future</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                My vision for IntelPet is to create the most comprehensive and user-friendly
                platform for pet owners worldwide. I'm committed to continuously improving
                the platform with new features that make pet ownership easier and more enjoyable.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-card rounded-lg p-4 border border-border">
                  <h4 className="font-semibold text-foreground mb-2">🎯 Current Focus</h4>
                  <p className="text-sm">
                    Enhancing community features and improving mobile experience
                  </p>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <h4 className="font-semibold text-foreground mb-2">🚀 Coming Soon</h4>
                  <p className="text-sm">
                    AI-powered pet health tracking and veterinary consultation features
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
