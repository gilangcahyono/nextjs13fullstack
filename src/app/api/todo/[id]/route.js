import prisma from '@/lib/prisma';
import {NextResponse} from 'next/server';

export async function DELETE(request, {params}) {
  await prisma.todo.delete({
    where: {
      id: parseInt(params.id),
    },
  });
  return NextResponse.json({ok: true, message: 'Data berhasil dihapus'});
}

export async function PATCH(request, {params}) {
  const body = await request.json();
  await prisma.todo.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      task: body.task,
    },
  });
  return NextResponse.json({ok: true, message: 'Data berhasil diubah'});
}
