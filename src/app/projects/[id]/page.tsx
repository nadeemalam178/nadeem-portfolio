import { notFound } from "next/navigation";
import Link from "next/link";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { Github } from "@/components/Icons";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  const externalProjectUrl = project.repoUrl ?? project.demoUrl;
  const externalProjectLabel = project.repoUrl ? "Source code" : "Live project";

  return (
    <div className="case-study-page">
      <header className="case-header">
        <div className="case-container case-header-inner">
          <Link href="/" className="case-back"><ArrowLeft size={15} /> Back to portfolio</Link>
          <span className="case-category">{project.category}</span>
          {externalProjectUrl && <a className="case-header-github" href={externalProjectUrl} target="_blank" rel="noreferrer">{project.repoUrl ? <Github size={15} /> : <ArrowUpRight size={15} />} {externalProjectLabel} <ArrowUpRight size={14} /></a>}
        </div>
      </header>

      <main className="case-container case-main">
        <div className="case-hero">
          <div className="case-kicker"><span className="eyebrow-dot" /> TECHNICAL CASE STUDY <span className="case-status">{project.status}</span></div>
          <h1>{project.title}</h1>
          <p className="case-tagline">{project.tagline}</p>
          <p className="case-summary">{project.summary}</p>
          <div className="case-contribution"><span>MY ROLE</span><p>{project.roleAndContribution}</p></div>
        </div>

        <section className="case-specs" aria-label="Technical specifications">
          {project.technicalSpecifications.map((spec) => <article className="case-spec" key={spec.label}><span>{spec.label}</span><strong>{spec.value}</strong><p>{spec.detail}</p></article>)}
        </section>

        <section className="case-problem-solution" aria-label="Problem and solution">
          <article className="case-story-block"><span className="case-section-kicker">01 / THE PROBLEM</span><h2>What needed solving</h2><p>{project.problem}</p></article>
          <article className="case-story-block case-solution"><span className="case-section-kicker">02 / THE APPROACH</span><h2>How I approached it</h2><p>{project.solution}</p></article>
        </section>

        <section className="case-decisions">
          <div className="case-section-heading"><div><span className="case-section-kicker">03 / TECHNICAL DECISIONS</span><h2>Trade-offs, made explicit.</h2></div><Layers size={21} /></div>
          <div className="case-decision-list">{project.architectureDecisions.map((decision, index) => <article className="case-decision" key={decision.decision}><span className="case-decision-number">0{index + 1}</span><div><h3>{decision.decision}</h3><p><b>Why:</b> {decision.rationale}</p><p><b>Trade-off:</b> {decision.tradeoff}</p></div></article>)}</div>
        </section>

        <section className="case-capabilities">
          <div className="case-section-heading"><div><span className="case-section-kicker">04 / IMPLEMENTATION</span><h2>What the project covers.</h2></div><CheckCircle2 size={21} /></div>
          <ul className="case-feature-list">{project.verifiedFeatures.map((feature) => <li key={feature}><CheckCircle2 size={16} /><span>{feature}</span></li>)}</ul>
          <div className="case-stack"><span>TOOLS & TECHNOLOGIES</span><div>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
        </section>

        {(project.currentLimitations.length > 0 || project.nextSteps.length > 0) && <section className={`case-next-steps${project.currentLimitations.length === 0 || project.nextSteps.length === 0 ? " case-next-steps-single" : ""}`}>
          {project.currentLimitations.length > 0 && <article><span className="case-section-kicker"><AlertCircle size={14} /> CURRENT LIMITATIONS</span><ul>{project.currentLimitations.map((limitation) => <li key={limitation}>{limitation}</li>)}</ul></article>}
          {project.nextSteps.length > 0 && <article><span className="case-section-kicker"><ArrowRight size={14} /> NEXT STEPS</span><ul>{project.nextSteps.map((step) => <li key={step}>{step}</li>)}</ul></article>}
        </section>}

        <footer className="case-footer">
          {externalProjectUrl && <a className="case-repo-button" href={externalProjectUrl} target="_blank" rel="noreferrer">{project.repoUrl ? <Github size={16} /> : <ArrowUpRight size={16} />} {project.repoUrl ? "View source on GitHub" : "Open live project"} <ArrowUpRight size={15} /></a>}
          <nav aria-label="Other projects" className="case-project-nav">
            {prevProject && <Link href={`/projects/${prevProject.id}`}><ArrowLeft size={14} /><span><small>PREVIOUS PROJECT</small>{prevProject.title}</span></Link>}
            {nextProject && <Link href={`/projects/${nextProject.id}`}><span><small>NEXT PROJECT</small>{nextProject.title}</span><ArrowRight size={14} /></Link>}
          </nav>
        </footer>
      </main>
    </div>
  );
}
