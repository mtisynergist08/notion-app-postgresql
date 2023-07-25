import prisma from "../../prisma/seed";
import CreateProject from "./components/client/CreateProject";
import Link from "next/link";

const fetchProject = async () => {
  const project = await prisma.project.findMany();

  return project;
};

export default async function Sidebar() {
  const projects = await fetchProject();
  console.log(projects);
  return (
    <>
      <div className="flex py-[0.5rem] border-b flex-row flex-wrap justify-between items-center">
        <h2 className="font-semibold  border-slate-200">Projects</h2>
        <CreateProject />
      </div>
      <ul>
        {projects.map((project) => (
          <Link
            href={`/projects/${project.id}`}
            className="p-[0.5rem] mt-[0.25rem] bg-slate-200 relative flex rounded-md"
            key={project.id}
          >
            {project.title}
          </Link>
        ))}
      </ul>
    </>
  );
}
