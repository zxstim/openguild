'use client'

import Link from 'next/link'
import { useState } from 'react'

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900 dark:text-gray-100">{question}</span>
        <svg
          className={`h-5 w-5 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <div className="pb-4 text-gray-600 dark:text-gray-300">{answer}</div>}
    </div>
  )
}

export default function PolkadotBuildersPage() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero section */}
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Polkadot Builders Resources</h1>
        <p className="text-lg">Aggregated by OpenGuild ♥️</p>
        <p>Start building on Polkadot Hub - powerful smart contract layers for consumer dApps.</p>
        <div className="flex flex-row items-center justify-center gap-4">
          <Link
            className="rounded-md bg-purple-500 px-4 py-2 text-white"
            href="/polkadot-builders/explore-ideas"
          >
            Explore ideas
          </Link>
          <Link
            className="rounded-md border border-gray-300 px-4 py-2"
            href="/polkadot-builders/hackathon-resources"
          >
            Hackathon resources
          </Link>
        </div>
      </div>
      {/* Explore resources section */}
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-md border border-gray-300 p-4">
          <h2 className="text-2xl font-bold">Get Grants to support growth your ideas!</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-rows-2">
          <div className="rounded-md border border-gray-300 p-4">
            <h2 className="text-xl font-bold">Past hackathon winners</h2>
            <p>Get grants to support growth your ideas!</p>
          </div>
          <div className="rounded-md border border-gray-300 p-4">
            <h2 className="text-xl font-bold">Join communities to get resources</h2>
            <p>Get grants to support growth your ideas!</p>
          </div>
        </div>
      </div>
      {/* FAQ section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <FAQItem
            question="What is Polkadot Hub?"
            answer="Polkadot Hub is a powerful smart contract layer for consumer dApps, providing developers with the tools and infrastructure needed to build decentralized applications on the Polkadot ecosystem."
          />
          <FAQItem
            question="How can I get started with Polkadot development?"
            answer="You can start by exploring our resources, joining the community, and participating in hackathons. We also provide grants and support for promising projects."
          />
          <FAQItem
            question="What kind of support does OpenGuild provide?"
            answer="OpenGuild provides technical resources, community support, grants, and networking opportunities to help builders succeed in the Polkadot ecosystem."
          />
          <FAQItem
            question="How can I apply for grants?"
            answer="You can apply for grants by submitting your project proposal through our platform. Make sure to include a detailed plan, technical specifications, and your team's background."
          />
        </div>
      </div>
    </div>
  )
}
