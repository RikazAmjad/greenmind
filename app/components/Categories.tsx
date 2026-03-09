import Image from "next/image";

export default function Categories() {
  return (
    <section className="w-full pt-16 flex flex-col items-center" id="categories-section">
      <div className="text-center mb-12 px-[5%]">
        <h2 className="categories-title text-[24px] sm:text-[28px] md:text-[32px] font-[800] leading-[1.2] tracking-tight mb-4 text-[#0b0c10]">
          Categories
        </h2>
        <p className="categories-text text-[15px] md:text-[18px] text-[#888] font-[500]">
          Find what you are looking for
        </p>
      </div>

      <div className="w-full relative flex flex-col items-center">
        {/* Background block */}
        <div className="categories-bg absolute bottom-0 left-0 w-full h-[85%] md:h-[95%] bg-[#C1DCDC] -z-10" />

        <div className="max-w-[1248px] px-[5%] w-full grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 pb-16">
          
          {/* Item 1 */}
          <div className="categories-item flex flex-col items-center">
            <Image 
              src="/NaturalPlant.svg" 
              alt="Natural Plants"
              width={350}
              height={500}
              className="w-full object-cover rounded-[12px] aspect-[4/5] bg-white shadow-sm"
            />
            <h3 className="mt-8 text-[18px] md:text-[20px] font-[800] text-[#0b0c10]">
              Natural Plants
            </h3>
          </div>

          {/* Item 2 */}
          <div className="categories-item flex flex-col items-center md:mt-16">
            <Image 
              src="/plantAccessories.svg" 
              alt="Plant Accessories"
              width={350}
              height={500}
              className="w-full object-cover rounded-[12px] aspect-[4/5] bg-white shadow-sm"
            />
            <h3 className="mt-6 md:mt-8 text-[18px] md:text-[20px] font-[800] text-[#0b0c10]">
              Plant Accessories
            </h3>
            <p className="text-[#888] font-[500] text-center text-[15px] md:text-[16px] mt-3 mb-6 max-w-[280px] leading-[1.6]">
              Horem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl font-[700] text-[#0b0c10] hover:bg-gray-50 transition shadow-sm">
              Explore 
              <Image src="/ArrowRight.svg" alt="Explore" width={20} height={20} className="w-[20px] h-[20px]" />
            </button>
          </div>

          {/* Item 3 */}
          <div className="categories-item flex flex-col items-center">
            <Image 
              src="/artificialPlant.svg" 
              alt="Artificial Plants"
              width={350}
              height={500}
              className="w-full object-cover rounded-[12px] aspect-[4/5] bg-white shadow-sm"
            />
            <h3 className="mt-8 text-[18px] md:text-[20px] font-[800] text-[#0b0c10]">
              Artificial Plants
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}
