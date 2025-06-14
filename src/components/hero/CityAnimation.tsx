
const CityAnimation = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      {/* Building blocks that form a city skyline */}
      <div className="relative h-full w-full">
        {/* Tall skyscraper with windows and ATC tower */}
        <div className="absolute bottom-0 left-[10%] w-8 bg-white/30 animate-[growUp_4s_ease-out_infinite] origin-bottom" style={{ height: '60%', animationDelay: '0s' }}>
          {/* Windows */}
          <div className="absolute top-2 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-2 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '0.6s' }} />
          <div className="absolute top-5 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '0.7s' }} />
          <div className="absolute top-5 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '0.8s' }} />
          <div className="absolute top-8 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '0.9s' }} />
          <div className="absolute top-8 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '1s' }} />
          {/* ATC Tower on top */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/40 animate-[growUp_4s_ease-out_infinite] origin-bottom" style={{ animationDelay: '1.2s' }} />
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-white/50 animate-[growUp_4s_ease-out_infinite] origin-bottom" style={{ animationDelay: '1.4s' }} />
        </div>
        
        <div className="absolute bottom-0 left-[15%] w-6 bg-white/25 animate-[growUp_4s_ease-out_infinite] origin-bottom" style={{ height: '45%', animationDelay: '0.5s' }}>
          {/* Windows */}
          <div className="absolute top-2 left-0.5 w-1 h-0.5 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '1s' }} />
          <div className="absolute top-2 right-0.5 w-1 h-0.5 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '1.1s' }} />
          <div className="absolute top-4 left-0.5 w-1 h-0.5 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '1.2s' }} />
          <div className="absolute top-4 right-0.5 w-1 h-0.5 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '1.3s' }} />
        </div>
        
        {/* Large building with communication tower */}
        <div className="absolute bottom-0 left-[20%] w-10 bg-white/35 animate-[growUp_4s_ease-out_infinite] origin-bottom" style={{ height: '70%', animationDelay: '1s' }}>
          {/* Multiple floors of windows */}
          <div className="absolute top-2 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-2 left-3.5 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '1.6s' }} />
          <div className="absolute top-2 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '1.7s' }} />
          <div className="absolute top-5 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '1.8s' }} />
          <div className="absolute top-5 left-3.5 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '1.9s' }} />
          <div className="absolute top-5 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2s' }} />
          <div className="absolute top-8 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.1s' }} />
          <div className="absolute top-8 left-3.5 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.2s' }} />
          <div className="absolute top-8 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.3s' }} />
          {/* Communication tower */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/40 animate-[growUp_4s_ease-out_infinite] origin-bottom" style={{ animationDelay: '2.5s' }} />
          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-white/50 animate-[growUp_4s_ease-out_infinite] origin-bottom" style={{ animationDelay: '2.7s' }} />
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-white/30 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.9s' }} />
        </div>
        
        <div className="absolute bottom-0 left-[28%] w-7 bg-white/28 animate-[growUp_4s_ease-out_infinite] origin-bottom" style={{ height: '50%', animationDelay: '1.5s' }}>
          {/* Windows */}
          <div className="absolute top-2 left-1 w-1 h-0.5 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2s' }} />
          <div className="absolute top-2 right-1 w-1 h-0.5 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.1s' }} />
          <div className="absolute top-4 left-1 w-1 h-0.5 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.2s' }} />
          <div className="absolute top-4 right-1 w-1 h-0.5 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.3s' }} />
          <div className="absolute top-6 left-1 w-1 h-0.5 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.4s' }} />
          <div className="absolute top-6 right-1 w-1 h-0.5 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.5s' }} />
        </div>
        
        <div className="absolute bottom-0 left-[34%] w-9 bg-white/32 animate-[growUp_4s_ease-out_infinite] origin-bottom" style={{ height: '65%', animationDelay: '2s' }}>
          {/* Windows in rows */}
          <div className="absolute top-2 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.5s' }} />
          <div className="absolute top-2 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.6s' }} />
          <div className="absolute top-5 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.7s' }} />
          <div className="absolute top-5 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.8s' }} />
          <div className="absolute top-8 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.9s' }} />
          <div className="absolute top-8 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '3s' }} />
        </div>
        
        {/* Medium buildings with windows */}
        <div className="absolute bottom-0 left-[42%] w-12 bg-white/30 animate-[growUp_4s_ease-out_infinite] origin-bottom" style={{ height: '40%', animationDelay: '2.5s' }}>
          <div className="absolute top-2 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '3s' }} />
          <div className="absolute top-2 left-4 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '3.1s' }} />
          <div className="absolute top-2 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '3.2s' }} />
          <div className="absolute top-5 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '3.3s' }} />
          <div className="absolute top-5 left-4 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '3.4s' }} />
          <div className="absolute top-5 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '3.5s' }} />
        </div>
        
        <div className="absolute bottom-0 left-[52%] w-8 bg-white/25 animate-[growUp_4s_ease-out_infinite] origin-bottom" style={{ height: '35%', animationDelay: '3s' }}>
          <div className="absolute top-2 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '3.5s' }} />
          <div className="absolute top-2 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '3.6s' }} />
          <div className="absolute top-5 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '3.7s' }} />
          <div className="absolute top-5 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '3.8s' }} />
        </div>
        
        <div className="absolute bottom-0 left-[58%] w-10 bg-white/35 animate-[growUp_4s_ease-out_infinite] origin-bottom" style={{ height: '55%', animationDelay: '3.5s' }}>
          <div className="absolute top-2 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '4s' }} />
          <div className="absolute top-2 left-3.5 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '4.1s' }} />
          <div className="absolute top-2 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '4.2s' }} />
          <div className="absolute top-5 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '4.3s' }} />
          <div className="absolute top-5 left-3.5 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '4.4s' }} />
          <div className="absolute top-5 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '4.5s' }} />
        </div>
        
        <div className="absolute bottom-0 left-[66%] w-6 bg-white/28 animate-[growUp_4s_ease-out_infinite] origin-bottom" style={{ height: '30%', animationDelay: '4s' }}>
          <div className="absolute top-2 left-1 w-1 h-0.5 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '4.5s' }} />
          <div className="absolute top-2 right-1 w-1 h-0.5 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '4.6s' }} />
        </div>
        
        {/* Tallest building with ATC tower */}
        <div className="absolute bottom-0 left-[72%] w-9 bg-white/32 animate-[growUp_4s_ease-out_infinite] origin-bottom" style={{ height: '75%', animationDelay: '0.8s' }}>
          <div className="absolute top-2 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '1.3s' }} />
          <div className="absolute top-2 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '1.4s' }} />
          <div className="absolute top-5 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-5 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '1.6s' }} />
          <div className="absolute top-8 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '1.7s' }} />
          <div className="absolute top-8 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '1.8s' }} />
          <div className="absolute top-11 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '1.9s' }} />
          <div className="absolute top-11 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2s' }} />
          {/* ATC Tower on top */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/40 animate-[growUp_4s_ease-out_infinite] origin-bottom" style={{ animationDelay: '2.2s' }} />
          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-white/50 animate-[growUp_4s_ease-out_infinite] origin-bottom" style={{ animationDelay: '2.4s' }} />
        </div>
        
        <div className="absolute bottom-0 left-[79%] w-7 bg-white/30 animate-[growUp_4s_ease-out_infinite] origin-bottom" style={{ height: '48%', animationDelay: '1.3s' }}>
          <div className="absolute top-2 left-1 w-1 h-0.5 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '1.8s' }} />
          <div className="absolute top-2 right-1 w-1 h-0.5 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '1.9s' }} />
          <div className="absolute top-4 left-1 w-1 h-0.5 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2s' }} />
          <div className="absolute top-4 right-1 w-1 h-0.5 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.1s' }} />
        </div>
        
        <div className="absolute bottom-0 left-[85%] w-11 bg-white/35 animate-[growUp_4s_ease-out_infinite] origin-bottom" style={{ height: '68%', animationDelay: '1.8s' }}>
          <div className="absolute top-2 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.3s' }} />
          <div className="absolute top-2 left-4 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.4s' }} />
          <div className="absolute top-2 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.5s' }} />
          <div className="absolute top-5 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.6s' }} />
          <div className="absolute top-5 left-4 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.7s' }} />
          <div className="absolute top-5 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.8s' }} />
          <div className="absolute top-8 left-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '2.9s' }} />
          <div className="absolute top-8 left-4 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '3s' }} />
          <div className="absolute top-8 right-1 w-1.5 h-1 bg-white/60 animate-[fadeInWindows_4s_ease-out_infinite]" style={{ animationDelay: '3.1s' }} />
        </div>
        
        {/* Infrastructure elements */}
        {/* Bridge/overpass */}
        <div className="absolute bottom-[20%] left-[30%] w-32 h-2 bg-white/20 animate-[slideInLeft_3s_ease-out_infinite] origin-left" style={{ animationDelay: '2.2s' }} />
        <div className="absolute bottom-[20%] left-[30%] w-2 h-8 bg-white/20 animate-[growUp_3s_ease-out_infinite] origin-bottom" style={{ animationDelay: '2.4s' }} />
        <div className="absolute bottom-[20%] left-[60%] w-2 h-8 bg-white/20 animate-[growUp_3s_ease-out_infinite] origin-bottom" style={{ animationDelay: '2.6s' }} />
        
        {/* Construction cranes */}
        <div className="absolute bottom-0 left-[25%] w-1 bg-white/15 animate-[growUp_5s_ease-out_infinite] origin-bottom" style={{ height: '80%', animationDelay: '1.2s' }} />
        <div className="absolute bottom-[80%] left-[25%] w-8 h-1 bg-white/15 animate-[slideInLeft_5s_ease-out_infinite] origin-left" style={{ animationDelay: '1.7s' }} />
        <div className="absolute bottom-0 left-[75%] w-1 bg-white/15 animate-[growUp_5s_ease-out_infinite] origin-bottom" style={{ height: '85%', animationDelay: '2.8s' }} />
        <div className="absolute bottom-[85%] left-[75%] w-10 h-1 bg-white/15 animate-[slideInRight_5s_ease-out_infinite] origin-right" style={{ animationDelay: '3.3s' }} />
        
        {/* Small infrastructure blocks */}
        <div className="absolute bottom-0 left-[5%] w-4 bg-white/20 animate-[growUp_3s_ease-out_infinite] origin-bottom" style={{ height: '15%', animationDelay: '0.3s' }} />
        <div className="absolute bottom-0 left-[90%] w-5 bg-white/20 animate-[growUp_3s_ease-out_infinite] origin-bottom" style={{ height: '20%', animationDelay: '2.1s' }} />
        <div className="absolute bottom-0 left-[95%] w-3 bg-white/20 animate-[growUp_3s_ease-out_infinite] origin-bottom" style={{ height: '12%', animationDelay: '2.9s' }} />
      </div>
    </div>
  );
};

export default CityAnimation;
