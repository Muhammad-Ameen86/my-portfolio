import { Globe, Cloud, Award } from 'lucide-react';

const certs = [
  {
    icon: Globe,
    iconBg: 'bg-brand-primary/10',
    iconColor: 'text-brand-primary',
    title: 'Aspire Leaders Program Finalist',
    org: 'Harvard Faculty-Designed',
    description:
      'Selected from 65,000+ applicants for a 9-week program on leadership and cross-cultural decision-making.',
  },
  {
    icon: Cloud,
    iconBg: 'bg-red-500/10',
    iconColor: 'text-red-400',
    title: 'Oracle Cloud Infrastructure 2025 AI Foundations',
    org: 'Oracle',
    description:
      'Comprehensive coverage of ML pipelines, model training, and production deployment in cloud infrastructure.',
  },
  {
    icon: Award,
    iconBg: 'bg-brand-success/10',
    iconColor: 'text-brand-success',
    title: 'National Innovation Award',
    org: 'Karachi Innovation Expo 2025',
    description:
      'OralScan AI selected as the most clinically applicable AI system in the healthcare category.',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-3 reveal">
          Recognition
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-16 text-text-primary reveal">
          Certifications & Awards
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl flex items-start gap-4 reveal">
              <div
                className={`w-12 h-12 ${cert.iconBg} rounded-xl flex items-center justify-center ${cert.iconColor} flex-shrink-0`}
              >
                <cert.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-text-primary mb-1">{cert.title}</h4>
                <p className="text-sm text-text-secondary mb-2">{cert.org}</p>
                <p className="text-xs text-text-secondary">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
