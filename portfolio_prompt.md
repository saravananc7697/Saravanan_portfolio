# Claude Code Prompt — Saravanan C. DevOps Portfolio Website

Copy everything below into Claude Code (in VS Code) as your starting prompt.

---

## PROJECT BRIEF

Build a professional, visually striking personal portfolio website for a Senior DevOps Engineer. This is a career-defining asset — it needs to look like it belongs to a top 1% infrastructure engineer, not a generic template.

### Tech Stack
- **React 18** + **Vite** (fast dev/build)
- **Tailwind CSS** for styling
- **Framer Motion** for animations/transitions
- **React Icons** or **Lucide React** for iconography
- Optional: **React Three Fiber** ONLY if a lightweight 3D/particle hero background is feasible without hurting performance — otherwise use CSS/SVG-based animation instead
- Deployable as a static site (Vercel/Netlify friendly) — no backend required, single-page portfolio with smooth-scroll sections or React Router if multi-page

### Visual Direction: "Bold Cloud-Tech"
- **Theme**: Bold, modern cloud/infrastructure aesthetic — dark base with vibrant gradients and glassmorphism panels
- **Color palette**: Deep navy/charcoal background (#0A0E1A or similar) with gradient accents in electric blue → violet → cyan (evoking AWS/Kubernetes/cloud branding without copying their logos), plus a warm accent (amber/orange) for highlights/CTAs
- **Glassmorphism**: Frosted-glass cards (backdrop-blur, subtle border, low-opacity white/gradient fill) for experience cards, skill panels, and stat blocks
- **Typography**: A clean modern sans-serif for body (e.g., Inter, Manrope) + a monospace font (e.g., JetBrains Mono, Fira Code) for code-like accents (terminal snippets, tags, version numbers, badges)
- **Depth & motion**: Layered gradient blobs/orbs in the background with slow ambient movement (CSS animation, not distracting), subtle grid/dot pattern overlays reminiscent of network topology diagrams

### Interactivity Requirement: HIGH
Make this genuinely interactive and animated, not just fade-in-on-scroll. Include:
1. **Animated Hero Section** — Name, title, and tagline with staggered text reveal animation. Background should have an animated gradient mesh or floating orbs. Consider a subtle animated "infrastructure" motif (e.g., animated dots/lines connecting like a network graph, pulsing like distributed nodes).
2. **Interactive Architecture Diagram** — Build a small animated SVG/React diagram illustrating a typical deployment pipeline he's built (e.g., Dev → GitHub Actions/Jenkins → Docker → EKS → Prometheus/Grafana monitoring), with animated flow lines (dashes moving along paths) and hoverable nodes that show tooltips with details.
3. **Live-feel Metrics Widgets** — Animated counters (count-up on scroll into view) for key achievement stats pulled from the resume (e.g., "40% MTTR Reduction", "99.9% Uptime", "70% Faster Provisioning", "6+ Years Experience", "15+ Dashboards Built"). Style these as glassmorphic stat cards.
4. **Interactive Skills Section** — Group skills by category (Cloud, Containers, IaC, CI/CD, Observability, Security, etc.) as animated, filterable/hoverable pill/chip clusters or an interactive tag cloud. Hovering a skill could highlight related projects/experience entries.
5. **Timeline / Experience Section** — Vertical animated timeline (scroll-triggered reveal) for the 6 roles, each as an expandable glass card showing company, role, dates, and achievement bullets. Consider a toggle between "Timeline View" and "Card Grid View."
6. **Terminal-style Easter Egg (optional but encouraged)** — A small interactive terminal component in the hero or footer where typing commands like `whoami`, `skills`, `contact` reveals info — playful nod to his DevOps identity.
7. **Smooth scroll + scroll-progress indicator**, cursor-following subtle glow effect (desktop only), and page-load animation.
8. **Fully responsive** — all interactive elements must degrade gracefully on mobile (simplify animations, stack layouts).

### Site Structure / Sections
1. **Hero** — Name, title ("Senior DevOps Engineer"), tagline built from the professional summary, CTA buttons (Download Resume, Contact Me, View Work), animated background
2. **About / Summary** — Professional summary rewritten in a compelling narrative tone, highlighting the 6+ years, AWS certification, and passion for reliability/observability culture
3. **Key Metrics** — Animated stat counters (see above)
4. **Experience Timeline** — All 6 roles in reverse chronological order with full bullet details (data below)
5. **Technical Skills** — Categorized, interactive
6. **Certifications** — AWS Certified Solutions Architect – Associate (Issued Mar 2025, Expires Mar 2028) as a styled badge/card
7. **Education** — Anand Institute of Higher Technology, Chennai — B.E. Mechanical Engineering, 2018
8. **Architecture Showcase** — the interactive pipeline diagram described above, framed as "How I Build Systems" or "My DevOps Philosophy"
9. **Contact** — Email, phone, location, with a clean contact form (front-end only, mailto or Formspree-ready) and social links (LinkedIn/GitHub placeholders to be filled in)
10. **Footer** — Minimal, with quick nav links and a small signature line

---

## RESUME CONTENT TO USE (extracted, verbatim data)

**Name:** Saravanan C
**Title:** Senior DevOps Engineer | AWS • Kubernetes • Terraform • Observability
**Location:** Chennai, Tamil Nadu
**Phone:** +91 81 2451 4010
**Email:** csaravanan7697@gmail.com

**Professional Summary:**
Results-driven Senior DevOps Engineer with 6+ years of hands-on experience architecting scalable AWS cloud infrastructure, container orchestration via Kubernetes (EKS), and end-to-end CI/CD pipelines. Expert in Infrastructure as Code (Terraform), full-stack observability (OpenTelemetry, Prometheus, Grafana), and cloud security best practices. Proven track record of reducing deployment time, eliminating manual errors, and driving significant cost optimizations in multi-team environments. AWS Certified Solutions Architect – Associate. Passionate about building highly reliable, production-grade systems and embedding DevOps culture across engineering teams.

**Experience (reverse chronological):**

1. **Pente.AI Private Limited** — DevOps Engineer — Chennai — Jan 2026 – Present
   - Architected and deployed end-to-end observability stack using OpenTelemetry, enabling distributed tracing across 10+ microservices and reducing MTTR by ~40%.
   - Configured Prometheus with custom alerting rules and recording rules; reduced alert noise by 30% through intelligent threshold tuning and grouping strategies.
   - Designed and published 15+ Grafana dashboards for real-time infrastructure and application performance monitoring, driving data-driven engineering decisions.
   - Analyzed AWS VPC Flow Logs to identify and remediate anomalous traffic patterns, enhancing network security posture and supporting audit compliance.
   - Automated observability provisioning using Terraform, reducing manual monitoring setup from 2 days to under 2 hours.
   - Championed observability-first development practices within engineering teams, improving SLA adherence and reducing P1 incident frequency.

2. **Chola People and Marketing Services Pvt. Ltd.** — DevOps Engineer — Chennai — Jun 2025 – Dec 2025
   - Audited existing AWS infrastructure and executed right-sizing and reserved-instance strategies, delivering measurable reductions in monthly cloud spend.
   - Managed production Amazon EKS clusters end-to-end — node upgrades, auto-scaling, resource quotas, and HPA — maintaining 99.9% workload availability.
   - Streamlined release pipelines in collaboration with developers, improving deployment frequency and achieving zero-downtime rollouts via rolling update strategies.

3. **Cloud Brite Systems India Pvt. Ltd.** — DevOps Engineer — Chennai — Oct 2023 – Jun 2025
   - Designed and provisioned complete AWS production infrastructure for an enterprise SAP application from scratch — EKS cluster, RDS (PostgreSQL), ALB/NLB, and multi-tier secure VPC.
   - Authored reusable, modular Terraform configurations with remote state (S3 + DynamoDB locking), cutting environment provisioning time by 70% and eliminating configuration drift.
   - Built CI/CD pipelines with Jenkins, Argo CD, and Argo Workflows enabling GitOps-driven, automated deployments with built-in rollback across dev/staging/production.
   - Configured AWS Direct Connect for low-latency, high-availability hybrid connectivity between on-premises data centers and AWS, supporting mission-critical SAP workloads.
   - Enforced IAM least-privilege, VPC segmentation, and automated security checks, reducing cloud security findings by 50%.

4. **Pegatron Technology India Pvt. Ltd.** — DevOps / Software Engineer — Chennai — Aug 2022 – Apr 2023
   - Engineered Jenkins and GitHub Actions CI/CD pipelines for 8+ microservices, enabling fully automated build, test, and deployment workflows and cutting release time by 50%.
   - Containerized applications using Docker and orchestrated workloads on Kubernetes, improving deployment consistency, resource utilization, and horizontal scalability.
   - Developed Python and Shell automation scripts that eliminated 60% of manual operational tasks, directly improving team productivity and reducing human error.

5. **Rambal Limited** — Production / DevOps Engineer — Chennai — Sep 2020 – Nov 2021
   - Administered Linux-based AWS production environments (EC2, RDS), maintaining high availability and system performance for business-critical applications.
   - Managed MySQL databases — installation, user access control, query optimization, and automated backup scheduling — ensuring zero data loss and compliance.
   - Implemented Jenkins CI/CD pipelines to automate application deployments, reducing release effort and improving delivery cadence.

6. **Vishay Precision Transducers India Pvt. Ltd.** — Infrastructure / Production Engineer — Chennai — Sep 2018 – Jun 2020
   - Installed, configured, and maintained Linux servers (CentOS/Ubuntu), achieving consistent uptime for manufacturing and operational systems.
   - Authored shell scripts to automate backups, log rotation, and service health checks, reducing administrative overhead by 40%.
   - Managed MySQL databases with schema migrations and backup policies, ensuring data availability and integrity for production workloads.

**Technical Skills (grouped):**
- **Cloud (AWS):** IAM, VPC, EC2, S3, EKS, ECS, RDS, Lambda, CloudWatch, CloudFront, Route 53, ALB/NLB, ECR, ElastiCache, MSK, OpenSearch, SNS, SES, EMR
- **Containers:** Docker, Kubernetes (EKS), Helm, Container Registry (ECR)
- **IaC / Scripting:** Terraform (modules, remote state, workspaces), Python, Shell/Bash Scripting
- **CI/CD:** Jenkins, GitHub Actions, Argo CD, Argo Workflows, Concourse CI, GitLab CI
- **Observability:** OpenTelemetry (OTEL), Prometheus, Grafana, ELK Stack, Datadog, CloudWatch
- **Security:** HashiCorp Vault, IAM Policies, VPC Flow Logs, Security Groups, AWS Direct Connect
- **Version Control:** Git, GitHub, GitLab
- **OS / SysAdmin:** Amazon Linux 2/2023, Ubuntu, CentOS, Windows Server
- **CDN / Networking:** Akamai, Fastly, Nginx, Route 53, CloudFront
- **Others:** OpenStack, SonarQube, Firebase, Netlify, Jira, Agile/Scrum

**Certifications:**
- AWS Certified Solutions Architect – Associate — Issued: Mar 2025 — Expires: Mar 2028

**Education:**
- Anand Institute of Higher Technology, Chennai — Bachelor of Engineering, Mechanical Engineering — 2018

---

## KEY STAT CALLOUTS (for animated counters)
- 6+ Years of Experience
- 40% MTTR Reduction (via OpenTelemetry tracing)
- 99.9% Workload Availability (EKS clusters)
- 70% Faster Environment Provisioning (Terraform)
- 50% Reduction in Cloud Security Findings
- 15+ Grafana Dashboards Published
- 8+ Microservices on Automated CI/CD
- 1 AWS Certification (Solutions Architect – Associate)

---

## BUILD INSTRUCTIONS FOR CLAUDE CODE

1. Scaffold a Vite + React + Tailwind project.
2. Set up the design system first: color tokens (CSS variables for the gradient palette), font imports (Inter/Manrope + JetBrains Mono), and a glassmorphism utility class.
3. Build components in this order: Navbar (sticky, glass, scroll-aware) → Hero → StatsCounter → ExperienceTimeline → SkillsGrid → ArchitectureDiagram → Certifications → Education → Contact → Footer.
4. Use Framer Motion for scroll-triggered reveals (`whileInView`) and the hero's staggered text animation.
5. Build the animated architecture diagram as its own component using SVG paths with `stroke-dasharray`/`stroke-dashoffset` animation for "data flow" lines, and hoverable circular nodes with tooltips (Dev → CI/CD → Docker → EKS → Observability stack).
6. Make the stat counters use an `IntersectionObserver`-based count-up hook.
7. Ensure Lighthouse-friendly performance: lazy-load non-critical animations, avoid excessive simultaneous heavy blur effects on mobile.
8. Add a working contact form UI (front-end only; wire to `mailto:csaravanan7697@gmail.com` or leave a placeholder comment for Formspree/EmailJS integration).
9. Make it accessible: proper contrast on glass panels, keyboard navigability, alt text/aria-labels on icons.
10. Final polish pass: consistent spacing scale, consistent border-radius system, smooth page transitions, and a favicon/tab title ("Saravanan C — Senior DevOps Engineer").

Please ask me clarifying questions if anything about layout, section order, or specific animation behavior is ambiguous before you start generating code.
