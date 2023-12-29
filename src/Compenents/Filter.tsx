import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addFilter,
  setPriceFilter,
  removeFilter,
  clearFilters,
} from "../redux/filterSlice";
function Sidebar() {
  const dispatch = useDispatch();
  const [priceRange, setPriceRange] = useState<string>("500");
  const [brands, setBrands] = useState<string[]>([
    "nike",
    "jordan",
    "adidas",
    "puma",
    "reebook",
    "under armour",
  ]);
  const [genders, setGenders] = useState<string[]>(["man", "woman", "kids"]);
  const handleReset = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };
  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    if (e.target.name === "priceRange") {
      dispatch(setPriceFilter(e.target.value));
      return;
    }
    if (e.target.checked) {
      dispatch(addFilter({ filter: e.target.name, value: e.target.value }));
    } else {
      dispatch(removeFilter({ filter: e.target.name, value: e.target.value }));
    }
  };

  return (
    <form
      onChange={handleChange}
      className="flex flex-col text-gray-600 m-2   p-5"
    >
      <div className="gender">
        <h1 className="text-xl text-gray-900">Genders</h1>
        <div className="flex ">
          {genders.map((gender) => {
            return (
              <>
                <input
                  type="checkbox"
                  id={gender}
                  name="gender"
                  value={gender}
                  className="mr-2"
                />
                <label className="capitalize mx-2" htmlFor={gender}>
                  {gender}
                </label>
              </>
            );
          })}
        </div>
      </div>
      <hr className="bg-gray-300 h-0.5"></hr>
      <div className="flex flex-col brandSelection ">
        <h1 className="text-xl text-gray-900 ">Brand</h1>
        {brands.map((brand) => {
          return (
            <div key={brand}>
              <input
                type="checkbox"
                id={brand}
                name="brand"
                value={brand}
                className="mr-2"
              />
              <label className="capitalize" htmlFor={brand}>
                {brand}
              </label>
            </div>
          );
        })}
      </div>
      <hr className="bg-gray-300 h-0.5"></hr>
      <div className="sizeSelection">
        <h1 className="text-xl text-gray-900 ">Size</h1>
        <div className="grid grid-cols-3 ">
          {Array.from({ length: 46 - 17 }, (_, i) => i + 17).map((i) => (
            <div key={i}>
              <input
                type="checkbox"
                id={i.toString()}
                name="size"
                value={i}
                className="mr-2"
              />
              <label className="capitalize" htmlFor={i.toString()}>
                {i}
              </label>
            </div>
          ))}
        </div>
      </div>
      <hr className="bg-gray-300 h-0.5"></hr>
      <div className="flex priceRange flex-col relative my-4">
        <h1 className="text-xl text-gray-900 ">Price Range</h1>
        <input
          min={50}
          max={1000}
          step={50}
          value={priceRange}
          name="priceRange"
          onChange={(e) => setPriceRange(e.target.value)}
          type="range"
        ></input>
        <label>50$ </label>
        <label className="absolute right-0 bottom-0">{priceRange}$</label>
      </div>
      <button
        onClick={handleReset}
        className="bg-gray-800 text-white rounded p-2 w-24 ml-auto"
      >
        Reset
      </button>
    </form>
  );
}

export default Sidebar;
