import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
      <div>
        <div class="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content flex flex-col items-center justify-center">
            <label
              for="my-drawer-2"
              class="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
            <Outlet></Outlet>
          </div>
          <div class="drawer-side">
            <label for="my-drawer-2" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
              <li>
                <NavLink to={"/dashboard/addtools"}>Add tools</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/alluser"}>User list</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/alltools"}>tools list</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;