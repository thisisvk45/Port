import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <style>{`
        :root {
          --primary: #0f172a;
          --primary-light: #1e293b;
          --accent: #f59e0b;
          --accent-light: #fbbf24;
          --text: #334155;
          --text-light: #64748b;
          --bg: #f8fafc;
          --bg-card: #ffffff;
        }

        [data-theme="dark"] {
          --primary: #f8fafc;
          --primary-light: #e2e8f0;
          --accent: #f59e0b;
          --accent-light: #fbbf24;
          --text: #cbd5e1;
          --text-light: #94a3b8;
          --bg: #0f172a;
          --bg-card: #1e293b;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .gradient-text {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass {
          backdrop-filter: blur(16px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .dark .glass {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(51, 65, 85, 0.3);
        }
      `}</style>
      {children}
    </div>
  );
}
