import { me, education, projectGroups, toolkit, milestones, community } from './data/data.js'
import Photo from "./Components/Photo.jsx";

/* ───────── Small building blocks ───────── */
const Tag = ({ children, rot = "-rotate-3", className = "" }) => (
  <span
    className={`inline-block border-2 border-ink bg-paper px-4 py-1.5 font-bold ${rot} ${className}`}
  >
    {children}
  </span>
);

const Star = () => (
  <span aria-hidden className="text-3xl leading-none">
    *
  </span>
);

const Section = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`border-t border-ink/15 px-6 py-14 sm:px-12 ${className}`}
  >
    {children}
  </section>
);

/* ───────── Page ───────── */
export default function App() {
  return (
    <main className="mx-auto my-0 max-w-5xl overflow-hidden bg-paper sm:my-8 sm:rounded-3xl">
      {/* Hero */}
      <header className="grid gap-8 px-6 pt-8 sm:grid-cols-[1fr_320px] sm:px-12">
        <div className="flex flex-col justify-between pb-10">
          <p className="text-xs leading-relaxed">
            COMPUTER SCIENCE
            <br />
            <span className="font-bold underline underline-offset-4">
              ENGINEER
            </span>
          </p>
          <div className="my-12">
            <Tag className="text-3xl sm:text-5xl">{me.first}</Tag>
            <svg
              aria-hidden
              viewBox="0 0 120 60"
              className="ml-24 h-14 w-28 text-ink"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 5 C 60 0, 60 50, 20 40 C 5 35, 40 20, 100 48" />
              <path d="M92 40 L102 49 L90 54" />
            </svg>
            <div className="sm:ml-24">
              <Tag rot="rotate-2" className="text-3xl sm:text-5xl">
                {me.last}
              </Tag>
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed">
            I study how computers work, from algorithms and operating systems to
            the models and services built on top of them. Then I build things to
            test what I’ve understood.
          </p>
        </div>
        <Photo
          src={me.photo}
          alt="Portrait of Md. Iftiar Rafi"
          label="Your photo → public/rafi.jpg"
          className="self-end border border-ink/30"
        />
      </header>

      {/* About */}
      <Section id="about">
        <div className="grid gap-10 sm:grid-cols-[1fr_1.3fr]">
          <div>
            <Tag className="text-2xl">ABOUT ME</Tag>
            <p className="mt-8 text-sm leading-relaxed">
              I’m Rafi, a Computer Science and Engineering graduate from RUET,
              living in Dhaka. Currently specializing in building Agentic AI Systems, Deep Learning, and
              Full-Stack Engineering. Experienced in building Computer Vision architectures (Vision Transformers, 2D CNNs),
              Generative AI RAG pipelines with LangChain, LangGraph and scalable Microservices using Node.js, Docker, and Redis
            </p>
          </div>
          <div>
            <h2 className="mb-5 flex items-center gap-3 text-lg font-bold">
              <Star /> Where I studied
            </h2>
            <ul className="space-y-5">
              {education.map(([school, degree, years]) => (
                <li key={school} className="border-l-2 border-ink pl-4">
                  <p className="font-bold">{school}</p>
                  <p className="text-sm">{degree}</p>
                  <p className="text-xs text-ink/60">{years}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <div className="mb-10 flex items-center gap-4">
          <Tag className="text-2xl">THINGS I’VE BUILT</Tag>
        </div>
        {projectGroups.map((g) => (
          <div key={g.title} className="mb-14 last:mb-0">
            <h2 className="mb-6 flex items-center gap-3 text-lg font-bold">
              <Star /> {g.title}
            </h2>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 hover:cursor-pointer">
              {g.items.map((p) => (
                <article key={p.name}>
                  <Photo
                    src={p.thumb}
                    alt={`${p.name} screenshot`}
                    label={`Thumbnail → public${p.thumb}`}
                    className="border border-ink/30"
                  />
                  <h3 className="mt-4 font-bold">{p.name}</h3>
                  <p className="text-xs text-ink/60">{p.stack}</p>
                  <p className="mt-2 text-sm leading-relaxed">{p.text}</p>
                  <a
                    href={p.link}
                    className="mt-2 inline-block text-xs font-bold underline underline-offset-4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    source on GitHub
                  </a>
                </article>
              ))}
            </div>
          </div>
        ))}
      </Section>

      {/* Toolkit */}
      <Section id="toolkit">
        <Tag className="text-2xl" rot="rotate-1">
          WHAT I WORK WITH
        </Tag>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {toolkit.map(([title, list]) => (
            <div key={title} className="border-2 border-ink p-5">
              <h2 className="font-bold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed">{list}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Milestones */}
      <Section id="milestones">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="mb-5 flex items-center gap-3 text-lg font-bold">
              <Star /> Along the way
            </h2>
            <ul className="space-y-5 text-sm">
              {milestones.map(([t, d, href]) => (
                <li key={t}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold underline underline-offset-4"
                    >
                      {t}
                    </a>
                  ) : (
                    <b>{t}</b>
                  )}
                  <p className="mt-1 leading-relaxed">{d}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-5 flex items-center gap-3 text-lg font-bold">
              <Star /> Beyond code
            </h2>
            <ul className="space-y-5 text-sm">
              {community.map(([t, d]) => (
                <li key={t}>
                  <b>{t}</b>
                  <p className="mt-1">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <footer
        id="contact"
        className="grid gap-8 border-t border-ink/15 px-6 pt-14 sm:grid-cols-[260px_1fr] sm:px-12"
      >
        <Photo
          src={me.photo2}
          alt="Md. Iftiar Rafi"
          label="Optional second photo → public/rafi-2.jpg"
          className="self-end border border-ink/30"
        />
        <div className="flex flex-col justify-end pb-14">
          <Tag rot="-rotate-2" className="mb-8 self-start text-2xl">
            SAY HELLO
          </Tag>
          <ul className="space-y-2 text-sm underline underline-offset-4">
            <li>
              <a href={`mailto:${me.email}`}>{me.email}</a>
            </li>
            <li>
              <a href={me.github} target="_blank" rel="noreferrer">
                github.com/iftiarrafi
              </a>
            </li>
            <li>
              <a href={me.leetcode} target="_blank" rel="noreferrer">
                leetcode.com/u/serjonsnow
              </a>
            </li>
            <li className="no-underline">{me.location}</li>
          </ul>
        </div>
      </footer>
    </main>
  );
}