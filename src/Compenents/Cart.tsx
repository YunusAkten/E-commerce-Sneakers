import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  changeQuantity,
  sumCartTotal,
} from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import Footer from "./Footer";
function Cart() {
  const cart = useSelector((state: any) => state.cart.cart);
  const total = useSelector((state: any) => state.cart.cartTotal);
  const dispatch = useDispatch();
  const handleQuantityChange = (e: any) => {
    dispatch(changeQuantity({ id: e.target.id, quantity: e.target.value }));
  };

  useEffect(() => {
    if (cart.length === 0) return;
    dispatch(sumCartTotal());
  }, [cart]);
  return (
    <div
      className="  h-screen    mt-8   
        flex  flex-col  
    "
    >
      <h1 className="text-3xl m-4">Cart</h1>
      <hr className="bg-gray-300 h-0.5 mx-2"></hr>
      {cart.length > 0 ? (
        <div className=" flex  justify-normal items-center relative cartDiv flex-row gap-y-16 md:justify-center">
          <div className="flex  sneakersDivCart w-2/4 relative flex-col m-5 ">
            {cart.map((sneaker: any) => {
              return (
                <>
                  <div
                    key={sneaker.id}
                    className="flex relative flex-col m-2 gap-2 md:flex-row"
                  >
                    <Link
                      key={`${sneaker.id}-${sneaker.size}`}
                      to={`/sneaker/${sneaker.blob}`}
                    >
                      <img
                        className="w-36"
                        src={sneaker.img}
                        alt={sneaker.name}
                      />
                    </Link>
                    <div className="flex    flex-col justify-center">
                      <h1 className="text-2xl bold">{sneaker.name}</h1>
                      <h1 className="text ">Size {sneaker.size}</h1>
                      <div>
                        <label className="" htmlFor={sneaker.id}>
                          Quantity{" "}
                        </label>
                        <input
                          type="number"
                          min={1}
                          className="w-16 h-6 border p-2 border-gray-900"
                          value={sneaker.quantity}
                          id={sneaker.id}
                          onChange={handleQuantityChange}
                        ></input>
                      </div>

                      <h1 className="text-xl absolute top-4 right-0 bold ">
                        {sneaker.price}$
                      </h1>
                      <button onClick={() => dispatch(removeFromCart(sneaker))}>
                        <TrashIcon className="h-6 w-6 absolute bottom-4  right-0 hover:stroke-red-500 "></TrashIcon>
                      </button>
                    </div>
                  </div>
                  <hr className="bg-gray-300 h-1 my-4"></hr>
                </>
              );
            })}
          </div>
          <div className="flex flex-col absolute right-0 bottom-0  m-4">
            <h1 className="text-2xl m-2 ">Totals:{total.toFixed(2)}$ </h1>
            <Link to="/checkout">
              <button className="bg-green-600 btn-sm  hover:bg-green-700   text-white p-2 rounded-lg">
                Checkout
              </button>{" "}
            </Link>
          </div>
        </div>
      ) : (
        <h1 className="text-2xl m-2">No Items in Cart</h1>
      )}
      <Footer></Footer>
    </div>
  );
}

export default Cart;
