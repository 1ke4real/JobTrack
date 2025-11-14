import { Calendar, Briefcase, Send, CheckCircle, XCircle } from 'lucide-react';
export const StatusBadge = (status) => {
    const badges = {
        to_apply: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'À candidater', icon: Briefcase },
        sent: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Envoyée', icon: Send },
        interview: { bg: 'bg-purple-100', text: 'text-purple-800', label: 'Entretien', icon: Calendar },
        offer: { bg: 'bg-green-100', text: 'text-green-800', label: 'Offre', icon: CheckCircle },
        rejected: { bg: 'bg-red-100', text: 'text-red-800', label: 'Refus', icon: XCircle },
    };
    const badge = badges[status];
    const Icon = badge.icon;
    return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
            <Icon size={12} />
            {badge.label}
        </span>
    );
};
