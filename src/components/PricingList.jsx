import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item, index) => (
        <div
          key={index}
          className="w-[19rem] max-lg:w-full h-full bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 px-6"
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{item.description}</p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold ">{item.price}</div>
              </>
            )}
          </div>

          <Button
            white={!!item.price}
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:contact@me.dev"}
          >
            {item.price ? "Get Started" : "Contact us"}
          </Button>
          <ul>
            {item.features.map((feature, index) => (
              <li key={index} className="flex item-start py-5 border-t border-n-6">
                <img src={check} width={24} height={24} alt="check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
