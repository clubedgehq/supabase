export function Logo({ className = "size-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="var(--color-brand)" />
      <path
        d="M16 6l7 5v10l-7 5-7-5V11l7-5z"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="16" cy="16" r="3" fill="white" />
    </svg>
  )
}
