import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import registerImg from "../../assets/register.png"

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Main Content */}
      <main className="flex flex-1 ">
        {/* Left Side - Graphic */}
        <div className="w-1/3 bg-gradient-to-b from-white-900 to-white-700 flex flex-col items-center justify-center text-white">
          <div className="mb-4">
            <img src={registerImg} className='w-auto h-auto'>
            </img>
          </div>

        </div>

        {/* Right Side - Register Form */}
        <div className="w-2/3 flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-6 text-center">ĐĂNG KÝ</h2>
            <form onSubmit={handleSubmit}>
                {/* Email field */}
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              {/* Username field */}
              <div className="mb-4">
                <input
                  type="name"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              {/* Password field */}
              <div className="mb-6 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500"
                >
                  {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                </button>
              </div>

              {/* Re password field */}
              <div className="mb-6 relative">
                <input
                  type={showRePassword ? 'text' : 'password'}
                  placeholder="Re Password"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowRePassword(!showRePassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500"
                >
                  {showRePassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white p-3 rounded-lg hover:bg-blue-800 transition"
              >
                Đăng Ký
              </button>
            </form>
            <p className="text-center mt-4 text-sm">
              Bạn đã có tài khoản?{' '}
              <a href="login" className="text-blue-500 hover:underline">
                Đăng nhập
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;