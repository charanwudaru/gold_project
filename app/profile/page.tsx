'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutGrid, LayoutList, X, LogOut, Camera } from 'lucide-react';
import BottomNav from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

const collections = [
  { id: 1, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80', title: 'Oval Halo Diamond Ring', tall: true, sold: false },
  { id: 2, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80', title: 'Sapphire Drop Earrings', tall: false, sold: true },
  { id: 3, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80', title: 'Diamond Tennis Bracelet', tall: true, sold: false },
  { id: 4, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80', title: 'Cuban Gold Chain', tall: false, sold: false },
  { id: 5, image: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=600&q=80', title: 'Ruby Gemstone Set', tall: false, sold: false },
];

interface ProfileData {
  name: string;
  bio: string;
  email: string;
  phone: string;
  address: string;
  avatar: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [editOpen, setEditOpen] = useState(false);

  const [profile, setProfile] = useState<ProfileData>({
    name: 'Aurelia Designs',
    bio: 'Master artisans specializing in bespoke high-jewelry creations. Bridging traditional craftsmanship with modern geometric aesthetics. Based in Antwerp.',
    email: 'aurelia@jewelbridge.co',
    phone: '+32 3 000 0000',
    address: 'Antwerp Diamond District, Belgium',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  });

  // Draft state inside modal
  const [draft, setDraft] = useState<ProfileData>(profile);

  const openEdit = () => { setDraft(profile); setEditOpen(true); };
  const saveEdit = () => { setProfile(draft); setEditOpen(false); };
  const set = (key: keyof ProfileData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setDraft(d => ({ ...d, [key]: e.target.value }));

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setDraft(d => ({ ...d, avatar: url }));
    }
  };

  return (
    <div className="app-shell">
      <div className="main-area">
        <Topbar />
        <main className="page-content">

          {/* ── Profile Card ── */}
          <div className="prof-card">
            <div className="prof-card-inner">
              <div className="prof-avatar-wrap">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="prof-avatar-img"
                />
              </div>
              <div className="prof-info">
                <h2 className="prof-name">{profile.name}</h2>
                <p className="prof-bio">{profile.bio}</p>
                <div className="prof-stats">
                  <div className="prof-stat">
                    <span className="prof-stat-num">142</span>
                    <span className="prof-stat-lbl">Collections</span>
                  </div>
                </div>
                <div className="prof-actions">
                  <button className="prof-btn-edit" id="edit-profile-btn" onClick={openEdit}>
                    Edit profile
                  </button>
                  <button className="prof-btn-logout" id="logout-btn" onClick={() => router.push('/login')}>
                    <LogOut size={13} />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── My Collections ── */}
          <div className="coll-header">
            <h3 className="coll-title">My Collections</h3>
            <div className="view-toggle">
              <button className={`view-btn${view === 'grid' ? ' active' : ''}`} onClick={() => setView('grid')} aria-label="Grid view"><LayoutGrid size={16} /></button>
              <button className={`view-btn${view === 'list' ? ' active' : ''}`} onClick={() => setView('list')} aria-label="List view"><LayoutList size={16} /></button>
            </div>
          </div>

          {view === 'grid' ? (
            <div className="coll-masonry">
              <div className="coll-col">
                <div className="coll-item tall"><img src={collections[0].image} alt={collections[0].title} /></div>
                <div className="coll-item short"><img src={collections[3].image} alt={collections[3].title} /></div>
              </div>
              <div className="coll-col">
                <div className="coll-item short">
                  <img src={collections[1].image} alt={collections[1].title} />
                  <span className="coll-badge">SOL</span>
                </div>
                <div className="coll-item short"><img src={collections[4].image} alt={collections[4].title} /></div>
              </div>
              <div className="coll-col">
                <div className="coll-item tall"><img src={collections[2].image} alt={collections[2].title} /></div>
              </div>
            </div>
          ) : (
            <div className="coll-list">
              {collections.map(item => (
                <div key={item.id} className="coll-list-item">
                  <img src={item.image} alt={item.title} className="coll-list-img" />
                  <div className="coll-list-info">
                    <span className="coll-list-title">{item.title}</span>
                    {item.sold && <span className="coll-badge-sm">SOLD</span>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
      <BottomNav />

      {/* ── Edit Profile Modal ── */}
      {editOpen && (
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && setEditOpen(false)}>
          <div className="modal-sheet" role="dialog" aria-modal="true" aria-label="Edit Profile">
            <div className="modal-header">
              <span className="modal-title">Edit Profile</span>
              <button className="modal-close" onClick={() => setEditOpen(false)} aria-label="Close"><X size={15} /></button>
            </div>

            <div className="modal-fields">
              {/* Avatar Upload */}
              <div className="avatar-edit-section">
                <label className="avatar-edit-wrap" htmlFor="avatar-upload">
                  <img src={draft.avatar} alt="Profile preview" className="avatar-preview" />
                  <div className="avatar-overlay">
                    <Camera size={18} />
                  </div>
                </label>
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  style={{ display: 'none' }}
                />
              </div>

              {/* Name */}
              <div className="modal-field">
                <label className="modal-label" htmlFor="edit-name">Display Name</label>
                <input id="edit-name" className="modal-input" value={draft.name} onChange={set('name')} placeholder="Your business name" />
              </div>

              {/* Bio */}
              <div className="modal-field">
                <label className="modal-label" htmlFor="edit-bio">Bio</label>
                <textarea id="edit-bio" className="modal-textarea" value={draft.bio} onChange={set('bio')} placeholder="Describe your brand..." />
              </div>

              {/* Email + Phone */}
              <div className="modal-row">
                <div className="modal-field">
                  <label className="modal-label" htmlFor="edit-email">Email</label>
                  <input id="edit-email" type="email" className="modal-input" value={draft.email} onChange={set('email')} placeholder="you@example.com" />
                </div>
                <div className="modal-field">
                  <label className="modal-label" htmlFor="edit-phone">Phone</label>
                  <input id="edit-phone" type="tel" className="modal-input" value={draft.phone} onChange={set('phone')} placeholder="+1 000 000 0000" />
                </div>
              </div>

              {/* Address */}
              <div className="modal-field">
                <label className="modal-label" htmlFor="edit-address">Address</label>
                <input id="edit-address" className="modal-input" value={draft.address} onChange={set('address')} placeholder="City, Country" />
              </div>
            </div>

            <div className="modal-footer">
              <button className="modal-cancel" onClick={() => setEditOpen(false)}>Cancel</button>
              <button id="save-profile-btn" className="modal-save" onClick={saveEdit}>Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
