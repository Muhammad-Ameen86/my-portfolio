import { Mail, Linkedin, Github, Send } from 'lucide-react';

const contactLinks = [
  {
    href: 'mailto:muhammadameenrajper36@gmail.com',
    icon: Mail,
    hoverColor: 'hover:text-brand-primary',
    hoverBg: 'group-hover:bg-brand-primary/10 group-hover:border-brand-primary/30',
    label: 'Email',
    value: 'muhammadameenrajper36@gmail.com',
  },
  {
    href: 'https://www.linkedin.com/in/muhammad-ameen-rajper-368876252',
    icon: Linkedin,
    hoverColor: 'hover:text-brand-accent',
    hoverBg: 'group-hover:bg-brand-accent/10 group-hover:border-brand-accent/30',
    label: 'LinkedIn',
    value: 'Professional Network',
    external: true,
  },
  {
    href: 'https://github.com/Muhammad-Ameen86',
    icon: Github,
    hoverColor: 'hover:text-white',
    hoverBg: 'group-hover:bg-white/10 group-hover:border-white/30',
    label: 'GitHub',
    value: 'Source Code',
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-container mx-auto px-6">
        <div
          className="glass-card rounded-3xl p-8 lg:p-16 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-3">
                Connect
              </h2>
              <h3 className="text-4xl font-bold mb-6 text-text-primary">
                Let&apos;s Work Together
              </h3>
              <p className="text-text-secondary text-lg mb-10 leading-relaxed">
                If you&apos;re looking for an AI/Backend engineer capable of building real-world,
                high-performance systems from the ground up, my inbox is open. Available globally
                (UTC+5).
              </p>

              <div className="space-y-6">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className={`flex items-center gap-4 text-text-primary ${link.hoverColor} transition-colors group`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-dark-surface2 border border-white/5 flex items-center justify-center transition-all ${link.hoverBg}`}
                    >
                      <link.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{link.label}</p>
                      <p className="text-sm text-text-secondary">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form
                action="https://formspree.io/f/xyzpqwer"
                method="POST"
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-text-secondary" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="bg-dark-surface2 border border-white/10 rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-text-secondary" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="bg-dark-surface2 border border-white/10 rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-text-secondary" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="bg-dark-surface2 border border-white/10 rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-bold py-4 rounded-xl mt-2 flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
