import { FrameworksSection } from './\(home\)/_components/FrameworksSection'
import { HomeContent } from './\(home\)/_components/HomeContent'

export default function HomePage() {
  return <HomeContent frameworksSlot={<FrameworksSection />} />
}
