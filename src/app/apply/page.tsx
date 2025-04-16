// src/app/apply/page.tsx
'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ApplyPage() {
  const searchParams = useSearchParams();
  const parrotName = searchParams.get('parrot') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    parrot: parrotName
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      setError('請填寫所有必填欄位');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('請輸入正確的電子信箱格式');
      return false;
    }
    const phoneRegex = /^09\d{8}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('請輸入正確的手機號碼格式（例如：0912345678）');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const res = await fetch('/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '', parrot: '' });
      setTimeout(() => window.location.href = '/', 2000);
    } else {
      setError('送出失敗，請稍後再試');
    }
  };

  if (success) {
    return (
      <main className="max-w-xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold text-[#4D7C6D] mb-4">申請已送出</h1>
        <p className="text-gray-700">
          感謝您願意給鳥寶一個溫暖的家 ❤️<br />
          我們將盡快與您聯繫。
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-[#4D7C6D] mb-4 text-center">認養申請表單</h1>
      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 bg-[#F9FAF9] p-6 rounded-xl shadow">
        <div>
          <label className="block font-semibold text-sm mb-1">您的姓名 <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold text-sm mb-1">聯絡信箱 <span className="text-red-500">*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold text-sm mb-1">聯絡電話 <span className="text-red-500">*</span></label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="0912345678"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold text-sm mb-1">想認養的鳥寶</label>
          <input
            type="text"
            name="parrot"
            value={formData.parrot}
            readOnly
            className="w-full border rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
          />
        </div>
        <div>
          <label className="block font-semibold text-sm mb-1">補充說明（選填）</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#91C5A9] text-white py-2 rounded hover:bg-[#7CAF95]"
        >
          送出申請
        </button>
      </form>
    </main>
  );
}