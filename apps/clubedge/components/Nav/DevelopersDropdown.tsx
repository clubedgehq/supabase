import { data as DevelopersData } from 'data/Developers'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

type LinkProps = {
  text: string
  description?: string
  url?: string
  icon?: any
  svg?: any
}

export const DevelopersDropdown = () => {
  return (
    <div className="w-[550px] xl:w-[470px] py-8 px-8 bg-background grid gap-3 grid-cols-2">
      {DevelopersData['navigation'].map((column) => (
        <div key={column.label} className="p-0 flex flex-col gap-6">
          <label className="text-foreground-lighter text-xs uppercase tracking-widest font-mono">
            {column.label}
          </label>
          <ul className="flex flex-col gap-4">
            {column.links.map(({ icon: Icon, ...link }: LinkProps) => (
              <li key={link.text}>
                <Link
                  href={link.url!}
                  className="flex group items-center gap-2 text-foreground-light text-sm hover:text-foreground focus-visible:text-foreground focus-visible:ring-2 focus-visible:outline-hidden focus-visible:rounded-sm focus-visible:ring-foreground-lighter"
                >
                  {Icon && <Icon size={16} strokeWidth={1.3} />}
                  <span>{link.text}</span>
                  <ChevronRight
                    strokeWidth={2}
                    className="w-3 -ml-1 transition-all will-change-transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
