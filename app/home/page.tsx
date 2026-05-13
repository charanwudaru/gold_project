'use client';
import { useState } from 'react';
import { Diamond, Clock, Link2, Circle, Star, SlidersHorizontal } from 'lucide-react';
import BottomNav from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import ProductCard from '@/components/ProductCard';
import FilterModal from '@/components/FilterModal';

const categories = [
  { label: 'All Collections', icon: Diamond },
  { label: 'Timepieces', icon: Clock },
  { label: 'Chains', icon: Link2 },
  { label: 'Rings', icon: Circle },
  { label: 'Bracelets', icon: Star },
];

const products = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
    status: 'available' as const,
    title: 'Round Brilliant Solitaire Ring',
    spec: '2.4ct · VS1 · F Color',
    views: '1.2K',
    category: 'Rings',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&q=80',
    status: 'reserved' as const,
    title: 'Skeleton Dial Chronograph',
    spec: '42mm · Rose Gold · 148g',
    views: '845',
    category: 'Timepieces',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    status: 'available' as const,
    title: '10mm Solid Cuban Link Chain',
    spec: '18k Solid · 240g · 10mm',
    views: '2.1K',
    category: 'Chains',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80',
    status: 'available' as const,
    title: 'Diamond Pavé Eternity Band',
    spec: '1.8ct · White Gold · 4.2g',
    views: '978',
    category: 'Rings',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    status: 'available' as const,
    title: 'Open Heart Tourbillon Watch',
    spec: '38mm · Platinum · 210g',
    views: '3.4K',
    category: 'Timepieces',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    status: 'reserved' as const,
    title: 'Diamond Tennis Bracelet',
    spec: '5.0ct · E/VVS2 · 7.4g',
    views: '1.7K',
    category: 'Bracelets',
  },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('All Collections');
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = activeCategory === 'All Collections'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="app-shell">
      <div className="main-area">
        <Topbar />
        <main className="page-content">
          {/* Category Tabs & Filters */}
          <div className="category-tabs-wrap">
            <div className="category-tabs">
              {categories.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  id={`cat-${label.toLowerCase().replace(' ', '-')}`}
                  className={`cat-tab${activeCategory === label ? ' active' : ''}`}
                  onClick={() => setActiveCategory(label)}
                >
                  <Icon size={14} />
                  {label}
                </button>
              ))}
            </div>
            <button className="filter-btn" onClick={() => setFilterOpen(true)}>
              <SlidersHorizontal size={14} />
              Filters
            </button>
          </div>

          {/* Product Grid */}
          <div className="product-grid">
            {filtered.map(p => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </main>
      </div>
      <BottomNav />

      {filterOpen && <FilterModal onClose={() => setFilterOpen(false)} />}
    </div>
  );
}
