'use client';
import { useState } from 'react';
import { Crop, SlidersHorizontal, Sparkles, AlignLeft, ChevronDown, Sun, Contrast, Droplets } from 'lucide-react';
import BottomNav from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

export default function PostPage() {
  const [brightness, setBrightness] = useState(65);
  const [contrast, setContrast] = useState(40);
  const [saturation, setSaturation] = useState(50);
  const [privateList, setPrivateList] = useState(false);
  const [title, setTitle] = useState('Aura Solitaire Diamond Ring');
  const [price, setPrice] = useState('4,250.00');

  const imgStyle = {
    filter: `brightness(${0.5 + brightness / 100}) contrast(${0.5 + contrast / 80}) saturate(${saturation / 50})`,
  };

  return (
    <div className="app-shell">
      <div className="main-area">
        <Topbar />
        <main className="page-content">
          {/* Header */}
          <div className="post-header">
            <div className="post-header-text">
              <h2>Post New Design</h2>
              <p>Refine image quality and configure listing metadata before publishing to the collective.</p>
            </div>
            <div className="post-header-actions">
              <button id="save-draft-btn" className="btn-outline">Save Draft</button>
              <button id="publish-btn" className="btn-gold">Publish to Collective</button>
            </div>
          </div>

          {/* Image + Studio */}
          <div className="post-layout">
            <div className="image-panel">
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
                alt="Design preview"
                style={imgStyle}
              />
              <div className="raw-badge">RAW</div>
            </div>

            <div className="studio-panel">
              <div className="studio-title">Studio Adjustments</div>

              <button className="btn-ai">
                <Sparkles size={15} />
                AI Auto-Enhance
              </button>

              <div className="studio-tools">
                <button className="tool-btn">
                  <Crop size={18} />
                  Crop &amp; Rotate
                </button>
                <button className="tool-btn">
                  <SlidersHorizontal size={18} />
                  Filters
                </button>
              </div>

              <div className="slider-group">
                <div className="slider-item">
                  <div className="slider-header">
                    <span className="slider-label"><Sun size={14} /> Brightness</span>
                    <span className="slider-val">{brightness}</span>
                  </div>
                  <input type="range" min={0} max={100} value={brightness} onChange={e => setBrightness(+e.target.value)} />
                </div>

                <div className="slider-item">
                  <div className="slider-header">
                    <span className="slider-label"><Contrast size={14} /> Contrast</span>
                    <span className="slider-val">{contrast}</span>
                  </div>
                  <input type="range" min={0} max={100} value={contrast} onChange={e => setContrast(+e.target.value)} />
                </div>

                <div className="slider-item">
                  <div className="slider-header">
                    <span className="slider-label"><Droplets size={14} /> Saturation</span>
                    <span className="slider-val">{saturation}</span>
                  </div>
                  <input type="range" min={0} max={100} value={saturation} onChange={e => setSaturation(+e.target.value)} />
                </div>
              </div>
            </div>
          </div>

          {/* Listing Metadata */}
          <div className="listing-meta">
            <div className="listing-meta-title">
              <AlignLeft size={18} />
              Listing Metadata
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Design Title</label>
                <input
                  id="design-title"
                  className="form-input"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="Enter design title"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Category</label>
                <div className="select-wrap">
                  <select id="category-select" className="form-select">
                    <option>Engagement Rings</option>
                    <option>Timepieces</option>
                    <option>Chains</option>
                    <option>Bracelets</option>
                    <option>Earrings</option>
                  </select>
                  <ChevronDown size={14} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Primary Metal</label>
                <div className="select-wrap">
                  <select id="metal-select" className="form-select">
                    <option>Platinum 950</option>
                    <option>18k Yellow Gold</option>
                    <option>18k White Gold</option>
                    <option>18k Rose Gold</option>
                    <option>Sterling Silver</option>
                  </select>
                  <ChevronDown size={14} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Wholesale Price (USD)</label>
                <div className="price-wrap">
                  <span className="currency">$</span>
                  <input
                    id="price-input"
                    className="form-input"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            <div className="toggle-row">
              <div className="toggle-info">
                <h4>Private Listing</h4>
                <p>Restrict visibility to approved buyers in your private network.</p>
              </div>
              <label className="toggle" id="private-toggle">
                <input type="checkbox" checked={privateList} onChange={e => setPrivateList(e.target.checked)} />
                <span className="toggle-slider" />
              </label>
            </div>
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
