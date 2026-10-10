export const profile = {
  name: 'Asad Ullah',
  shortName: 'AU',
  title: 'Cybersecurity Engineer | Penetration Tester | Application Security',
  location: 'Lahore, Pakistan',
  education: 'BS Digital Forensics and Cyber Security',
  school: 'Lahore Garrison University',
  cgpa: '3.38 / 4.00',
  availability: 'Open to offensive security opportunities',
  email: 'asadullah547335@gmail.com',
  cv: '/Asad_Ullah_CV.pdf',
  linkedin: 'https://www.linkedin.com/in/asadullah-security-engineer/',
  github: 'https://github.com/SpiderGh0st',
  medium: 'https://medium.com/@asadullah547335',
};

export const experience = [
  {
    company: 'Ebryx',
    role: 'Security Engineering',
    duration: '1.5+ years',
    note: [ 'Conducted web application and API penetration tests covering authentication, authorization, input validation, and business logic.','Performed internal and external network assessments, including asset discovery, service enumeration, and controlled validation.',
    'Validated vulnerabilities, assessed business impact, and prioritized risk using severity-based ratings.',
    'Wrote remediation-focused reports with evidence, reproduction steps, and practical fixes.',
    'Supported retesting and worked with developers to confirm that fixes were effective.'],
    highlights: ['Web and API penetration testing', 'Internal and external assessments', 'Vulnerability validation and risk prioritization', 'Remediation-focused reporting'],
    award: 'Rising Star Award — Q1 2026',
  },
  {
    company: 'Security Wall',
    role: 'Penetration Tester',
    duration: '1+ year',
    note: [
    'Carried out penetration testing tasks and workflows within authorized scope.',
    'Performed vulnerability assessments using scanning and manual validation techniques.',
    'Analyzed security weaknesses and documented their technical and business impact.',
    'Prepared clear technical reports for both technical and non-technical readers.',
    'Provided practical remediation guidance to help teams fix issues effectively.',
  ],
    highlights: ['Penetration testing workflows', 'Security analysis and vulnerability assessment', 'Clear technical reporting', 'Practical remediation guidance'],
  },
];

export const skillGroups = [
  { title: 'Web & API security', items: ['Web application testing', 'API security assessment', 'Authentication and authorization', 'Business logic and access control', 'OWASP methodologies'] },
  { title: 'Network & infrastructure', items: ['Internal and external testing', 'Asset discovery and enumeration', 'Vulnerability validation', 'Windows infrastructure review', 'Credential and configuration assessment'] },
  { title: 'Mobile application security', items: ['Android and iOS testing', 'Static and dynamic analysis', 'Insecure local storage', 'Certificate pinning assessment', 'Runtime security controls'] },
  { title: 'Cloud & tooling', items: ['Azure and Microsoft 365 reviews', 'Identity and access management', 'Burp Suite, Nmap, Nessus', 'Frida, MobSF, Ghidra, Objection', 'Kali Linux, Git, Wireshark'] },
];

export type Project = {
  name: string;
  category: string;
  label: string;
  description: string;
  scope: string;
  tools: string[];
  impact: string;
  recommendation: string;
  link?: string;
};

export const projects: Project[] = [
  { name: 'Web Application Assessment', category: 'Web Application Security', label: 'Assessment methodology', description: 'A repeatable approach for mapping an application attack surface, testing trust boundaries, validating impact, and translating evidence into remediation.', scope: 'Reconnaissance, authentication, authorization, input validation, business logic, impact analysis.', tools: ['Burp Suite', 'OWASP methodology', 'Browser tooling'], impact: 'Helps teams identify control failures before they become material security incidents.', recommendation: 'Prioritize server-side authorization, consistent input handling, secure session design, and regression testing.' },
  { name: 'API Security Assessment', category: 'API Security', label: 'Assessment methodology', description: 'Focused API review covering object-level authorization, token handling, rate limits, data exposure, and abuse-resistant business workflows.', scope: 'Endpoint discovery, authorization matrix, token security, rate limiting, data minimization.', tools: ['Burp Suite', 'Postman', 'REST/JSON'], impact: 'Reduces the likelihood of unauthorized data access and workflow abuse.', recommendation: 'Enforce object ownership server-side, minimize responses, and add abuse monitoring around sensitive actions.' },
  { name: 'Internal & External Network Testing', category: 'Network Penetration Testing', label: 'Authorized testing', description: 'Structured network assessment workflow for discovering exposed services, validating weaknesses, and prioritizing fixes without publishing sensitive infrastructure details.', scope: 'Asset discovery, service enumeration, configuration review, credential security, controlled validation.', tools: ['Nmap', 'Nessus', 'Metasploit', 'Wireshark'], impact: 'Turns broad infrastructure exposure into a prioritized, actionable remediation queue.', recommendation: 'Reduce attack surface, harden exposed services, segment sensitive systems, and rotate weak credentials.' },
  { name: 'Azure & Microsoft 365 Review', category: 'Cloud Security', label: 'Security review', description: 'Cloud security review centered on identity posture, excessive privilege, configuration hygiene, and security control coverage.', scope: 'IAM, conditional access, privileged roles, tenant configuration, security controls.', tools: ['Azure security controls', 'Microsoft 365', 'Configuration review'], impact: 'Improves resilience against identity compromise and privilege escalation.', recommendation: 'Apply least privilege, strengthen identity controls, remove stale access, and continuously review tenant posture.' },
  { name: 'Android Application Pentesting', category: 'Android Security', label: 'Educational & authorized lab work', description: 'Mobile testing workflow covering application binaries, local storage, API communication, authentication, and runtime defenses.', scope: 'Static analysis, dynamic analysis, storage, transport security, runtime controls.', tools: ['MobSF', 'Frida', 'Burp Suite', 'Objection'], impact: 'Surfaces mobile-specific weaknesses that can expose user data or weaken backend trust.', recommendation: 'Protect secrets, validate server-side trust, harden local storage, and monitor release artifacts.' },
  { name: 'DVIA-v2 iOS Security Lab', category: 'iOS Security', label: 'Educational lab', description: 'An intentionally vulnerable iOS lab used to understand common mobile security controls and responsible validation techniques.', scope: 'Local storage, runtime behavior, certificate pinning, authentication, reverse engineering.', tools: ['Frida', 'Ghidra', 'Objection', 'Burp Suite'], impact: 'Builds practical understanding of mobile attack paths in a safe, deliberately vulnerable environment.', recommendation: 'Use platform secure storage, robust server-side authorization, certificate validation, and release hardening.', link: 'https://github.com/prateek147/DVIA-v2' },
  { name: 'Security Research & Labs', category: 'Security Research and Labs', label: 'Editable project set', description: 'A dedicated space for verified write-ups, controlled lab research, and technical experiments. Add additional public repositories as they are confirmed.', scope: 'Research notes, reproducible lab observations, defensive recommendations.', tools: ['Python', 'Git', 'Linux'], impact: 'Makes technical learning visible while keeping client-sensitive work private.', recommendation: 'Publish only sanitized evidence, clear scope, and remediation-focused conclusions.' },
];

export const findings = { critical: 15, high: 18, medium: 77, low: 66, criticalHigh: 33, total: 176+ };

export const criticalFindings = [
  { title: 'SQL injection', text: 'Unsanitized input reaching database queries, allowing data extraction or modification. Fix: parameterized queries and least-privilege database accounts.' },
  { title: 'Authentication bypass', text: 'Login or session logic that could be skipped or forged to reach protected functionality. Fix: enforce authentication server-side on every request.' },
  { title: 'Unrestricted file upload', text: 'Upload features that accepted dangerous file types, which could lead to code execution on the server. Fix: strict type validation, safe storage outside the web root, and content scanning.' },
  { title: 'Exposed secrets and configuration', text: 'Credentials or sensitive configuration reachable from the client or exposed services. Fix: rotate secrets and move them to a vault.' },
];

export const highFindings = [
  { title: 'Insecure direct object reference (IDOR)', text: 'Object identifiers that could be changed to access other users’ records. Fix: server-side ownership checks on every object.' },
  { title: 'Broken access control', text: 'Privileged actions reachable by lower-privileged roles. Fix: centralized, deny-by-default authorization.' },
  { title: 'Business logic flaws', text: 'Workflow steps that could be skipped, repeated, or manipulated to gain unintended outcomes. Fix: server-side state validation and abuse monitoring.' },
  { title: 'Excessive data exposure', text: 'API responses returning more data than the client needs. Fix: response minimization and field-level filtering.' },
];

export const certifications = [
  { title: 'PT1', issuer: 'TryHackMe', type: 'Certification', note: '' },
  { title: 'Practical Ethical Hacking', issuer: 'TCM Security', type: 'Training', note: '' },
  { title: 'CRTA', issuer: 'CyberWarFare Labs', type: 'Certification', note: '' },
  { title: 'Junior Penetration Tester', issuer: 'TryHackMe', type: 'Training', note: '' },
];

export const awards = [
  { title: 'Rising Star Award', detail: 'Ebryx · Q1 2026', icon: 'star' },
  { title: 'Academic Excellence Award', detail: 'WAPDA · PKR 15,000', icon: 'award' },
];

export const articles = [
  { title: 'WP2Shell (CVE-2026–63030): The WordPress Core Bug That Let Anyone Become Admin', category: 'Vulnerability research', link: 'https://medium.com/@asadullah547335/wp2shell-cve-2026-63030-the-wordpress-core-bug-that-let-anyone-become-admin-174cba0fc256', note: 'Technical write-up surfaced from the public Medium profile.' },
  { title: 'CVE-2026–42945: Understanding NGINX Rift', category: 'Vulnerability research', link: 'https://medium.com/@asadullah547335/cve-2026-42945-understanding-nginx-rift-dbb3f921ea3a', note: 'Technical write-up surfaced from the public Medium profile.' },
  { title: 'Critical Remote Code Execution in n8n (CVE-2025–68613)', category: 'Vulnerability research', link: 'https://medium.com/@asadullah547335', note: 'Technical write-up on a critical expression-injection RCE in n8n, from the public Medium profile.' },
];
