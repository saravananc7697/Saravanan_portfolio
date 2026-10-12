export const personalInfo = {
  name: 'Saravanan C',
  title: 'Senior DevOps Engineer',
  tagline: 'AWS • Kubernetes • Terraform • CI/CD • Observability',
  location: 'Chennai, Tamil Nadu',
  phone: '+91 81 2451 4010',
  email: 'csaravanan7697@gmail.com',
  linkedin: 'https://www.linkedin.com/in/saravanan-c-45911b292',
  github: 'https://github.com/saravanan-c',
  summary: `DevOps and Cloud Engineer with 5+ years of experience designing, automating and operating production AWS environments. Strong hands-on expertise in Docker and Kubernetes (EKS), Infrastructure as Code with Terraform, configuration management with Ansible, CI/CD pipelines (GitHub Actions, Jenkins, Argo CD, AWS CodePipeline) and full-stack observability using OpenTelemetry, Prometheus, Grafana and Langfuse for LLM/AI workloads. Track record of reducing release and provisioning time, improving reliability, strengthening cloud security and optimizing cloud cost. AWS Certified Solutions Architect – Associate.`,
};

export const stats = [
  { label: 'Years of Experience', value: 5, suffix: '+', icon: 'Briefcase' },
  { label: 'MTTR Reduction', value: 40, suffix: '%', icon: 'TrendingDown' },
  { label: 'Workload Availability', value: 99.9, suffix: '%', icon: 'Activity' },
  { label: 'Faster Provisioning', value: 70, suffix: '%', icon: 'Zap' },
  { label: 'Security Findings Reduced', value: 50, suffix: '%', icon: 'Shield' },
  { label: 'Grafana Dashboards', value: 15, suffix: '+', icon: 'BarChart3' },
  { label: 'Microservices on CI/CD', value: 8, suffix: '+', icon: 'Cpu' },
  { label: 'AWS Certifications', value: 1, suffix: '', icon: 'Award' },
];

export const experience = [
  {
    company: 'Pente.AI Private Limited',
    role: 'DevOps Engineer',
    location: 'Chennai',
    period: 'Jan 2026 – Present',
    type: 'current',
    achievements: [
      'Architected and deployed end-to-end observability stack using OpenTelemetry, enabling distributed tracing across 10+ microservices and reducing MTTR by ~40%.',
      'Self-hosted Langfuse v3 on AWS EC2 with ClickHouse, MinIO, Redis, and PostgreSQL, integrated through the OpenTelemetry Collector for LLM/AI tracing on the Pentesites platform.',
      'Configured Prometheus with custom alerting rules and recording rules; reduced alert noise by 30% through intelligent threshold tuning and grouping strategies.',
      'Designed and published 15+ Grafana dashboards for real-time infrastructure and application performance monitoring, driving data-driven engineering decisions.',
      'Operate Docker/ECR-based deployments and GitHub Actions CI/CD pipelines across a multi-service AWS production environment using EC2, ALB, CloudFront, and ECR.',
      'Analyzed AWS VPC Flow Logs to identify and remediate anomalous traffic patterns, enhancing network security posture and supporting audit compliance.',
      'Automated observability provisioning using Terraform, reducing manual monitoring setup from 2 days to under 2 hours.',
      'Prepared an assessment and phased implementation plan to migrate 10+ EC2-hosted Docker services across development and production to Amazon ECS Fargate; planning and evaluation are ongoing.',
      'Evaluating a Kubernetes-hosted AI agent for cluster health checks, troubleshooting, and approved remediation; evaluation is ongoing.',
    ],
  },
  {
    company: 'Chola People and Marketing Services Pvt. Ltd.',
    role: 'DevOps Engineer',
    location: 'Chennai',
    period: 'Jun 2025 – Dec 2025',
    achievements: [
      'Audited existing AWS infrastructure and executed right-sizing and reserved-instance strategies, delivering measurable reductions in monthly cloud spend.',
      'Managed production Amazon EKS clusters end-to-end — node upgrades, auto-scaling, resource quotas, and HPA — maintaining 99.9% workload availability.',
      'Streamlined GitHub Actions and AWS CodePipeline releases, improving deployment frequency and achieving zero-downtime rollouts through rolling updates.',
      'Used Ansible to automate provisioning and configuration across EC2 fleets, ensuring consistent environment state.',
    ],
  },
  {
    company: 'Cloud Brite Systems India Pvt. Ltd.',
    role: 'DevOps Engineer',
    location: 'Chennai',
    period: 'Oct 2023 – Jun 2025',
    achievements: [
      'Designed and provisioned complete AWS production infrastructure for an enterprise SAP application from scratch — EKS cluster, RDS (PostgreSQL), ALB/NLB, and multi-tier secure VPC.',
      'Authored reusable, modular Terraform configurations with remote state (S3 + DynamoDB locking), cutting environment provisioning time by 70% and eliminating configuration drift.',
      'Built CI/CD pipelines with Jenkins, Argo CD, and Argo Workflows enabling GitOps-driven, automated deployments with built-in rollback across dev/staging/production.',
      'Standardized server configuration, patching, and application deployment across hybrid on-premises/AWS environments using Ansible.',
      'Configured AWS Direct Connect for low-latency, high-availability hybrid connectivity between on-premises data centers and AWS, supporting mission-critical SAP workloads.',
      'Enforced IAM least-privilege, VPC segmentation, and automated security checks, reducing cloud security findings by 50%.',
    ],
  },
  {
    company: 'Pegatron Technology India Pvt. Ltd.',
    role: 'DevOps / Software Engineer',
    location: 'Chennai',
    period: 'Aug 2022 – Apr 2023',
    achievements: [
      'Engineered Jenkins and GitHub Actions CI/CD pipelines for 8+ microservices, enabling fully automated build, test, and deployment workflows and cutting release time by 50%.',
      'Containerized applications using Docker and orchestrated workloads on Kubernetes, improving deployment consistency, resource utilization, and horizontal scalability.',
      'Developed Python and Shell automation scripts that eliminated 60% of manual operational tasks, directly improving team productivity and reducing human error.',
    ],
  },
  {
    company: 'Phoenix Facility Services',
    role: 'DevOps Engineer',
    location: 'Chennai',
    period: 'Nov 2021 – Mar 2022',
    achievements: [
      'Administered Linux-based AWS production environments (EC2, RDS), maintaining availability and performance for business-critical applications.',
      'Managed MySQL databases, including installation, access control, query optimization, and automated backups.',
      'Implemented Jenkins CI/CD pipelines to automate deployments and reduce release effort.',
    ],
  },
  {
    company: 'Rambal Limited',
    role: 'Infrastructure / Production Engineer',
    location: 'Chennai',
    period: 'Sep 2020 – Nov 2021',
    achievements: [
      'Installed, configured, and maintained Linux servers (CentOS/Ubuntu), achieving consistent uptime for manufacturing and operational systems.',
      'Authored shell scripts to automate backups, log rotation, and service health checks, reducing administrative overhead by 40%.',
      'Managed MySQL databases with schema migrations and backup policies, ensuring data availability and integrity for production workloads.',
    ],
  },
];

export const skills = {
  'Cloud (AWS)': ['IAM', 'VPC', 'EC2', 'S3', 'EBS', 'EFS', 'EKS', 'ECS', 'ECS Fargate', 'RDS', 'DynamoDB', 'Lambda', 'Auto Scaling', 'CloudWatch', 'CloudTrail', 'X-Ray', 'CloudFront', 'Route 53', 'ALB/NLB', 'ECR', 'ElastiCache', 'SNS', 'SQS', 'SES', 'Step Functions', 'Direct Connect', 'Transit Gateway'],
  Containers: ['Docker', 'Docker Compose', 'Kubernetes (EKS)', 'Helm', 'Amazon ECR'],
  'IaC / Scripting': ['Terraform', 'Ansible', 'AWS CloudFormation', 'Python', 'Shell/Bash'],
  'CI/CD': ['Jenkins', 'GitHub Actions', 'AWS CodePipeline', 'AWS CodeBuild', 'AWS CodeDeploy', 'Argo CD', 'Argo Workflows', 'Concourse CI', 'GitLab CI'],
  Observability: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Langfuse', 'Loki', 'Tempo', 'ELK Stack', 'Datadog', 'CloudWatch', 'CloudTrail', 'X-Ray'],
  Security: ['IAM Policies', 'KMS', 'Secrets Manager', 'HashiCorp Vault', 'Security Hub', 'GuardDuty', 'WAF & Shield', 'ACM', 'VPC Flow Logs', 'Security Groups', 'AWS Direct Connect'],
  'Version Control': ['Git', 'GitHub', 'GitLab'],
  'OS / SysAdmin': ['Amazon Linux 2/2023', 'Ubuntu', 'CentOS', 'Windows Server'],
  'CDN / Networking': ['Nginx', 'Route 53', 'CloudFront', 'Direct Connect', 'Transit Gateway'],
  Others: ['MySQL', 'PostgreSQL', 'SonarQube', 'Jira', 'Agile/Scrum'],
};

export const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    issued: 'Mar 2025',
    expires: 'Mar 2028',
    credentialUrl: '#',
  },
];

export const education = {
  institution: 'Anand Institute of Higher Technology, Chennai',
  degree: 'Bachelor of Engineering',
  field: 'Mechanical Engineering',
  year: '2018',
};

export const architectureNodes = [
  { id: 'dev', label: 'Developer', icon: 'Code2', x: 10, y: 50, description: 'Writes application code and commits to Git repositories.' },
  { id: 'github', label: 'GitHub', icon: 'GitBranch', x: 25, y: 30, description: 'Source control with branch protection, PR reviews, and webhook triggers.' },
  { id: 'cicd', label: 'CI/CD Pipeline', icon: 'GitPullRequest', x: 25, y: 70, description: 'Jenkins + Argo CD + GitHub Actions for automated builds, tests, and deployments.' },
  { id: 'docker', label: 'Docker / ECR', icon: 'Container', x: 42, y: 50, description: 'Application containerization with Docker, images stored in Amazon ECR.' },
  { id: 'eks', label: 'Amazon EKS', icon: 'Cloud', x: 60, y: 50, description: 'Managed Kubernetes cluster with auto-scaling, HPA, and rolling updates — 99.9% uptime.' },
  { id: 'observability', label: 'Observability Stack', icon: 'Activity', x: 78, y: 30, description: 'OpenTelemetry tracing + Prometheus metrics + Grafana dashboards for full visibility.' },
  { id: 'security', label: 'Security & Compliance', icon: 'Shield', x: 78, y: 70, description: 'IAM least-privilege, VPC segmentation, VPC Flow Logs, and automated audit checks.' },
];

export const architectureEdges = [
  { from: 'dev', to: 'github' },
  { from: 'github', to: 'cicd' },
  { from: 'github', to: 'docker' },
  { from: 'cicd', to: 'docker' },
  { from: 'cicd', to: 'eks' },
  { from: 'docker', to: 'eks' },
  { from: 'eks', to: 'observability' },
  { from: 'eks', to: 'security' },
];

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Contact', href: '#contact' },
];
