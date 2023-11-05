import React from "react";
import { Outlet } from "react-router-dom";
import { Tooltip } from "react-tooltip";

function MainLayout() {
  return (
    <div className="w-full min-h-screen bg-gray-50 mx-auto min-w-max">
      <div className="border-b p-2 flex items-center justify-around">
        <div className="flex items-center gap-x-2">
          <img src="/logo.png" alt="" width="64" />
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
            Public MRR
          </span>
        </div>
        <div
          data-tooltip-content="MRR must be at least $1"
          data-tooltip-id="tooltip"
          className="border p-2 rounded-md transition-all border-b-2 active:border cursor-pointer select-none"
        >
          Submit your profile
        </div>
        <Tooltip id="tooltip" />
      </div>
      <Outlet />
    </div>
  );
}

export default MainLayout;
