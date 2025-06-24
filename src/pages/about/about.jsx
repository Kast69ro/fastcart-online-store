import sideImg from "#/Side Image.png";
import card1 from "#/Services.png";
import card2 from "#/Services (1).png";
import card3 from "#/Services (2).png";
import card4 from "#/Services (3).png";
import card5 from "#/Services (4).png";
import card6 from "#/Services (5).png";
import card7 from "#/Services (6).png";
import person from "#/Frame 874.png";
import Card from "../../entities/for-about/first-card";
import Card2 from "../../entities/for-about/second-card";
import Card3 from "../../entities/for-about/thrid-card";

export default function About() {
  return (
    <div className="flex flex-col gap-[50px] lg:gap-[100px]">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:p-[30px_60px]">
        <div className="p-[20px] lg:w-[40%]">
          <h1 className="text-[30px] lg:text-[60px]">Our Story</h1>
          <p className="lg:text-[18px]">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="lg:text-[18px]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img src={sideImg} alt="" />
      </div>

      <div className="flex flex-col gap-[30px] p-[20px] lg:flex-row lg:justify-around">
        <Card>{[card1, "10.5k ", "Sallers active our site"]}</Card>
        <Card>
          {[card2, "33k ", "Sallers active our site", "rgba(219, 68, 68, 1)"]}
        </Card>
        <Card>{[card3, "45.5k ", "Sallers active our site"]}</Card>
        <Card>{[card4, "25k ", "Sallers active our site"]}</Card>
      </div>

      <section>
        <div className=" flex flex-col gap-[30px] lg:flex-row justify-around">
          <Card2>{[person, "Tom Cruise", "Founder & Chairman"]}</Card2>
          <Card2>{[person, "Tom Cruise", "Founder & Chairman"]}</Card2>
          <Card2>{[person, "Tom Cruise", "Founder & Chairman"]}</Card2>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-[50px] lg:flex-row lg:justify-around mb-[100px]">
            <Card3>{[card5,'FREE AND FAST DELIVERY','Free delivery for all orders over $140']}</Card3>
            <Card3>{[card6,'FREE AND FAST DELIVERY','Free delivery for all orders over $140']}</Card3>
            <Card3>{[card7,'FREE AND FAST DELIVERY','Free delivery for all orders over $140']}</Card3>
        </div>
      </section>
    </div>
  );
}
