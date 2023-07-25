"use server";

import prisma from "../../../../prisma/seed";
import { revalidatePath } from "next/cache";

export const createProject = async (data: FormData) => {
  const title = (data.get("title") ?? "") as string;
  if (!title) {
    throw new Error("title is required");
  }
  const res = await prisma.project.create({
    data: {
      title,
    },
  });
  if (res.title) {
    revalidatePath("/projects");
  }
};
