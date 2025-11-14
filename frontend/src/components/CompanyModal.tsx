import { useState } from 'react';

export const CompanyModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
             onClick={() => setShowModal(false)}>
            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl animate-in"
                 onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center pb-4 mb-5 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">Nouvelle entreprise</h2>
                    <button onClick={() => setShowModal(false)}
                            className="p-1 hover:bg-gray-100 rounded-md transition-colors">
                        <X size={20} className="text-gray-500"/>
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Nom de l'entreprise *</label>
                        <input
                            type="text"
                            placeholder="ex: TechCorp"
                            className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Ville</label>
                        <input
                            type="text"
                            placeholder="ex: Paris"
                            className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Site web</label>
                        <input
                            type="text"
                            placeholder="ex: techcorp.com"
                            className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Nom du contact</label>
                        <input
                            type="text"
                            placeholder="ex: Marie Dubois"
                            className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email du contact</label>
                        <input
                            type="email"
                            placeholder="ex: marie@techcorp.com"
                            className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-5 mt-5 border-t border-gray-200">
                    <button
                        onClick={() => setShowModal(false)}
                        className="px-5 py-2 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        Annuler
                    </button>
                    <button
                        onClick={() => setShowModal(false)}
                        className="px-5 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-all hover:scale-105 active:scale-95"
                    >
                        Créer l'entreprise
                    </button>
                </div>
            </div>
        </div>
    )
}
