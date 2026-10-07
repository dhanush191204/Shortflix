import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import SidebarMenu from "./components/SidebarMenu";

function Sidebar() {
  return (
    <>
      <div className=" bg-[#111315] row-span-9 sticky top-0 h-191 ">
        <div className="flex justify-center m-5">
          <img
            className="h-8 relative left-0.5 bottom-0.5 "
            src="src\assets\s-removebg.png"
            alt="app logo"
          />
          <span className="text-white text-2xl content-center">hortflix</span>
        </div>
        <div className="ml-5 mb-3 text-[#9C9D9D] hover:text-[#FFFFFF]    ">
          MENU
        </div>
        <div className=" w-100%   ">
          <ul>
            <li>
              <SidebarMenu
                name="Home"
                link="/"
                icon="bi bi-house-door-fill mr-2"
              />
            </li>
            <li>
              <SidebarMenu
                name="WatchList"
                link="/watch-list"
                icon="bi bi-heart-fill mr-2"
              />
            </li>
            <li>
              <SidebarMenu
                name="Comming Soon"
                link="/comming-soon"
                icon="bi bi-calendar-event mr-2"
              />
            </li>
            <li>
              <SidebarMenu name="Discovery" link="/discovery" icon="bi bi-clock-history mr-2" />
            </li>
          </ul>
        </div>
        <div className="ml-5 mt-8 mb-3 text-[#9C9D9D] hover:text-[#FFFFFF]    ">
          SOCIAL
        </div>
        <div>
          <ul>
            <li>
              <SidebarMenu name="Friends" link="/friends" icon="bi bi-person mr-2" />
            </li>
            <li>
              <SidebarMenu name="Parties" link="/parties" icon="bi bi-star-fill mr-2" />
            </li>
            <li>
              <SidebarMenu
                name="Media"
                link="/media"
                icon="bi bi-collection-play-fill mr-2"
              />
            </li>
          </ul>
        </div>

        <div className="ml-5 mt-8 mb-3  text-[#9C9D9D] hover:text-[#FFFFFF]    ">
          GENERAL
        </div>

        <div>
          <ul>
            <li>
              <SidebarMenu name="Setting" link="/setting" icon=" bi bi-gear mr-2 " />
            </li>
            <li>
              <SidebarMenu name="Log Out" link="/log-out" icon=" bi bi-box-arrow-right mr-2 " />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
