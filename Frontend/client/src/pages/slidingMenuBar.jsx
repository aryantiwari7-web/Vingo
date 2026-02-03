import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";

function SlidingMenuBar() {
    const menu = [
        {
            name: "Pizza",
            image: assets.Pizzas
        },
        {
            name: "Burgers",
            image: assets.Burgers
        },
        {
            name: "Cakes",
            image: assets.Cakes
        },
        {
            name: "Momos",
            image: assets.Momos
        },
        {
            name: "Rolls",
            image: assets.Rolls
        },
        {
            name: "IceCream",
            image: assets.IceCream
        },
        {
            name: "GulabJamun",
            image: assets.GulabJamun
        },
        {
            name: "Biryani",
            image: assets.Biryani
        },
        {
            name: "Waffle",
            image: assets.Waffle
        },
        {
            name: "Paratha",
            image: assets.Parathas
        },
        
    ];
    const navigate = useNavigate();
    const handle = (name)=>{
          navigate(`/item/${name}`);  
    }
return (
  <div className="w-full bg-gray-100 pb-2">
    <h1 className="text-4xl font-semibold text-center mb-12">
      Explore our menu
    </h1>

    <div className="flex gap-5 overflow-x-auto px-4 scrollbar-hide justify-around">
      {menu.map((z) => (
        <div
          key={z.name}
          className="flex-shrink-0 w-34 text-center"
        >
          <button
            onClick={() => handle(z.name)}
            className="flex flex-col items-center gap-2 focus:outline-none"
          >
            <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-125 transition">
              <img
                src={z.image}
                alt={z.name}
                className="w-14 h-14 object-contain"
              />
            </div>

            <p className="text-sm font-medium text-gray-700">
              {z.name}
            </p>
          </button>
        </div>
      ))}
    </div>
  </div>
);

}

export default SlidingMenuBar;
