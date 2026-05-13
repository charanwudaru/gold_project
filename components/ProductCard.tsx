'use client';
import { Eye, Bookmark, Weight, Send } from 'lucide-react';
import { useState } from 'react';
import RequestModal from './RequestModal';

interface ProductCardProps {
  image: string;
  status: 'available' | 'reserved';
  title: string;
  spec: string;
  views: string;
}

export default function ProductCard({ image, status, title, spec, views }: ProductCardProps) {
  const [saved, setSaved] = useState(false);
  const [requesting, setRequesting] = useState(false);

  return (
    <>
      <div className="product-card fade-in">
        <div className="card-img-wrap">
          <img src={image} alt={title} />
          <div className="card-badge">
            <span className={`badge-dot ${status === 'available' ? 'green' : 'orange'}`} />
            <span className={status === 'available' ? 'badge-available' : 'badge-reserved'}>
              {status === 'available' ? 'Available' : 'Reserved'}
            </span>
          </div>
        </div>
        <div className="card-body">
          <div className="card-title">{title}</div>
          <div className="card-spec">
            <Weight size={12} />
            {spec}
          </div>
          <div className="card-footer">
            <div className="card-views">
              <Eye size={13} />
              {views}
            </div>
            <button
              className="bookmark-btn"
              onClick={() => setSaved(s => !s)}
              aria-label="Bookmark"
            >
              <Bookmark size={16} fill={saved ? 'currentColor' : 'none'} color={saved ? '#c9a84c' : undefined} />
            </button>
          </div>
          <button
            className="request-btn"
            id={`request-${title.replace(/\s+/g, '-').toLowerCase()}`}
            onClick={() => setRequesting(true)}
          >
            <Send size={13} />
            Request Design
          </button>
        </div>
      </div>

      {requesting && (
        <RequestModal
          title={title}
          spec={spec}
          onClose={() => setRequesting(false)}
        />
      )}
    </>
  );
}
