export const personalInfo = {
  name: 'Saravanan C',
  title: 'Senior AWS Cloud & DevOps Engineer',
  tagline: 'SRE • DevSecOps • Terraform • Kubernetes • CI/CD • Observability',
  location: 'Chennai, Tamil Nadu',
  phone: '+91 81 2451 4010',
  email: 'csaravanan7697@gmail.com',
  linkedin: 'https://www.linkedin.com/in/saravanan-c-45911b292',
  github: 'https://github.com/saravanan-c',
  summary: `Senior DevOps, DevSecOps, and Cloud Engineer with 5 years of experience securing and operating AWS production environments, microservices platforms, Kubernetes workloads, CI/CD pipelines, Infrastructure as Code, and observability stacks. Hands-on with AWS, Docker, Kubernetes, Terraform, Ansible, GitHub Actions, Jenkins, Argo CD, Prometheus, Grafana, OpenTelemetry, and Loki. Focused on shift-left security, least-privilege IAM, production troubleshooting, root-cause analysis, and cloud cost optimization. AWS Certified Solutions Architect – Associate.`,
};

export const stats = [
  { label: 'Years of Experience', value: 5, suffix: '+', icon: 'Briefcase' },
  { label: 'MTTR Reduction', value: 40, suffix: '%', icon: 'TrendingDown' },
  { label: 'Workload Availability', value: 99.9, suffix: '%', icon: 'Activity' },
  { label: 'Faster Provisioning', value: 70, suffix: '%', icon: 'Zap' },
  { label: 'Less Alert Noise', value: 30, suffix: '%', icon: 'Shield' },
  { label: 'Grafana Dashboards', value: 15, suffix: '+', icon: 'BarChart3' },
  { label: 'Release Time Reduction', value: 50, suffix: '%', icon: 'Cpu' },
  { label: 'AWS Certifications', value: 1, suffix: '', icon: 'Award' },
];

export const experience = [
  {
    company: 'Pente.AI Private Limited',
    role: 'Senior DevOps and Cloud Engineer',
    location: 'Chennai',
    period: 'Jan 2026 – Nov 2026',
    type: 'current',
    status: 'NOTICE PERIOD',
    achievements: [
      'Operate secure AWS Dev and Production environments for a multi-service platform, supporting Dockerized microservices and GitHub Actions deployments across EC2, ECR, and ALB.',
      'Implemented OpenTelemetry distributed tracing across 10+ microservices, reducing mean time to resolution by approximately 40%.',
      'Configured Prometheus alerting and recording rules and tuned thresholds and grouping, reducing alert noise by 30%; created 15+ Grafana dashboards.',
      'Deployed and maintained self-hosted Langfuse v3 on EC2 with ClickHouse, MinIO, Redis, and PostgreSQL; integrated application traces through the OpenTelemetry Collector.',
      'Troubleshoot production issues involving telemetry and log delivery, disk pressure, open file descriptors, and TCP CLOSE_WAIT; perform root-cause analysis, Linux health checks, Docker log analysis, and capacity planning.',
      'Completed the phased migration of EC2-hosted Docker microservices in Dev and Production to Amazon ECS Fargate.',
      'Designed an AI-assisted first-level ECS Fargate troubleshooting workflow: CloudWatch alarms trigger EventBridge and a read-only Lambda agent that gathers metrics, logs, and service status, uses Amazon Bedrock to recommend diagnostic steps, and emails a report through SNS. IAM is read-only; changes require human approval.',
      'Evaluated a Kubernetes-based AI agent for cluster monitoring and maintenance.',
      'Analyzed AWS VPC Flow Logs to support security reviews and audit requirements.',
    ],
  },
  {
    company: 'Chola People and Marketing Services Pvt. Ltd.',
    role: 'System Engineer - IT Infra',
    location: 'Chennai',
    period: 'Jun 2025 – Dec 2025',
    achievements: [
      'Managed production Amazon EKS workloads, including node upgrades, autoscaling, resource quotas, and Horizontal Pod Autoscaler, supporting 99.9% workload availability.',
      'Improved release workflows using GitHub Actions and AWS CodePipeline, supporting rolling deployments and zero-downtime rollout practices.',
      'Audited AWS infrastructure and applied right-sizing and Reserved Instance recommendations to reduce monthly spend.',
      'Automated EC2 fleet provisioning and configuration using Ansible.',
    ],
  },
  {
    company: 'Brite Systems, Inc. (USA) / Cloud Brite Systems India Pvt. Ltd.',
    role: 'AWS Developer',
    location: 'Chennai',
    period: 'Oct 2023 – Jun 2025',
    achievements: [
      'Designed and provisioned production AWS infrastructure for an enterprise SAP application using EKS, PostgreSQL on RDS, ALB/NLB, and a segmented multi-tier VPC.',
      'Built reusable Terraform modules with S3 remote state and DynamoDB state locking, reducing environment provisioning time by 70% and limiting configuration drift.',
      'Implemented CI/CD and GitOps workflows using Jenkins, Argo CD, and Argo Workflows, enabling automated deployments and rollback across Dev, staging, and Production.',
      'Enforced IAM least privilege, VPC segmentation, and automated security checks across the delivery workflow.',
      'Standardized server configuration, patching, and deployments across hybrid on-premises/AWS environments with Ansible; configured AWS Direct Connect for hybrid connectivity.',
    ],
  },
  {
    company: 'Tata Electronics Products and Solutions Private Limited',
    role: 'DevOps & Infrastructure Security',
    location: 'Chennai',
    period: 'Aug 2022 – Apr 2023',
    achievements: [
      'Built Jenkins and GitHub Actions pipelines for 8+ microservices, automating build, test, and deployment and reducing release time by 50%.',
      'Containerized applications with Docker and deployed them on Kubernetes for consistent, scalable deployments.',
      'Developed Python and Shell automation that eliminated approximately 60% of manual operational tasks.',
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
  'Cloud (AWS)': ['EC2', 'ECS Fargate', 'EKS', 'ECR', 'Lambda', 'Amazon Bedrock', 'VPC', 'ALB/NLB', 'RDS', 'S3', 'DynamoDB', 'ElastiCache', 'SQS', 'SNS', 'EventBridge', 'IAM', 'KMS', 'CloudWatch', 'CloudTrail', 'CloudFront', 'Route 53', 'EBS', 'EFS', 'Direct Connect'],
  Containers: ['Docker', 'Docker Compose', 'Kubernetes (EKS)', 'Helm', 'Amazon ECR'],
  'IaC / Scripting': ['Terraform', 'Ansible', 'AWS CloudFormation', 'Python', 'Shell/Bash'],
  'CI/CD': ['GitHub Actions', 'Jenkins', 'AWS CodePipeline', 'AWS CodeBuild', 'AWS CodeDeploy', 'Argo CD', 'Argo Workflows', 'GitLab CI'],
  Observability: ['OpenTelemetry', 'OpenTelemetry Collector', 'Prometheus', 'Grafana', 'Loki', 'Tempo', 'Langfuse', 'ELK Stack', 'Datadog', 'CloudWatch', 'X-Ray'],
  Security: ['IAM Least Privilege', 'KMS', 'Secrets Manager', 'Security Hub', 'GuardDuty', 'AWS WAF', 'ACM', 'CloudTrail', 'VPC Flow Logs', 'SonarQube', 'Shift-left DevSecOps', 'Vulnerability & Patch Compliance', 'Network Segmentation', 'Audit Support'],
  'Version Control': ['Git', 'GitHub', 'GitLab'],
  'OS / SysAdmin': ['Linux', 'Ubuntu', 'Amazon Linux', 'CentOS', 'Nginx'],
  'CDN / Networking': ['VPC', 'ALB/NLB', 'Route 53', 'CloudFront', 'Direct Connect'],
  Others: ['MySQL', 'PostgreSQL', 'Jira', 'Agile/Scrum'],
};

export const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    issued: 'Mar 2025',
    expires: 'Mar 2028',
    credentialUrl: '',
  },
];

export const education = {
  institution: 'Anand Institute of Higher Technology, Chennai',
  degree: 'Bachelor of Engineering',
  field: 'Mechanical Engineering',
  year: '2018',
};

export const architectureNodes = [
  { id: 'ecs', label: 'ECS Fargate', icon: 'Cloud', x: 10, y: 50, description: 'Dockerized services run on Amazon ECS Fargate after the completed migration from EC2-hosted containers.' },
  { id: 'cloudwatch', label: 'CloudWatch', icon: 'Activity', x: 28, y: 30, description: 'CPU and memory alarms trigger first-level troubleshooting for ECS services.' },
  { id: 'eventbridge', label: 'EventBridge', icon: 'GitBranch', x: 46, y: 30, description: 'Routes CloudWatch alarm events to the diagnostic Lambda agent.' },
  { id: 'lambda', label: 'Read-only Lambda', icon: 'Code2', x: 64, y: 50, description: 'Collects ECS service status, CloudWatch metrics, and logs with read-only IAM permissions.' },
  { id: 'bedrock', label: 'Amazon Bedrock', icon: 'Activity', x: 46, y: 70, description: 'Correlates collected evidence and recommends diagnostic steps; it does not make changes.' },
  { id: 'sns', label: 'SNS Report', icon: 'GitPullRequest', x: 82, y: 30, description: 'Emails the diagnostic summary and recommended steps to the team.' },
  { id: 'approval', label: 'Human Approval', icon: 'Shield', x: 82, y: 70, description: 'All remediation actions remain subject to human review and approval.' },
];

export const architectureEdges = [
  { from: 'ecs', to: 'cloudwatch' },
  { from: 'cloudwatch', to: 'eventbridge' },
  { from: 'eventbridge', to: 'lambda' },
  { from: 'lambda', to: 'bedrock' },
  { from: 'lambda', to: 'sns' },
  { from: 'sns', to: 'approval' },
];

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Contact', href: '#contact' },
];
