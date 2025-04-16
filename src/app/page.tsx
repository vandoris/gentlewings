'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero 區塊 */}
      <section className="w-full h-[400px] relative">
  <Image
    src="/parrots/hero-watercolor.jpg"
    alt="首頁插畫"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
    <h1 className="text-white text-2xl md:text-4xl font-bold drop-shadow-xl text-center px-4 leading-relaxed">
      每一雙翅膀，<br className="md:hidden" />
      都值得被溫柔守護
    </h1>
  </div>
</section>

      {/* 介紹與導引區 */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-[#4D7C6D] mb-4">我們的使命</h2>
        <p className="text-gray-700 text-lg">
          善羽園是一個致力於鸚鵡救援、療癒與認養的溫暖平台。每一隻被遺棄、受傷或需要新家的鳥寶，都值得被理解與尊重。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <Link
            href="/adopt"
            className="bg-[#F2F7F5] border border-[#91C5A9] p-6 rounded-xl shadow hover:shadow-md hover:bg-[#E4EFE7] transition"
          >
            <h3 className="text-lg font-bold text-[#4D7C6D] mb-2">立即認養</h3>
            <p className="text-sm text-gray-600">看看有哪些鳥寶在等待家的擁抱</p>
          </Link>

          <Link
            href="/about"
            className="bg-[#F2F7F5] border border-[#91C5A9] p-6 rounded-xl shadow hover:shadow-md hover:bg-[#E4EFE7] transition"
          >
            <h3 className="text-lg font-bold text-[#4D7C6D] mb-2">認識我們</h3>
            <p className="text-sm text-gray-600">了解我們的故事、理念與願景</p>
          </Link>

          <Link
            href="/support"
            className="bg-[#F2F7F5] border border-[#91C5A9] p-6 rounded-xl shadow hover:shadow-md hover:bg-[#E4EFE7] transition"
          >
            <h3 className="text-lg font-bold text-[#4D7C6D] mb-2">支持我們</h3>
            <p className="text-sm text-gray-600">小額捐助、物資贊助或成為志工</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
