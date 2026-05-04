import { Database, Filter, Cpu, BarChart3, Server } from 'lucide-react';

const steps = [
  {
    icon: Database,
    color: 'border-brand-primary',
    textColor: 'text-brand-primary',
    shadow: 'shadow-[0_0_15px_rgba(79,70,229,0.4)]',
    number: '1',
    title: 'Data',
    subtitle: 'Collection & Cleaning',
  },
  {
    icon: Filter,
    color: 'border-brand-primary',
    textColor: 'text-brand-primary',
    shadow: 'shadow-[0_0_15px_rgba(79,70,229,0.4)]',
    number: '2',
    title: 'Preprocess',
    subtitle: 'Features & Normalization',
  },
  {
    icon: Cpu,
    color: 'border-brand-primary',
    textColor: 'text-brand-primary',
    shadow: 'shadow-[0_0_15px_rgba(79,70,229,0.4)]',
    number: '3',
    title: 'Train',
    subtitle: 'PyTorch / Scikit-Learn',
  },
  {
    icon: BarChart3,
    color: 'border-brand-accent',
    textColor: 'text-brand-accent',
    shadow: 'shadow-[0_0_15px_rgba(56,189,248,0.4)]',
    number: '4',
    title: 'Evaluate',
    subtitle: 'Metrics & Optimization',
  },
  {
    icon: Server,
    color: 'border-brand-accent',
    textColor: 'text-brand-accent',
    shadow: 'shadow-[0_0_15px_rgba(56,189,248,0.4)]',
    number: '5',
    title: 'Deploy',
    subtitle: 'FastAPI Production',
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-dark-surface2 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 relative z-10">
        <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-3 text-center">
          Process
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-16 text-text-primary text-center">
          How I Build AI Systems
        </h3>

        <div className="relative reveal">
          {/* Connecting Line - desktop only */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-dark-surface -translate-y-1/2 hidden lg:block rounded" />
          <div className="absolute top-1/2 left-0 w-[80%] h-1 bg-gradient-to-r from-brand-primary to-brand-accent -translate-y-1/2 hidden lg:block rounded" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl relative z-10 text-center flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-full bg-[#0B0F19] border-2 ${step.color} flex items-center justify-center ${step.textColor} ${step.shadow}`}
                >
                  <step.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">
                    {step.number}. {step.title}
                  </h4>
                  <p className="text-xs text-text-secondary">{step.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
