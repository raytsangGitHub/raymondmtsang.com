import React from "react";
import MainContent from './MainContent.jsx';

const Header = () => (
  <header className="bg-blue-600 text-white p-4 text-xl font-bold text-center">
     React + Vite App
  </header>
);

const Sidebar = () => (
  <aside className="w-64 bg-gray-800 text-white p-4 hidden md:block">
    <nav>
      <ul>
        <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
        <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  </aside>
);

const Footer = () => (
  <footer className="bg-blue-600 text-white p-4 text-center">
   <small> &copy; 2025 All rights reserved.</small>
  </footer>
);

const WebsiteLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">
          {children}
           <MainContent />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;