import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AdminLayout from './components/AdminLayout';
import AdminProjects from './pages/AdminProjects';
import AdminClients from './pages/AdminClients';
import ViewContacts from './pages/ViewContacts';
import ViewSubscriptions from './pages/ViewSubscriptions';
import './App.css';

function App() {
  return (
    <Routes>
      {/* 1. Landing Page Route */}
      <Route path="/" element={<LandingPage />} />

      {/* 2. Admin Panel Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminProjects />} />
        <Route path="projects" element={<AdminProjects />} />
        <Route path="clients" element={<AdminClients />} />
        <Route path="contacts" element={<ViewContacts />} />
        <Route path="subscriptions" element={<ViewSubscriptions />} />
      </Route>
    </Routes>
  );
}

export default App;