import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function FlashStallTest() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header with Dark Mode Toggle */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-h1-mobile md:text-h1-desktop font-heading text-primary">
            FlashStall Test
          </h1>
          <Button onClick={toggleDarkMode} variant="outline">
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </Button>
        </div>
      </div>

      <div className="container mx-auto p-6 space-y-8">
        {/* Color System Test */}
        <section className="space-y-4">
          <h2>Color System</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flashstall-primary p-4 rounded-lg text-center">
              <div className="font-ui text-meta-mobile">Primary</div>
              <div className="font-body text-sm">#1F62B9</div>
            </div>
            <div className="flashstall-secondary p-4 rounded-lg text-center">
              <div className="font-ui text-meta-mobile">Secondary</div>
              <div className="font-body text-sm">#FFB6C1</div>
            </div>
            <div className="bg-success text-success-foreground p-4 rounded-lg text-center">
              <div className="font-ui text-meta-mobile">Success</div>
              <div className="font-body text-sm">#49A870</div>
            </div>
            <div className="bg-destructive text-destructive-foreground p-4 rounded-lg text-center">
              <div className="font-ui text-meta-mobile">Destructive</div>
              <div className="font-body text-sm">#EF4443</div>
            </div>
          </div>
        </section>

        {/* Typography Test */}
        <section className="space-y-4">
          <h2>Typography Hierarchy</h2>
          <Card className="flashstall-surface p-6">
            <h1 className="text-flashstall-blue mb-2">
              H1: FlashStall Marketplace (IBM Plex Serif)
            </h1>
            <h2 className="text-flashstall-ink mb-2">
              H2: Category Section (IBM Plex Serif)
            </h2>
            <h3 className="text-flashstall-ink mb-4">
              H3: Product Subsection (IBM Plex Serif)
            </h3>
            <p className="mb-4">
              Body text using IBM Plex Mono for excellent readability. This font
              provides a clean, modern look while maintaining excellent
              legibility across all devices and screen sizes.
            </p>
            <div className="flashstall-meta text-muted-foreground mb-4">
              Meta information and tags using Courier Prime font
            </div>
            <Button className="flashstall-button">
              Button Text (Courier Prime)
            </Button>
          </Card>
        </section>

        {/* Button Variants Test */}
        <section className="space-y-4">
          <h2>Button Components</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" className="flashstall-button">
              Default Primary
            </Button>
            <Button variant="secondary" className="flashstall-button">
              Secondary Pink
            </Button>
            <Button variant="destructive" className="flashstall-button">
              Destructive Red
            </Button>
            <Button variant="outline" className="flashstall-button">
              Outline
            </Button>
            <Button variant="ghost" className="flashstall-button">
              Ghost
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="sm" className="flashstall-button">
              Small
            </Button>
            <Button size="default" className="flashstall-button">
              Default
            </Button>
            <Button size="lg" className="flashstall-button">
              Large
            </Button>
            <Button disabled className="flashstall-button">
              Disabled
            </Button>
          </div>
        </section>

        {/* Card Components Test */}
        <section className="space-y-4">
          <h2>Card Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="flashstall-surface">
              <CardHeader>
                <CardTitle className="font-heading">
                  Fresh Vegetables Stall
                </CardTitle>
                <div className="flashstall-meta text-muted-foreground">
                  Category: Produce • Vendor: John's Farm
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Organic vegetables sourced directly from local farms. Fresh
                  daily delivery guaranteed.
                </p>
                <div className="flex justify-between items-center">
                  <span className="flashstall-meta text-success">Open Now</span>
                  <Button size="sm" className="flashstall-button">
                    Visit Stall
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="flashstall-surface">
              <CardHeader>
                <CardTitle className="font-heading">Artisan Bakery</CardTitle>
                <div className="flashstall-meta text-muted-foreground">
                  Category: Food • Vendor: Sweet Dreams
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Handcrafted breads and pastries made with premium ingredients.
                  Baked fresh every morning.
                </p>
                <div className="flex justify-between items-center">
                  <span className="flashstall-meta text-destructive">
                    Closed
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flashstall-button"
                  >
                    View Menu
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="flashstall-surface">
              <CardHeader>
                <CardTitle className="font-heading">Tech Accessories</CardTitle>
                <div className="flashstall-meta text-muted-foreground">
                  Category: Electronics • Vendor: TechHub
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Latest gadgets and accessories for all your tech needs.
                  Competitive prices with warranty.
                </p>
                <div className="flex justify-between items-center">
                  <span className="flashstall-meta text-primary">
                    Flash Sale!
                  </span>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="flashstall-button"
                  >
                    Browse
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dialog Test */}
        <section className="space-y-4">
          <h2>Dialog Components</h2>
          <div className="flex gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flashstall-button">
                  Open Product Details
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-card">
                <DialogHeader>
                  <DialogTitle className="font-heading">
                    Product Information
                  </DialogTitle>
                  <DialogDescription className="font-body">
                    Detailed information about the selected product
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-4">
                  <h3 className="font-heading text-lg">Organic Tomatoes</h3>
                  <p className="font-body">
                    Fresh organic tomatoes grown without pesticides. Perfect for
                    salads, cooking, and sandwiches.
                  </p>
                  <div className="flashstall-meta text-muted-foreground">
                    Price: $3.99/lb • Origin: Local Farm • Available: 20 lbs
                  </div>
                  <div className="flex gap-2">
                    <Button className="flashstall-button">Add to Cart</Button>
                    <Button variant="outline" className="flashstall-button">
                      Save for Later
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Responsive Test Instructions */}
        <section className="space-y-4">
          <h2>Responsive Design Test</h2>
          <Card className="flashstall-surface p-6">
            <h3 className="mb-4">Test Instructions:</h3>
            <div className="space-y-2 font-body">
              <p>✅ Resize browser window to test responsive typography</p>
              <p>✅ Toggle dark/light mode using the button in header</p>
              <p>✅ Check all colors have proper contrast in both modes</p>
              <p>
                ✅ Verify fonts load correctly (IBM Plex Serif, IBM Plex Mono,
                Courier Prime)
              </p>
              <p>✅ Test button interactions and hover states</p>
              <p>✅ Open dialogs and check modal behavior</p>
            </div>
          </Card>
        </section>

        {/* Theme Preview */}
        <section className="space-y-4">
          <h2>Current Theme: {isDark ? 'Dark Mode' : 'Light Mode'}</h2>
          <div className="p-6 border border-border rounded-lg">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
              <div className="space-y-2">
                <div className="w-full h-12 bg-background border border-border rounded"></div>
                <div className="flashstall-meta">Background</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-12 bg-card border border-border rounded"></div>
                <div className="flashstall-meta">Card</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-12 bg-primary rounded"></div>
                <div className="flashstall-meta">Primary</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-12 bg-secondary rounded"></div>
                <div className="flashstall-meta">Secondary</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-12 bg-muted rounded"></div>
                <div className="flashstall-meta">Muted</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-12 border-2 border-border rounded"></div>
                <div className="flashstall-meta">Border</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
