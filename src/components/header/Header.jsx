import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
const Header = () => {
    const newLocal = <a href="/cart" className="hover:text-gray-300 relative inline-block">
        <ShoppingCartIcon className="w-6 h-6" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
    </a>;
  return (
    <div className="w-full">
 
      {/* Main header */}
      <div className="bg-gray-800 text-white w-full py-3 px-4 md:px-8 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-bold">
            <span className="text-white">ECom</span>
            <span className="text-orange-500">UIT</span>
          </span>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center space-x-6 text-sm md:text-base">
          <a href="/" className="hover:text-gray-300">Trang chủ</a>
          <span className="text-gray-400">|</span>
          <a href="/admin" className="hover:text-gray-300">Admin</a>
          <span className="text-gray-400">|</span>
          <a href="/products" className="hover:text-gray-300">Cửa Hàng</a>
        </div>
        
        {/* User actions */}
        <div className="flex items-center space-x-6 text-sm md:text-base">
          <div className="flex items-center">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-500 rounded-full flex items-center justify-center mr-2">
                <PersonIcon/>
              {/* <User className="w-4 h-4 md:w-5 md:h-5" /> */}
            </div>
            <span>Chao Nguyen Dep Zai</span>
          </div>
          <a href="/order" className="flex items-center hover:text-gray-300">

            <span className="ml-2">Đơn hàng</span>
          </a>
          <a href="/wishlist" className="hover:text-gray-300"><FavoriteIcon/></a>
          {newLocal}
          <a href="/logout" className="flex items-center hover:text-gray-300">
            {/* <LogOut className="w-4 h-4 md:w-5 md:h-5 mr-1" /> */}
            <LogoutIcon/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header