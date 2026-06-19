import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  const bgImageUrl = "https://img.pikbest.com/background/20220119/technology-city-building-blue-sense_6230361.jpg!f305cw";

  return (
    <div 
      style={{ backgroundImage: `url('${bgImageUrl}')` }}
      className="relative h-[60vh] w-full bg-cover bg-no-repeat bg-center rounded-2xl shadow-2xl overflow-hidden"
    >
      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60 flex items-center">
        
        {/* Content Container */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-md">
              Turn Ideas into <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Stunning AI Art</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-200/90 max-w-xl leading-relaxed">
              Generate high-quality images from simple text prompts instantly.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/pricing">
                <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-medium px-6 py-2 rounded-xl shadow-lg hover:opacity-90 transition-opacity">
                  Generate Now
                </Button>
              </Link>

              <Link href="/pricing">
                <Button 
                  variant="bordered" 
                  className="border-white/40 text-white font-medium px-6 py-2 rounded-xl hover:bg-white/10 hover:border-white transition-all"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;