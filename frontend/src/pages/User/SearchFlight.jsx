import Navbar from "../../components/Navbar";
import { assets, cities } from "../../assets/images/assets.js";
import Footer from "../../components/Footer.jsx";
import PlaneCollections from "../../components/SearchFlight/PlaneCollections.jsx";
import ExclusiveOffer from "../../components/SearchFlight/ExclusiveOffer.jsx";
const SearchFlight = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url('/src/assets/images/airplane-flying-clouds.jpg')] bg-no-repeat bg-cover bg-center h-screen">
        <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20">
          Next-Gen Airline Intelligence Platform
        </p>

        <h1 className="font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
          Transform Airline Operations with Real-Time Intelligence
        </h1>

        <p className="max-w-130 mt-2 text-sm md:text-base">
          Manage flights, optimize routes, track performance, and enhance
          passenger experience — all in one unified aviation platform.
        </p>

        <form className="bg-white text-gray-600 rounded-lg mt-8 px-6 py-4 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
          {/* From */}
          <div>
            <div className="flex items-center gap-2">
              <img src={assets.locationIcon} alt="" className="h-4" />
              <label htmlFor="destination">From</label>
            </div>

            <input
              id="destination"
              list="destinationList"
              type="text"
              placeholder="Departure city or airport"
              className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
              required
            />

            <datalist id="destinationList">
              {cities.map((city, index) => (
                <option value={city} key={index} />
              ))}
            </datalist>
          </div>

          {/* To */}
          <div>
            <div className="flex items-center gap-2">
              <img src={assets.locationIcon} alt="" className="h-4" />
              <label htmlFor="destination">To</label>
            </div>

            <input
              id="destination"
              list="destinationList"
              type="text"
              placeholder="Arival city or airport"
              className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
              required
            />

            <datalist id="destinationList">
              {cities.map((city, index) => (
                <option value={city} key={index} />
              ))}
            </datalist>
          </div>

          {/* Departure Date */}
          <div>
            <div className="flex items-center gap-2">
              <img src={assets.calenderIcon} alt="" className="h-4" />
              <label htmlFor="departure">Departure</label>
            </div>
            <input
              id="departure"
              type="date"
              className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            />
          </div>

          {/* Passengers */}

          <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
            <label htmlFor="passengers">Passengers</label>
            <input
              id="passengers"
              type="number"
              min={1}
              max={9}
              placeholder="1"
              className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-20"
            />
          </div>

          {/* Search Button */}
          <button className="flex items-center justify-center gap-2 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-2">
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
