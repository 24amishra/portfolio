/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import './globals.css';

async function getLetterboxdMovies() {
  try {
    const res = await fetch('https://letterboxd.com/script1234/rss/', {
      next: { revalidate: 3600 },
    });
    const xml = await res.text();
    const items = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    while ((match = itemRegex.exec(xml)) !== null && items.length < 5) {
      const c = match[1];
      const title = c.match(/<letterboxd:filmTitle>([\s\S]*?)<\/letterboxd:filmTitle>/)?.[1]?.trim() || '';
      const year = c.match(/<letterboxd:filmYear>([\s\S]*?)<\/letterboxd:filmYear>/)?.[1]?.trim() || '';
      const r = c.match(/<letterboxd:memberRating>([\s\S]*?)<\/letterboxd:memberRating>/)?.[1]?.trim() || '0';
      const img = c.match(/<img\s[^>]*src="([^"]*?)"/)?.[1] || '';
      const link = c.match(/<link>([\s\S]*?)<\/link>/)?.[1]?.trim() || '';
      if (title) items.push({ title, year, rating: parseFloat(r) || 0, image: img, link });
    }
    return items;
  } catch {
    return [];
  }
}

function formatRating(rating) {
  if (!rating) return '';
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return '\u2605'.repeat(full) + (half ? '\u00BD' : '');
}

export default async function Home() {
  const movies = await getLetterboxdMovies();

  const experiences = [
    {
      role: 'Technical Product Development Intern',
      company: 'Capital One',
      date: 'Summer 2026',
      description: 'Card Analytics team.',
      logo: null,
      initial: 'C',
    },
    {
    role: 'Campus Ambassador',
    company: 'AWS',
    date: 'Mar 2026 \u2013 Present',
    description: 'Growing AWS on campus.',
    logo: null,
    initial: 'A',
    },
    {
      role: 'Co-Founder',
      company: 'NextStep',
      date: 'Mar 2026 \u2013 Present',
      description: 'Cofounded platform connecting OSU underclassmen with local businesses for project-based work.',
      logo: null,
      initial: 'N',
    },
    {
      role: 'AI/ML Research Assistant',
      company: 'Lifestyle Lab, OSU Cancer Center',
      date: 'Dec 2024 \u2013 Dec 2025',
      description: 'Built agentic platform for 30+ daily cancer survivors with RAG architecture and Fitbit integration.',
      logo: '/re.png',
    },
    {
      role: 'Software Engineering Intern',
      company: 'Huntington Bank',
      date: 'May \u2013 Aug 2025',
      description: 'Deployed fraud detection APIs processing 100K+ daily interactions with Spring Boot and Kafka.',
      logo: '/check.png',
    },
    
    {
      role: 'Projects Director',
      company: 'Big Data Analytics Association',
      date: 'Dec 2024 \u2013 Present',
      description: 'Facilitating AI/ML workshops for 200+ students and directing inaugural project series.',
      logo: '/club.png',
    },
  ];

  const projects = [
    {
      name: 'MediMoji',
      award: 'Most Technical \u2014 Hack OHI/O',
      stack: 'Next.js, Langchain, Three.js, ElevenLabs',
      description: 'Multilingual patient care instructions with AI-generated 3D body diagrams and real-time translation supporting 20+ languages.',
    },
    {
      name: 'YMCA BelongingPassport',
      award: '1st Place \u2014 Future of Data Hackathon',
      stack: 'Next.js, Langchain, MongoDB, ElasticSearch',
      description: 'AI-powered volunteer matching platform contracted by YMCA for deployment across 10+ Cincinnati branches.',
    },
    {
      name: 'Snipe',
      award: null,
      stack: 'Expo, React Native, Firebase, Claude API',
      description: 'Cross-platform multiplayer trivia app shipped to 100+ beta users with 50% DAU retention and agentic daily question generation.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-300">
      <main className="max-w-2xl mx-auto px-6 py-24">

        {/* ── Intro ── */}
        <header className="mb-20">
          <h1 className="text-2xl font-semibold tracking-tighter text-white">
            Agastya Mishra
          </h1>
          <p className="text-sm text-neutral-500 mt-4 leading-6 max-w-lg">
            {"Hey! I'm Agastya, a Computer Science and Engineering student at Ohio State with a minor in Economics. I enjoy building user-oriented products and learning about new technologies. In my free time, I like watching sports and movies."}
          </p>
          <nav className="flex gap-5 mt-5 text-sm text-neutral-500">
            <a href="https://linkedin.com/in/agastya-mishra-osu" target="_blank" rel="noopener noreferrer" className="underline decoration-neutral-700 underline-offset-2 hover:text-green-400 hover:decoration-green-400/50 transition-colors duration-150">LinkedIn</a>
            <a href="https://github.com/24amishra" target="_blank" rel="noopener noreferrer" className="underline decoration-neutral-700 underline-offset-2 hover:text-green-400 hover:decoration-green-400/50 transition-colors duration-150">GitHub</a>
            <a href="https://letterboxd.com/script1234" target="_blank" rel="noopener noreferrer" className="underline decoration-neutral-700 underline-offset-2 hover:text-green-400 hover:decoration-green-400/50 transition-colors duration-150">Letterboxd</a>
            <a href="mailto:agastyamishra2006@gmail.com" className="underline decoration-neutral-700 underline-offset-2 hover:text-green-400 hover:decoration-green-400/50 transition-colors duration-150">Email</a>
          </nav>
        </header>

        {/* ── Experience ── */}
        <section className="mb-20">
          <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-6">Experience</h2>
          <div className="group/list">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="border-b border-neutral-800/60 py-4 first:pt-0 transition-opacity duration-150 group-hover/list:opacity-40 hover:!opacity-100"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-neutral-800 flex items-center justify-center bg-neutral-900 shrink-0 mt-0.5">
                      {exp.logo ? (
                        <Image src={exp.logo} alt={exp.company} width={24} height={24} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-green-400 text-[10px] font-bold">{exp.initial}</span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-white font-medium leading-snug">{exp.role}</p>
                      <p className="text-sm text-green-400/70 mt-0.5">{exp.company}</p>
                      <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                  <span className="text-xs text-neutral-600 font-mono shrink-0 mt-0.5">{exp.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section className="mb-20">
          <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-6">Projects</h2>
          <div className="group/list">
            {projects.map((proj, i) => (
              <div
                key={i}
                className="border-b border-neutral-800/60 py-4 first:pt-0 transition-opacity duration-150 group-hover/list:opacity-40 hover:!opacity-100"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm text-white font-medium leading-snug">{proj.name}</p>
                    {proj.award && (
                      <p className="text-sm text-green-400/70 mt-0.5">{proj.award}</p>
                    )}
                    <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">{proj.description}</p>
                  </div>
                  <span className="text-[11px] text-neutral-700 font-mono shrink-0 mt-0.5">{proj.stack}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Recently Watched ── */}
        {movies.length > 0 && (
          <section className="mb-20">
            <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-1">Recently Watched</h2>
            <p className="text-xs text-neutral-700 mb-6">
              <a href="https://letterboxd.com/script1234" target="_blank" rel="noopener noreferrer" className="underline decoration-neutral-800 underline-offset-2 hover:text-green-400 hover:decoration-green-400/50 transition-colors duration-150">
                @script1234
              </a>
            </p>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {movies.map((movie, i) => (
                <a
                  key={i}
                  href={movie.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-[100px] group"
                >
                  {movie.image ? (
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-[100px] h-[150px] object-cover rounded border border-neutral-800 group-hover:border-green-400/40 transition-colors duration-150"
                    />
                  ) : (
                    <div className="w-[100px] h-[150px] rounded border border-neutral-800 bg-neutral-900 flex items-center justify-center text-[10px] text-neutral-700">
                      No poster
                    </div>
                  )}
                  <p className="text-xs text-neutral-400 mt-1.5 truncate">{movie.title}</p>
                  <p className="text-green-400/70 text-xs">{formatRating(movie.rating)}</p>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* ── Footer ── */}
        <footer className="border-t border-neutral-800/60 pt-6 pb-8">
          <a
            href="mailto:agastyamishra2006@gmail.com"
            className="text-xs text-neutral-600 underline decoration-neutral-800 underline-offset-2 hover:text-green-400 hover:decoration-green-400/50 transition-colors duration-150"
          >
            agastyamishra2006@gmail.com
          </a>
        </footer>

      </main>
    </div>
  );
}
