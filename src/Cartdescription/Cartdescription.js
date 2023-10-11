import React, { useState } from 'react';
import "./Carddescrption.css"
import { AiFillGift } from "react-icons/ai"
const Cartdescription = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const smallImages = [
        'https://innovist.com/cdn/shop/products/PPA_ShampooCatalog1_1800x1800.webp?v=1666676018',
        'https://innovist.com/cdn/shop/products/AntiDandruffShampooCatalog_022_1800x1800.jpg?v=1667223617',
        'https://innovist.com/cdn/shop/products/AntiDandruffShampooCatalog_023_1800x1800.jpg?v=1667223617',
        'https://innovist.com/cdn/shop/products/AntiDandruffShampooCatalog_024_1800x1800.jpg?v=1667223617',
        'https://innovist.com/cdn/shop/products/AntiDandruffShampooCatalog_025_1800x1800.jpg?v=1667223617'
    ];



    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const handlesinglebuttonClick = () => {
        setSelectedImageIndex(0);
    }
    const handlepack2buttonClick = () => {
        setSelectedImageIndex(1);
    }

    return (
        <div className='flex'>
            <div className='ml-9'>
                {smallImages.map((image, index) => (
                    <img
                        key={index}
                        className={`w-[80px] h-[80px] mb-4 cursor-pointer`}
                        src={image}
                        alt={`image${index}`}
                        onClick={() => handleImageClick(index)}
                    />
                ))}
            </div>

            <div className=''>
                <img className="w-[500px] h-[465px] ml-[25px]" src={smallImages[selectedImageIndex]} alt='product image' />
            </div>

            <div className='pl-[50px]'>
                <h2>Anti Dandruff Shampoo</h2>
                <p>Reduces Dandruff Up to 100% | Helps Shed Dry Flakes | Cleanses the Scalp</p>
                <div className='flex'>
                    <button className='pr-5'>4.5 rating</button>
                    <p>778 Verified Reviews | Free Shipping</p>
                </div>
                <h1 >₹545.00 incl. of all taxes</h1>
                <h2>Size</h2>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    onClick={handlesinglebuttonClick}>
                    Single
                </button>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    onClick={handlepack2buttonClick}>
                    Pack of 2
                </button>
                <button className='w-full bg-black text-white mt-[20px] p-[17px]'>Add To Cart</button>
                <div className='w-[550px] h-[150px] mt-[40px] shadow-lg relative'>
  <div className='flex ml-[210px] mb-[20px]'>
    <AiFillGift />
    <h2>Active Offers</h2>
  </div>
  <div className='flex justify-between'>
    <div className='relative'>
      <img src="https://cdn.shopify.com/s/files/1/0039/6073/3763/files/offer_bg.svg?v=1694427078" alt='active1' />
      <p className='absolute inset-0 flex items-center justify-center text-white'>Content for Image 1</p>
    </div>
    <div className='relative'>
      <img src="https://cdn.shopify.com/s/files/1/0039/6073/3763/files/offer_bg.svg?v=1694427078" alt='active2' />
      <p className='absolute inset-0 flex items-center justify-center text-white'>Content for Image 2</p>
    </div>
    <div className='relative'>
      <img src="https://cdn.shopify.com/s/files/1/0039/6073/3763/files/offer_bg.svg?v=1694427078" alt='active3' />
      <p className='absolute inset-0 flex items-center justify-center text-white'>Content for Image 3</p>
    </div>
  </div>
</div>



            </div>
        </div>
    );
};

export default Cartdescription;
