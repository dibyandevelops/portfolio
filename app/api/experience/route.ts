import { NextResponse } from 'next/server';
import { experienceData } from '@/lib/data';

export async function GET() {
  return NextResponse.json(experienceData);
}

