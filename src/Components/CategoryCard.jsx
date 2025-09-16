

import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <h3 className="font-bold text-lg">{category.name}</h3>
    </div>
  );
};

export default CategoryCard;