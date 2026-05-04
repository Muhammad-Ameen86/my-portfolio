import { Cpu, Server, Wrench } from 'lucide-react';

const capabilities = [
  {
    icon: Cpu,
    iconColor: 'text-brand-primary',
    bgColor: 'bg-brand-primary/10',
    title: 'AI Systems Builder',
    description: 'Training and quantizing models for real-world constraints.',
  },
  {
    icon: Server,
    iconColor: 'text-brand-accent',
    bgColor: 'bg-brand-accent/10',
    title: 'Backend Engineer',
    description: 'Designing scalable, secure RESTful APIs and databases.',
  },
  {
    icon: Wrench,
    iconColor: 'text-brand-success',
    bgColor: 'bg-brand-success/10',
    title: 'Problem Solver',
    description:
      'Debugging OOM errors, optimizing queries, and delivering reliable software under pressure.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left Column - Bio */}
          <div className="w-full md:w-1/2 reveal">
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-3">
              About Me
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
              Engineering robust systems from data to deployment.
            </h3>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I am a final-year IT student specializing in AI and Backend Systems. My focus is on
                crossing the gap between theoretical machine learning and production-ready software.
              </p>
              <p>
                I build autonomous pipelines, design relational databases, and deploy high-performance
                APIs. My work spans across domains like Healthcare, Agriculture, and Cybersecurity.
              </p>
            </div>
          </div>

          {/* Right Column - Capability Cards */}
          <div
            className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 reveal"
            style={{ transitionDelay: '200ms' } as React.CSSProperties}
          >
            {capabilities.slice(0, 2).map((cap, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl flex flex-col gap-3">
                <div
                  className={`w-10 h-10 rounded-lg ${cap.bgColor} flex items-center justify-center ${cap.iconColor}`}
                >
                  <cap.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-text-primary">{cap.title}</h4>
                <p className="text-sm text-text-secondary">{cap.description}</p>
              </div>
            ))}
            {/* Third card spans full width */}
            <div className="glass-card p-6 rounded-2xl flex flex-col gap-3 sm:col-span-2">
              <div className="w-10 h-10 rounded-lg bg-brand-success/10 flex items-center justify-center text-brand-success">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-text-primary">{capabilities[2].title}</h4>
              <p className="text-sm text-text-secondary">{capabilities[2].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
