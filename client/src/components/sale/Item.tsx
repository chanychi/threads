import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import useCart from "@/hooks/useCart";
import { Items } from "@/interfaces/salesitem.d";

export interface ItemProps extends Items {
  ifExists: boolean;
}

const Item = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}: ItemProps) => {
  const { onAddToCart, onCartToggle } = useCart()
  const item = { id, title, text, img, color, shadow, price };

  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${ifExists ? "justify-items-start" : "justify-items-center"
          } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div
          className={`grid items-center ${ifExists ? "justify-items-start" : "justify-items-center"
            }`}
        >
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p>

        </div>
        <div className={`flex items-center ${ifExists ? "justify-center" : "justify-between"}w-full mt-2`}>
          <div className="flex items-center gap-2"> {/* Adjust the gap here */}
            <div className="flex items-center bg-white/90 px-2 rounded blur-effect-theme h-7">
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </div>

            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
              onClick={() => onAddToCart(item)}
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme px-2 py-0.5 shadow shadow-sky-200 text-sm text-black"
              onClick={() => {
                onAddToCart(item);
                onCartToggle();
              }}
            >
              {btn}
            </button>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
              <h1 className="md:text-sm font-normal text-slate-100">
                {rating}
              </h1>
            </div>
          </div>
        </div>

        <div
          className={`flex items-center ${ifExists ? "absolute top-5 right-1" : "justify-center"
            }`}
        >
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className={`transitions-theme hover:-rotate-12 ${ifExists
              ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
              : "h-36 w-64"
              }`}
          />
        </div>
      </div>
    </>
  );
};

export default Item;
