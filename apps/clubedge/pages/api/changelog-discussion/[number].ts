import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Changelog feature requires GitHub environment variables
  if (!process.env.GITHUB_CHANGELOG_APP_ID || !process.env.GITHUB_CHANGELOG_APP_INSTALLATION_ID || !process.env.GITHUB_CHANGELOG_APP_PRIVATE_KEY) {
    return res.status(503).json({ error: 'Changelog feature is not configured' })
  }

  // Dynamically import octokit only if env vars are present
  const {
    CHANGELOG_CATEGORY_ID,
    createChangelogOctokit,
    fetchChangelogDiscussionByNumber,
  } = await import('~/lib/changelog-github')
  const { discussionDisplayDate } = await import('~/lib/changelog.utils')
  const { mdxSerialize } = await import('~/lib/mdx/mdxSerialize')

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const raw = req.query.number
  const numStr = Array.isArray(raw) ? raw[0] : raw
  const number = Number(numStr)
  if (!Number.isFinite(number)) {
    return res.status(400).json({ error: 'Invalid discussion number' })
  }

  try {
    const octokit = await createChangelogOctokit()
    const discussion = await fetchChangelogDiscussionByNumber(
      octokit,
      'supabase',
      'supabase',
      number
    )

    if (!discussion || discussion.category?.id !== CHANGELOG_CATEGORY_ID) {
      return res.status(404).json({ error: 'Not found' })
    }

    const source = await mdxSerialize(discussion.body)
    const created_at = discussionDisplayDate({
      title: discussion.title,
      createdAt: discussion.createdAt,
    })
    res.setHeader('Cache-Control', 'public, max-age=900, stale-while-revalidate=900')
    return res.status(200).json({
      title: discussion.title,
      url: discussion.url,
      created_at,
      source,
    })
  } catch (e) {
    console.error(e)
    return res.status(500).json({ error: 'Failed to load discussion' })
  }
}
