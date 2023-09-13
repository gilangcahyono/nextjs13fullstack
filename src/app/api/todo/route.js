import prisma from '../../../../lib/prisma';

import {NextResponse} from 'next/server';

export async function GET() {
  const res = await prisma.todo.findMany();
  return NextResponse.json(res);
}

export async function POST(request) {
  const body = await request.json();
  await prisma.todo.create({
    data: {
      task: body.task,
    },
  });
  return NextResponse.json({ok: true, message: 'Data berhasil ditambahkan'});
}
