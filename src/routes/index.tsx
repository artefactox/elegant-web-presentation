import { createFileRoute } from '@tanstack/react-router'

import { Hero, SiteHeader } from '@/components/landing/hero'
import { Context, Model, Proposal } from '@/components/landing/sections-a'
import {
  Decision,
  Roadmap,
  SiteFooter,
  SuccessCase,
  Sustainability,
} from '@/components/landing/sections-b'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Proposal />
        <Context />
        <Model />
        <Roadmap />
        <Sustainability />
        <SuccessCase />
        <Decision />
      </main>
      <SiteFooter />
    </>
  )
}
