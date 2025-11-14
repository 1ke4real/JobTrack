import { useState } from 'react';
import { Calendar, Briefcase, Send, UserCheck, CheckCircle, XCircle, Eye, Trash2, Plus, Search, Building2, MapPin, ExternalLink, X } from 'lucide-react';

export const Companies = () => {
const [currentPage, setCurrentPage] = useState('dashboard');
const [showModal, setShowModal] = useState(false);
    const companies = [
        { id: 1, name: 'TechCorp', city: 'Paris', website: 'techcorp.com', contact: 'Marie Dubois', email: 'marie@techcorp.com', applications: 3 },
        { id: 2, name: 'StartupXYZ', city: 'Lyon', website: 'startupxyz.io', contact: 'Paul Martin', email: 'paul@startupxyz.io', applications: 1 },
        { id: 3, name: 'MegaCorp', city: 'Marseille', website: 'megacorp.fr', contact: 'Sophie Bernard', email: 'sophie@megacorp.fr', applications: 2 },
    ];
return (
    <div>
        <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
                <h1 className="text-3xl font-semibold text-gray-900">Entreprises</h1>
                <span className="text-gray-400 text-xl">({companies.length})</span>
            </div>
            <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 bg-blue-500 text-white px-5 py-2.5 rounded-md font-medium hover:bg-blue-600 transition-all hover:scale-105 active:scale-95"
            >
                <Plus size={18} />
                Nouvelle entreprise
            </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
                <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                    <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">Logo</th>
                    <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">Nom</th>
                    <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">Ville</th>
                    <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">Site web</th>
                    <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">Contact</th>
                    <th className="text-center text-xs font-semibold text-gray-500 uppercase px-4 py-3">Candidatures</th>
                    <th className="text-right text-xs font-semibold text-gray-500 uppercase px-4 py-3">Actions</th>
                </tr>
                </thead>
                <tbody>
                {companies.map((company) => (
                    <tr key={company.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-4">
                            <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                                <Building2 size={20} className="text-gray-400" />
                            </div>
                        </td>
                        <td className="px-4 py-4 font-medium text-gray-900">{company.name}</td>
                        <td className="px-4 py-4 text-gray-500">
                            <div className="flex items-center gap-2">
                                <MapPin size={14} />
                                {company.city}
                            </div>
                        </td>
                        <td className="px-4 py-4">
                            <a href="#" className="text-blue-500 hover:text-blue-600 flex items-center gap-1.5">
                                {company.website}
                                <ExternalLink size={14} />
                            </a>
                        </td>
                        <td className="px-4 py-4">
                            <div className="text-sm">
                                <div className="text-gray-900">{company.contact}</div>
                                <div className="text-gray-500">{company.email}</div>
                            </div>
                        </td>
                        <td className="px-4 py-4 text-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {company.applications}
                  </span>
                        </td>
                        <td className="px-4 py-4">
                            <div className="flex justify-end gap-2">
                                <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                                    <Eye size={18} className="text-gray-500 hover:text-blue-500 transition-colors" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                                    <Trash2 size={18} className="text-gray-500 hover:text-red-500 transition-colors" />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
)

}
