import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/dashboard');
      } else {
        setError('Invalid credentials');
        setLoading(false);
      }
    }, 1200);
  };

  return (
    <div className="min-h-[1200px] min-w-[1920px] w-screen h-screen flex items-stretch justify-stretch bg-gradient-to-br from-blue-100 to-purple-200 p-0 m-0 overflow-hidden">
      <div className="w-full h-full flex flex-col md:flex-row bg-white/80 rounded-none shadow-none overflow-hidden border-none m-0">
        <div className="hidden md:flex flex-1 flex-col justify-center items-center bg-gradient-to-br from-blue-400 to-purple-400 text-white p-24 h-full">
          <div className="text-9xl mb-10">🐶</div>
          <div className="text-5xl font-bold mb-6">Welcome!</div>
          <div className="text-2xl text-center">Sign in to explore dog breeds and more.</div>
        </div>
        <form onSubmit={handleSubmit} className="flex-1 p-24 flex flex-col justify-center h-full min-w-0">
          <h2 className="text-6xl font-extrabold mb-14 text-center text-blue-700 drop-shadow">Login</h2>
          {error && <div className="mb-8 text-red-500 text-center text-2xl">{error}</div>}
          <div className="mb-12">
            <label className="block mb-3 font-semibold text-gray-700 text-xl">Username</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition text-xl"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              disabled={loading}
              autoComplete="username"
            />
          </div>
          <div className="mb-10">
            <label className="block mb-3 font-semibold text-gray-700 text-xl">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition text-xl"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              disabled={loading}
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-lg shadow-none hover:from-blue-600 hover:to-purple-600 transition flex items-center justify-center text-xl font-semibold ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2 justify-center">
                <svg className="animate-spin h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                Logging in...
              </span>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
