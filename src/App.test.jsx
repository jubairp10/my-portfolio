import React from 'react';

// Simple test version of App to verify React is working
function AppTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          JUBAIR P
        </h1>
        <p className="text-2xl text-gray-300 mb-8">Flutter Developer</p>
        <div className="glass-effect p-8 rounded-2xl max-w-md mx-auto">
          <p className="text-gray-400">
            ✅ React is working!<br/>
            ✅ Tailwind CSS is working!<br/>
            ✅ Your portfolio is ready!
          </p>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          If you see this, everything is working correctly.
        </p>
      </div>
    </div>
  );
}

export default AppTest;
