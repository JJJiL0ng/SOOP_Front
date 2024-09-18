import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12 py-6">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; 2024 Our Company. All rights reserved.</p>
        <div className="text-[5px] text-gray-400 leading-tight">
          <p className="mb-0.05">Developed by:</p>
          <p className="mb-0.05">pm: 윤우</p>
          <p className="mb-0.05">BE: 상어24, tide25, 디포리24</p>
          <p className="mb-0.05">FE: 지롱이21, 또리작은형23, 마누21</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;