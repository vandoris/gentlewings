'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function ParrotDetailPage() {
  const { id } = useParams();
  const [parrot, setParrot] = useState<any>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch('/api/parrots')
      .then(res => res.json())
      .then(data => {
        const found = data.find((p: any) => p.id.toString() === id);
        setParrot(found);
      });
  }, [id]);

  if (!parrot) return <p className="text-center mt-10">載入中...</p>;

  const images = parrot.photos || [parrot.photo];

  return (
    <main className="max-w-3xl mx-auto p-6 bg-white min-h-screen">
      <div className="mb-6">
        <Link href="/adopt" className="text-sm text-[#91C5A9] underline hover:text-[#7CAF95]">← 回到認養專區</Link>
      </div>

      <div className="bg-[#F2F7F5] border border-[#91C5A9] rounded-xl shadow p-6">
        {/* 主圖可點擊開啟 Lightbox */}
        <div className="relative aspect-[4/3] w-full max-h-[500px] mb-4 cursor-pointer" onClick={() => setIsOpen(true)}>
          <Image
            src={images[currentImage]}
            alt={parrot.name}
            fill
            className="object-contain rounded-xl"
          />
        </div>

        {/* Lightbox 開啟 */}
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={currentImage}
          slides={images.map((src: string) => ({ src }))}
        />

        {/* 縮圖預覽區 */}
        {images.length > 1 && (
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {images.map((img: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className="w-20 h-20 relative flex-shrink-0"
              >
                <Image
                  src={img}
                  alt={`preview-${idx}`}
                  fill
                  className={`object-cover rounded ${currentImage === idx ? 'ring-2 ring-[#91C5A9]' : ''}`}
                />
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-3xl font-bold text-[#4D7C6D]">{parrot.name}</h1>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
            parrot.status === '已預約'
              ? 'bg-gray-100 text-gray-600 border-gray-300'
              : parrot.status === '已認養'
              ? 'bg-red-100 text-red-700 border-red-300'
              : 'bg-yellow-100 text-yellow-800 border-yellow-300'
          }`}>
            {parrot.status}
          </span>
        </div>

        <p className="text-gray-700 mb-2">品種：{parrot.species} ‧ 性別：{parrot.gender} ‧ 年齡：{parrot.age} 歲</p>
        <p className="text-sm text-gray-600 mb-4">入園日期：{parrot.entryDate}</p>

        <h2 className="text-lg font-bold text-[#4D7C6D] mb-2">個性描述</h2>
        <p className="text-base text-gray-700 mb-4">{parrot.personality}</p>

        <h2 className="text-lg font-bold text-[#4D7C6D] mb-2">醫療紀錄</h2>
        <p className="text-base text-gray-700 mb-6">{parrot.medical}</p>

        <Link
  href={`/apply?parrot=${encodeURIComponent(parrot.name)}`}
  className="inline-block bg-[#91C5A9] text-white px-5 py-2 rounded hover:bg-[#7CAF95] transition"
>
  我要認養牠
</Link>
      </div>
    </main>
  );
}
