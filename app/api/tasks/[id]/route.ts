import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

//Updates the 'done' status of a task

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const taskId = parseInt(params.id);

  const task = await prisma.task.findUnique({
    where: {
      id: taskId,
    },
  });

  if (!task) {
    return Response.json({ error: "Task not found" }, { status: 404 });
  }

  const updatedTask = await prisma.task.update({
    where: { id: taskId },
    data: {
      ...body,
    },
  });

  return Response.json(updatedTask, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const task = await prisma.task.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  await prisma.task.delete({
    where: { id: task?.id },
  });

  return Response.json("Deleted Successfully", { status: 200 });
}
