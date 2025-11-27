import React from 'react';
import Profile from '@/images/shedrack.jpg';

export default function ScrollLinkedAbout() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:gap-8 lg:gap-12">
          {/* Fixed Image on the left */}
          <div className="md:w-1/2 lg:w-2/5">
            <div className="md:sticky md:top-24 pb-8 md:pb-0">
              <img
                src={Profile.src}
                alt="Profile"
                className="w-full max-w-[350px] mx-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Scrollable content on the right */}
          <div className="md:w-1/2 lg:w-3/5 text-white space-y-8">
            <div>
              <p className="text-gray-300 leading-relaxed">
                I'm a software developer specializing in building modern,
                scalable web applications. Currently working as a freelancer, I
                help businesses and individuals transform their ideas into
                robust digital solutions through clean code and thoughtful
                architecture.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-red-500 mb-4">
                Technical Expertise
              </h2>
              <p className="text-gray-300 leading-relaxed">
                My development stack centers around modern JavaScript
                technologies, enabling me to deliver fast, responsive, and
                maintainable applications. On the frontend, I work extensively
                with React.js and Next.js, leveraging their powerful ecosystems
                to create seamless user experiences. I utilize Tailwind CSS and
                shadcn/ui to craft clean, accessible interfaces with efficiency
                and consistency. For backend development, I build scalable
                server-side solutions using Node.js, paired with Neon DB for
                reliable database management. I implement Drizzle ORM for
                type-safe database operations and integrate BetterAuth to ensure
                secure, modern authentication systems that protect user data and
                privacy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-red-500 mb-4">
                My Approach
              </h2>
              <p className="text-gray-300 leading-relaxed">
                I believe great software is built on clarity, quality, and
                collaboration. Every project begins with understanding the core
                problem and ensuring we're aligned on goals. I think
                systematically, breaking complex problems into manageable
                components and architecting solutions that are scalable and
                maintainable. I'm committed to industry best practices—writing
                tests, optimizing performance, and delivering applications that
                users enjoy interacting with.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-red-500 mb-4">
                What I Offer
              </h2>
              <p className="text-gray-300 leading-relaxed">
                As a freelance developer, I provide end-to-end web development
                services, from initial consultation and planning through design,
                development, deployment, and ongoing support. I work with
                startups looking to build their MVP, businesses seeking to
                modernize their web presence, and teams needing additional
                development capacity. My goal is simple: to be a reliable
                technical partner who delivers solutions that work, scale, and
                make a measurable impact on your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
