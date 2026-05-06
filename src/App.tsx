import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Portfolio } from './pages/Portfolio';
import { useSiteData } from './hooks/useSiteData';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const { data, isLoaded } = useSiteData();

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand-pink border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio data={data} />} />
      </Routes>
    </Router>
  );
}
