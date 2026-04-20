import {
  HelpCircle,
  LogOut,
  Paperclip,
  Plus,
  SofaIcon,
  TimerIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const classNav = "b-8 px-2 py-3 flex items-center gap-2";
  return (
    <>
      <aside className="bg-[#EEF0FF] flex flex-col p-4 w-64 h-full fixed top-0 left-0">
        <header className="">
          <h1 className="text-primary font-semibold text-xl mb-1">Pro Todo</h1>
          <p className="text-gray-500 uppercase text-sm font-semibold mb-8">
            The executive flow
          </p>
        </header>
        <nav className="flex flex-col gap-2 grow">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${classNav} ${isActive ? "bg-neutral" : "bg-transparent"}`
            }
          >
            <Paperclip className="h-4" />
            <p>All tasks</p>
          </NavLink>

          <NavLink
            to="/today"
            className={({ isActive }) =>
              `${classNav} ${isActive ? "bg-neutral" : "bg-transparent"}`
            }
          >
            <TimerIcon className="h-4" />
            <p>Today</p>
          </NavLink>
          <NavLink
            to="/upcomming"
            className={({ isActive }) =>
              `${classNav} ${isActive ? "bg-neutral" : "bg-transparent"}`
            }
          >
            <SofaIcon className="h-4" />
            <p>Upcomming</p>
          </NavLink>
          <NavLink to={"/create"} className={"btn-primary my-8"}>
            <Plus className="h-4" />
            <p>Create</p>
          </NavLink>
        </nav>
        <footer className="flex flex-col gap-2">
          <NavLink
            to="/help"
            className={({ isActive }) =>
              `${classNav} ${isActive ? "bg-neutral" : "bg-transparent"}`
            }
          >
            <HelpCircle className="h-4" />
            <p>Help</p>
          </NavLink>
          <NavLink
            to="/sign-out"
            className={({ isActive }) =>
              `${classNav} ${isActive ? "bg-neutral" : "bg-transparent"}`
            }
          >
            <LogOut className="h-4" />
            <p>Sign out</p>
          </NavLink>
        </footer>
      </aside>
    </>
  );
};

export default Navbar;
