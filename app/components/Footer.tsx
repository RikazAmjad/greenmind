import Image from "next/image";

export default function Footer() {
  const links = {
    Information: ["About", "Product", "Blog"],
    Company: ["Community", "Career", "Our story"],
    Contact: ["Getting Started", "Pricing", "Resources"],
  };

  return (
    <footer className="w-full bg-[#c1dcdc] px-24 poppins" id="footer">
      {/* Main footer content */}
      <div className="max-w-[1248px] mx-auto py-10 md:py-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between">

          {/* Left: Brand + tagline + socials */}
          <div className="footer-brand flex flex-col gap-6 max-w-[220px]">
            {/* Logo */}
            <span className="font-logo" style={{fontWeight: 400, fontStyle: "Regular", fontSize: 18, lineHeight: "100%", letterSpacing: "0%"}}>
              GREENMIND
            </span>

            {/* Tagline */}
            <p className="text-[14px] md:text-[18px] text-[#1E1E1E80] font-[500] leading-[1.6] poppins">
              We help you find<br />your dream plant
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-[48px] h-[48px] rounded-full border border-[#0b0c10] flex items-center justify-center hover:bg-[#0b0c10] hover:text-white transition-all duration-200 group"
              >
                <Image src="/facebook.svg" alt="Facebook" width={20} height={20}/>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-[48px] h-[48px] rounded-full border border-[#0b0c10] flex items-center justify-center hover:bg-[#0b0c10] hover:text-white transition-all duration-200 group"
              >
                <Image src="/instagram.svg" alt="Instagram" width={20} height={20}/>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="Twitter"
                className="w-[48px] h-[48px] rounded-full border border-[#0b0c10] flex items-center justify-center hover:bg-[#0b0c10] hover:text-white transition-all duration-200 group"
              >
                <Image src="/twitter.svg" alt="Twitter" width={20} height={20}/>
              </a>
            </div>
          </div>

          {/* Right: Link columns */}
          <div className="flex flex-row flex-wrap gap-12 md:gap-16 lg:gap-24">
            {Object.entries(links).map(([category, items]) => (
              <div key={category} className="footer-column flex flex-col gap-4">
                <h4 className="font-[700] text-[15px] md:text-[16px] poppins text-[#0b0c10]">
                  {category}
                </h4>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-[14px] poppins md:text-[18px] text-[#1E1E1E80] font-[400] hover:text-[#0b0c10] transition-colors duration-150"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="footer-bottom pt-10 pb-12">
        <div className="max-w-[1248px] mx-auto">
          <p className="text-[15px] md:text-[18px] text-[#1E1E1E80] font-[500] poppins">
            2023 all Right Reserved Term of use GREENMIND
          </p>
        </div>
      </div>
    </footer>
  );
}
