'use client'

export const TrustSection = () => {
  return (
    <section className="relative px-6 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Heading and description */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Your club&apos;s data is secure.
            </h2>
            <p className="mt-6 text-lg text-foreground-light leading-relaxed">
              We take data privacy seriously. Clubedge is built with security best practices from day one — encrypted data storage, secure authentication, and clear data ownership policies.
            </p>
          </div>

          {/* Right: Trust features grid */}
          <div className="space-y-6">
            {[
              {
                title: 'Encrypted Storage',
                description: 'All member data and files are encrypted at rest.'
              },
              {
                title: 'Secure Authentication',
                description: 'Industry-standard passwords, session management, and optional 2FA.'
              },
              {
                title: 'Your Data Ownership',
                description: 'You own your data. Export or delete anytime, no vendor lock-in.'
              },
              {
                title: 'Regular Backups',
                description: 'Automatic daily backups to prevent data loss.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-brand/10 text-brand">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-1 text-sm text-foreground-light">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Future commitment */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-sm text-foreground-light max-w-2xl">
            As we grow, we&apos;ll pursue industry security certifications. For now, we focus on building a secure, trustworthy platform for your club from the ground up.
          </p>
        </div>
      </div>
    </section>
  )
}
