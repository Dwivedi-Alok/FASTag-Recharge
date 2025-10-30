import React, { useState } from 'react';
import { auth, storage } from '../services/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', dob: '' });
  const [profilePic, setProfilePic] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;

      let photoURL = null;
      if (profilePic) {
        const imageRef = ref(storage, `profilePics/${user.uid}`);
        await uploadBytes(imageRef, profilePic);
        photoURL = await getDownloadURL(imageRef);
      }

      await updateProfile(user, {
        displayName: form.name,
        photoURL,
      });

      navigate('/main');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative w-full max-w-md bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-teal-100">
        <div className="h-2 bg-gradient-to-r from-teal-500 via-cyan-100 to-green-400"></div>

        <div className="p-8 space-y-6">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center justify-center bg-gradient-to-br from-teal-500 to-teal-700 text-white w-20 h-20 rounded-2xl text-3xl font-bold mb-4 shadow-lg">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-teal-700 to-teal-600 bg-clip-text text-transparent mb-2">
              Create Account
            </h2>
            <p className="text-teal-600 font-medium">Sign up to recharge your FASTag</p>
          </div>

          <form className="space-y-5 animate-slide-up" onSubmit={handleSignup}>
            <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-teal-100 rounded-xl focus:ring-2 focus:ring-teal-500" />

            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-teal-100 rounded-xl focus:ring-2 focus:ring-teal-500" />

            <input name="dob" type="date" value={form.dob} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-teal-100 rounded-xl focus:ring-2 focus:ring-teal-500" />

            <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-teal-100 rounded-xl focus:ring-2 focus:ring-teal-500" />

            <div>
              <label className="block text-sm font-semibold text-teal-800 mb-2">Profile Picture</label>
              <input type="file" accept="image/*" onChange={(e) => setProfilePic(e.target.files[0])} className="w-full" />
            </div>

            <button type="submit" disabled={isLoading} className="w-full py-3 rounded-xl text-white bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 shadow-lg font-semibold">
              {isLoading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg animate-shake">
              <p className="text-sm text-red-700 font-medium">{error}</p>
            </div>
          )}

          <div className="text-center">
            <p className="text-teal-600 font-medium">
              Already have an account?{' '}
              <button onClick={() => navigate('/login')} className="text-teal-700 font-semibold hover:underline">
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
