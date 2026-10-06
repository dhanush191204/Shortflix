import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import SidebarMenu from "./components/SidebarMenu";

function Sidebar() {
  return (
    <>
      <div className=" bg-[#111315] row-span-9 sticky top-0">
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
              <SidebarMenu name="Home" icon="bi bi-house-door-fill mr-2" />
            </li>
            <li>
              <SidebarMenu name="WatchList" icon="bi bi-heart-fill mr-2" />
            </li>
            <li>
              <SidebarMenu
                name="Comming Soon"
                icon="bi bi-calendar-event mr-2"
              />
            </li>
            <li>
              <SidebarMenu name="Discovery" icon="bi bi-clock-history mr-2" />
            </li>
          </ul>
        </div>
        <div className="ml-5 mt-8 mb-3 text-[#9C9D9D] hover:text-[#FFFFFF]    ">
          SOCIAL
        </div>
        <div>
          <ul>
            <li>
              <SidebarMenu name="Friends" icon="bi bi-person mr-2" />
            </li>
            <li>
              <SidebarMenu name="Parties" icon="bi bi-star-fill mr-2" />
            </li>
            <li>
              <SidebarMenu
                name="Media"
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
              <SidebarMenu name="Setting" icon=" bi bi-gear mr-2 " />
            </li>
            <li>
              <SidebarMenu name="Log Out" icon=" bi bi-box-arrow-right mr-2 " />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
