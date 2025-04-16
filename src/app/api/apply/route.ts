// src/app/api/apply/route.ts
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'adoptions.json');

export async function POST(req: Request) {
  try {
    const newData = await req.json();
    const fileData = fs.existsSync(dataFilePath)
      ? JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'))
      : [];

    const updatedData = [...fileData, { ...newData, createdAt: new Date().toISOString() }];
    fs.writeFileSync(dataFilePath, JSON.stringify(updatedData, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving adoption:', error);
    return NextResponse.json({ error: '資料儲存失敗' }, { status: 500 });
  }
}
