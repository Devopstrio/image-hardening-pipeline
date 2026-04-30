import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  ShieldCheck, 
  Box, 
  Binary, 
  Zap,
  TrendingDown,
  ShieldAlert,
  FileSearch,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';

const scanData = [
  { name: 'App-V1', critical: 0, high: 2, medium: 8, low: 12 },
  { name: 'App-V2', critical: 0, high: 0, medium: 4, low: 8 },
  { name: 'DB-Hardened', critical: 0, high: 0, medium: 1, low: 3 },
  { name: 'Web-Distroless', critical: 0, high: 0, medium: 0, low: 2 },
];

const vulnerabilityTrend = [
  { time: 'Week 1', count: 120 },
  { time: 'Week 2', count: 85 },
  { time: 'Week 3', count: 42 },
  { time: 'Week 4', count: 18 },
  { time: 'Week 5', count: 5 },
];

const KPI_CARDS = [
  { title: 'Hardened Images', value: '142', trend: '+12 this month', color: 'cyan', icon: ShieldCheck },
  { title: 'Critical Vulns', value: '0', trend: '-100% vs last qtr', color: 'cyan', icon: TrendingDown },
  { title: 'Signed Images', value: '100%', trend: 'Cosign enforced', color: 'cyan', icon: Zap },
  { title: 'SBOMs Generated', value: '1.2k', trend: 'SPDX 2.3 standard', color: 'cyan', icon: Binary },
];

const ImageDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Container Security Lifecycle</h1>
          <p className="text-slate-400">Institutional supply chain security for multi-cloud image distribution.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Scan Registry
          </button>
          <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Trigger Secure Build
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-${card.color}-500/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-${card.color}-500`} />
              </div>
              <div className="text-xs font-medium text-cyan-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Vulnerability Breakdown */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Security Posture by Image</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={scanData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Bar dataKey="critical" stackId="a" fill="#ef4444" radius={[0, 0, 0, 0]} />
                <Bar dataKey="high" stackId="a" fill="#f97316" radius={[0, 0, 0, 0]} />
                <Bar dataKey="medium" stackId="a" fill="#eab308" radius={[0, 0, 0, 0]} />
                <Bar dataKey="low" stackId="a" fill="#06b6d4" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Global Vulnerability Trend */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">CVE Exposure Trend</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={vulnerabilityTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Line type="monotone" dataKey="count" stroke="#06b6d4" strokeWidth={3} dot={{ fill: '#06b6d4' }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Hardened Images Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Registry Governance</h3>
          <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">Full Image Catalog</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Image / Tag</th>
                <th className="px-6 py-4 font-semibold">Hardening Profile</th>
                <th className="px-6 py-4 font-semibold">SLSA Level</th>
                <th className="px-6 py-4 font-semibold">Time</th>
                <th className="px-6 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'hardened-alpine:3.18', profile: 'Distroless', slsa: 'L3', time: '4m ago', status: 'Signed', icon: ShieldCheck },
                { name: 'secure-node:20', profile: 'Rootless', slsa: 'L2', time: '28m ago', status: 'Scanning', icon: Clock },
                { name: 'hardened-postgres:15', profile: 'CIS Hardened', slsa: 'L3', time: '1h ago', status: 'Pushed', icon: CheckCircle2 },
              ].map((image) => (
                <tr key={image.name} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-500">
                        <Box size={18} />
                      </div>
                      <span className="text-sm font-bold text-white">{image.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">{image.profile}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
                      {image.slsa}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{image.time}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <image.icon size={16} className={image.status === 'Signed' ? 'text-emerald-500' : 'text-cyan-500'} />
                      <span className={`text-sm font-medium ${image.status === 'Signed' ? 'text-emerald-500' : 'text-slate-300'}`}>{image.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ImageDashboard;
