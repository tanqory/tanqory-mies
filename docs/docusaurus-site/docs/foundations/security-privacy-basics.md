# Security & Privacy Basics

Protecting merchant data and customer trust is core to **Tanqory's mission**.  
Every design choice, component, and API call must follow these security and privacy standards.

## Core Principles

### 1. Privacy by Design
- Collect only the data required for a feature to work.  
- Default to the **least privilege**: minimal permissions and restricted scopes.  
- Make all privacy settings transparent and easy to control.

### 2. Security Everywhere
- Encrypt data in transit (TLS 1.2+) and at rest (AES-256 or stronger).  
- Enforce secure authentication and authorization for every request.  
- Use strong hashing (bcrypt/argon2) for passwords and secret keys.

### 3. Compliance Ready
- Follow global regulations: **GDPR, CCPA, PDPA, PCI DSS**, and other local privacy laws.  
- Maintain clear retention and deletion policies with audit trails.

## Development Guidelines

- **Secrets Management**  
  Store API keys and credentials in environment variables or a secrets manager. Never commit secrets to Git.

- **Input Validation & Output Encoding**  
  Prevent XSS, SQL injection, and CSRF with strict validation and automatic escaping.

- **Session & Token Handling**  
  Use secure, HttpOnly, and SameSite cookies.  
  Expire tokens promptly; rotate keys regularly.

- **Logging & Monitoring**  
  Log only necessary metadata, redact personal information, and monitor for suspicious activity.

- **Third-Party Integrations**  
  Vet vendors, review their privacy policies, and sign Data Processing Agreements (DPAs) when needed.

## Design Guidelines

- Provide clear consent dialogs for data sharing.  
- Let users view, export, and delete their data easily.  
- Avoid dark patterns; choices must be explicit and reversible.

## Team Practices

- Perform **threat modeling** and security reviews for all major features.  
- Run automated security scans (dependency checks, static analysis) in CI/CD.  
- Conduct annual penetration tests and fix vulnerabilities promptly.  
- Document incidents and share learnings internally.

## Quick Checklist

- [ ] All data encrypted at rest and in transit  
- [ ] Minimal data collection and storage  
- [ ] Strong authentication & role-based access control  
- [ ] Compliance with GDPR/CCPA/PDPA and other regional laws  
- [ ] Regular security audits and automated dependency updates

Building with these principles ensures Tanqory products remain **secure, privacy-first, and globally compliant**, reinforcing trust with every merchant and customer.