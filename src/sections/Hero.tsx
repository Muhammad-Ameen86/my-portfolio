import { ArrowRight, Github, CheckCircle, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-20 relative">
      {/* Ambient Background Gradients */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-primary/10 blur-[120px] animate-pulse-slow" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-accent/10 blur-[120px] animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="max-w-container mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8 animate-fade-in-up">
          <div>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-success/10 border border-brand-success/20 text-brand-success text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-success animate-pulse" />
              Open for Opportunities
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-4 text-text-primary">
              Hi, I'm <span className="gradient-text">Muhammad Ameen</span>
            </h1>

            {/* Subheadline */}
            <h2 className="text-2xl md:text-3xl font-semibold text-text-secondary">
              AI Backend Engineer{' '}
              <span className="text-dark-surface2">|</span> FastAPI{' '}
              <span className="text-dark-surface2">|</span> ML Systems
            </h2>
          </div>

          {/* Key Points */}
          <ul className="space-y-3 text-text-secondary text-lg">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
              <span>Built AI systems using real-world datasets (300+ patients, 20k+ images)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
              <span>Developed high-performance FastAPI production APIs</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
              <span>Designed autonomous ML pipelines and scalable backend architectures</span>
            </li>
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-glow hover:shadow-glow-lg flex items-center gap-2"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Muhammad-Ameen86"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-surface border border-white/10 hover:border-white/20 text-text-primary px-8 py-3.5 rounded-xl font-semibold transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="/Resume.pdf"
              download
              className="md:hidden bg-transparent border border-brand-primary/30 text-brand-primary hover:bg-brand-primary/10 px-8 py-3.5 rounded-xl font-semibold transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
        </div>

        {/* Right Content: Terminal UI */}
        <div className="hidden lg:block w-full">
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
            {/* Terminal Header */}
            <div className="bg-dark-surface2 px-4 py-3 border-b border-white/5 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 text-xs font-mono text-text-secondary">
                ameen@server: ~/pipeline
              </div>
            </div>
            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm leading-relaxed bg-[#0B0F19]/90 h-[320px] flex flex-col justify-start">
              <div className="text-brand-accent mb-2">
                $ ./deploy_model.sh --env=production
              </div>
              <div className="text-text-secondary mb-1">
                &gt; [INFO] Initializing FastAPI worker processes...
              </div>
              <div className="text-text-secondary mb-1">
                &gt; [INFO] Loading PyTorch weights (quantized INT8)...
              </div>
              <div className="text-text-secondary mb-1">
                &gt; [INFO] Establishing connection pool to PostgreSQL...
              </div>
              <div className="text-brand-success mb-3">
                &gt; [SUCCESS] Pipeline active. Serving on port 8000.
              </div>
              <div className="text-brand-accent mb-2">
                $ curl -X POST /api/v1/predict \
              </div>
              <div className="text-text-secondary mb-1">
                {' '} -H &quot;Content-Type: application/json&quot; \
              </div>
              <div className="text-text-secondary mb-3">
                {' '} -d &apos;&#123;&quot;data_stream&quot;: &quot;active&quot;&#125;&apos;
              </div>
              <div className="text-brand-primary mb-1">
                &#123;&quot;status&quot;: &quot;success&quot;, &quot;latency_ms&quot;: 42.1&#125;
              </div>
              <div className="mt-4 text-brand-success">
                <span className="typing-container">ameen@server:~$ </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
