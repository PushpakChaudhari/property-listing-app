import React, { useRef } from "react";

const PropertyCard = ({ price, title, type, features = [], agent, image, tags }) => {
  const carouselRef = useRef(null);

  const scrollFeatures = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = 150; // Adjust for smoother scrolling
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg p-4 border border-gray-200 overflow-hidden relative md:h-[231px]">
      {/* Image Section */}
      <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md md:h-full"
        />
        <span className="absolute top-2 left-2 text-xs font-medium text-white bg-black/70 px-2 py-1 rounded-full">
          {type}
        </span>
        <div className="absolute bottom-2 left-2 bg-gray-800/60 text-white px-2 py-0.5 rounded text-xs">
          {tags?.length > 0 ? tags[0] : "No Tags"}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 md:w-2/3 md:ml-4">
        <h3 className="text-lg font-bold text-gray-900">{price}</h3>
        <p className="text-sm text-gray-600">{title}</p>

        {/* Features Carousel */}
        <div className="mt-4 relative">
          <button
            onClick={() => scrollFeatures("left")}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black rounded-full p-2 shadow-md hover:bg-blue-600"
          >
            {"<"}
          </button>
          <div
            ref={carouselRef}
            className="flex overflow-hidden space-x-4 mx-10"
            style={{
              scrollBehavior: "smooth",
              whiteSpace: "nowrap",
              overflowX: "hidden",
            }}
          >
            <ul className="flex items-center space-x-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex-shrink-0 bg-blue-50 border px-4 py-2 rounded-lg shadow-sm text-center min-w-[120px]"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => scrollFeatures("right")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent text-black rounded-full p-2 shadow-md hover:bg-blue-600"
          >
            {">"}
          </button>
        </div>

        <div className="w-full p-3 bg-blue-50 mt-2 rounded-xl">
          <h2>Freehold</h2>
        </div>

        {/* Actions Section */}
        <div className="mt-2 flex justify-between pb-3 mb-3">
          <p className="text-sm font-medium text-gray-700 mt-2">
            Agent: <span className="text-gray-900">{agent}</span>
          </p>
          <button className="px-4 py-2 text-sm text-blue-500 bg-blue-50 rounded hover:bg-blue-100">
            View Number
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
