import { Hero } from "@/components/hero"
import { FeaturesGrid } from "@/components/features-grid"
import { Stats } from "@/components/stats"
import { CTA } from "@/components/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <Stats />
      <CTA />
    </>
  )
}
