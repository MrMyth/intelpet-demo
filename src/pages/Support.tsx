import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Mail, Phone, Search, HelpCircle, Book, Video } from "lucide-react";

export default function Support() {
  const faqs = [
    {
      question: "How do I set up GPS tracking for my pet?",
      answer: "To set up GPS tracking, go to your pet's profile, click on 'Add GPS Device', and follow the pairing instructions. Make sure your pet is wearing the GPS collar and it's charged before pairing.",
    },
    {
      question: "What should I do if my pet goes missing?",
      answer: "Immediately activate the 'Lost Pet Alert' from your pet's profile. This will notify your friends network and nearby pet owners. Check the GPS location history and consider contacting local animal shelters.",
    },
    {
      question: "How can I connect with other pet owners?",
      answer: "Visit the Friends page to discover pet owners in your area. You can send friend requests, join community groups, and participate in local pet events posted in the News section.",
    },
    {
      question: "Can I add multiple pets to my account?",
      answer: "Yes! You can add unlimited pets to your account. Go to My Page and click 'Add New Pet' to create profiles for all your furry friends.",
    },
    {
      question: "How do I update my subscription plan?",
      answer: "Navigate to Settings > Account > Subscription to view available plans and upgrade options. Premium plans offer additional features like advanced GPS tracking and priority support.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Find answers to your questions or get in touch with our support team
        </p>
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for help..."
            className="pl-12 h-12 text-lg"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="p-6 text-center hover:shadow-large transition-shadow cursor-pointer">
          <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Book className="h-8 w-8 text-white" />
          </div>
          <h3 className="font-bold text-lg mb-2">Documentation</h3>
          <p className="text-muted-foreground text-sm">
            Browse our comprehensive guides and tutorials
          </p>
        </Card>

        <Card className="p-6 text-center hover:shadow-large transition-shadow cursor-pointer">
          <div className="bg-gradient-secondary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Video className="h-8 w-8 text-white" />
          </div>
          <h3 className="font-bold text-lg mb-2">Video Tutorials</h3>
          <p className="text-muted-foreground text-sm">
            Watch step-by-step video guides
          </p>
        </Card>

        <Card className="p-6 text-center hover:shadow-large transition-shadow cursor-pointer">
          <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          <h3 className="font-bold text-lg mb-2">Community Forum</h3>
          <p className="text-muted-foreground text-sm">
            Connect with other pet owners
          </p>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <HelpCircle className="h-6 w-6" />
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6">Contact Support</h2>
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <Mail className="h-5 w-5 mt-1 text-primary" />
              <div>
                <p className="font-semibold">Email Support</p>
                <p className="text-sm text-muted-foreground">support@intelpet.com</p>
                <p className="text-xs text-muted-foreground mt-1">Response within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <Phone className="h-5 w-5 mt-1 text-primary" />
              <div>
                <p className="font-semibold">Phone Support</p>
                <p className="text-sm text-muted-foreground">+1 (800) 123-4567</p>
                <p className="text-xs text-muted-foreground mt-1">Mon-Fri, 9AM-6PM EST</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <MessageCircle className="h-5 w-5 mt-1 text-primary" />
              <div>
                <p className="font-semibold">Live Chat</p>
                <p className="text-sm text-muted-foreground">Chat with our team</p>
                <p className="text-xs text-muted-foreground mt-1">Average response: 5 minutes</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="How can we help?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Describe your issue..."
                rows={5}
              />
            </div>
            <Button className="w-full">Send Message</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}