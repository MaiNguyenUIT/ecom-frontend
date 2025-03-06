import React from 'react';

const ProductShowcase = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-gray-100 p-4 rounded-lg">
      {/* Main product section */}
      <div className="w-full md:w-6/7 bg-white rounded-lg overflow-hidden relative p-6 ">
        <div className="flex flex-col md:flex-row justify-between items-center mt-5 ">
          {/* Left content */}
          <div className="mb-6 md:mb-0 ml-7">
            <div className="text-blue-500 text-sm flex items-center mb-2">
              <div className="w-6 h-0.5 bg-blue-500 mr-2"></div>
              Mua sản phẩm chất lượng
            </div>
            <h2 className="text-4xl font-bold mb-2">Arduino</h2>
            <p className="text-gray-600 mb-6">Mô tả chi tiết sản phẩm</p>
            
            <button className="bg-indigo-800 text-white px-6 py-3 rounded flex items-center">
              MUA NGAY
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          
          {/* Right content - product image */}
          <div className="relative -left-10 top-5">
            <img 
              src="https://pos.nvncdn.com/f2fe44-24897/ps/20230331_ZSwQKxJL8Q.png" 
              alt="Arduino Board" 
              className="w-64"
            />
            {/* Price badge */}
            <div className="absolute -top-8 right-0 bg-indigo-300 text-white rounded-full p-4">
              <span className="font-semibold">300.000đ</span>
            </div>
          </div>
        </div>
        
        {/* Pagination dots */}
        <div className="flex items-center justify-center mt-12 space-x-1 mb-8">
          <div className="h-2 w-2 bg-black rounded-full"></div>
          <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
          <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      {/* Right sidebar products */}
      <div className="w-full md:w-2/5 flex flex-col gap-4">
        {/* USB Hub */}
        <div className="bg-indigo-800 rounded-lg p-4 text-white relative overflow-hidden h-1/2">
          <div className="absolute top-2 right-2 bg-yellow-300 text-black text-xs font-bold px-2 py-1 rounded z-10">
            29% OFF
          </div>
          <div className='ml-4'>
          <div className="font-semibold mb-1">BÁN CHẠY</div>
          <div className="text-xl font-bold mb-4">Hub USB</div>
          <button className="flex items-center text-sm">
            MUA NGAY
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          </div>
          <img 
            src="https://pos.nvncdn.com/f2fe44-24897/ps/20230331_ZSwQKxJL8Q.png" 
            alt="USB Hub" 
            className="absolute bottom-0 right-0 w-43 "
          />
        </div>
        
        {/* Bridge product */}
        <div className="bg-white rounded-lg p-4 flex h-1/2 ">
          <img 
            src="https://pos.nvncdn.com/f2fe44-24897/ps/20230331_ZSwQKxJL8Q.png" 
            alt="Cầu Dao" 
            className="w-45 mr-4"
          />
          <div className='ml-10'>
            <h3 className="font-bold mb-1">Cầu dao</h3>
            <p className="text-blue-500 font-semibold mb-4">230.000đ</p>
            <button className="bg-indigo-800 text-white px-4 py-2 rounded text-sm flex items-center">
              MUA NGAY
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;