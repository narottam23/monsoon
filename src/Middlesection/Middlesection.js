import React from 'react';

import "./index.css"
const BrandContainer = () => {
  const photoData = [
    {
      image:
        'https://innovist.com/cdn/shop/collections/Main.jpg?v=1679141534',
      description: 'Holistic Wellness & Nutrition',
    },
    {
      image:
        'https://innovist.com/cdn/shop/collections/Desktop_last_final_copy_2_bc8b29e1-0f70-4bbb-8677-1d1f126cf0ce.jpg?v=1679141528',
      description: 'High Performance Hair Care',
    },
    {
      image:
        'https://innovist.com/cdn/shop/collections/Desktop_last_final_copy_3_a2d95bd7-a4b2-4bdb-b1ca-738e0cb5ee9d.jpg?v=1679141530',
      description: 'Ceramides Based Skin Care',
    },
    {
      image:
        'https://innovist.com/cdn/shop/collections/Desktop_last_final_copy_60dc74f1-aa31-4d98-8ba2-14f5b732ebe6.jpg?v=1679141531',
      description: 'The Sunscreen Specialist',
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-screen-md mx-auto flex gap-8">
        {photoData.map((item, index) => (
          <div className="image" key={index}>
            <img
              className="imagefile rounded-full max-w-full h-auto"
              src={item.image}
              alt={item.description}
            />
            <h4>{item.description}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandContainer;
