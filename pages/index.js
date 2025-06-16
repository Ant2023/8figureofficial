import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useState } from "react";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] text-white font-sans relative">

      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
  <Image
    src="/images/logo.png" // Adjust path/filename as needed
    alt="8Figure Logo"
    width={60} // or 50, depending on your logo's size
    height={60}
    className="object-contain"
  />
  <span className="sr-only">8Figure</span>
</div>

{/*} <div className="text-2xl font-extrabold tracking-wider">
          <span className="text-yellow-400">8F</span>IGURE
        </div> */}

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#music" className="hover:text-blue-300 transition">Music</a>
          <a href="#merch" className="hover:text-blue-300 transition">Merch</a>
          <a href="#contact" className="hover:text-blue-300 transition">Contact</a>
        </nav>


                {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4 text-xl">
          <a href="https://www.instagram.com/fataiwilliam/" className="hover:text-blue-300"><i className="fab fa-instagram" /></a>
      <a href="https://music.apple.com/us/artist/fatai-william/1480921421" className="hover:text-blue-300"><i className="fab fa-apple" /></a>
      <a href="https://www.youtube.com/@fataiwilliamvevo7370" className="hover:text-blue-300"><i className="fab fa-youtube" /></a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-3xl text-white z-50"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* Mobile Menu */}
{isMenuOpen && (
  <div className="absolute top-[72px] left-0 w-full bg-[#0f172a]/95 backdrop-blur-md px-6 py-10 z-40 text-lg font-medium md:hidden shadow-xl">
    <div className="space-y-6">
      <a href="#music" className="block hover:text-blue-300 transition" onClick={() => setIsMenuOpen(false)}>Music</a>
      <a href="#merch" className="block hover:text-blue-300 transition" onClick={() => setIsMenuOpen(false)}>Merch</a>
      <a href="#contact" className="block hover:text-blue-300 transition" onClick={() => setIsMenuOpen(false)}>Contact</a>
    </div>

    <div className="flex space-x-4 text-xl pt-6">
      <a href="https://www.instagram.com/fataiwilliam/" className="hover:text-blue-300"><i className="fab fa-instagram" /></a>
      <a href="https://music.apple.com/us/artist/fatai-william/1480921421" className="hover:text-blue-300"><i className="fab fa-apple" /></a>
      <a href="https://www.youtube.com/@fataiwilliamvevo7370" className="hover:text-blue-300"><i className="fab fa-youtube" /></a>
    </div>
  </div>
)}

      {/* Hero Video Slider */}
      <section className="relative w-full h-screen overflow-hidden shadow-lg bg-black">

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full"
        >
          <SwiperSlide>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover "
            >
              <source src="/videos/videoplayback.mp4" type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/videoplayback (1).mp4" type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/videoplayback (2).mp4" type="video/mp4" />
            </video>
          </SwiperSlide>
        </Swiper>

        {/* 🛑 ADD THIS dark overlay layer */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

  {/* Text content on top */}
  <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-white">8Figure Official</h1>
    
    <a
      href="https://linktr.ee/fataiwilliam"
      className="px-6 py-3 rounded-full border border-white text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 font-bold uppercase hover:opacity-80 transition duration-300"
    >
      Explore Music
    </a>
  </div>
      </section>

<section
  id="music"
  className="py-20 px-6 text-white bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155]"
>  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4 md:pl-16">

    {/* Image (Left) */}
    <Image
      src="/images/8figure-cover2-removebg-preview.png"
      alt="Latest Track Cover"
      width={320}
      height={320}
      className="w-[280px] md:w-[400px] h-auto object-contain mx-auto order-1 md:order-1"
    />

    {/* Text Content (Right) */}
    <div className="flex flex-col justify-center w-full text-center md:text-left md:w-1/2 order-2 md:order-2 px-4 md:pl-16">
      <h2 className="text-4xl sm:text-4xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
  Latest Release
</h2>

<h3 className="text-xl sm:text-2xl font-semibold mb-3">{"People's Choice"}</h3>

      <p className="text-white/80 mb-6 max-w-xl mx-auto md:mx-0">
        The latest track by 8Figure Official. Smooth production. Clean drop. Streaming everywhere now.
      </p>

      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <a
          href="https://music.apple.com/us/song/happy-boy/1799082060"
          className="px-6 py-2 rounded-md border border-white text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 font-bold tracking-wide uppercase hover:opacity-80 transition duration-300"
        >
          Listen Now
        </a>
        <a
          href="https://youtu.be/EX_wWxiv1tU?si=9f7OzUzBUuMirTqs"
          className="px-6 py-2 rounded-md border border-white text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 font-bold tracking-wide uppercase hover:opacity-80 transition duration-300"
        >
          Watch Now
        </a>
      </div>
    </div>

  </div>
</section>

<section
  id="merch"
  className="py-20 px-6 bg-gradient-to-b from-[#1e293b] via-[#292524] to-[#111827] text-white"
>  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

    {/* Image First on Mobile */}
    <motion.img
  src="https://i.imgur.com/fzHQCSe.png"
  alt="Merch Hat"
  className="rounded-lg object-cover w-full max-w-xs md:max-w-sm order-1 md:order-2 md:ml-8"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.6 }}
/>

    {/* Text Second on Mobile */}
    <div className="flex flex-col justify-center w-full text-center md:text-left md:w-1/2 order-2 md:order-1 px-4 md:pl-16">
      <h2 className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-white mb-12 leading-tight">
        Merch Drop
      </h2>

      <h3 className="text-xl sm:text-2xl font-semibold mb-3">Signature Gear</h3>

      <p className="text-white/80 mb-6 max-w-xl mx-auto md:mx-0">
        Step out in style with the official 8Figure merch line. Limited edition drops. Premium feel. Wear the energy.
      </p>

      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <a
          href="https://8figuremerch.myshopify.com/"
          className="px-6 py-2 rounded-md border border-white text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 font-bold tracking-wide uppercase hover:opacity-80 transition duration-300"
        >
          Shop Now
        </a>
        <a
          href="#"
          className="px-6 py-2 rounded-md border border-white text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 font-bold tracking-wide uppercase hover:opacity-80 transition duration-300"
        >
          Watch Drop
        </a>
      </div>
    </div>

  </div>
</section>

<section id="press" className="py-20 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white">
  <div className="max-w-7xl mx-auto">
<h2 className="text-4xl text-center sm:text-4xl md:text-5xl font-extrabold text-white mb-12 leading-tight">
        Press Shots
      </h2>    <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
      Capturing the energy. The moments that define the artist. Explore the official 8Figure gallery.
    </p>
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
      {[
        "/images/fataiimage1.jpg",
        "/images/fataiimage2.jpg",
        "/images/fataiimage3.jpg",
        "/images/fataiimage4.jpg",
        "/images/fataiimage5.jpg",
        "/images/fataiimage6.jpg",
      ].map((src, idx) => (
        <div key={idx} className="overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
          <Image
            src={src}
            alt={`8Figure Press ${idx + 1}`}
            width={600}
            height={800}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
      ))}
    </div>
  </div>
</section>


<footer  id="contact" className="bg-[#0a0a0a] text-white pt-20 pb-10 px-6 border-t border-gray-800 shadow-inner">
  <div className="max-w-6xl mx-auto flex flex-col gap-16 items-center text-center">

    {/* Contact Form */}
    <div className="w-full animate-fade-in">
      <h4 className="text-2xl font-bold mb-3">Contact Us</h4>
      <p className="text-sm text-gray-400 mb-6 max-w-xl mx-auto">
        Got a question, feedback, or collaboration idea? Drop us a message below.
      </p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
        <input type="text" placeholder="Full Name" className="bg-[#111] text-white px-4 py-3 rounded-md w-full" />
        <input type="email" placeholder="Email Address" className="bg-[#111] text-white px-4 py-3 rounded-md w-full" />
        <textarea placeholder="Your Message" rows="4" className="bg-[#111] text-white px-4 py-3 rounded-md w-full md:col-span-2"></textarea>
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-400 transition text-black font-bold py-3 px-6 rounded-md md:col-span-2 mx-auto">
          Send Message
        </button>
      </form>
    </div>

    {/* Logo + Nav + Socials */}
    <div className="w-full pt-10 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-6 mt-12">
      <h3 className="text-xl font-extrabold">
        <span className="text-yellow-400">8F</span>IGURE
      </h3>
      <div className="space-x-6">
        <a href="#music" className="hover:text-yellow-400 transition">Music</a>
        <a href="#merch" className="hover:text-yellow-400 transition">Merch</a>
        <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
      </div>
      <div className="flex space-x-4 text-xl">
        <a href="https://www.instagram.com/fataiwilliam/" className="hover:text-yellow-400"><i className="fab fa-instagram" /></a>
        <a href="https://music.apple.com/us/artist/fatai-william/1480921421" className="hover:text-yellow-400"><i className="fab fa-spotify" /></a>
        <a href="https://www.youtube.com/@fataiwilliamvevo7370" className="hover:text-yellow-400"><i className="fab fa-youtube" /></a>
      </div>
    </div>

    {/* Copyright */}
    <p className="text-xs text-gray-600 mt-10">&copy; 2025 8Figure Official. All rights reserved.</p>
  </div>

  <style jsx>{`
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fade-in 0.6s ease-out;
    }
  `}</style>
</footer>


{/*<footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 flex justify-center items-center gap-2">
    Contact Us
    </h2>
    <p className="text-white/70 mb-10 max-w-2xl mx-auto">
      Got a question, feedback, or collaboration idea? Drop us a message below and we’ll get back to you.
    </p>

    <form className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <textarea
        rows="5"
        placeholder="Your Message"
        className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      ></textarea>

      <button
        type="submit"
        className="px-8 py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-black font-bold rounded-md hover:opacity-90 transition duration-300 shadow-lg"
      >
        Send Message
      </button>
    </form>

    <p className="text-sm text-white/40 mt-10">© {new Date().getFullYear()} 8Figure Official. All rights reserved.</p>
  </div>
</footer> */}

    </div>
  );
}
