import React from 'react';

const ServiceFeaturesRow = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8 4-8-4V5l8 4 8-4zM4 13h16v8H4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5h16v3H4z" />
        </svg>
      ),
      title: "MIỄN PHÍ VẬN CHUYỂN",
      description: "Miễn phí vận chuyển cho các sản phẩm đặc biệt"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          <circle cx="12" cy="4" r="3" />
        </svg>
      ),
      title: "SẢN PHẨM TỐT NHẤT",
      description: "Đảm bảo chất lượng 100%"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2 10h20M7 15h.01M11 15h2" />
        </svg>
      ),
      title: "THANH TOÁN BẢO MẬT",
      description: "Bảo mật tài khoản và thông tin của bạn"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 18v-6a9 9 0 0118 0v6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
        </svg>
      ),
      title: "HỖ TRỢ 24/7",
      description: "Nhận được sự hỗ trợ từ đội nhóm"
    }
  ];

  return (
    <div className="w-full px-4 py-6 border border-blue-500 rounded-lg overflow-x-auto">
      <div className="flex flex-row items-center justify-between min-w-max">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center text-center p-4 mx-2 border border-dotted border-gray-300 rounded-lg w-1/4 mx-1`}
            style={{ minWidth: '220px' }}
          >
            <div className="mb-3 text-gray-700">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
            <p className="text-xs text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFeaturesRow;