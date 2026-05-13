'use client';
import { Search, Bell, Flag, Archive } from 'lucide-react';
import { useState } from 'react';

export default function Topbar() {
  const [query, setQuery] = useState('');
  return (
    <header className="topbar">
      <div className="topbar-brand">
        <span className="topbar-logo">Aurelia Designs</span>
      </div>
      <div className="search-bar">
        <Search size={15} />
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search the collective..."
        />
      </div>
      <div className="topbar-actions">
        <button className="icon-btn" id="notif-btn" aria-label="Notifications">
          <Bell size={16} />
          <span className="dot" />
        </button>
        <button className="icon-btn" id="flag-btn" aria-label="Reports">
          <Flag size={16} />
        </button>
        <button className="icon-btn" id="vault-btn" aria-label="Vault">
          <Archive size={16} />
        </button>
      </div>
    </header>
  );
}
