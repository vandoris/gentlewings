import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'parrots.json');

export async function GET() {
  try {
    const jsonData = fs.readFileSync(dataFilePath, 'utf-8');
    const parrots = JSON.parse(jsonData);
    return NextResponse.json(parrots);
  } catch (err) {
    return NextResponse.json({ error: '資料讀取失敗' }, { status: 500 });
  }
}