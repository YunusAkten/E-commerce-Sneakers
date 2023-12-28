import { useSelector, useDispatch } from "react-redux";
import Footer from "./Footer";
function Cart() {
  const cart = useSelector((state: any) => state.app.cart);

  return (
    <div
      className="  h-screen    mt-8   
        flex  flex-col  align-items-center 
    "
    >
      <h1 className="text-3xl m-2">Cart</h1>
      <div className="flex flex-col items-center"></div>

      {cart.length > 0 ? (
        <div className="flex flex-col items-center">
          {cart.map((shoe: any) => {
            return (
              <a key={shoe.id} href={`/sneakers/${shoe.blob}`}>
                <div>
                  <img src={shoe.img} alt={shoe.name} />
                  <h1>{shoe.name}</h1>
                  <h1>{shoe.price}</h1>
                </div>{" "}
              </a>
            );
          })}
          <h1 className="text-2xl m-5">
            Total: ${cart[0].price * cart.length}
          </h1>
          <button className="bg-black hover:bg-gray-800   text-white p-2 rounded-lg">
            Checkout
          </button>
        </div>
      ) : (
        <h1 className="text-2xl m-2">No Items in Cart</h1>
      )}
      <Footer></Footer>
    </div>
  );
}

export default Cart;
