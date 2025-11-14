import {StatusBadge} from "../components/StatusBage.tsx";
import { Calendar, Briefcase, Send, CheckCircle, Eye } from 'lucide-react';

export const Dashboard = () => {
    const applications = [
        { id: 1, position: 'Développeur Full Stack', company: 'TechCorp', status: 'interview', date: '2025-01-15', nextFollowUp: '2025-11-18', source: 'LinkedIn' },
        { id: 2, position: 'React Developer', company: 'StartupXYZ', status: 'sent', date: '2025-01-10', nextFollowUp: '2025-11-20', source: 'WTTJ' },
        { id: 3, position: 'Lead Developer', company: 'MegaCorp', status: 'offer', date: '2025-01-05', nextFollowUp: null, source: 'Indeed' },
        { id: 4, position: 'Backend Developer', company: 'DevHouse', status: 'to_apply', date: null, nextFollowUp: '2025-11-16', source: 'LinkedIn' },
        { id: 5, position: 'Frontend Engineer', company: 'WebAgency', status: 'rejected', date: '2024-12-20', nextFollowUp: null, source: 'LinkedIn' },
    ];
    const stats = [
        {label: 'Total', value: applications.length, icon: Briefcase, color: 'text-blue-500'},
        {
            label: 'À candidater',
            value: applications.filter(a => a.status === 'to_apply').length,
            icon: Briefcase,
            color: 'text-yellow-500'
        },
        {
            label: 'Envoyées',
            value: applications.filter(a => a.status === 'sent').length,
            icon: Send,
            color: 'text-blue-500'
        },
        {
            label: 'Entretiens',
            value: applications.filter(a => a.status === 'interview').length,
            icon: Calendar,
            color: 'text-purple-500'
        },
        {
            label: 'Offres',
            value: applications.filter(a => a.status === 'offer').length,
            icon: CheckCircle,
            color: 'text-green-500'
        },
    ];
    return (
        <div className="max-w-7xl mx-auto px-6 pb-12">
            <div className="mb-8">
                <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
                <p className="text-gray-500 mt-1">Résumé de tes candidatures</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
                {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <div key={idx}
                             className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 relative overflow-hidden">
                                <Icon className={`absolute top-4 right-4 opacity-10 ${stat.color}`} size={48}/>
                            <p className="text-sm text-gray-500 mb-2">{stat.label}</p>
                            <p className="text-4xl font-semibold text-gray-900">{stat.value}</p>
                        </div>
                    );
                })}
            </div>

            {/* Prochaines relances */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">Prochaines relances</h2>
                    <button className="text-sm text-blue-500 hover:text-blue-600 font-medium">Voir tout</button>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full">
                        <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">Entreprise</th>
                            <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">Poste</th>
                            <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">Date de relance</th>
                            <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">Statut</th>
                            <th className="text-right text-xs font-semibold text-gray-500 uppercase px-4 py-3">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {applications.filter(a => a.nextFollowUp).slice(0, 3).map((app) => (
                            <tr key={app.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-4 font-medium text-gray-900">{app.company}</td>
                                <td className="px-4 py-4 text-gray-900">{app.position}</td>
                                <td className="px-4 py-4 text-gray-500 flex items-center gap-2">
                                    <Calendar size={14}/>
                                    {app.nextFollowUp}
                                </td>
                                <td className="px-4 py-4">{StatusBadge(app.status)}</td>
                                <td className="px-4 py-4 text-right">
                                    <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                                        <Eye size={18} className="text-gray-500 hover:text-blue-500"/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
