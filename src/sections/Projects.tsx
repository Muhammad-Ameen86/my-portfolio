import { Github, ExternalLink, Shield, Leaf, Scan } from 'lucide-react';

const projects = [
  {
    name: 'The Sentinel',
    subtitle: 'Agentic IDS',
    badge: 'Research',
    badgeColor: 'bg-brand-primary/20 text-brand-primary border-brand-primary/30',
    description:
      'An autonomous threat detection and response system that decides actions rather than just raising alerts.',
    problem:
      'Traditional IDS systems generate too many alerts requiring manual SOC review.',
    solution:
      'Built an agentic reasoning engine using LangGraph on UNSW-NB15 datasets.',
    impact:
      'Resolved 3M-row RAM overflows. Preparing IEEE/ACM research paper submission.',
    tech: ['LangGraph', 'FastAPI', 'Python'],
    link: 'https://github.com/Muhammad-Ameen86',
    linkText: 'View GitHub Repo',
    icon: Shield,
    iconColor: 'text-brand-primary',
    gradient: 'from-brand-primary/10 to-transparent',
    rightTitle: 'Autonomous',
    rightSubtitle: 'Agentic Reasoning',
    rightTextColor: 'text-text-primary',
  },
  {
    name: 'Crop Disease Classifier',
    subtitle: '',
    badge: 'Production',
    badgeColor: 'bg-brand-success/20 text-brand-success border-brand-success/30',
    description:
      'A mobile-ready API delivering sub-second real-world disease predictions.',
    problem:
      'Farmers need instant, low-latency crop diagnostics from mobile devices.',
    solution:
      'Trained AlexNet on 20K+ PlantVillage images. Quantized INT8 model from 800MB to 308MB.',
    impact:
      'Live FastAPI backend on Railway handling rapid diagnostic requests.',
    tech: ['PyTorch', 'AlexNet', 'Railway API'],
    link: 'https://github.com/Muhammad-Ameen86/crop-disease-detection-ai',
    linkText: 'View GitHub Repo',
    linkColor: 'hover:text-brand-success',
    icon: Leaf,
    iconColor: 'text-brand-success',
    gradient: 'from-brand-success/10 to-transparent',
    rightTitle: '97.9%',
    rightSubtitle: 'Production Accuracy',
    rightTextColor: 'text-brand-success',
    isStat: true,
  },
  {
    name: 'OralScan AI',
    subtitle: '',
    badge: 'Award Winner',
    badgeColor: 'bg-brand-accent/20 text-brand-accent border-brand-accent/30',
    description:
      'An accessible oral cancer screening model built entirely on a custom patient dataset.',
    problem:
      'No accessible initial screening tool for oral cancer in rural areas.',
    solution:
      'Interviewed 300 patients for primary data. Trained models weighting recall over accuracy.',
    impact:
      'Won National Innovation Award 2025 for high clinical applicability.',
    tech: ['Scikit-learn', 'XGBoost', 'Custom Dataset'],
    link: 'https://github.com/Muhammad-Ameen86/Oral_Cancer_Prediction',
    linkText: 'View GitHub Repo',
    linkColor: 'hover:text-brand-accent',
    icon: Scan,
    iconColor: 'text-brand-accent',
    gradient: 'from-brand-accent/10 to-transparent',
    rightTitle: '300+',
    rightSubtitle: 'Patient Dataset Built',
    rightTextColor: 'text-brand-accent',
    isStat: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-dark-surface/50 border-y border-white/5 relative">
      <div className="max-w-container mx-auto px-6 relative z-10">
        <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-3">
          Portfolio
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-text-primary">
          Featured Systems
        </h3>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row gap-10 reveal"
            >
              {/* Left Content */}
              <div className="w-full lg:w-2/3 flex flex-col justify-between">
                <div>
                  {/* Title Row */}
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <h4 className="text-2xl font-bold text-text-primary">
                      {project.name} {project.subtitle && `— ${project.subtitle}`}
                    </h4>
                    <span
                      className={`${project.badgeColor} border px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide`}
                    >
                      {project.badge}
                    </span>
                  </div>

                  <p className="text-text-secondary text-lg mb-6">{project.description}</p>

                  {/* Problem / Solution / Impact Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <h5 className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">
                        Problem
                      </h5>
                      <p className="text-sm text-text-secondary">{project.problem}</p>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-2">
                        Solution
                      </h5>
                      <p className="text-sm text-text-secondary">{project.solution}</p>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-brand-success uppercase tracking-wider mb-2">
                        Impact
                      </h5>
                      <p className="text-sm text-text-secondary">{project.impact}</p>
                    </div>
                  </div>
                </div>

                {/* Tech Tags + Link */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono bg-dark-surface2 px-3 py-1 rounded border border-white/10 text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-semibold text-text-primary ${project.linkColor || 'hover:text-brand-primary'} transition-colors`}
                  >
                    {project.linkText === 'View Deployed API' ? (
                      <ExternalLink className="w-4 h-4" />
                    ) : (
                      <Github className="w-4 h-4" />
                    )}
                    {project.linkText}
                  </a>
                </div>
              </div>

              {/* Right Visual Card */}
              <div className="w-full lg:w-1/3 bg-dark-surface2 rounded-2xl border border-white/5 flex flex-col items-center justify-center p-8 text-center shadow-inner relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                {project.isStat ? (
                  <>
                    <h3 className={`text-5xl font-bold ${project.rightTextColor} mb-2 relative z-10`}>
                      {project.rightTitle}
                    </h3>
                    <p className="text-sm text-text-secondary font-medium relative z-10">
                      {project.rightSubtitle}
                    </p>
                  </>
                ) : (
                  <>
                    <project.icon className={`w-16 h-16 ${project.iconColor} mb-4 relative z-10`} />
                    <h3 className={`text-3xl font-bold ${project.rightTextColor} relative z-10`}>
                      {project.rightTitle}
                    </h3>
                    <p className="text-sm text-text-secondary mt-2 relative z-10">
                      {project.rightSubtitle}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
