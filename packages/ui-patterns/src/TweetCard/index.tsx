import Image from 'next/image'
import { cn } from 'ui/src/lib/utils'

interface TweetCard {
  handle: string
  quote: string | React.ReactNode
  img_url: string
  className?: string
}

export function TweetCard(props: TweetCard) {
  return (
    <div
      className={cn(
        'bg-surface-75',
        'border group-hover/tweet-card:border-foreground-muted transition-colors',
        'rounded-2xl p-6',
        'drop-shadow-xs',
        props.className
      )}
    >
      <div className="relative">
        <div className="flex items-center gap-2">
          {props.img_url ? (
            <div className="h-10 w-10 overflow-hidden rounded-full border border-control">
              <Image
                src={props.img_url}
                width="64"
                height="64"
                alt={`${props.handle} twitter image`}
              />
            </div>
          ) : (
            <div className="w-6" />
          )}
          <p className="text-foreground text-sm font-medium">{props.handle}</p>
          <div className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-foreground-muted/30">
            <svg className="h-[10px] w-[10px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" style={{ color: 'white' }}>
              <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.032.303-.404.79-.675 1.46-.813l-.256-1.49c-.89.144-1.61.5-2.16 1.07-.55.57-.9 1.295-1.04 2.176l-1.24-.28.256 1.43 1.21.27c-.03.38-.037.763-.022 1.15.017.39.067.77.15 1.14.178.82.53 1.458 1.056 1.916.526.457 1.224.686 2.096.686.54 0 1.04-.09 1.5-.27.46-.18.84-.43 1.14-.75l-.97-1.05c-.2.21-.44.37-.72.48-.28.11-.57.165-.87.165-.46 0-.836-.12-1.127-.364-.29-.24-.49-.593-.597-1.06zm7.616 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.032.303-.404.79-.675 1.46-.813l-.256-1.49c-.89.144-1.61.5-2.16 1.07-.55.57-.9 1.295-1.04 2.176l-1.24-.28.256 1.43 1.21.27c-.03.38-.037.763-.022 1.15.017.39.067.77.15 1.14.178.82.53 1.458 1.056 1.916.526.457 1.224.686 2.096.686.54 0 1.04-.09 1.5-.27.46-.18.84-.43 1.14-.75l-.97-1.05c-.2.21-.44.37-.72.48-.28.11-.57.165-.87.165-.46 0-.836-.12-1.127-.364-.29-.24-.49-.593-.597-1.06z" />
            </svg>
          </div>
        </div>
      </div>

      <p className="text-foreground-lighter mt-3 text-base whitespace-pre-line">{props.quote}</p>
    </div>
  )
}
