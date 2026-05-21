import HeroSection from '@/components/home/hero-section'
import RulesPreview from '@/components/home/rules-preview'
import EquipmentTypes from '@/components/home/equipment-types'
import HistoryPreview from '@/components/home/history-preview'
import TechniquesPreview from '@/components/home/techniques-preview'
import UniqueFacts from '@/components/home/unique-facts'
import BlogPreview from '@/components/home/blog-preview'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RulesPreview />
      <EquipmentTypes />
      <HistoryPreview />
      <TechniquesPreview />
      <UniqueFacts />
      <BlogPreview />
    </>
  )
}
