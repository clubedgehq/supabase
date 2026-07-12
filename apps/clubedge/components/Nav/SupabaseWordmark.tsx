import { useId } from 'react'

const SupabaseWordmark = ({ className }: { className?: string }) => {
  const id = useId()
  const grad0 = `${id}-paint0`
  const grad1 = `${id}-paint1`

  return (
    <svg
      viewBox="0 0 420 113"
      fill="none"
      width={150}
      height={24}
      className={className}
      aria-label="Clubedge Logo"
      role="img"
    >
      <path
        d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
        fill={`url(#${grad0})`}
      />
      <path
        d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
        fill={`url(#${grad1})`}
        fillOpacity="0.2"
      />
      <path
        d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
        fill="#2F8FFF"
      />
      <text
        x="140"
        y="72"
        fill="currentColor"
        fontFamily="var(--font-heading, ui-sans-serif, system-ui, sans-serif)"
        fontSize="64"
        fontWeight={700}
        letterSpacing="-2"
      >
        Clubedge
      </text>
      <defs>
        <linearGradient
          id={grad0}
          x1="53.9738"
          y1="54.974"
          x2="94.1635"
          y2="71.8295"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E63C7" />
          <stop offset="1" stopColor="#2F8FFF" />
        </linearGradient>
        <linearGradient
          id={grad1}
          x1="36.1558"
          y1="30.578"
          x2="54.4844"
          y2="65.0806"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SupabaseWordmark
