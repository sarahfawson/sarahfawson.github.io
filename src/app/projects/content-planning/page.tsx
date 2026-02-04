'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ContentPlanningPage() {
  return (
    <main className="container">
      <div className="project-detail">
        <Link href="/projects" className="nav-link mb-8 text-[var(--accent-turquoise-dark)]" data-text="← Back to Projects">← Back to Projects</Link>
        
        <div className="project-header">
          <h1>Content Planning Tools</h1>
          {/* <p className="project-subtitle">Explore a few designs for content generation, scheduling, and planning with internal tools.</p> */}
        </div>

        <div className="project-content">
        
        {/* ═══════════════════════════════════════════════════════════════════
            PROJECT 1: EMAIL PLATFORM
        ═══════════════════════════════════════════════════════════════════ */}
        
        <section className="project-section">
          <h2>Unifying the NYT Messaging Ecosystem</h2>
            <p className="project-year">2025</p>
            <p style={{ color: 'gray' }}> Some elements of the design examples shown have been modified in this case study for privacy.</p>
                        
            <p>Redesigning the New York Times email ecosystem meant combining two team's workflows into one platform, and replacing a fragmented, legacy tech stack with a unified experience on top of shared infrastructure. We needed to bridge the gap between editorial's desire for speed and marketing's need for observability into the performance of their objectives. We built a smart, scalable foundation for the entire NYT messaging pipeline.</p>
            <p>Our legacy systems were previously siloed and unscalable. Editorial and Marketing operated in different worlds, using jargon-y, non-functioning controls that made it impossible to see a global view of our messaging operations and performance.</p>

            <section className="project-subsection">
              <div className="call-out-with-image">
                <div className="call-out">
                  <h3>The Vision</h3>
                  <ul>
                    <li><strong>Designed for scale:</strong> 
                    A flexible capability-based development approach to support comprehensive tech decision making and reusability.</li>
                    <li><strong>One messaging ecosystem to serve vastly different needs</strong> 
                    Supporting the rapid-fire pace of our newsroom alongside the data-heavy needs of marketing and transactional business emails.</li>
                    <li><strong>Observability at a glance:</strong> 
                    Unification of workflows and data allowed us to engineer centralized observability and reporting for the entire organization.</li>
                  </ul>
                </div>
                <div className="call-out-image">
                  <Image
                    src="/images/portfolio/professional/nyt/email-vision-flow.png"
                    alt="Email vision flow diagram"
                    width={100}
                    height={75}
                  />
                </div>
              </div>
            </section>

        <section className="project-subsection">
          <h3>A Shared Vocabulary</h3>
            <p>How we aligned the workflows from two distinct teams and platforms under one Information Architecture in the new Email Platform</p>
            
            <p>Through landscape research and word-association workshops, we identified the friction points between how Editorial and Marketing defined "Campaigns" versus "Journeys." We effectively set the boundaries of where we recommended mental models (and tooling) to remain similar to the current state, and where they could start to overlap as we brought two functions into one platform. This looked like:</p>
            <ul>
              <li><strong>Intuitive IA:</strong> Standardized terminology that speaks the language of industry veterans while being customized for the Times' unique scale.</li>
              <li><strong>Seamless navigation:</strong> A site architecture that allows users to navigate intuitively between planning, execution, and administrative tasks to unblock their workflows.</li>
            </ul>
            {/* Visual placeholder: IA diagrams, word-association workshop artifacts */}
        </section>

        <section className="project-subsection">
          <h3>One Ecosystem, Two Workflows</h3>
          <p>We bridged the gap between editorial's need for speed, marketing's need for journeys, and both teams' needs for advanced capabilities like personalization and experimentation. The new email platform provides a unified interface where disparate teams will be able to manage their email creation, management, and send pipelines with minimal context switching.</p>
          <Image
            src="/images/portfolio/professional/nyt/email-differences.png"
            alt="Email platform differences diagram"
            width={600}
            height={400}
            className="project-detail-image"
            style={{ width: '80%', height: 'auto', padding: '12px', boxShadow: 'none' }}
          />
        </section>

          <section className="project-subsection">
          <h3>Designing for the Future</h3>
            <p>The transition from two separate platforms to a single hub required a total reimagining of how content flows through various teams in the newsroom and business functions. Success depended on Design being an effective translator between technical constraints and user intent.</p>
            <ul>
              <li>
                <strong>Capability Mapping:</strong> We mapped the entire message lifecycle—from draft to when it hits the inbox—to identify where Editorial and Marketing steps overlapped and differed. This allowed us to build core capabilities that serve everyone, with customized capabilities for specific team needs.
                <Image
                  src="/images/portfolio/professional/nyt/marketingWorkflowHighLevel.png"
                  alt="Marketing workflow high level diagram"
                  width={600}
                  height={400}
                  className="project-detail-image"
                  style={{ width: '100%', height: 'auto', margin: '8px' }}
                />
              </li>
              <li>
                <strong>IA and Navigation:</strong> Before designing any features in high-fidelity, myself and my design colleague involved in envisioning tested and validated various Information Architecture concepts through sketches, wireframes, and an A/B test workshop to organically understand which concept was most intuitive to our users.
                {/* Visual placeholder: IA sketches, wireframes */}
              </li>
              <li>
                <strong>Design Envisioning:</strong> Prototyping the future of how all the capabilities can work together to provide a best in class experience in both V1 and final stages.
                  <Image
                    src="/images/portfolio/professional/nyt/messagehub-email-dynamic-content.png"
                    alt="MessageHub email dynamic content prototype"
                    width={600}
                    height={400}
                    className="project-detail-image"
                    style={{ width: '100%', height: 'auto', margin: '8px' }}
                  />
                  <Image
                    src="/images/portfolio/professional/nyt/html-dynamic-content.png"
                    alt="HTML dynamic content prototype"
                    width={600}
                    height={400}
                    className="project-detail-image"
                    style={{ width: '75%', height: 'auto', margin: '8px' }}
                  />
              </li>
              <li>
                <strong>Shipping the MVP:</strong> The recent launch of the MVP unified email platform marked a successful migration of culture and technology. We reduced the technical debt of maintaining dual systems while providing a superior, modern workspace for our internal teams at the Times.
              </li>
            </ul>
          </section>
        </section>

        <hr className="section-divider" />

        {/* ═══════════════════════════════════════════════════════════════════
            PROJECT 2: CALENDAR ENVISIONING
        ═══════════════════════════════════════════════════════════════════ */}

        <section className="project-section">
            <h2>Calendar Envisioning</h2>
            <p>A planning app for newsletter and push alert content generation, scheduling, and recommendations.</p>
            

            {/* PROTOTYPING WITH GENERATIVE TOOLS
            <div className="case-study-section">
              <h3>Generative Design Experiment</h3>
              <p>Since you mentioned Cursor, Figma Make, and Vercel - 
                 this could be a unique angle for your case study.</p>
              <h4>Process</h4>
              <p>How did you use these tools differently than traditional design workflows?</p>
              <h4>What Worked</h4>
              <ul>
                <li>Speed of iteration</li>
                <li>Ability to test real interactions</li>
              </ul>
              <h4>Challenges</h4>
              <ul>
                <li>Limitations you encountered</li>
                <li>When you needed to step back to traditional tools</li>
              </ul>
            </div>
            */}

            {/* KEY FEATURES
            <div className="case-study-section">
              <h3>Key Features</h3>
              <div className="feature">
                <h4>Feature 1: [Name]</h4>
                <p>Description and rationale.</p>
              </div>
              <div className="feature">
                <h4>Feature 2: [Name]</h4>
                <p>Description and rationale.</p>
              </div>
            </div>
            */}

            {/* USER TESTING & FEEDBACK
            <div className="case-study-section">
              <h3>Testing & Feedback</h3>
              <p>How did you validate the designs?</p>
              <h4>Methods</h4>
              <ul>
                <li>User testing sessions</li>
                <li>Design demos</li>
                <li>Stakeholder reviews</li>
              </ul>
              <h4>Key Themes</h4>
              <ul>
                <li>Theme 1</li>
                <li>Theme 2</li>
              </ul>
            </div>
            */}

            {/* NEXT STEPS / FUTURE VISION
            <div className="case-study-section">
              <h3>What's Next</h3>
              <p>Where is this project heading? What would you explore with more time?</p>
            </div>
            */}
            <div className="project-image-container">
              <Image
                src="/images/portfolio/professional/nyt/lofi-mock-calendar.png"
                alt="Calendar lofi Prototype"
                width={1000}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="project-image"
                style={{ width: '80%', height: 'auto', padding: '12px' }}
              />
            </div>
            <p>
              This project began when I redesigned a calendar tool used for content planning, and evolved into an experiment of new generative design and development tools including Cursor, Figma Make, and V0. 
            </p>
            <div className="project-image-container">
              <Image
                src="/images/portfolio/professional/nyt/calendar-design-prototype-week.png"
                alt="Calendar Prototype"
                width={1000}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="project-image"
                style={{ width: '100%', height: 'auto', padding: '12px' }}
              />
            </div>
              <div className="project-image-container">
              <Image
                src="/images/portfolio/professional/nyt/calendar-design-prototype-month.png"
                alt="Calendar Prototype"
                width={1000}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="project-image"
                style={{ width: '100%', height: 'auto', padding: '12px' }}
              />
            </div>
          </section>

          {/* <section className="project-section">
            <h4>Generative Design & Prototyping </h4>
            <p>
              User testing and design demos to gather feedback, test concepts, and solicit new ideas.
              </p>
              <p>
              Stay tuned for more information to come.
            </p>
          </section> */}

        </div>
      </div>
    </main>
  );
}
