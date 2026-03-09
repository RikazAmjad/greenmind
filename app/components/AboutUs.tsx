import Image from "next/image";

export default function AboutUs() {
  const features = [
    {
      id: 1,
      title: "Large Assortment",
      description: "we offer many different types of products with fewer variations in each category.",
      icon: '/largeAssortment.svg',
    },
    {
      id: 2,
      title: "Fast & Free Shipping",
      description: "4-day or less delivery time, free shipping and an expedited delivery option.",
      icon: '/freeShipping.svg',
    },
    {
      id: 3,
      title: "24/7 Support",
      description: "answers to any business related inquiry 24/7 and in real-time.",
      icon: '/TelephoneOutbound.svg',
    },
  ];

  return (
    <section className="max-w-[1248px] mx-auto w-full px-[5%] py-28" id="about-us-section">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="about-us-title text-[24px] sm:text-[28px] md:text-[32px] font-[800] leading-[1.2] tracking-tight mb-4 text-[#0b0c10]">
          About us
        </h2>
        <p className="about-us-text text-[15px] md:text-[18px] text-[#6b7280] font-[500] leading-[1.6]">
          Order now and appreciate the beauty of nature
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
        {features.map((feature) => (
          <div key={feature.id} className="about-us-item flex flex-col items-center text-center">
            <div className="bg-[#c1dcdc] rounded-full w-[96px] h-[96px] flex justify-center items-center mb-6">
              <Image
                className="w-[40px] h-[40px]"
                src={feature.icon}
                alt={feature.title}
                width={20}
                height={20}
              />
            </div>
            <h3 className="text-[18px] font-[700] text-[#0b0c10] mb-3">{feature.title}</h3>
            <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[#1E1E1E80] max-w-[300px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
