import { Github } from 'lucide-react';

export default function GitHubCTA() {
  return (
    <section className="py-16 border-b border-white/5">
      <div className="max-w-container mx-auto px-6 text-center reveal">
        <Github className="w-10 h-10 text-text-primary mx-auto mb-6" />
        <h3 className="text-2xl font-bold mb-4 text-text-primary">
          Open Source & Backend Architecture
        </h3>
        <p className="text-text-secondary max-w-2xl mx-auto mb-8">
          All my project source codes, model architectures, and FastAPI backend structures are
          publicly available and actively maintained.
        </p>
        <a
          href="https://github.com/Muhammad-Ameen86"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
        >
          Explore GitHub Profile
        </a>
      </div>
    </section>
  );
}
