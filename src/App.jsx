
import {
  me,
  education,
  projectGroups,
  toolkit,
  milestones,
  community,
} from "./data/data.js";

import Photo from "./Components/Photo.jsx";

const navItems = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Toolkit", "#toolkit"],
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function ArrowLink({ href, children }) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300  hover:cursor-pointer hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50">
      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
        <Photo
          src={project.thumb}
          alt={`${project.name} screenshot`}
          label={`Thumbnail → public${project.thumb}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="mb-3 text-xs font-medium leading-5 text-blue-600">
          {project.stack}
        </p>

        <h3 className="text-lg font-semibold tracking-tight text-slate-900">
          {project.name}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
          {project.text}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-100 pt-4">
          <ArrowLink href={project.link}>Source code</ArrowLink>
          <ArrowLink href={project.video_link}>Live demo</ArrowLink>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-slate-950"
          >
            rafi<span className="text-blue-600">.</span>
          </a>

          <div className="flex items-center gap-4 sm:gap-7">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-xs font-medium text-slate-500 transition-colors hover:text-slate-950 sm:text-sm"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Hero */}
        <header
          id="home"
          className="grid min-h-[590px] items-center gap-12 py-20 sm:py-24 md:grid-cols-[1.3fr_0.7fr] md:gap-16"
        >
          <div className="order-2 md:order-1">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Computer Science Engineer · Bangladesh
            </div>

            <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
              Hi, I&apos;m
              <br />
              <span className="text-blue-600">{me.first} {me.last}.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              I build intelligent systems and full-stack applications,
              combining AI engineering, deep learning, and scalable
              software architecture to solve real-world problems.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-medium text-white transition-all hover:bg-blue-600"
              >
                Explore my work
                <span aria-hidden="true">→</span>
              </a>

              <a
                href={`mailto:${me.email}`}
                className="rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <ArrowLink href={me.github}>GitHub</ArrowLink>
              <ArrowLink href={me.leetcode}>LeetCode</ArrowLink>
              <span>{me.location}</span>
            </div>
          </div>

          <div className="order-1 mx-auto w-full max-w-[320px] md:order-2">
            <div className="relative">
              <div className="absolute -inset-3 -rotate-3 rounded-[2rem] bg-blue-100/70" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-300/40">
                <Photo
                  src={me.photo}
                  alt="Portrait of Md. Iftiar Rafi"
                  label="Your photo → public/rafi.jpg"
                  className="aspect-[4/5] w-full rounded-[1.25rem] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-200/50">
                <p className="text-xs text-slate-500">Focused on</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  AI & Software Engineering
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-24 border-t border-slate-200 py-20 sm:py-24"
        >
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
            <div>
              <SectionHeading
                title="About Me."
              />

              <p className="text-sm leading-8 text-slate-600 sm:text-base">
                I&apos;m Rafi, a Computer Science and Engineering graduate
                from RUET CSE, based in Dhaka. I work across Agentic AI,
                deep learning, generative AI, and full-stack engineering.
                My interests include computer vision architectures,
                retrieval-augmented generation, and distributed
                microservices built with tools like Node.js, Nest.js, Docker, Kafka
                and Redis.
              </p>

            </div>

            <div>
              <h3 className="mb-7 text-lg font-semibold tracking-tight">
                Education
              </h3>

              <div className="space-y-7">
                {education.map(([school, degree, years]) => (
                  <article
                    key={school}
                    className="relative border-l-2 border-slate-200 pl-5 before:absolute before:-left-[5px] before:top-1.5 before:h-2 before:w-2 before:rounded-full before:bg-blue-600"
                  >
                    <p className="font-semibold text-slate-900">{school}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {degree}
                    </p>
                    <p className="mt-2 text-xs text-slate-400">{years}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-24 border-t border-slate-200 py-20 sm:py-24"
        >
          <SectionHeading
            title="Things I've built."
            description="A selection of projects exploring AI, Full-stack development, and the engineering behind reliable applications."
          />

          <div className="space-y-16">
            {projectGroups.map((group) => (
              <div key={group.title}>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {group.title}
                  </h3>
                  <span className="text-xs text-slate-400">
                    {String(group.items.length).padStart(2, "0")} projects
                  </span>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
                  {group.items.map((project) => (
                    <ProjectCard
                      key={project.name}
                      project={project}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Toolkit */}
        <section
          id="toolkit"
          className="scroll-mt-24 border-t border-slate-200 py-20 sm:py-24"
        >
          <SectionHeading
            title="Tools I prefer to use!"
            description="Technologies I use to experiment, build software."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {toolkit.map(([title, list]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-blue-200"
              >
                <div className="mb-5 flex items-center gap-3">
                  {/* <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-sm font-semibold text-blue-600">
                    {title.charAt(0)}
                  </span> */}
                  <h3 className="font-semibold text-xl text-slate-900">{title}</h3>
                </div>
                <p className="text-sm leading-7 text-slate-600">{list}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Milestones and Community */}
        <section className="border-t border-slate-200 py-20 sm:py-24">
          <div className="grid gap-14 md:grid-cols-2 md:gap-16">
            <div>
              <SectionHeading
                eyebrow="The journey"
                title="Milestones."
              />

              <div className="space-y-7">
                {milestones.map(([title, description, href]) => (
                  <article
                    key={title}
                    className="border-b border-slate-200 pb-6 last:border-0"
                  >
                    <h3 className="font-semibold text-slate-900">
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="transition-colors hover:text-blue-600"
                        >
                          {title} <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        title
                      )}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Outside the editor"
                title="Beyond code."
              />

              <div className="space-y-7">
                {community.map(([title, description]) => (
                  <article
                    key={title}
                    className="border-b border-slate-200 pb-6 last:border-0"
                  >
                    <h3 className="font-semibold text-slate-900">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <footer
          id="contact"
          className="scroll-mt-24 border-t border-slate-200 py-16 sm:py-20"
        >
          <div className="overflow-hidden rounded-3xpx-6 py-10 text-slate-950 sm:px-10 sm:py-14">
            <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="mt-5 max-w-lg text-2xl leading-7 text-slate-950">
                  Interested in AI engineering, software development,
                  or building something useful? I&apos;d love to hear from you.
                </p>
              </div>

              <a
                href={`mailto:${me.email}`}
                className="inline-flex w-fit items-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-blue-100"
              >
                Say hello
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-950 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm">© {new Date().getFullYear()} {me.first} {me.last}</p>

              <div className="flex flex-wrap gap-5 text-sm">
                <a
                  href={me.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-slate-400"
                >
                  GitHub ↗
                </a>
                <a
                  href={me.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-slate-400"
                >
                  LeetCode ↗
                </a>
                <a
                  href={`mailto:${me.email}`}
                  className="transition-colors hover:text-slate-400"
                >
                  Email ↗
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
