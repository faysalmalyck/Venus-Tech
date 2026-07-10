import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Counter from '@/components/Home/Counter'
import Progresswork from '@/components/Home/WorkProgress';
import Services from '@/components/Home/Services';
import Portfolio from '@/components/SharedComponent/portfollio'
import Contactform from '@/components/Home/Contact';
import VertexEdgePage from '@/components/edge/vertexedge';
export const metadata: Metadata = {
  title: {
    absolute: "Vertex | Digital Solutions Agency",
  },
  description:
    "Vertex builds premium websites, SaaS platforms, AI integrations, and scalable digital products for ambitious brands.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter isColorMode={false} />
      <Progresswork isColorMode={false} />

      <Services />
      <Portfolio />
      <Contactform />
    </main>
  )
}
