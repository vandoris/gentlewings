'use client';
import Image from 'next/image';

export default function SupportPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 bg-white text-gray-800">
      <h1 className="text-3xl font-bold text-center text-[#4D7C6D] mb-8">支持我們</h1>

      <section className="mb-12 text-center">
        <p className="text-lg leading-relaxed">
          善羽園的運作仰賴每一位願意幫助鳥寶的人。
          無論是物資、時間、技能或金錢，每一份善意都是鳥寶們繼續展翅的力量。
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#4D7C6D] mb-4">🧡 捐款支持</h2>
        <p className="mb-2">您可以透過以下方式捐款：</p>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>銀行轉帳：戶名「善羽園」，帳號 123-456-789，台灣銀行內湖分行</li>
          <li>街口支付、LINE Pay（請私訊我們以取得 QR Code）</li>
          <li>現場捐款箱（每週日開放時段）</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#4D7C6D] mb-4">🤝 志工招募</h2>
        <p className="leading-relaxed">
          我們歡迎志工協助日常照顧鳥寶、環境清潔、物資整理、文案設計、網頁開發等。
          若您願意參與，請透過<a href="/apply" className="text-[#91C5A9] underline hover:text-[#7CAF95]">認養申請表單</a>聯絡我們，我們將主動聯繫說明職責與時段安排。
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#4D7C6D] mb-4">🎁 物資贊助</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>乾淨的鳥籠、飼料碗、跳台等鳥寶用品</li>
          <li>未開封鳥食（請確認有效期限）</li>
          <li>衛生紙、垃圾袋、抹布等日常清潔物資</li>
          <li>木製玩具或天然藤編玩具（安全無毒）</li>
        </ul>
      </section>

      <section className="text-center">
        <Image
          src="/parrots/support-banner.jpg"
          alt="支持我們插畫"
          width={800}
          height={400}
          className="rounded-xl mx-auto"
        />
        <p className="text-sm text-gray-500 mt-4">🌿 每一份支持，都是我們繼續守護鳥寶的動力。</p>
      </section>
    </main>
  );
}
