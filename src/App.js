import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Custom Alert Component
const Alert = ({ children }) => (
  <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4" role="alert">
    {children}
  </div>
);

// Login Component
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted', { email, password });
    // Here you would typically send a request to your backend
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">로그인</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">이메일:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          로그인
        </button>
      </form>
    </div>
  );
};

// Register Component
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted', { email, password, name });
    // Here you would typically send a request to your backend
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">회원가입</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">이름:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">이메일:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          회원가입
        </button>
      </form>
    </div>
  );
};

// Profile Component
const Profile = () => {
  // This would typically fetch user data from your backend or state management
  const user = {
    name: '홍길동',
    email: 'hong@example.com',
    joinDate: '2023-01-01'
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">프로필</h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <p className="font-bold text-gray-700 text-sm mb-2">이름:</p>
          <p className="text-gray-700">{user.name}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold text-gray-700 text-sm mb-2">이메일:</p>
          <p className="text-gray-700">{user.email}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold text-gray-700 text-sm mb-2">가입일:</p>
          <p className="text-gray-700">{user.joinDate}</p>
        </div>
      </div>
    </div>
  );
};

// Home Component
const Home = () => (
  <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold text-gray-900">회원 서비스에 오신 것을 환영합니다</h1>
  </div>
);

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  홈
                </Link>
                <div className="ml-6 flex space-x-8">
                  <Link to="/login" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    로그인
                  </Link>
                  <Link to="/register" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    회원가입
                  </Link>
                  <Link to="/profile" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    프로필
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Alert>
          회원 서비스에 오신 것을 환영합니다!
        </Alert>

        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;