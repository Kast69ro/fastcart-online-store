import PS from "#/ps.png";
import Woman from "#/woman.png";
import Spiker from "#/speaker.png";
import Perfume from "#/gucci (1).png";

const HomeGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 w-[85%] mx-auto">
      <div className="relative bg-black bg-center bg-no-repeat bg-cover md:col-span-2 md:row-span-2 aspect-[2/1] md:aspect-auto">
        <div className="absolute inset-0 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('${PS}')` }} />
        <div className="absolute bottom-0 left-0 p-5 text-white z-10">
          <h3>PlayStation 5</h3>
          <p>Black and White version of the PS5 coming out on sale.</p>
        </div>
      </div>

      <div className="relative bg-black md:col-span-2 aspect-[2/1] md:aspect-auto">
        <img src={Woman} alt="Woman" className="absolute w-full h-full object-cover" style={{ transform: "scaleX(-1)" }} />
        <div className="absolute bottom-0 left-0 p-5 text-white z-10">
          <h3>Women’s Collections</h3>
          <p>Featured woman collections that give you another vibe.</p>
        </div>
      </div>

      <div className="relative bg-black bg-center bg-no-repeat bg-cover aspect-square">
        <div className="absolute inset-0 bg-center bg-no-repeat" style={{ backgroundImage: `url('${Spiker}')` }} />
        <div className="absolute bottom-0 left-0 p-5 text-white z-10">
          <h3>Speakers</h3>
          <p>Amazon wireless speakers</p>
        </div>
      </div>

      <div className="relative bg-black bg-center bg-no-repeat bg-cover aspect-square">
        <div className="absolute inset-0 bg-center bg-no-repeat" style={{ backgroundImage: `url('${Perfume}')` }} />
        <div className="absolute bottom-0 left-0 p-5 text-white z-10">
          <h3>Perfume</h3>
          <p>GUCCI INTENSE OUD EDP</p>
        </div>
      </div>
    </div>
  );
};

export default HomeGrid;