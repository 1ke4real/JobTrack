import { useState } from 'react';
import { Calendar, Briefcase, Send, UserCheck, CheckCircle, XCircle, Eye, Trash2, Plus, Search, Building2, MapPin, ExternalLink, X } from 'lucide-react';

export const NewApplication = () => {
    const [showModal, setShowModal] = useState(false);

    const companies = [
        { id: 1, name: 'TechCorp', city: 'Paris', website: 'techcorp.com', contact: 'Marie Dubois', email: 'marie@techcorp.com', applications: 3 },
        { id: 2, name: 'StartupXYZ', city: 'Lyon', website: 'startupxyz.io', contact: 'Paul Martin', email: 'paul@startupxyz.io', applications: 1 },
        { id: 3, name: 'MegaCorp', city: 'Marseille', website: 'megacorp.fr', contact: 'Sophie Bernard', email: 'sophie@megacorp.fr', applications: 2 },
    ];
    return (
        <>
            <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">Candidatures &gt; Nouvelle</p>
                <h1 className="text-3xl font-semibold text-gray-900">Nouvelle candidature</h1>
            </div>

            <div className="max-w-3xl bg-white border border-gray-200 rounded-lg p-8">
                {/* Section 1 */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-900 pb-3 mb-5 border-b border-gray-200">Informations du poste</h2>

                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Intitulé du poste *</label>
                            <input
                                type="text"
                                placeholder="ex: Développeur Full Stack React/Symfony"
                                className="w-full border border-gray-200 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Entreprise *</label>
                            <div className="flex gap-2">
                                <select className="flex-1 border border-gray-200 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                    <option>Sélectionner une entreprise</option>
                                    {companies.map(c => <option key={c.id}>{c.name}</option>)}
                                </select>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="px-4 py-2.5 border border-gray-200 rounded-md hover:border-blue-500 hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-700"
                                >
                                    <Plus size={16} />
                                    Créer
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Source</label>
                            <input
                                type="text"
                                placeholder="LinkedIn, Welcome to the Jungle, Indeed..."
                                className="w-full border border-gray-200 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <p className="text-xs text-gray-500 mt-1">Où as-tu trouvé cette offre ?</p>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-900 pb-3 mb-5 border-b border-gray-200">Statut & Dates</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Statut</label>
                            <select className="w-full border border-gray-200 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                <option>À candidater</option>
                                <option>Candidature envoyée</option>
                                <option>Entretien</option>
                                <option>Offre</option>
                                <option>Refus</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Date de candidature</label>
                            <input
                                type="date"
                                className="w-full border border-gray-200 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Prochaine relance</label>
                            <input
                                type="date"
                                className="w-full border border-gray-200 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <p className="text-xs text-gray-500 mt-1">Date à laquelle tu dois relancer l'entreprise</p>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-900 pb-3 mb-5 border-b border-gray-200">Fourchette de salaire</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Minimum (brut annuel)</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    placeholder="45000"
                                    className="w-full border border-gray-200 rounded-md px-3 py-2.5 pr-12 text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">€/an</span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Maximum (brut annuel)</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    placeholder="55000"
                                    className="w-full border border-gray-200 rounded-md px-3 py-2.5 pr-12 text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">€/an</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 4 */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-900 pb-3 mb-5 border-b border-gray-200">Notes & informations</h2>

                    <textarea
                        placeholder="Description de l'offre, remarques d'entretien, informations importantes..."
                        rows={6}
                        className="w-full border border-gray-200 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"
                    />
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 -mx-8 px-8 -mb-8 pb-8 bg-gray-50 rounded-b-lg">
                    <button
                        className="px-5 py-2.5 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        Annuler
                    </button>
                    <button className="px-8 py-2.5 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-all hover:scale-105 active:scale-95">
                        Enregistrer
                    </button>
                </div>
            </div>
        </>
    );
}
