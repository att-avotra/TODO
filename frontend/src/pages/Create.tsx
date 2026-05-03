import { Plus, X } from "lucide-react";
import { useState } from "react";

export default function Create() {
  const [tags, setTags] = useState(["default"]);
  const removeTags = (index: number) => {
    const newtags = [...tags];
    const a = newtags.filter((_, i) => i !== index);
    setTags(a);
  };
  const [priority, setPriority] = useState("high");
  return (
    <div className="py-4 px-8">
      <header>
        <h2 className="text-gray-600">
          Tasks &gt; <span className="text-primary font-bold">New entry</span>
        </h2>
      </header>
      <section className="flex flex-1 justify-center items-center bg-gray-50">
        <form
          action="#"
          className="bg-white shadow-xl p-4 rounded flex flex-col gap-3 w-xl
          "
        >
          <label htmlFor="title">Title :</label>
          <input
            type="text"
            id="title"
            placeholder="What needs to be done?"
            className="block w-full py-4 px-2 rounded-md outline-0 bg-gray-200 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <label htmlFor="description">Title :</label>
          <textarea
            id="description"
            className="block w-full  py-4 px-2 rounded-md outline-0 bg-gray-200 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Add some context or specif steps..."
          ></textarea>
          <div className="flex justify-between gap-10 items-center mt-1">
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="status">Status :</label>
              <select
                name=""
                id="status"
                className="block cursor-pointer w-full  py-4 px-2 rounded-md outline-0 bg-gray-200 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="todo">TODO</option>
                <option value="in-progress">In progess</option>
                <option value="done">Done</option>
              </select>
            </div>
            <div className="flex flex-1  flex-col gap-2">
              <label htmlFor="date">Due date :</label>
              <input
                type="date"
                name=""
                id="date"
                className="block w-full cursor-pointer py-4 px-2 rounded-md outline-0 bg-gray-200 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <section className="">
            <label htmlFor="">Priority:</label>
            <div className="flex gap-2 bg-gray-200 p-2 rounded-full items-center">
              <p
                className={`py-1 px-2 rounded-full  text-gray-400 text-sm font-bold cursor-pointer  ${priority === "high" && " bg-white  text-primary"} `}
                onClick={() => setPriority("high")}
              >
                High
              </p>

              <p
                className={`py-1 px-2 rounded-full  text-gray-400 text-sm font-bold cursor-pointer  ${priority === "medium" && " bg-white  text-primary"} `}
                onClick={() => setPriority("medium")}
              >
                Medium
              </p>
              <p
                className={`py-1 px-2 rounded-full  text-gray-400 text-sm font-bold cursor-pointer  ${priority === "low" && " bg-white  text-primary"} `}
                onClick={() => setPriority("low")}
              >
                Low
              </p>
            </div>
          </section>

          <div className="flex flex-col gap-2">
            <label htmlFor="">Tags</label>
            <div className="flex gap-2 flex-wrap">
              {tags.map((value, index) => (
                <div
                  key={index}
                  className="flex gap-1 items-center text-sm bg-blue-200 px-2 py-1 rounded-full"
                >
                  <p className="">{value}</p>
                  <X
                    className="h-4 cursor-pointer"
                    onClick={() => removeTags(index)}
                  ></X>
                </div>
              ))}
              <div
                onClick={() => setTags((prev) => [...prev, "new"])}
                className="cursor-pointer flex items-center text-gray-600 bg-gray-50 border-2 border-gray-200 text-sm p-2 rounded-full"
              >
                <Plus className="h-4" />
                <p>add Tag</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button type="reset" className="btn-secondary">Cancel</button>
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
