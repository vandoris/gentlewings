'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AdoptPage() {
  const [parrots, setParrots] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/parrots')
      .then(res => res.json())
      .then(data => setParrots(data));
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-[#4D7C6D] mb-6 text-center">等待幸福的鳥寶們</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {parrots.map((parrot) => (
          <div key={parrot.id} className="bg-[#F2F7F5] border border-[#91C5A9] rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <div className="w-full h-[400px] relative">
                <Link href={`/adopt/${parrot.id}`}>
                    <Image
                    src={parrot.photo}
                    alt={parrot.name}
                    fill
                    className="object-cover rounded-t-xl"
                    />
                </Link>
            </div>
            <div className="p-4 space-y-1">
              <h2 className="text-xl font-bold text-[#4D7C6D]">{parrot.name}</h2>
              <p className="text-sm text-gray-600">{parrot.species} ‧ {parrot.gender} ‧ {parrot.age} 歲</p>
              <span className={`inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full border ${
                parrot.status === '已預約'
                  ? 'bg-gray-100 text-gray-600 border-gray-300'
                  : parrot.status === '已認養'
                  ? 'bg-red-100 text-red-700 border-red-300'
                  : 'bg-yellow-100 text-yellow-800 border-yellow-300'
              }`}>
                {parrot.status}
              </span>
              <div className="mt-3">
                <Link
                  href={`/adopt/${parrot.id}`}
                  className="text-sm text-[#91C5A9] underline hover:text-[#7CAF95]"
                >
                  查看更多
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
