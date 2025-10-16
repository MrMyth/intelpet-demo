import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Search, Send, MoreVertical } from "lucide-react";
import { useState } from "react";
import chatSarah from "@/assets/chat-sarah.jpg";
import chatMike from "@/assets/chat-mike.jpg";
import chatEmma from "@/assets/chat-emma.jpg";

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(0);

  const chats = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: chatSarah,
      lastMessage: "Thanks for the pet care tips!",
      time: "10:30 AM",
      unread: 2,
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: chatMike,
      lastMessage: "My dog loved the park you recommended",
      time: "Yesterday",
      unread: 0,
    },
    {
      id: 3,
      name: "Emma Wilson",
      avatar: chatEmma,
      lastMessage: "See you at the meetup!",
      time: "2 days ago",
      unread: 1,
    },
  ];

  const messages = [
    { id: 1, text: "Hi! How is your dog doing?", sent: false, time: "10:15 AM" },
    { id: 2, text: "He's doing great! Thanks for asking", sent: true, time: "10:20 AM" },
    { id: 3, text: "Thanks for the pet care tips!", sent: false, time: "10:30 AM" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>
      
      <div className="grid md:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
        {/* Chat List */}
        <Card className="md:col-span-1 p-4 flex flex-col">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-10" />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-2">
            {chats.map((chat, index) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(index)}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedChat === index ? "bg-primary/10" : "hover:bg-muted"
                }`}
              >
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarImage src={chat.avatar} alt={chat.name} />
                    <AvatarFallback>{chat.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold truncate">{chat.name}</h3>
                      <span className="text-xs text-muted-foreground">{chat.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {chat.lastMessage}
                    </p>
                  </div>
                  {chat.unread > 0 && (
                    <div className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {chat.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Chat Window */}
        <Card className="md:col-span-2 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={chats[selectedChat].avatar} alt={chats[selectedChat].name} />
                <AvatarFallback>{chats[selectedChat].name[0]}</AvatarFallback>
              </Avatar>
              <h2 className="font-semibold">{chats[selectedChat].name}</h2>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sent ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.sent
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p>{message.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">{message.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input placeholder="Type a message..." className="flex-1" />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}