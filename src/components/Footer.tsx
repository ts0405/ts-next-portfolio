"use client";
import Lottie from 'lottie-react'

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-cyan-400 p-8 overflow-hidden">
      
      {/* Lottie アニメーション */}
      <div className="absolute inset-0 opacity-20">
        <Player
          autoplay
          loop
          src={footerAnimation}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Footer コンテンツ */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* ブランド */}
        <div className="font-mono text-xl tracking-wider">NeoPortfolio</div>

        {/* ナビ */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#about" className="hover:text-white transition duration-300">About</a>
          <a href="#works" className="hover:text-white transition duration-300">Works</a>
          <a href="#contact" className="hover:text-white transition duration-300">Contact</a>
        </div>
      </div>

      {/* 下線 */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 opacity-50 animate-pulse"></div>
    </footer>
  );
}