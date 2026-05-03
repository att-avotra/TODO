import { Bell, HelpCircle, Search, User } from "lucide-react";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center  py-3 px-8">
      <form action="" className="flex gap-1 relative items-center w-1/2">
        <Search className="absolute top-3 left-3 h-5 text-gray-500" />
        <input
          type="search"
          className="bg-gray-300 py-3 ps-10 rounded-full w-full max-w-md outline-0 text-md placeholder:text-sm"
          placeholder="Search task,tags,or projects..."
        />
      </form>
      <section className="flex gap-4 text-gray-600 items-center">
        <Bell className="" />
        <HelpCircle />
        <p>|</p>
        <span className="w-8 h-8 bg-gray-600 rounded-full flex justify-center items-center">
          <User className="text-white h-4" />
        </span>
      </section>
    </header>
  );
}

export default Header;
