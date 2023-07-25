import React from "react";
import prisma from "../../../../prisma/seed";
import { formatDate } from "@/utils/formattedDate";
import CreateTopic from "@/app/components/client/createTopic";

const ProjectById = async (id: number) => {
  const res = await prisma.project.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      updatedAt: true,
      createdAt: true,
    },
  });
  return res;
};

const ProjectByID = async (props: {
  params: { id: string };
  searchParams: {};
}) => {
  const project = await ProjectById(parseInt(props.params.id));

  let createdUpdatedText: string;
  if (project.updatedAt > project.createdAt) {
    createdUpdatedText =
      "Updated: " + formatDate(project.updatedAt as unknown as string);
  } else {
    createdUpdatedText =
      "Created: " + formatDate(project.createdAt as unknown as string);
  }

  return (
    <main className="flex flex-col flex-1">
      <h2 className="p-[0.25rem] flex flex-col font-semibold border-b border-slate-200">
        {project.title}
        <span className="text-gray-400 text-sm">{createdUpdatedText}</span>
      </h2>
      <section className="flex mt-[1rem] flex-row justify-between">
        <h2>Topics:</h2>
        <CreateTopic />
      </section>
    </main>
  );
};

export default ProjectByID;
