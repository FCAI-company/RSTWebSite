"use client";
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, Clock, FileText, Upload, CreditCard, Calendar, ArrowRight, Play } from 'lucide-react';
import { useRef, useState } from 'react';
 
export function DiscoverRSTUniversity() {
   const [isPlaying, setIsPlaying] = useState(false);

     const videoRef = useRef<HTMLVideoElement>(null);

     const handlePlay = () => {
       if (videoRef.current) {
     
        if (isPlaying)
        {
                        document.getElementById("vDS")?.classList.remove("hidden");
          videoRef.current.pause();
         
        }
          else
          {
            videoRef.current.play();
            setTimeout(() => {
              document.getElementById("vDS")?.classList.add("hidden");
            }, 700);
          }
       }
     };
  return (
    <section
      id="DiscoverRSTUniversity"
      style={{
         minHeight: "calc(100dvh - 105px)",
          // height: "calc(100dvh - 105px)",
      }}
      className="    relative flex items-center  "
    >
      <div className="sm:container  h-full sm:h-full sm:mx-auto px-2 sm:px-4 lg:px-8 sm:py-20 lg:py-32">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0047AB] mb-0 text-center">
            News &amp; Events
          </h2>
          <p className=" text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-0 text-center">
            Stay updated with the latest news, events, and activities from our
            vibrant university community
          </p>
          <span className="mb-4 mx-auto flex  bg-[#0047AB] w-[300px] h-[2px]"></span>
        </div>

        <div className="relative w-full h-[60vh] sm:h-full rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02]">
          <video
            ref={videoRef}
            className=" w-full h-full    object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            loop
            playsInline
            controls
            poster="/rst-slider-1.webp" // Optional
          >
            <source
              width={100}
              src="DiscoverRSTUniversity/DiscoverRSTUniversity.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div
            onClick={handlePlay}
            id="vDS"
            className={`absolute inset-0 flex-col  p-2 text-center content-center align-middle  sm:flex sm:items-center sm:justify-center transition-opacity duration-700 ease-in-out  ${
              isPlaying ? "opacity-0 " : "opacity-100"
            }`}
            style={{ backgroundColor: "rgba(0, 71, 171,0.6)" }}
          >
            <div className="flex justify-center">
              <Play className="mr-2 h-20 w-20  animate-pulse" color="White" />
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-white">
                Discover <span>RST University</span>
              </h2>
              <p className="mt-2 text-lg text-white/80">
                Where innovation meets inspiration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}