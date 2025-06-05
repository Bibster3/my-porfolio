import React, { lazy, Suspense, useState, useEffect, useRef } from 'react'
import AboutMe from './AboutMe.tsx'
import Footer from './ui/Footer.tsx'
import Spotlight from './ui/Spotlight.tsx'
import NavLinks from './ui/NavLinks.jsx'
import AnimatedLogo from './ui/AnimatedLogo.jsx'
import Divider from './ui/Divider.tsx'
import { IconClipboardCopy } from '@tabler/icons-react'

const Portfolio = lazy(() => import('./Portfolio'))
const Contact = lazy(() => import('./Contact'))

const items = [
  {
    title: 'CalorieMate',
    description: 'A React-based SPA to track daily calorie intake.',
    header: <h3>Project</h3>,
    icon: <IconClipboardCopy />,
  },
]

const Page = () => {
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)

  // Portfolio observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowPortfolio(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px', threshold: 0.1 }
    )
    if (portfolioRef.current) observer.observe(portfolioRef.current)
    return () => observer.disconnect()
  }, [])

  // Contact observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContact(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px', threshold: 0.1 }
    )
    if (contactRef.current) observer.observe(contactRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <main>
        {/* <Spotlight /> */}

        <div className="relative z-50">
          <NavLinks />
        </div>

        <div className="hidden sm:flex relative justify-center items-center mt-10 sm:mt-16">
          <AnimatedLogo />
        </div>

        {/* About Section */}
        <section id="about">
          <div>
          <AboutMe/>
          </div>
        </section>
        <Divider />

        {/* Portfolio Section */}
        <section id="portfolio" ref={portfolioRef}>
          <Suspense
            fallback={
              <div className="min-h-[500px] text-center py-12">
                Loading portfolio...
              </div>
            }
          >
            {showPortfolio ? (
              <>
                <Portfolio items={items} />
                <Divider />
              </>
            ) : (
              <div style={{ height: '500px' }} aria-hidden="true" />
            )}
          </Suspense>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef}>
          <Suspense
            fallback={
              <div className="min-h-[400px] text-center py-12">
                Loading contact...
              </div>
            }
          >
            {showContact ? (
              <Contact />
            ) : (
              <div style={{ height: '400px' }} aria-hidden="true" />
            )}
          </Suspense>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Page
