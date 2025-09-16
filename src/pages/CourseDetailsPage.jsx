import React from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../data/dummyData';

const CourseDetailsPage = () => {
  // Get the 'id' parameter from the URL
  const { id } = useParams();

  // Find the course with a matching ID (convert id to a number)
  const course = courses.find(c => c.id === parseInt(id));

  // Handle case where course is not found
  if (!course) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold text-red-600">Course Not Found!</h1>
        <p className="mt-4">The course you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Course Video Player */}
        <div className="w-full bg-gray-900">
          <video className="h-100 w-full aspect-video" controls poster={course.image}>
            <source src={course.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Course Info Section */}
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{course.title}</h1>
          <p className="text-lg text-gray-700 mb-4">By {course.instructor}</p>
          <p className="text-gray-600 mb-6">{course.description}</p>
          
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <span className="text-3xl font-bold text-green-600">₹{course.price}</span>
            <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;