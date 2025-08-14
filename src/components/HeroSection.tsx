'use client';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Play, Users, Award, Globe, Video } from 'lucide-react';
import { ApplyLink } from '../app/info/info';
import { useEffect, useRef } from 'react';
 
export function HeroSection() {
          const videoRef = useRef<HTMLVideoElement>(null);
     useEffect(() => {
       if (videoRef.current) {
         videoRef.current.play().catch((error) => {
           console.log('Error playing video:', error);
         });
       }
     }, []);
  const stats = [
    { icon: Users, label: 'Students', value: '4,000+' },
    // { icon: Globe, label: 'Countries', value: '120+' },
    { icon: Award, label: 'Programs', value: '25+' },
  ];

  return (
    <section
      id="Home"
      className="  py-2 sm:p-0 m-0  overflow-x-hidden  w-full flex items-center relative  bg-gradient-to-br from-background via-background to-secondary/20"
      style={{
        minHeight: "calc(100dvh - 105px)",
      }}
    >
      <div
        className=" sm:w-full sm:h-full overflow-x-hidden sm:flex px-0 sm:px-5    "
        style={{
          minHeight: "calc(100dvh - 105px)",
        }}
      >
        <div className="relative w-full grid lg:grid-cols-2 gap-0 sm:gap-12 items-center">
          {/* Content */}
          <div className="px-5 order-2 sm:order-1  sm:w-[60%] space-y-8    z-10   ">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-3 py-1">
                Ranked #22 Egyptian universities 2025
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Al-Ryada University
                <br />
                <span className="text-primary text-[2rem]">
                  for Science and Technology
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Join a global community of learners, innovators, and leaders.
                Experience world-class education that prepares you for
                tomorrow's challenges.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-base"
                onClick={() => {
                  window.open(ApplyLink, "_blank");
                }}
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* <Button variant="outline" size="lg" className="text-base">
                <Play className="mr-2 h-5 w-5" />
                Virtual Tour
              </Button> */}
            </div>

            {/* Stats */}
            <div className="flex justify-around gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className=" order-1  sm:order-2 relative  px-5 sm:p-5 h-[400px] sm:h-full sm:absolute w-screen   sm:w-[80%] sm:top-0 sm:bottom-0 sm:right-0 sm:z-0 ">
            <div className="sm:hidden  block absolute   left-0 bottom-[-5px] h-[50%] w-full bg-gradient-to-t  from-white z-8  to-transparent"></div>

            <div className="hidden  sm:block sm:absolute   left-0 bottom-0 h-full w-[50%] bg-gradient-to-r  from-white z-8  to-transparent"></div>
            <div className="  h-full w-full rounded-t-xl sm:rounded-xl overflow-hidden   transition-transform  ">
              <Card
                style={{ borderRadius: 0 }}
                className=" aspect-video overflow-hidden border-0 h-full w-full "
              >
                <video
                  ref={videoRef}
                  className="w-full h-full aspect-video object-cover"
                  autoPlay
                  loop
                  playsInline
                  muted
                  controls={false}
                  preload="metadata"
                  poster="/rst-slider-1.webp" // Optional
                >
                  <source
                    width={100}
                    src="DiscoverRSTUniversity/RST.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* <iframe
                  className="rounded-xl overflow-hidden bg-white"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                    backgroundColor: "white",
                  }}
                  title="جامعة الريادة للعلوم والتكنولوجيا"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/NxNUY9nlURI?controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Frst.edu.eg&amp;widgetid=1&amp;forigin=https%3A%2F%2Frst.edu.eg%2F&amp;aoriginsup=1&amp;vf=6&amp;autoplay=1&amp;mute=1&amp;vq=hd1080"
                ></iframe> */}

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

              <Card className="absolute top-1 right-1  sm:top-8 sm:right-8  z-10 p-4 shadow-lg bg-background/95 backdrop-blur">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Top Ranked</div>
                    <div className="text-sm text-muted-foreground">
                      #1075 Globally
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}