import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ImageDashboard from './pages/ImageDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The pipeline engine is executing automated validation for this module. Visibility will be restored upon next deployment cycle.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ImageDashboard />} />
          <Route path="/hardening" element={<Placeholder name="Container Hardening Console" />} />
          <Route path="/scanning" element={<Placeholder name="Vulnerability Scanning Dashboard" />} />
          <Route path="/sbom" element={<Placeholder name="SBOM Inventory & Dependency Analysis" />} />
          <Route path="/signing" element={<Placeholder name="Image Signing & Verification Portal" />} />
          <Route path="/policies" element={<Placeholder name="Policy-as-Code Validation Console" />} />
          <Route path="/history" element={<Placeholder name="Pipeline Build & Traceability History" />} />
          <Route path="/audit" element={<Placeholder name="Supply Chain Security Audit" />} />
          <Route path="/registry" element={<Placeholder name="Global Registry Governance" />} />
          <Route path="/settings" element={<Placeholder name="Platform & Integration Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
