import { NextResponse } from 'next/server';
import { blogsData } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '6');

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const blogs = blogsData.slice(startIndex, endIndex);
  const total = blogsData.length;
  const totalPages = Math.ceil(total / limit);

  return NextResponse.json({
    blogs,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1
    }
  });
}

