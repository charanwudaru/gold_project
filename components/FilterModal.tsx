'use client';
import { X, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

export default function FilterModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-sheet" role="dialog" aria-modal="true" aria-label="Advanced Filters">
        <div className="modal-header">
          <span className="modal-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SlidersHorizontal size={16} /> Filters
          </span>
          <button className="modal-close" onClick={onClose} aria-label="Close"><X size={15} /></button>
        </div>
        
        <div className="modal-fields filter-scroll-area">
          {/* Status */}
          <div className="filter-section">
            <h4 className="filter-title">Status</h4>
            <div className="filter-chips">
              <button className="filter-chip active">Available</button>
              <button className="filter-chip">Reserved</button>
            </div>
          </div>
          
          {/* Metal */}
          <div className="filter-section">
            <h4 className="filter-title">Primary Metal</h4>
            <div className="filter-chips">
              <button className="filter-chip active">18k Yellow Gold</button>
              <button className="filter-chip">18k White Gold</button>
              <button className="filter-chip">18k Rose Gold</button>
              <button className="filter-chip">Platinum 950</button>
              <button className="filter-chip">Sterling Silver</button>
            </div>
          </div>

          {/* Stone */}
          <div className="filter-section">
            <h4 className="filter-title">Stone Type</h4>
            <div className="filter-chips">
              <button className="filter-chip active">Diamond</button>
              <button className="filter-chip">Sapphire</button>
              <button className="filter-chip">Ruby</button>
              <button className="filter-chip">Emerald</button>
              <button className="filter-chip">None</button>
            </div>
          </div>

          {/* Carats */}
          <div className="filter-section">
            <h4 className="filter-title">Carat Weight</h4>
            <div className="filter-range">
              <input type="number" placeholder="Min" className="modal-input" />
              <span>-</span>
              <input type="number" placeholder="Max" className="modal-input" />
            </div>
          </div>

          {/* Grams */}
          <div className="filter-section">
            <h4 className="filter-title">Weight (Grams)</h4>
            <div className="filter-range">
              <input type="number" placeholder="Min" className="modal-input" />
              <span>-</span>
              <input type="number" placeholder="Max" className="modal-input" />
            </div>
          </div>
        </div>

        <div className="modal-footer" style={{ marginTop: '24px' }}>
          <button className="modal-cancel" onClick={onClose}>Clear All</button>
          <button className="modal-save" onClick={onClose}>Apply Filters</button>
        </div>
      </div>
    </div>
  );
}
