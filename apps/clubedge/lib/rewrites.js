const rewrites = [
  {
    source: '/:path*',
    destination: `/:path*`,
  },
  {
    source: '/dashboard',
    destination: `${process.env.NEXT_PUBLIC_STUDIO_URL}`,
  },
  {
    source: '/dashboard/:path*',
    destination: `${process.env.NEXT_PUBLIC_STUDIO_URL}/:path*`,
  },
  ...(process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? [
        { source: '/docs', destination: `${process.env.NEXT_PUBLIC_DOCS_URL}` },
        {
          source: '/docs/',
          destination: `${process.env.NEXT_PUBLIC_DOCS_URL}`,
        },
        { source: '/docs/:path*', destination: `${process.env.NEXT_PUBLIC_DOCS_URL}/:path*` },
      ]
    : []),
  {
    source: '/ui',
    destination: `${process.env.NEXT_PUBLIC_UI_LIBRARY_URL}`,
  },
  {
    source: '/ui/:path*',
    destination: `${process.env.NEXT_PUBLIC_UI_LIBRARY_URL}/:path*`,
  },
  {
    source: '/design-system',
    destination: `${process.env.NEXT_PUBLIC_DESIGN_SYSTEM_URL}`,
  },
  {
    source: '/design-system/:path*',
    destination: `${process.env.NEXT_PUBLIC_DESIGN_SYSTEM_URL}/:path*`,
  },

  {
    source: '/new-docs',
    destination: `${process.env.NEXT_PUBLIC_REFERENCE_DOCS_URL}`,
  },
  {
    // redirect /docs/
    // trailing slash caused by docusaurus issue with multizone
    source: '/new-docs/',
    destination: `${process.env.NEXT_PUBLIC_REFERENCE_DOCS_URL}`,
  },
  {
    source: '/new-docs/:path*',
    destination: `${process.env.NEXT_PUBLIC_REFERENCE_DOCS_URL}/:path*`,
  },
  // misc rewrites
  {
    source: '/humans.txt',
    destination: `${process.env.NEXT_PUBLIC_DOCS_URL}/humans.txt`,
  },
  {
    source: '/lawyers.txt',
    destination: `${process.env.NEXT_PUBLIC_DOCS_URL}/lawyers.txt`,
  },
  {
    source: '/.well-known/security.txt',
    destination: `${process.env.NEXT_PUBLIC_DOCS_URL}/.well-known/security.txt`,
  },
  { source: '/feed.xml', destination: `/rss.xml` },
]

// Some rewrite destinations are built from env vars (studio, docs, ui-library,
// design-system, reference-docs) that are only defined in the hosted
// deployment. When running locally those are `undefined`, producing invalid
// destinations like "undefined/:path*" that make Next.js throw
// "Invalid rewrites found". Filter out any rewrite whose destination isn't a
// valid path/URL so local dev works without those env vars.
const isValidDestination = (destination) =>
  typeof destination === 'string' &&
  !destination.includes('undefined') &&
  (destination.startsWith('/') ||
    destination.startsWith('http://') ||
    destination.startsWith('https://'))

module.exports = rewrites.filter((rewrite) => isValidDestination(rewrite.destination))
