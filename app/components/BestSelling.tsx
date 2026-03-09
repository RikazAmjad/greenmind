import Image from "next/image";
import { ArrowRightAlt } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function BestSelling() {
  const plants = [
    {
      id: 1,
      name: "Natural Plants",
      price: "₱ 1,400.00",
      image: "/plant-1.svg", // Placeholder image
    },
    {
      id: 2,
      name: "Artificial Plants",
      price: "₱ 900.00",
      image: "/plant-2.svg",
    },
    {
      id: 3,
      name: "Artificial Plants",
      price: "₱ 3,500.00",
      image: "/plant-3.svg",
    },
  ];

  return (
    <section className="max-w-[1248px] mx-auto w-full py-24 overflow-hidden" id="best-selling-section">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 lg:gap-8">
        
        {/* Left Content */}
        <div className="flex flex-col flex-1 max-w-[300px] mt-4 max-md:items-center max-md:text-center">
          <h2 className="best-selling-title text-[32px] md:text-[40px] font-[800] leading-[1.2] tracking-tight mb-4 text-[#0b0c10]">
            Best Selling<br />Plants
          </h2>
          <p className="best-selling-text text-[15px] md:text-[16px] text-[#6b7280] font-[500] leading-[1.6] mb-8 pr-4 max-md:pr-0">
            Easiest way to healthy life by buying your favorite plants
          </p>
          <Button
            variant="contained"
            endIcon={<ArrowRightAlt />}
            className="best-selling-button !bg-[#c1dcdc] !text-[#0b0c10] !shadow-none hover:!bg-[#a6caca] !rounded-[12px] !font-[600] !normal-case !px-6 !py-2.5"
            sx={{
              fontFamily: 'var(--font-poppins)',
              width: 'fit-content'
            }}
          >
            See more
          </Button>
        </div>

        {/* Right Cards Array */}
        <div className="flex flex-1 flex-row gap-6 w-full overflow-hidden pb-4 hide-scrollbar snap-x snaps-mandatory md:w-auto">
          {plants.map((plant) => (
            <div key={plant.id} className="best-selling-card min-w-[240px] md:min-w-[280px] flex-1 flex flex-col snap-start ">
              {/* Image Box */}
              <div className="bg-[#f2f4f5] rounded-[24px] w-full h-full relative mb-4 overflow-hidden shadow-sm flex items-center justify-center">
                <Image 
                  src={plant.image} 
                  alt={plant.name}
                  width={300}
                  height={400}
                  className="object-contain w-full h-full mix-blend-multiply" 
                />
              </div>
              
              {/* Product Info */}
              <div className="flex flex-col gap-1 px-1">
                <span className="text-[18px] font-[600] text-[#0b0c10]">{plant.name}</span>
                <span className="text-[16px] font-[500] text-[#6b7280]">{plant.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
