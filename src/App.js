import main from "./asset/main.png";
import {IoBagCheckOutline} from 'react-icons/io5'
import "./App.css";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#F7F6EF] to-[#cfd2b7] min-h-screen text-[#354305] ">
      <header className="grid grid-cols-6 mx-auto text-center divide-x divide-[#242C07]/20 shadow-md text-sm py-2.5">
          <p className="py-2">Home</p>
          <p className="py-2">Products</p>
          <p className="py-2">Rewards</p>
          <p className="py-2">Gifts</p>
          <p className="py-2">Location</p>
          <p className="py-2">Mission</p>
      </header>

      <div className="grid grid-cols-2 text-start font-display tracking-wider">
        <div className="flex justify-center">
          <img src={main} className="h-[36rem] " alt="product"/>
        </div>
        <div className=" flex flex-col max-w-screen-md justify-center space-y-8 pr-4">
          <p className="text-5xl  ">House Best Spread</p>
          <p className="text-3xl italic">Locally Sourced</p>
          <p className="text-lg">Nutella is a chocolate-hazelnut spread that is often used as a spread for bread, as a filling in pastries, and as an ingredient in various desserts. The product is similar to Nutella, a popular brand of chocolate-hazelnut spread that has been around for over 50 years.
          </p>
          <p className="text-lg">
          Nutella is made from a combination of hazelnuts, cocoa powder, sugar, and palm oil. The hazelnuts give the spread its nutty flavor, while the cocoa powder provides the chocolate flavor. The sugar adds sweetness, and the palm oil helps to give the spread a smooth and creamy texture. The ingredients are carefully blended together to create a spread that is both rich and delicious. One of the key benefits of Nutella is that it is versatile and can be used in a variety of different ways. For example, it can be spread on toast, waffles, or pancakes for a delicious breakfast treat. It can also be used as a filling in cakes, cookies, and other desserts. Additionally, it can be used as an ingredient in various recipes such as chocolate hazelnut truffles, chocolate hazelnut ice cream, and chocolate hazelnut smoothie.
          </p>
        </div>

      </div>
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col items-center pl-4">
          <p className="text-xl items-start">House Best Spread</p>
          <div className="grid grid-cols-3 pt-2 w-96 ">
              <div className="border flex flex-col items-center py-2 ">
              <p className="text-sm">Sugar</p>
              <p className="text-sm">10g</p>
              </div>
              <div className="border flex flex-col items-center py-2 ">
              <p className="text-sm">Whole Milk</p>
              <p className="text-sm">40oz</p>
              </div>
              <div className="border flex flex-col items-center py-2 ">
              <p className="text-sm">Chocolate</p>
              <p className="text-sm">30g</p>
              </div>
          </div>
          <div className="grid grid-cols-3 w-96">
          <div className="border flex flex-col items-center py-2 ">
              <p className="text-sm">Syrup</p>
              <p className="text-sm">5g</p>
              </div>
              <div className="border flex flex-col items-center py-2 ">
              <p className="text-sm">Espresso</p>
              <p className="text-sm">2 shots</p>
              </div>
              <div className="border flex flex-col items-center py-2 ">
              <p className="text-sm">Cream</p>
              <p className="text-sm">30g</p>
              </div>
          </div>
        </div>
        <div>
        <div class="bg-[#242C07] w-full flex justify-around p-4">
            <p className="text-3xl text-[#ACAF9C] font-display tracking-widest">Checkout</p>
            <div className="text-[#ACAF9C]"><IoBagCheckOutline size={35}/></div>
        </div>
        <div className="pt-4 pr-2">
          <p className="py-4">Discounted Rate only at $35</p>
            <p className="text-xs">This offer is available January 16 – 22, 2023 at participating Markets. To qualify, you must pay using your digital Market Card or linked payment method in the Market app, or by scanning your Market app at the register prior to checkout</p>
        </div>
        </div>
      </div>
      
      </div>

  );
}

export default App;
