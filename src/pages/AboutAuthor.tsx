import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, Twitter, Globe, Heart } from "lucide-react";
import authorImage from "@/assets/user-sarah.jpg";

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
                Sarah Johnson
              </CardTitle>
              <CardDescription className="text-lg">
                Founder & Lead Developer of IntelPet
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge variant="secondary">Full Stack Developer</Badge>
                <Badge variant="secondary">Pet Enthusiast</Badge>
                <Badge variant="secondary">Open Source Contributor</Badge>
                <Badge variant="secondary">AI/ML Expert</Badge>
              </div>

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-center text-muted-foreground leading-relaxed">
                  Passionate about creating innovative solutions that bring pet owners together. 
                  With over 8 years of experience in web development and a lifelong love for animals,
                  I created IntelPet to combine technology with the joy of pet ownership.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Twitter className="h-4 w-4" />
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  Website
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
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
              <p>
                After adopting my rescue dog Max in 2020, I realized how valuable community support
                was in navigating the challenges and joys of pet ownership. This inspired me to
                create a platform that brings together pet lovers from all walks of life.
              </p>
              <p>
                Today, IntelPet serves thousands of pet owners worldwide, helping them find friends,
                share memories, discover pet-friendly places, and access valuable resources for
                their beloved companions.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Vite</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">UI Components</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Radix UI</Badge>
                  <Badge>Shadcn/ui</Badge>
                  <Badge>Lucide Icons</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tools & Libraries</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>React Router</Badge>
                  <Badge>React Query</Badge>
                  <Badge>React Hook Form</Badge>
                </div>
              </div>
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
