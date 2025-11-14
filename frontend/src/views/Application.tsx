import {
    ArrowLeft,
    Building2,
    Calendar,
    DollarSign,
    Edit,
    ExternalLink,
    FileText,
    Globe,
    Mail,
    MapPin,
    Trash2
} from "lucide-react";
import { StatusBadge } from "../components/StatusBage.tsx";

export const Application = () => {
    return (
        <div>
            <div className="mb-6">
                <button
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-3 transition-colors"
                >
                    <ArrowLeft size={18} />
                    <span className="text-sm">Retour aux candidatures</span>
                </button>

                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-semibold text-gray-900 mb-2">1</h1>
                        <div className="flex items-center gap-3 text-gray-500">
                            <div className="flex items-center gap-2">
                                <Building2 size={18} />
                                <span className="font-medium">Développeur Full Stack</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-2">
                                <MapPin size={16} />
                                <span>TechCorp</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                            <Edit size={18} />
                            Modifier
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-red-200 bg-red-50 rounded-md text-red-600 hover:bg-red-100 transition-colors">
                            <Trash2 size={18} />
                            Supprimer
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 space-y-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">Statut actuel</h2>
                            {StatusBadge("interview")}
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex items-start gap-3">
                            <Calendar size={20} className="text-blue-600 mt-0.5" />
                            <div>
                                <p className="font-medium text-blue-900">Prochaine relance prévue</p>
                                <p className="text-blue-700 text-sm mt-1"></p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                            Informations du poste
                        </h2>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Date de candidature</p>
                                <p className="text-gray-900 font-medium">Non définie</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 mb-1">Source</p>
                                <p className="text-gray-900 font-medium">LinkedIn</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 mb-1">Salaire minimum</p>
                                <p className="text-gray-900 font-medium flex items-center gap-1">
                                    <DollarSign size={16} />
                                    45 000 €/an
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 mb-1">Salaire maximum</p>
                                <p className="text-gray-900 font-medium flex items-center gap-1">
                                    <DollarSign size={16} />
                                    45 000 €/an
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-sm text-gray-500 mb-1">Fourchette</p>
                            <div className="flex items-center gap-3">
                                <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                                    <div className="bg-blue-500 h-full" style={{ width: "70%" }} />
                                </div>
                                <span className="text-sm font-medium text-gray-700">
                  {((10 + 50) / 2).toLocaleString("fr-FR")} € (moy.)
                </span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                            <FileText size={20} className="text-gray-500" />
                            <h2 className="text-lg font-semibold text-gray-900">Notes & informations</h2>
                        </div>

                        <div className="prose prose-sm max-w-none">
                            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                                Aucune note ajoutée pour cette candidature
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Entreprise */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                            Entreprise
                        </h2>

                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Building2 size={24} className="text-gray-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 text-lg">TechCorp</h3>
                                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                    <MapPin size={14} />
                                    Paris
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
                            >
                                <Globe size={16} />
                                <span className="text-sm">TechCorp</span>
                                <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                            Contact
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Nom</p>
                                <p className="text-gray-900 font-medium">Marie Dubois</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 mb-1">Email</p>
                                <a className="text-blue-500 hover:text-blue-600 flex items-center gap-2 transition-colors">
                                    <Mail size={16} />
                                    <span className="text-sm">marie.dubois@example.com</span>
                                </a>
                            </div>

                            <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-all hover:scale-105 active:scale-95">
                                <Mail size={18} />
                                Envoyer un email
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
