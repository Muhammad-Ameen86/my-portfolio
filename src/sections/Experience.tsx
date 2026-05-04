import { ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'Campus Technical Ambassador',
    subtitle: 'Microsoft Learn Student Ambassador (MLSA)',
    company: 'Microsoft',
    location: 'Nawabshah, Pakistan',
    date: 'Oct 2024 – Present',
    borderColor: 'border-brand-primary',
    textColor: 'text-brand-primary',
    bullets: [
      'Deliver hands-on technical workshops on Android development, Java OOP, and Microsoft AI/Copilot tools to 20-50 students per session.',
      'Part of the global MLSA network with access to Azure credits, technical training, and an international developer community.',
    ],
  },
  {
    title: 'Android Developer Intern',
    subtitle: '',
    company: 'National Institute of Electronics (NIE) HQ',
    location: 'Islamabad, Pakistan',
    date: 'Dec 2024 – Jan 2025',
    borderColor: 'border-brand-accent',
    textColor: 'text-brand-accent',
    bullets: [
      'Built multi-screen Android applications in Kotlin and Java inside a national enterprise IT environment.',
      'Gained hands-on exposure to large-scale IT infrastructure management and semiconductor hardware workflows at an institutional level.',
    ],
  },
  {
    title: 'Software Developer Intern',
    subtitle: '',
    company: 'Pakistan Civil Aviation Authority (PCAA) HQ',
    location: 'Karachi, Pakistan',
    date: 'Jun 2025 – Aug 2025',
    borderColor: 'border-brand-success',
    textColor: 'text-brand-success',
    bullets: [
      'Designed and shipped a native Android billing management system used daily by PCAA admin staff covering bill tracking, role-based access control, and a 5-parameter search dashboard.',
      'Deployed before internship ended; in daily use by government staff. Scoped, designed, and delivered entirely without senior handoff.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-3">
          Career
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-16 text-text-primary">Experience</h3>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 reveal">
              {/* Timeline Dot */}
              <div
                className={`absolute w-4 h-4 rounded-full bg-dark-bg border-2 ${exp.borderColor} -left-[8.5px] top-1.5`}
              />

              {/* Content */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <div>
                  <h4 className="text-xl font-bold text-text-primary">{exp.title}</h4>
                  {exp.subtitle && (
                    <p className="text-sm text-text-secondary">{exp.subtitle}</p>
                  )}
                </div>
                <span className="text-sm font-mono text-text-secondary bg-dark-surface2 px-3 py-1 rounded border border-white/5 w-fit">
                  {exp.date}
                </span>
              </div>

              <p className={`${exp.textColor} font-medium text-sm mb-4`}>
                {exp.company} · {exp.location}
              </p>

              <ul className="space-y-2 text-text-secondary text-sm">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight
                      className={`w-4 h-4 ${exp.textColor} flex-shrink-0 mt-0.5`}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
