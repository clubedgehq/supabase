const rewrites = [
  {
    source: '/:path*',
    destination: `/:path*`,
  },
  // External service rewrites are disabled until services are configured
  // Uncomment when environment variables are set:
  // - NEXT_PUBLIC_STUDIO_URL (for /dashboard)
  // - NEXT_PUBLIC_DOCS_URL (for /docs, /humans.txt, /lawyers.txt, /.well-known/security.txt)
  // - NEXT_PUBLIC_UI_LIBRARY_URL (for /ui)
  // - NEXT_PUBLIC_DESIGN_SYSTEM_URL (for /design-system)
  // - NEXT_PUBLIC_REFERENCE_DOCS_URL (for /new-docs)
  { source: '/feed.xml', destination: `/rss.xml` },
]

module.exports = rewrites
