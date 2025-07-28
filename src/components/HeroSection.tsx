import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Play, Users, Award, Globe, Video } from 'lucide-react';

export function HeroSection() {
  const stats = [
    { icon: Users, label: 'Students', value: '50,000+' },
    { icon: Globe, label: 'Countries', value: '120+' },
    { icon: Award, label: 'Programs', value: '300+' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-3 py-1">
                Ranked #22  Egyptian universities 2025
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Al-Ryada University
                <br />
                <span className="text-primary text-[2rem]">for Science and Technology</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Join a global community of learners, innovators, and leaders. Experience world-class education that prepares you for tomorrow's challenges.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                <Play className="mr-2 h-5 w-5" />
                Virtual Tour
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            
            <Card className="aspect-video overflow-hidden border-0 shadow-2xl">
           {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/p87RbUKinVc" title="الجامعة الخاصة الرائدة في قلب مدينة السادات" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"    ></iframe> */}
            <iframe allow="autoplay; encrypted-media"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}     
          title="جامعة الريادة للعلوم والتكنولوجيا" width="100%" height="100%" src="https://www.youtube.com/embed/NxNUY9nlURI?controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Frst.edu.eg&amp;widgetid=1&amp;forigin=https%3A%2F%2Frst.edu.eg%2F&amp;aoriginsup=1&amp;vf=6&amp;autoplay=1&amp;mute=1&amp;vq=hd1080"   ></iframe> 
             
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="University campus with diverse students"
                className="w-full h-full object-cover"
              /> */}
            </Card>
            
            {/* Floating Cards */}
            {/* <Card className="absolute -top-4 -left-4 p-4 shadow-lg bg-background/95 backdrop-blur">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Global Network</div>
                  <div className="text-sm text-muted-foreground">2+ Countries</div>
                </div>
              </div>
            </Card> */}

            <Card className="absolute -bottom-4 -right-4 p-4 shadow-lg bg-background/95 backdrop-blur">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Top Ranked</div>
                  <div className="text-sm text-muted-foreground">#1075 Globally</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}