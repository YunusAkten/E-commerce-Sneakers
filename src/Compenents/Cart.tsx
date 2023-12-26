import { useSelector, useDispatch } from "react-redux";
function Cart() {
  const cart = useSelector((state: any) => state.app.cart);
  const dispatch = useDispatch();
  const hideCart = useSelector((state: any) => state.app.hideCart);

  return (
    <>
      {hideCart ? null : (
        <div
          className="  top-3/4 text-center   mt-8 w-80  
        flex  flex-col  align-items-center 
p-2  text-white  right-0 h-96 rounded-lg bg-gray-800 absolute "
        >
          <h1 className="text-2xl m-5">Cart</h1>
          <div className="flex flex-col items-center"></div>
        </div>
      )}
      {!hideCart && cart.length > 0 ? (
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
      ) : null}
    </>
  );
}

export default Cart;
