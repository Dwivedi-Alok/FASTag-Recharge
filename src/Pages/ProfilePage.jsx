import React from 'react';
import PropTypes from 'prop-types';

// Helper function to generate initials from a name
const getInitials = (name) => {
  if (!name) return '';
  const parts = name.split(' ');
  const first = parts[0]?.[0] || '';
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : '';
  return `${first}${last}`.toUpperCase();
};

const ProfilePage = ({ user, onLogout, onBack }) => {
  // --- 1. Loading State ---
  // Show a spinner if the user data isn't ready yet
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="ml-4 text-gray-700">Loading Profile...</span>
      </div>
    );
  }

  const { name, email, imageUrl } = user;

  return (
    <div className="min-h-screen bg-gray-100 p-4 pt-10 sm:p-8">
      {/* --- 2. Improved "Back" Navigation --- */}
      <div className="max-w-md mx-auto mb-4">
        <button
          onClick={onBack}
          className="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-150"
        >
          {/* Inline SVG Arrow Icon */}
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Main
        </button>
      </div>

      {/* --- Profile Card --- */}
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl mx-auto">
        <div className="flex flex-col items-center space-y-4">
          
          {/* --- 3. Avatar with Fallbacks --- */}
          <div className="relative">
            {imageUrl ? (
              // Use image if provided
              <img
                className="h-24 w-24 rounded-full object-cover shadow-md"
                src={imageUrl}
                alt="Profile"
              />
            ) : (
              // Fallback to initials or default icon
              <span className="h-24 w-24 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-4xl font-semibold shadow-inner">
                {getInitials(name) || (
                  // Default User Icon (inline SVG)
                  <svg
                    className="w-16 h-16"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            )}
          </div>

          {/* --- 4. More User Info --- */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {name || 'User Profile'}
            </h2>
            <p className="mt-1 text-md text-gray-500">{email}</p>
          </div>
        </div>

        {/* --- Logout Action --- */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={onLogout}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-150"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 5. PropTypes for Robustness ---
ProfilePage.propTypes = {
  /** The user object, can be null while loading */
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
  /** Function to handle logging out */
  onLogout: PropTypes.func.isRequired,
  /** Function to handle navigating back */
  onBack: PropTypes.func.isRequired,
};

ProfilePage.defaultProps = {
  user: null,
};

export default ProfilePage;