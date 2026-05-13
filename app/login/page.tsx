'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/home');
    }, 1200);
  };

  return (
    <div className="login-page">
      <div className="login-bg-decor" />
      <div className="login-grid" />


      {/* Right panel — form */}
      <div className="login-right">
        <div className="login-form-box fade-in">
          <h2>Welcome back</h2>
          <p>Sign in to access the collective</p>

          <form onSubmit={handleLogin}>
            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <div className="field-wrap">
                <span className="field-icon"><Mail size={15} /></span>
                <input
                  id="email"
                  type="email"
                  className="field-input"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <div className="field-wrap">
                <span className="field-icon"><Lock size={15} /></span>
                <input
                  id="password"
                  type={showPass ? 'text' : 'password'}
                  className="field-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="field-toggle"
                  onClick={() => setShowPass(s => !s)}
                  aria-label="Toggle password"
                >
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
              <span className="forgot-link">Forgot password?</span>
            </div>

            <button
              id="login-btn"
              type="submit"
              className="btn-login"
              disabled={loading}
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          <div className="login-divider">
            <div className="divider-line" />
            <span>or</span>
            <div className="divider-line" />
          </div>

          <p className="login-footer">
            Don't have an account? <a onClick={() => router.push('/home')}>Request Access</a>
          </p>
        </div>
      </div>
    </div>
  );
}
