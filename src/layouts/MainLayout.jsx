import { Outlet } from "react-router";
import MainFooter from "../components/layout/MainFooter";
import Navbar from "../components/layout/Navbar";
import AnnouncementBar from "../components/layout/AnnouncementBar";

export default function MainLayout() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto overflow-x-hidden">
        <AnnouncementBar />
        <header className="bg-white">
          <Navbar />
        </header>

        {/* Remove extra max-w — keep padding only */}
        <main className="">
          <Outlet />
        </main>

        <footer className="bg-black px-4">
          <MainFooter />
        </footer>
      </div>
    </>
  );
}
