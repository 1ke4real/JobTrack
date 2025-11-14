import { useState } from 'react';
import {StatusBadge} from "../components/StatusBage.tsx";
import { Calendar, Briefcase, Send, UserCheck, CheckCircle, XCircle, Eye, Trash2, Plus, Search, Building2, MapPin, ExternalLink, X } from 'lucide-react';
import { Link } from "react-router-dom";
export const ApplicationsList = () => {
    const applications = [
        { id: 1, position: 'Développeur Full Stack', company: 'TechCorp', status: 'interview', date: '2025-01-15', nextFollowUp: '2025-11-18', source: 'LinkedIn' },
        { id: 2, position: 'React Developer', company: 'StartupXYZ', status: 'sent', date: '2025-01-10', nextFollowUp: '2025-11-20', source: 'WTTJ' },
        { id: 3, position: 'Lead Developer', company: 'MegaCorp', status: 'offer', date: '2025-01-05', nextFollowUp: null, source: 'Indeed' },
        { id: 4, position: 'Backend Developer', company: 'DevHouse', status: 'to_apply', date: null, nextFollowUp: '2025-11-16', source: 'LinkedIn' },
        { id: 5, position: 'Frontend Engineer', company: 'WebAgency', status: 'rejected', date: '2024-12-20', nextFollowUp: null, source: 'LinkedIn' },
    ];
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('all');

    const filteredApplications = applications.filter(app => {
        const matchesStatus = selectedStatus === 'all' || app.status === selectedStatus;
        const matchesSearch = app.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
            app.company.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesStatus && matchesSearch;
    });
    return (
       <>
           <div className="flex justify-between items-center mb-8">
               <div className="flex items-center gap-3">
                   <h1 className="text-3xl font-semibold text-gray-900">Candidatures</h1>
                   <span className="text-gray-400 text-xl">({applications.length})</span>
               </div>
               <Link to="new">
                   <button
                       className="flex items-center gap-2 bg-blue-500 text-white px-5 py-2.5 rounded-md font-medium hover:bg-blue-600 transition-all hover:scale-105 active:scale-95"
                   >
                       <Plus size={18}/>
                       Nouvelle candidature
                   </button>
               </Link>

           </div>

           {/* Filtres */}
           <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
               <div className="flex gap-3 flex-wrap">
                   <div className="flex-[2] min-w-[250px]">
                       <div className="relative">
                           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18}/>
                           <input
                               type="text"
                               placeholder="Rechercher un poste ou une entreprise..."
                               value={searchQuery}
                               onChange={(e) => setSearchQuery(e.target.value)}
                               className="w-full border border-gray-200 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                           />
                       </div>
                   </div>
                   <div className="flex-1 min-w-[150px]">
                       <select
                           value={selectedStatus}
                           onChange={(e) => setSelectedStatus(e.target.value)}
                           className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                       >
                           <option value="all">Tous les statuts</option>
                           <option value="to_apply">À candidater</option>
                           <option value="sent">Envoyée</option>
                           <option value="interview">Entretien</option>
                           <option value="offer">Offre</option>
                           <option value="rejected">Refus</option>
                       </select>
                   </div>
                   <div className="flex-1 min-w-[150px]">
                       <select
                           className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                           <option>Toutes les entreprises</option>
                       </select>
                   </div>
               </div>
           </div>

           {/* Tableau */}
           <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
               <table className="w-full">
                   <thead>
                   <tr className="bg-gray-50 border-b-2 border-gray-200">
                       <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">Poste</th>
                       <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">Entreprise</th>
                       <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">Statut</th>
                       <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">Date candidature
                       </th>
                       <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">Prochaine
                           relance
                       </th>
                       <th className="text-left text-xs font-semibold text-gray-500 uppercase px-4 py-3">Source</th>
                       <th className="text-right text-xs font-semibold text-gray-500 uppercase px-4 py-3">Actions</th>
                   </tr>
                   </thead>
                   <tbody>
                   {filteredApplications.map((app) => (
                       <tr key={app.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                           <td className="px-4 py-4 font-medium text-gray-900">{app.position}</td>
                           <td className="px-4 py-4 text-gray-900">{app.company}</td>
                           <td className="px-4 py-4">{StatusBadge(app.status)}</td>
                           <td className="px-4 py-4 text-gray-500">{app.date || '-'}</td>
                           <td className="px-4 py-4 text-gray-500">{app.nextFollowUp || '-'}</td>
                           <td className="px-4 py-4 text-gray-500 text-sm">{app.source}</td>
                           <td className="px-4 py-4">
                               <div className="flex justify-end gap-2">
                                   <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                                       <Eye size={18} className="text-gray-500 hover:text-blue-500 transition-colors"/>
                                   </button>
                                   <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                                       <Trash2 size={18} className="text-gray-500 hover:text-red-500 transition-colors"/>
                                   </button>
                               </div>
                           </td>
                       </tr>
                   ))}
                   </tbody>
               </table>
           </div>
       </>
   )
}
