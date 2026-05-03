import { CheckCircle, Circle, Clock, Loader, Pin } from "lucide-react";
import type { JSX } from "react";

export interface Task {
  priority: "High Priority" | "Med Priority" | "Low Priority";
  title: string;
  description: string;
  tags: string[];
  due: string;
  status: "IN PROGRESS" | "TODO" | "DONE";
}

interface TaskListProps {
  mockData: Task[];
}

export default function TaskList(props: TaskListProps) {
  const classPriority = (priority: Task["priority"]): string => {
    if (priority === "High Priority") {
      return "text-red-400 bg-red-100";
    } else if (priority === "Med Priority" || priority === "Low Priority") {
      return "text-blue-400 bg-blue-100";
    }
    return ""; // Retourne une chaîne vide par défaut si la priorité n'est pas reconnue
  };
  const iconStatut = (statut: Task["status"]): JSX.Element => {
    if (statut === "IN PROGRESS") {
      return <Loader className="h-4 text-gray-500" />;
    } else if (statut === "TODO") {
      return <Circle className="h-4 text-gray-500" />;
    }
    return <CheckCircle className="h-4 text-green-500" />;
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {props.mockData.map((data: Task, index: number) => (
        <div
          key={index}
          className="bg-white shadow p-4 rounded-xl w-full max-w-sm"
        >
          <header className="flex items-center justify-between mb-4">
            <p
              className={`p-2 text-sm rounded-2xl max-w-32 text-center ${classPriority(data.priority)}`}
            >
              {data.priority}
            </p>
            <Pin className="h-4 text-gray-500" />
          </header>
          <h2 className="font-semibold mb-2">{data.title}</h2>
          <p className="text-sm text-gray-600 mb-4">{data.description}</p>
          <div className="flex gap-2">
            {data.tags.map((tag: string, idt: number) => (
              <p
                key={idt}
                className="text-[0.75em] text-gray-500 bg-blue-100 px-2 py-1 rounded-full"
              >
                {tag}
              </p>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <Clock className="text-gray-400 h-4"></Clock>
              <span className="text-sm text-gray-500">{data.due}</span>
            </div>
            <div className="flex gap-1">
              {iconStatut(data.status)}
              <p
                className={`text-sm text-gray-500 ${data.status === "DONE" && "text-green-500"}`}
              >
                {data.status}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
