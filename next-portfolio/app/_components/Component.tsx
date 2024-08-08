/**
 * v0 by Vercel.
 * @see https://v0.dev/t/i3ke98fOBeT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { TooltipProvider, Tooltip } from "@/components/ui/tooltip";

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainIcon className="size-6" />
          <span className="sr-only">John Doe</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Introduction
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Skills
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Work Experience
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section
          id="introduction"
          className="px-4 md:px-6 py-12 md:py-16 lg:py-20"
        >
          <div className="max-w-3xl mx-auto grid gap-8">
            <div className="grid gap-4 text-center">
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                John Doe
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                Software Engineer
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center justify-center gap-4">
                <MailOpenIcon className="w-5 h-5" />
                <a href="#" className="text-muted-foreground hover:underline">
                  john.doe@example.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-4">
                <GithubIcon className="w-5 h-5" />
                <a href="#" className="text-muted-foreground hover:underline">
                  johndoe
                </a>
              </div>
              <div className="flex items-center justify-center gap-4">
                <LinkedinIcon className="w-5 h-5" />
                <a href="#" className="text-muted-foreground hover:underline">
                  johndoe
                </a>
              </div>
            </div>
            <div className="prose mx-auto">
              <p>
                I am a passionate software engineer with a strong background in
                web development. I have experience working with a variety of
                technologies and frameworks, and I am always eager to learn new
                skills. In my free time, I enjoy contributing to open-source
                projects and staying up-to-date with the latest industry trends.
              </p>
            </div>
          </div>
        </section>
        <section
          id="skills"
          className="px-4 md:px-6 py-12 md:py-16 lg:py-20 bg-muted"
        >
          <div className="max-w-5xl mx-auto grid gap-8">
            <div className="grid gap-4 text-center">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                Skills
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                Here are the technologies I'm familiar with.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="grid gap-4">
                <h3 className="text-lg font-bold">Proficient</h3>
                <div className="grid gap-4">
                  <TooltipProvider>
                    <Tooltip
                      content={
                        <div className="grid gap-2">
                          <div className="font-semibold">JavaScript</div>
                          <p className="text-sm text-muted-foreground">
                            I have been using JavaScript for over 5 years,
                            primarily in web development projects. I have
                            experience with modern JavaScript features, as well
                            as popular frameworks and libraries like React,
                            Node.js, and Express.
                          </p>
                        </div>
                      }
                    >
                      <div className="bg-background rounded-lg p-4 hover:bg-accent hover:text-accent-foreground transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-semibold">
                            JavaScript
                          </div>
                          <CheckIcon className="w-5 h-5" />
                        </div>
                      </div>
                    </Tooltip>
                    <Tooltip
                      content={
                        <div className="grid gap-2">
                          <div className="font-semibold">React</div>
                          <p className="text-sm text-muted-foreground">
                            I have been working with React for over 3 years,
                            building complex web applications. I have experience
                            with React hooks, state management, and various UI
                            libraries and frameworks.
                          </p>
                        </div>
                      }
                    >
                      <div className="bg-background rounded-lg p-4 hover:bg-accent hover:text-accent-foreground transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-semibold">React</div>
                          <CheckIcon className="w-5 h-5" />
                        </div>
                      </div>
                    </Tooltip>
                    <Tooltip
                      content={
                        <div className="grid gap-2">
                          <div className="font-semibold">TypeScript</div>
                          <p className="text-sm text-muted-foreground">
                            I have been using TypeScript for over 2 years, and I
                            have found it to be an invaluable tool for building
                            scalable and maintainable web applications. I have
                            experience with both frontend and backend TypeScript
                            projects.
                          </p>
                        </div>
                      }
                    >
                      <div className="bg-background rounded-lg p-4 hover:bg-accent hover:text-accent-foreground transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-semibold">
                            TypeScript
                          </div>
                          <CheckIcon className="w-5 h-5" />
                        </div>
                      </div>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <div className="grid gap-4">
                <h3 className="text-lg font-bold">Can Use</h3>
                <div className="grid gap-4">
                  <TooltipProvider>
                    <Tooltip
                      content={
                        <div className="grid gap-2">
                          <div className="font-semibold">Node.js</div>
                          <p className="text-sm text-muted-foreground">
                            I have used Node.js for building backend services
                            and APIs. I have experience with frameworks like
                            Express and Nest.js, as well as working with
                            databases and deployment.
                          </p>
                        </div>
                      }
                    >
                      <div className="bg-background rounded-lg p-4 hover:bg-accent hover:text-accent-foreground transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-semibold">Node.js</div>
                          <CheckIcon className="w-5 h-5" />
                        </div>
                      </div>
                    </Tooltip>
                    <Tooltip
                      content={
                        <div className="grid gap-2">
                          <div className="font-semibold">Next.js</div>
                          <p className="text-sm text-muted-foreground">
                            I have used Next.js for building server-rendered
                            React applications. I have experience with features
                            like static site generation, API routes, and
                            file-based routing.
                          </p>
                        </div>
                      }
                    >
                      <div className="bg-background rounded-lg p-4 hover:bg-accent hover:text-accent-foreground transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-semibold">Next.js</div>
                          <CheckIcon className="w-5 h-5" />
                        </div>
                      </div>
                    </Tooltip>
                    <Tooltip
                      content={
                        <div className="grid gap-2">
                          <div className="font-semibold">MongoDB</div>
                          <p className="text-sm text-muted-foreground">
                            I have experience working with MongoDB, a popular
                            NoSQL database. I have used it in various projects,
                            including building RESTful APIs and implementing
                            data-driven features.
                          </p>
                        </div>
                      }
                    >
                      <div className="bg-background rounded-lg p-4 hover:bg-accent hover:text-accent-foreground transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-semibold">MongoDB</div>
                          <CheckIcon className="w-5 h-5" />
                        </div>
                      </div>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <div className="grid gap-4">
                <h3 className="text-lg font-bold">Have Light Experience</h3>
                <div className="grid gap-4">
                  <TooltipProvider>
                    <Tooltip
                      content={
                        <div className="grid gap-2">
                          <div className="font-semibold">Rust</div>
                          <p className="text-sm text-muted-foreground">
                            I have recently started learning Rust and have
                            completed a few small projects. I'm interested in
                            exploring its use for systems programming and
                            performance-critical applications.
                          </p>
                        </div>
                      }
                    >
                      <div className="bg-background rounded-lg p-4 hover:bg-accent hover:text-accent-foreground transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-semibold">Rust</div>
                          <CheckIcon className="w-5 h-5" />
                        </div>
                      </div>
                    </Tooltip>
                    <Tooltip
                      content={
                        <div className="grid gap-2">
                          <div className="font-semibold">Svelte</div>
                          <p className="text-sm text-muted-foreground">
                            I have experimented with Svelte and built a few
                            small applications. I'm interested in exploring its
                            performance benefits and unique approach to
                            component-based development.
                          </p>
                        </div>
                      }
                    >
                      <div className="bg-background rounded-lg p-4 hover:bg-accent hover:text-accent-foreground transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-semibold">Svelte</div>
                          <CheckIcon className="w-5 h-5" />
                        </div>
                      </div>
                    </Tooltip>
                    <Tooltip
                      content={
                        <div className="grid gap-2">
                          <div className="font-semibold">Kubernetes</div>
                          <p className="text-sm text-muted-foreground">
                            I have a basic understanding of Kubernetes and have
                            used it for deploying and managing containerized
                            applications. I'm interested in expanding my
                            knowledge in this area.
                          </p>
                        </div>
                      }
                    >
                      <div className="bg-background rounded-lg p-4 hover:bg-accent hover:text-accent-foreground transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-semibold">
                            Kubernetes
                          </div>
                          <CheckIcon className="w-5 h-5" />
                        </div>
                      </div>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="work-experience"
          className="px-4 md:px-6 py-12 md:py-16 lg:py-20"
        >
          <div className="max-w-3xl mx-auto grid gap-8">
            <div className="grid gap-4 text-center">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                Work Experience
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                A timeline of my professional journey.
              </p>
            </div>
            <div className="relative grid gap-8">
              <div className="relative flex flex-col gap-4">
                <div className="absolute top-0 left-0 h-full w-[2px] bg-primary" />
                <div className="flex items-center gap-4">
                  <div className="bg-primary rounded-full w-6 h-6" />
                  <div className="grid gap-1">
                    <div className="text-lg font-semibold">
                      Software Engineer
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Acme Inc. | 2021 - Present
                    </div>
                  </div>
                </div>
                <div className="ml-10 grid gap-4">
                  <div className="relative bg-muted rounded-lg p-4">
                    <div className="absolute top-0 left-0 h-full w-[4px] bg-primary" />
                    <div className="prose">
                      <p>
                        Developed and maintained complex web applications using
                        React, TypeScript, and Node.js. Collaborated with
                        cross-functional teams to deliver high-quality features
                        and improvements.
                      </p>
                      <p>
                        Implemented robust testing strategies, including unit,
                        integration, and end-to-end tests, to ensure the
                        reliability and stability of the codebase.
                      </p>
                      <p>
                        Participated in the design and architecture of new
                        features, ensuring scalability, maintainability, and
                        adherence to best practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col gap-4">
                <div className="absolute top-0 left-0 h-full w-[2px] bg-primary" />
                <div className="flex items-center gap-4">
                  <div className="bg-primary rounded-full w-6 h-6" />
                  <div className="grid gap-1">
                    <div className="text-lg font-semibold">
                      Frontend Developer
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Widgets Inc. | 2019 - 2021
                    </div>
                  </div>
                </div>
                <div className="ml-10 gri" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
