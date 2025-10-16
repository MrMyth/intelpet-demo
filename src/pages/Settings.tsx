import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, Bell, Shield, Globe, CreditCard, HelpCircle } from "lucide-react";
import ownerMarcus from "@/assets/owner-marcus.jpg";

export default function Settings() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="profile">
            <User className="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="privacy">
            <Shield className="h-4 w-4 mr-2" />
            Privacy
          </TabsTrigger>
          <TabsTrigger value="account">
            <CreditCard className="h-4 w-4 mr-2" />
            Account
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6">Profile Information</h2>
            
            <div className="flex items-center gap-6 mb-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src={ownerMarcus} />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
              <div>
                <Button variant="outline" className="mb-2">Change Photo</Button>
                <p className="text-sm text-muted-foreground">JPG, PNG. Max 5MB</p>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Marcus" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Bell" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="marcus.bell@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" defaultValue="Pet lover and proud owner of 5 amazing pets!" />
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6">Notification Preferences</h2>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>New Messages</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications for new messages</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Friend Requests</Label>
                  <p className="text-sm text-muted-foreground">Get notified when someone sends a friend request</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Pet Tracking Alerts</Label>
                  <p className="text-sm text-muted-foreground">Alerts when your pet leaves safe zones</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Community Updates</Label>
                  <p className="text-sm text-muted-foreground">News and updates from IntelPet community</p>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive email updates and newsletters</p>
                </div>
                <Switch />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button>Save Preferences</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="privacy">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6">Privacy & Security</h2>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Profile Visibility</Label>
                  <p className="text-sm text-muted-foreground">Make your profile visible to everyone</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Show Location</Label>
                  <p className="text-sm text-muted-foreground">Display your location on your profile</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Allow Messages from Everyone</Label>
                  <p className="text-sm text-muted-foreground">Anyone can send you messages</p>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="space-y-3">
                <Label>Change Password</Label>
                <div className="space-y-2">
                  <Input type="password" placeholder="Current password" />
                  <Input type="password" placeholder="New password" />
                  <Input type="password" placeholder="Confirm new password" />
                </div>
                <Button variant="outline" className="mt-2">Update Password</Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="account">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6">Account Settings</h2>

            <div className="space-y-6">
              <div>
                <Label className="text-lg mb-2 block">Language & Region</Label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">English (US)</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <Label className="text-lg mb-2 block">Subscription</Label>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-semibold mb-1">Free Plan</p>
                  <p className="text-sm text-muted-foreground mb-3">Basic features included</p>
                  <Button>Upgrade to Premium</Button>
                </div>
              </div>

              <Separator />

              <div>
                <Label className="text-lg mb-2 block text-destructive">Danger Zone</Label>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Export Your Data
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Deactivate Account
                  </Button>
                  <Button variant="destructive" className="w-full justify-start">
                    Delete Account
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}