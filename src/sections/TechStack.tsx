import { Server, Cpu, Database, Wrench } from 'lucide-react';

const stacks = [
  {
    icon: Server,
    iconColor: 'text-brand-primary',
    title: 'Backend',
    skills: ['FastAPI', 'Python', 'REST APIs', 'MongoDB', 'Redis', 'Docker', 'API Deployment'],
    hoverColor: 'hover:border-brand-primary hover:text-white',
  },
  {
    icon: Cpu,
    iconColor: 'text-brand-success',
    title: 'AI / ML',
    skills: ['PyTorch', 'XGBoost', 'Random Forest', 'Scikit-Learn', 'Logistic Regression', 'LangChain', 'LangGraph'],
    hoverColor: 'hover:border-brand-success hover:text-white',
  },
  {
    icon: Database,
    iconColor: 'text-brand-accent',
    title: 'Databases',
    skills: ['MongoDB', 'Redis'],
    hoverColor: 'hover:border-brand-accent hover:text-white',
  },
  {
    icon: Wrench,
    iconColor: 'text-purple-400',
    title: 'Tools',
    skills: ['Docker', 'Git', 'Linux', 'Railway', 'Android Studio', 'Jupyter Notebook', 'Azure AI', 'Render'],
    hoverColor: 'hover:border-purple-400 hover:text-white',
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-24 relative">
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-3 text-center reveal">
          Toolkit
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-text-primary text-center reveal">
          Engineering Stack
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stacks.map((stack, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl reveal">
              <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <stack.icon className={`w-5 h-5 ${stack.iconColor}`} /> {stack.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {stack.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 bg-dark-surface text-text-secondary text-sm rounded-lg border border-white/5 ${stack.hoverColor} transition-colors cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
