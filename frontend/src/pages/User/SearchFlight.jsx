import Navbar from "../../components/Navbar";
import { assets, cities } from "../../assets/images/assets.js";
import Footer from "../../components/Footer.jsx";
import PlaneCollections from "../../components/SearchFlight/PlaneCollections.jsx";
import ExclusiveOffer from "../../components/SearchFlight/ExclusiveOffer.jsx";
const SearchFlight = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex min-h-screen flex-col items-start justify-center bg-[url('/src/assets/images/airplane-flying-clouds.jpg')] bg-cover bg-center bg-no-repeat px-6 py-24 text-white md:px-16 lg:px-24 xl:px-32">
        <p className="mt-6 rounded-full bg-[#49B9FF]/50 px-3.5 py-1 text-sm">
          Next-Gen Airline Intelligence Platform
        </p>

        <h1 className="mt-4 max-w-xl font-playfair text-3xl font-bold leading-tight md:text-[56px] md:font-extrabold md:leading-[56px]">
          Transform Airline Operations with Real-Time Intelligence
        </h1>

        <p className="mt-2 max-w-xl text-sm md:text-base">
          Manage flights, optimize routes, track performance, and enhance
          passenger experience — all in one unified aviation platform.
        </p>

        <form className="mt-8 flex w-full max-w-5xl flex-col gap-4 rounded-lg bg-white px-4 py-4 text-gray-600 shadow-xl sm:px-6 md:flex-row md:items-end">
          {/* From */}
          <div className="w-full md:w-auto">
            <div className="flex items-center gap-2">
              <img src={assets.locationIcon} alt="" className="h-4" />
              <label htmlFor="destination">From</label>
            </div>

            <input
              id="destination"
              list="destinationList"
              type="text"
              placeholder="Departure city or airport"
              className="mt-1.5 w-full rounded border border-gray-200 px-3 py-2 text-sm outline-none md:w-44 lg:w-52"
              required
            />

            <datalist id="destinationList">
              {cities.map((city, index) => (
                <option value={city} key={index} />
              ))}
            </datalist>
          </div>

          {/* To */}
          <div className="w-full md:w-auto">
            <div className="flex items-center gap-2">
              <img src={assets.locationIcon} alt="" className="h-4" />
              <label htmlFor="destination">To</label>
            </div>

            <input
              id="destination"
              list="destinationList"
              type="text"
              placeholder="Arival city or airport"
              className="mt-1.5 w-full rounded border border-gray-200 px-3 py-2 text-sm outline-none md:w-44 lg:w-52"
              required
            />

            <datalist id="destinationList">
              {cities.map((city, index) => (
                <option value={city} key={index} />
              ))}
            </datalist>
          </div>

          {/* Departure Date */}
          <div className="w-full md:w-auto">
            <div className="flex items-center gap-2">
              <img src={assets.calenderIcon} alt="" className="h-4" />
              <label htmlFor="departure">Departure</label>
            </div>
            <input
              id="departure"
              type="date"
              className="mt-1.5 w-full rounded border border-gray-200 px-3 py-2 text-sm outline-none md:w-40"
            />
          </div>

          {/* Passengers */}

          <div className="flex w-full flex-col md:w-auto">
            <label htmlFor="passengers">Passengers</label>
            <input
              id="passengers"
              type="number"
              min={1}
              max={9}
              placeholder="1"
              className="mt-1.5 w-full rounded border border-gray-200 px-3 py-2 text-sm outline-none md:w-20"
            />
          </div>

          {/* Search Button */}
          <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-black px-4 py-3 text-white md:w-auto">
            <img src={assets.searchIcon} alt="" className="h-7" />
            <span>Search Flights</span>
          </button>
        </form>
      </div>
      <PlaneCollections />
      <ExclusiveOffer />
      <Footer />
    </div>
  );
};

export default SearchFlight;
