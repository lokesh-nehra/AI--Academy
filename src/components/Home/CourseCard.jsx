import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({
  id,
  image,
  title,
  type,
  description,
  collaborators = [],
  collaboratorName,
  collaboratorLogo,
  variant = "home", // default is home
}) => {
  const badgeColors = {
    Specialization: "bg-sky-500",
    "Short Course": "bg-orange-400",
    Course: "bg-purple-500",
  };

  const badgeColor = badgeColors[type] || "bg-gray-400";

  return (
    <Link to={`/courses/${id}`} className="block">
      {variant === "main" ? (
        // 🎯 MAIN Variant (used in CoursesGrid)
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 w-full hover:shadow-lg transition-transform duration-300 hover:scale-105">
          {/* Badge */}
          <span
            className={`inline-block text-xs font-semibold text-white ${badgeColor} rounded px-2 py-1 mb-2`}
          >
            {type}
          </span>

          {/* Title */}
          <h3 className="text-gray-800 font-semibold text-lg mb-2">{title}</h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-3 line-clamp-3">
            {description}
          </p>

          {/* Collaborators */}
          <div className="flex items-center mt-2 space-x-2">
            {collaborators.length > 0 ? (
              collaborators.map((collab, index) => (
                <div key={index} className="flex items-center space-x-1">
                  <img
                    src={collab.logo}
                    alt={collab.name}
                    className="w-6 h-6 rounded-full"
                  />
                </div>
              ))
            ) : (
              <img
                src={collaboratorLogo}
                alt={collaboratorName}
                className="w-6 h-6 rounded-full"
              />
            )}
            <span className="text-gray-700 text-sm">
              {collaborators.length > 0
                ? collaborators.map((c) => c.name).join(", ")
                : collaboratorName}
            </span>
          </div>
        </div>
      ) : (
        // 🎯 HOME Variant (used in home page carousel)
        <div
          className="bg-white rounded-xl shadow-sm overflow-hidden w-full flex flex-col
          max-w-[320px] sm:max-w-[350px] md:max-w-[300px] lg:max-w-[360px]
          h-[320px] sm:h-[360px] md:h-[300px] lg:h-[340px]
          transition-transform duration-300 ease-in-out hover:scale-105"
        >
          {/* Image */}
          <img
            src={image}
            alt={title}
            className="w-full h-48 sm:h-48 md:h-44 lg:h-48 object-cover"
          />

          {/* Content */}
          <div className="py-3 px-3 text-left flex-grow">
            <span
              className={`inline-block text-xs font-semibold text-white ${badgeColor} rounded px-2 py-1 mb-2`}
            >
              {type}
            </span>
            <h3 className="text-gray-800 font-semibold mt-1 text-base sm:text-lg leading-snug line-clamp-2">
              {title}
            </h3>
          </div>
        </div>
      )}
    </Link>
  );
};

export default CourseCard;
