import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MapPin, Users, Heart, Shield, Globe, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-pets.jpg";
import trackingIcon from "@/assets/icon-tracking.png";
import communityIcon from "@/assets/icon-community.png";
import healthIcon from "@/assets/icon-health.png";

export default function Home() {
  const features = [
    {
      icon: MapPin,
      title: "GPS Pet Tracking",
      description: "Track your pet's location in real-time with advanced GPS technology. Never lose sight of your furry friend.",
      image: trackingIcon,
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Connect with pet lovers worldwide. Share experiences, find playmates, and build lasting friendships.",
      image: communityIcon,
    },
    {
      icon: Heart,
      title: "Health & Care",
      description: "Access expert advice, health records, and breeding information all in one place.",
      image: healthIcon,
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is protected with industry-leading security measures.",
    },
    {
      icon: Globe,
      title: "Worldwide Network",
      description: "Join millions of pet owners across the globe.",
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Access IntelPet anywhere, anytime from any device.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero backdrop-blur-[2px]" />
        </div>
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Pet's Social Network & GPS Tracker
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join the global community of pet lovers. Track, connect, and care for your pets like never before.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/my-page">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-large">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything Your Pet Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern technology meets loving pet care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2 hover:border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                      <img src={feature.image} alt={feature.title} className="w-12 h-12" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose IntelPet?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your journey with IntelPet today and give your pet the care they deserve.
          </p>
          <Link to="/my-page">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Sign Up Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
