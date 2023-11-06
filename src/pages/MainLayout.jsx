import React from "react";
import {Link, Outlet} from "react-router-dom";
import { Tooltip } from "react-tooltip";

function MainLayout() {
  return (
    <div className="w-full min-h-screen bg-gray-50 lg:mx-auto lg:min-w-max">
      <div className="border-b p-2 flex items-center justify-around dark:bg-gray-950 dark:border-gray-500">
        <Link to='/' className="flex items-center gap-x-2 select-none">
          <img src="/logo.png" alt="" width="64" />
          <span className="hidden lg:block lg:text-2xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
            Public MRR
          </span>
        </Link>
        <Link
            to='https://form.jotform.com/233065074056048'
            target="_blank"
            rel="noreferrer"
          data-tooltip-content="MRR must be at least $1"
          data-tooltip-id="tooltip"
          className="border p-2 rounded-md transition-all text-sm lg:text-base border-b-2 active:border cursor-pointer select-none dark:text-gray-300 dark:border-gray-500"
        >
          Share your profile
        </Link>
        <Link className='text-sm lg:text-base' to='https://mirac.lemonsqueezy.com/checkout/buy/584ed4e9-1325-4b28-962a-14e426535e7a' target='_blank' rel='noreferrer'>
          Buy Pre-Order
        </Link>
        <Tooltip id="tooltip" />
      </div>
      <Outlet />
    </div>
  );
}

export default MainLayout;
