import Image from "next/image";
import { IconButton, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function Hero() {
  return (
    <section className="max-w-[1248px] mx-auto w-full" id="hero-section">
      <div className="bg-[#c1dcdc] rounded-[40px] flex flex-col md:flex-row h-full w-full gap-8">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col relative md:top-12 sm:top-10 top-8 md:left-12 sm:left-8 left-0 z-10 max-sm:text-center sm:text-left sm:items-start items-center sm:w-[90%] w-full">
          <h1 className="hero-title md:text-[64px] sm:text-[45px] text-[35px] text-[clamp(40px,5vw,64px)] font-[800] leading-[1.15] tracking-tight mb-8 text-[#0b0c10]">
            Buy your<br/>dream plants
          </h1>
          
          <div className="stats-container flex items-center justify-center md:justify-start gap-8 md:gap-12 mb-12">
            <div className="flex flex-col gap-1 items-center md:items-start">
              <span className="md:text-[32px] sm:text-[28px] text-[18px] font-[500] text-[#0b0c10] leading-none">50+</span>
              <span className="md:text-[17px] sm:text-[15px] text-[10px] text-[#0b0c10] font-[500] tracking-wide">Plant Species</span>
            </div>
            <div className="w-[1px] md:w-[1.5px] h-12 md:h-14 bg-[#1E1E1E]/30 rounded-full"></div>
            <div className="flex flex-col gap-1 items-center md:items-start">
              <span className="md:text-[32px] sm:text-[28px] text-[18px] font-[500] text-[#0b0c10] leading-none">100+</span>
              <span className="md:text-[17px] sm:text-[15px] text-[10px] text-[#0b0c10] font-[500] tracking-wide">Customers</span>
            </div>
          </div>

          <div className="search-wrapper bg-white flex items-center justify-between md:w-[450px] sm:w-[350px] w-[90%] rounded-[16px] shadow-sm p-2">
            <InputBase
              placeholder="What are you looking for?"
              className="flex-1"
              sx={{
                px: 2,
                py: 1,
                fontFamily: 'var(--font-poppins)',
                fontSize: { xs: '14px', md: '15px' },
                fontWeight: 500,
                color: '#1e1e1e',
                '& input::placeholder': { color: '#888', opacity: 1 },
              }}
            />
            <IconButton
              aria-label="Search"
              className="!bg-[#c1dcdc] hover:!bg-[#a6caca]"
              sx={{ width: 44, height: 44, borderRadius: '12px' }}
            >
              <Search sx={{ color: '#0b0c10', fontSize: 22 }} />
            </IconButton>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="flex-1 md:flex-[1.2] md:min-w-[450px] shrink-0 relative flex items-end justify-center pt-10 md:pt-0 min-h-[300px] md:min-h-[500px]">
          <Image 
            src="/header.svg" 
            alt="Hero Plant" 
            width={500} 
            height={500} 
            className="object-contain object-bottom w-full md:h-[500px] sm:h-[400px] h-[300px] z-[2]"
            priority
          />
        </div>
      </div>
    </section> 
  );
}
