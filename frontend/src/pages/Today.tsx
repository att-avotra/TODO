import { useState } from "react";
import TaskList, { type Task } from "../components/TaskList";
import { ArrowDown } from "lucide-react";

export default function Today() {
  const mockData: Task[] = [
    {
      priority: "High Priority",
      title: "Q4 Financial Roadmap Review",
      description:
        "Complete the comprehensive analysis of international market shifts and...",
      tags: ["Finance", "Strategic"],
      due: "Today,5:05 PM",
      status: "IN PROGRESS",
    },
    {
      priority: "Med Priority",
      title: "Brand Identity Refresh",
      description:
        "Review initial design mockups from the agency and provide structured",
      tags: ["Creative", "Marketing"],
      due: "Tommorow",
      status: "TODO",
    },
    {
      priority: "Low Priority",
      title: "Newletter Draft",
      description:
        "Finalize the copy for the monthly executive summary being sent to all...",
      tags: ["Internal"],
      due: "Tommorow",
      status: "DONE",
    },
    {
      priority: "High Priority",
      title: "Q4 Financial Roadmap Review",
      description:
        "Complete the comprehensive analysis of international market shifts and...",
      tags: ["Finance", "Strategic"],
      due: "Today,5:05 PM",
      status: "IN PROGRESS",
    },
    {
      priority: "Med Priority",
      title: "Brand Identity Refresh",
      description:
        "Review initial design mockups from the agency and provide structured",
      tags: ["Creative", "Marketing"],
      due: "Tommorow",
      status: "DONE",
    },
    {
      priority: "Low Priority",
      title: "Newletter Draft",
      description:
        "Finalize the copy for the monthly executive summary being sent to all...",
      tags: ["Internal"],
      due: "Tommorow",
      status: "TODO",
    },
  ];
  const [status, setStatus] = useState("all");
  return (
    <div className="py-4 px-8">
      <div className="px-2 py-2 bg-gray-100 rounded-xl mt-4 flex flex-wrap flex-col md:flex-row md:items-center md:justify-between gap-4">
        <nav>
          <ul className="flex items-center gap-2 ml-4 bg-white px-3 py-2 rounded-xl">
            <li
              className={`px-3 py-1 rounded-full cursor-pointer transition-all duration-300 ease-in-out  ${status === "all" && " bg-primary  text-white"}`}
              onClick={() => setStatus("all")}
            >
              All
            </li>
            <li
              className={`px-3 py-1 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${status === "todo" && " bg-primary  text-white"}`}
              onClick={() => setStatus("todo")}
            >
              Todo
            </li>
            <li
              className={`px-3 py-1 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${status === "in-progress" && " bg-primary  text-white"}`}
              onClick={() => setStatus("in-progress")}
            >
              In progress
            </li>
            <li
              className={`px-3 py-1 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${status === "done" && " bg-primary  text-white"}`}
              onClick={() => setStatus("done")}
            >
              Done
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <div className="flex gap-2">
            <ArrowDown className="text-gray-600" />
            <p className="text-md text-gray-600">Priority</p>
            <select name="" id="" className="px-4">
              <option value="">All</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
      </div>
      <TaskList mockData={mockData} />
    </div>
  );
}
