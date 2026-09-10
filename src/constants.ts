import { 
  Server, 
  Network, 
  Shield, 
  Cloud, 
  Smartphone, 
  Key, 
  Users, 
  Database, 
  Mail, 
  Globe,
  Briefcase,
  Lock
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Milan Parmar",
  fullName: "Milankumar Parmar",
  title: "IT Infrastructure and Systems Engineer",
  phone: "(226) 349-2570",
  email: "parmar.milan13@gmail.com",
  secondaryEmail: "milan@mparmar.ca",
  linkedin: "https://www.linkedin.com/in/milankumar134",
  website: "https://mparmar.ca",
  address: "Cloverdale, BC. V3S 8X9",
  summary: "Experienced Systems Administrator/Engineer with 11 years of experience architecting, securing, and operating enterprise IT and cloud environments across MSPs, healthcare, and regulated industries. Extensive expertise managing M365 ecosystems including Teams, Exchange Online, SharePoint, Entra ID, Intune, Copilot Studio & Agent Builder, Defender, with a strong focus on hybrid identity and security architecture. Proven experience leading M&A migrations, infra modernization, and cloud transformation initiatives. Specialized in firewalls and VPN technologies including IPSec site-to-site and client VPN (SonicWall, Meraki, Palo Alto, FortiGate), Layer 3 switching, VoIP systems, and wireless infrastructure. Skilled designing and managing Azure environments, virtualization platforms including Azure, Citrix, VMware, and Hyper-V, and building secure, scalable and resilient infrastructure aligned with business & operational needs."
};

export const SKILLS_DATA = [
  {
    category: "Windows Server",
    icon: Server,
    description: "Windows server upgrades from 2012 to 2019/2022, including migrating and configuring roles such as Active Directory, PS Scripting, File Server (SMB), DNS, DHCP, Terminal (RDS), DFS, group policies (GPO) and Azure AD Connect."
  },
  {
    category: "M&A Projects",
    icon: Briefcase,
    description: "Served as a subject matter expert for migration and acquisition projects, facilitating and executing Azure, Microsoft 365 integration and domain migration for multiple clients while collaborating with managers and architects."
  },
  {
    category: "Virtualization",
    icon: Database,
    description: "Created and managed Hyper-V with failover cluster nodes, VMs, SET. Configured and managed VMware ESXi hosts (over 15 hosts and 650 VMs) and VCSA with clustering. VMware migration from vSphere 5.5 to 6.7 and then to 7."
  },
  {
    category: "Firewall & Security",
    icon: Shield,
    description: "Setup new and upgraded firewalls (Paloalto, FortiGate, SonicWall). Created firewall policies, NAT/PAT policies, LACP, BGP, SD-WAN, DHCP, LDAP/SAML SSO, security profiles, VPN tunnels (L2TP, IPSec, SSLVPN). Implemented cloud security policies for MFA, Passwordless keys, and geo-blocking."
  },
  {
    category: "Networking",
    icon: Network,
    description: "Configured managed switches, SNMP, VLANs, tags, port mirroring and trunk/access ports. Worked with various vendors such as Aruba, UniFi, Cisco, configured WiFi channels for APs to avoid conflicts, speed & performance issues."
  },
  {
    category: "Cloud (Azure/M365)",
    icon: Cloud,
    description: "Fluent with Azure storage, VMs, RBAC, ExpressRoute, Sentinel, Application integration (API), Microsoft Graph, vNet, Privileged Identity Management (PIM), B2B cross-tenant sync and collaboration, M365 Copilot Studio & Agent Builder."
  },
  {
    category: "Cloud Security",
    icon: Lock,
    description: "Implemented cloud security policies for MFA enforcement and Passwordless security key, configured geo-blocked policies and travel policies."
  },
  {
    category: "MDM / Intune",
    icon: Smartphone,
    description: "ABM, SCCM, Defender, EDR/XDR and managed policies. Handled Intune project of over 1000 devices, configured Configuration & Compliance policies."
  },
  {
    category: "SSO & Auth",
    icon: Key,
    description: "Setup SAML authentication from Entra IdP to authenticate FortiGate VPN users. Implemented robust Single Sign-On and hybrid identity solutions."
  },
  {
    category: "Teams Migration",
    icon: Users,
    description: "Microsoft Teams Migration for over 300 users from RingCentral, and 3CX, including setting up auto-attendant, service accounts and call queues."
  },
  {
    category: "SharePoint Migration",
    icon: Globe,
    description: "SharePoint migration from Dropbox and on-prem file servers, managed highly complex SharePoint environment with complex user permissions for each site for over 800 sites, automated tasks through Entra queries."
  },
  {
    category: "Email Defense & Migration",
    icon: Mail,
    description: "Setup and configured email defense such as Proofpoint, Barracuda. Handled projects solely for email migration from IMAP (cPanel), Gmail (Google Workspace), and Cutover Migration from on-prem Exchange Server."
  }
];

export const EXPERIENCE_DATA = [
  {
    company: "F12.Net, BC",
    role: "Project Services Specialist (MSP)",
    period: "Dec 2024 - Present",
    highlights: [
      "Led a team of 8 technicians during a 3-credit union merger, including architecture, design, and execution of IT infrastructure and M365 consolidation while supporting project planning and charter alignment.",
      "Managed, configured, and assessed Azure environments including compute, storage, Azure Files, and network components (VNets, Subnets, VPNs), supporting structured cloud migrations and performance optimization.",
      "Led enterprise Microsoft 365 initiatives including Intune implementation (400+ devices, 300+ users), advanced security configurations, Teams deployments, and complex SharePoint Online migrations.",
      "Automated provisioning, configuration, and reporting processes using PowerShell and Azure CLI to improve efficiency and operational consistency.",
      "Served as primary technical lead and escalation point for Azure, Microsoft 365, networking, and security incidents, becoming a recognized Microsoft 365 subject matter expert across the BC region.",
      "Enhanced enterprise security posture through implementation of identity protection controls, conditional access policies, multi-factor authentication enforcement, managed detection and response integration, and advanced endpoint protection strategies."
    ]
  },
  {
    company: "Yukon Hospitals Corporation, YK",
    role: "IT Infrastructure Engineer / Sr Network Analyst (Contract & remote)",
    period: "Jul 2024 - Nov 2024",
    highlights: [
      "Delivered Tier 3/4 configuration and support for Yukon Hospitals' Cisco ecosystem across three locations including VoIP, CUCM, CMX, UCS, VMware, and Microsoft 365.",
      "Spearheaded the storage migration project from legacy EMC Isilon systems, ensuring seamless data transition.",
      "Directed multiple Microsoft 365 migration projects, facilitating the transition of on-premises systems to Azure cloud, configuring Virtual Machines, Storage, vNet, and ExpressRoute for optimal performance, using Azure Migrate for system assessments and workload transitions.",
      "Deployed Intune configuration and security for 1,000+ devices, including policy enforcement, GPO integration, and enterprise application deployment to ensure secure, compliant, and streamlined device management.",
      "Managed and optimized a virtual infrastructure of over 600 VMs on VMware, spanning 15+ hosts, ensuring high availability and performance."
    ]
  },
  {
    company: "Cloud9 Solutions, Langley, BC",
    role: "L2/L3 IT Systems Administrator (Systems Engineer) (MSP)",
    period: "Oct 2023 - Jun 2024",
    highlights: [
      "Provided support to escalated L2/L3 tickets, focusing on IT infrastructure and operations, managing both on-premises and cloud-based infrastructure, with a particular emphasis on Azure and data center environments, including VMware ESXi and vCenter for migration planning.",
      "Planned and designed IT infrastructures for clients, including firewall, switches, and servers, VPNs and subnets to ensure secure connectivity during migrations.",
      "Extensive support for M365 products such as Teams Admin Center, Exchange Online, M365 Admin Center, SharePoint, Defender, Endpoint manager and Entra, integrating with Azure AD Connect and automating tasks with PowerShell for efficiency.",
      "Upgraded and provided support with setup and security policies for various firewall brands such as Palo Alto Networks, FortiGate, Cisco Meraki, and SonicWall, enhancing Application Gateway integration for secure web traffic management.",
      "Monitored, managed, and maintained Windows servers, VMWare, and Hyper-V, preparing systems for Azure cloud transitions, diagnosing and resolving infrastructure issues to ensure minimal downtime during migration phases, documenting configurations for process improvement."
    ]
  },
  {
    company: "Third Octet, Vaughan, ON",
    role: "System Administrator (remote)",
    period: "May 2022 - Aug 2023",
    highlights: [
      "Manage and maintain Firewall appliances such as Cisco Meraki and SonicWall.",
      "Plan and design network infrastructures for clients, supported Google workspace.",
      "Managed Cisco Switches, Cisco Unified Communications Manager, VoIP and ISE.",
      "Coordinating, implementing, and communicating any system changes that are to be made such as pushing an image to production server and Application update.",
      "Monitor, manage and maintain Windows servers, VMWare and HyperV.",
      "Manage and maintain Office 365, Microsoft 365, Azure AD and on-prem ADDS.",
      "Cloud migration from on-prem servers and Exchange Servers such as Office 365.",
      "Automate tasks using PowerShell scripts, batch files and RMM tools."
    ]
  },
  {
    company: "Infinus Technology, Abbotsford, BC",
    role: "Sr System Administrator (MSP)",
    period: "Dec 2021 - Apr 2023",
    highlights: [
      "Provided Tier 2/3 IT support and handled various IT Infrastructure projects.",
      "Create and maintain Firewall policies/rules and remote desktops (RDP).",
      "Implemented SSO using ADFS and Azure, streamlining access management, set up MFA and geo-blocking, enhancing security and reduced unauthorized access by 50%.",
      "Manage and maintain Office 365, Microsoft 365, and Azure AD and on-prem ADDS.",
      "Creating and maintaining group policies, shared drives, and domain services.",
      "Manage and troubleshoot print servers, SharePoint, and shared printers.",
      "Setup SharePoint online with permissions, created and modify subsites, and pages.",
      "Email server's setup and troubleshooting including Exchange Online, on-prem Exchange server and cPanel."
    ]
  },
  {
    company: "CareIT Computer Services, West Vancouver, BC",
    role: "IT Specialist",
    period: "Jun 2017 - Nov 2021",
    highlights: [
      "Configured and managed virtualization software such as VMware, and HyperV.",
      "Worked on exchange tasks, desktop deployments, imaging, and account creations.",
      "Windows Server Administration of DHCP, AD, DNS, SMTP, Print, IIS, RDS, Domain Controller, Group Policies, VOIP, TCP/IP, SMB and VPN.",
      "Deliver technical support for Windows 10/8.1/7 Server 2019/2016/2012/2008.",
      "Configured monitoring and Administration of firewalls (Sophos, Fortinet, SonicWall), including firmware upgrades, content blocking, port forwarding.",
      "MFA implementation, O365 account setup, creating policies and troubleshot.",
      "Setup Azure AD and configured the on prem domain sync with Azure ad sync.",
      "M365, SharePoint and Citrix end user support including master image.",
      "Setup SharePoint online with permissions, created and modify subsites, and pages."
    ]
  }
];

export const EDUCATION_DATA = [
  {
    school: "Lambton College of Applied Arts and Technology",
    location: "Sarnia, ON",
    degree: "Information Technology Professional, Post Graduate",
    subtitle: "ICTC National IT Post Graduate Certificate",
    year: "May 2015"
  },
  {
    school: "Charotar University of Science and Technology",
    location: "GU, India",
    degree: "Electronic & Communication Engineering",
    subtitle: "Bachelor of Technology",
    year: "May 2013"
  }
];

export const CERTIFICATIONS_DATA = [
  "Microsoft 365 Certified: Administrator Expert",
  "Microsoft 365 Certified: Teams Administrator",
  "Microsoft 365 Certified: Copilot and Agent Administration",
  "Microsoft Certified: Azure Administrator",
  "Certified Server Virtualization with Windows Server Hyper-V & System Center (SCCM)",
  "Fortinet Certified: Associate in Cybersecurity",
  "CompTIA Certified: CompTIA Project+",
  "Microsoft Certified: Windows Server Administrator"
];