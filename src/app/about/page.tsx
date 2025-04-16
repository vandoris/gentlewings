'use client';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 bg-white text-gray-800">
      <h1 className="text-3xl font-bold text-center text-[#4D7C6D] mb-8">關於善羽園</h1>

      <section className="mb-12 text-center">
        <p className="text-lg leading-relaxed">
          「善羽園 GentleWings」是一個致力於鸚鵡救援、照護與認養的公益平台。
          我們相信，每一雙翅膀都值得被理解、尊重與守護。從過度繁殖、棄養、走失到健康問題，
          許多鳥寶需要被看見、被照顧，最終回到一個溫暖的家。
        </p>
        <p className="text-md text-[#4D7C6D] mt-6">
          🌟每週日下午二點到五點🌟 ！開放認養！<br />
          ⚠️平日原則上不開放⚠️ 不定期更新善羽鳥寶日常 歡迎現場互動
        </p>
      </section>

      <section className="mb-12">
        <Image
          src="/parrots/about-mission.jpg"
          alt="善羽園理念插畫"
          width={800}
          height={400}
          className="rounded-xl mx-auto"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#4D7C6D] mb-4">我們的理念</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>尊重每隻鳥寶的獨特性與情緒需求</li>
          <li>推廣正確的鸚鵡照養知識與飼主教育</li>
          <li>提供臨時收容、醫療援助與心理復健</li>
          <li>媒合有責任感的認養人，讓鳥寶重獲幸福</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#4D7C6D] mb-4">我們的團隊</h2>
        <p className="text-base leading-relaxed">
          我們是一群由鳥類行為顧問、資深飼主、插畫設計師與工程師組成的跨界志工團隊。
          有些人來自失去過鳥寶的傷痛，有些人從一開始就想為動物做些什麼。
          不論起點，每個人都用行動守護著「生命有重量」這件事。
        </p>
      </section>

      <section className="text-center">
        <p className="text-sm text-gray-500">若你願意支持我們的理念，歡迎前往 <a href="/support" className="text-[#91C5A9] underline hover:text-[#7CAF95]">支持我們</a> 頁面了解更多。</p>
      </section>
    </main>
  );
}
