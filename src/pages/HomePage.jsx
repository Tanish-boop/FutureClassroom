// src/pages/HomePage.jsx
import React from 'react';
import { courses, categories } from '../data/dummyData';
import CourseCard from '../Components/CourseCard.jsx';
import CategoryCard from '../Components/CategoryCard.jsx';
import { useSearch } from '../context/SearchContext.jsx';
import { Typewriter } from 'react-simple-typewriter'; // ✅ Import here

const HomePage = () => {
  const { searchQuery } = useSearch();

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="bg-purple-800 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <Typewriter
              words={[
                "Learn Anything, Anytime",
                "Master Coding with Ease",
                "Explore Machine Learning",
                "Build Projects that Inspire"
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Explore thousands of courses taught by experts.
          </p>
          <button className="bg-yellow-400 text-purple-800 font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition duration-300">
            Browse Courses
          </button>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        {filteredCourses.length === 0 && (
          <p className="text-center text-gray-600 text-xl mt-10">
            No courses found matching your search.
          </p>
        )}
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Top Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Instructor CTA Section */}
      <section className="bg-purple-600 text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">Become an Instructor</h3>
          <p className="text-md md:text-lg mb-6">
            Share your knowledge and teach millions of students.
          </p>
          <button className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300">
            Start Teaching Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
