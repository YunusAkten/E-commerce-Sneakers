import { useSelector, useDispatch } from "react-redux";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { toggleCart } from "../redux/appSlice";
import Cart from "./Cart";
import { Link } from "react-router-dom";
const navigation = [
  { name: "Sale", href: "/sneakers/sale", current: false },
  { name: "Sneakers", href: "/sneakers", current: false },
  { name: "Latest", href: "/sneakers/latest", current: false },
];

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const favs = useSelector((state: any) => state.app.favs);
  const cart = useSelector((state: any) => state.app.cart);
  const hideCart = useSelector((state: any) => state.app.hideCart);
  const dispatch = useDispatch();
  return (
    <Disclosure as="nav" className="bg-gray-800  top-0 w-full z-10">
      {({ open }) => (
        <>
          <div className=" px-2   ">
            <div className="relative   flex h-16 items-center  ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center sm:justify-start">
                <Link to="/" className="text-white">
                  Sneakers4All
                </Link>
              </div>
              <div className="hidden sm:block ">
                <div className="flex   ">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-white hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2  font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                  {/* Favs */}

                  <Link
                    to="/favorites"
                    className="py-2 px-2 cursor-pointer  text-white hover:bg-gray-700 hover:text-white rounded-md   font-medium"
                  >
                    <span className="absolute ml-4 top-3  px-1 rounded-lg text-sm    bg-green-600 ">
                      {favs ? favs.length : 0}
                    </span>
                    <HeartIcon className="w-6 h-6" />
                  </Link>
                  {/* Cart */}
                  <Cart />
                  <a
                    onClick={() => dispatch(toggleCart())}
                    className="py-2 px-2 cursor-pointer  text-white hover:bg-gray-700 hover:text-white rounded-md   font-medium"
                  >
                    <span className="absolute right-1 top-3 px-1 rounded-lg text-sm    bg-green-600  ">
                      {cart ? cart.length : 0}
                    </span>
                    <ShoppingCartIcon className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium strong"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
