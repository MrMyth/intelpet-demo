import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ShoppingCart, Star, Filter } from "lucide-react";

export default function Shop() {
  const products = [
    {
      id: 1,
      name: "Premium Dog Food",
      price: 45.99,
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop",
      category: "Food",
      inStock: true,
    },
    {
      id: 2,
      name: "Interactive Toy Bundle",
      price: 29.99,
      rating: 4.6,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=400&h=400&fit=crop",
      category: "Toys",
      inStock: true,
    },
    {
      id: 3,
      name: "Comfort Pet Bed",
      price: 79.99,
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1616794031723-1e28a6d17b48?w=400&h=400&fit=crop",
      category: "Accessories",
      inStock: true,
    },
    {
      id: 4,
      name: "GPS Tracking Collar",
      price: 149.99,
      rating: 4.7,
      reviews: 312,
      image: "https://images.unsplash.com/photo-1611003228941-98852ba62227?w=400&h=400&fit=crop",
      category: "Technology",
      inStock: true,
    },
    {
      id: 5,
      name: "Grooming Kit Pro",
      price: 59.99,
      rating: 4.5,
      reviews: 178,
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
      category: "Grooming",
      inStock: false,
    },
    {
      id: 6,
      name: "Travel Carrier",
      price: 89.99,
      rating: 4.8,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop",
      category: "Accessories",
      inStock: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Pet Shop</h1>
        <p className="text-muted-foreground">Everything your pet needs in one place</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <TabsList>
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
            <TabsTrigger value="toys">Toys</TabsTrigger>
            <TabsTrigger value="accessories">Accessories</TabsTrigger>
          </TabsList>
          
          <div className="flex gap-2 md:ml-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <TabsContent value="all">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-large transition-shadow">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {!product.inStock && (
                    <Badge className="absolute top-2 right-2" variant="destructive">
                      Out of Stock
                    </Badge>
                  )}
                  <Badge className="absolute top-2 left-2">
                    {product.category}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <Button disabled={!product.inStock}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="food">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.filter(p => p.category === "Food").map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-large transition-shadow">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <Button>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="toys">
          <p className="text-center text-muted-foreground py-8">Toys coming soon...</p>
        </TabsContent>

        <TabsContent value="accessories">
          <p className="text-center text-muted-foreground py-8">Accessories coming soon...</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}