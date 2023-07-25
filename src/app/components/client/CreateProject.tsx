"use client";

import { useState } from "react";
import { createProject } from "../server/serverCreateProject";

const CreateProject = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowCreateForm(true)}
        className="h-[32px] m-l w-[32px] bg-blue-500 text-white hover:text-black hover:bg-blue-300 cursor-pointer duration-300 mb-2 rounded-lg"
      >
        +
      </button>
      {showCreateForm && (
        <form action={createProject}>
          <input
            type="text"
            name="title"
            placeholder="Project Name"
            className="w-full p-[0.5rem] border-slate-400 rounded-md"
          />
        </form>
      )}
    </>
  );
};

export default CreateProject;
