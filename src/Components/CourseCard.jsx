

import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  // Function to render star icons based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= i + 1) {
        stars.push(<span key={i} className="text-yellow-400">⭐</span>); // Full star
      } else if (rating > i) {
        stars.push(<span key={i} className="text-yellow-400">⭐</span>); // Half star (using full for simplicity for now)
      } else {
        stars.push(<span key={i} className="text-gray-300">⭐</span>); // Empty star
      }
    }
    return stars;
  };

  return (
    
    <Link to={`/course/${course.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col">
        {/* Thumbnail Image */}
        <img src={course.image} alt={course.title} className="w-full h-36 object-cover" />
        
        <div className="p-4 flex flex-col flex-grow">
          {/* Course Title */}
          <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-2" title={course.title}>
            {course.title}
          </h3>
          {/* Instructor Name */}
          <p className="text-sm text-gray-600 mb-2 truncate" title={course.instructor}>
            {course.instructor}
          </p>
          
          {/* Rating and Students Enrolled */}
          <div className="flex items-center text-sm mb-2">
            <span className="font-bold text-orange-500 mr-1">{course.rating}</span>
            <div className="flex mr-2">
              {renderStars(course.rating)}
            </div>
            <span className="text-gray-500">({course.students.toLocaleString()})</span>
          </div>
          
          {/* Price */}
          <p className="font-bold text-xl text-gray-900 mt-auto">₹{course.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;