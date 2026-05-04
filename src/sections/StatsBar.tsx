import { Award } from 'lucide-react';

const stats = [
  { value: '98.16%', label: 'ML Model Accuracy' },
  { value: '20k+', label: 'Image Dataset Size' },
  { value: '300+', label: 'Patient Dataset Built' },
  { value: 'icon', label: 'National Innovation Award', isIcon: true },
];

export default function StatsBar() {
  return (
    <section className="py-16 bg-dark-surface border-y border-white/5">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl text-center flex flex-col items-center justify-center gap-2"
            >
              {stat.isIcon ? (
                <Award className="w-10 h-10 text-brand-accent mb-1" />
              ) : (
                <h3 className="text-4xl font-bold gradient-text-green">{stat.value}</h3>
              )}
              <p className="text-sm text-text-secondary font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
