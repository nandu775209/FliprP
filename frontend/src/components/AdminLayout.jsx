import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="/admin/projects">Add Projects</NavLink>
            </li>
            <li>
              <NavLink to="/admin/clients">Add Clients</NavLink>
            </li>
            <li>
              <NavLink to="/admin/contacts">View Contacts</NavLink>
            </li>
            <li>
              <NavLink to="/admin/subscriptions">View Subscriptions</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;