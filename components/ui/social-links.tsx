"use client"

import * as React from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaDribbble, FaXTwitter, FaGlobe, FaEnvelope, FaWhatsapp } from "react-icons/fa6"

type Platform = "linkedin" | "instagram" | "github" | "mail" | "facebook" | "x" | "dribbble" | "website" | "whatsapp"
export interface SocialLink { platform: Platform; href: string }
export interface SocialLinksProps { links: SocialLink[]; showOnMobile?: boolean; floatingButtonColor?: string }

const styles: Record<Platform, { label: string; icon: React.ComponentType<{ size?: number; className?: string }>; gradient: string }> = {
  linkedin: { label: "LinkedIn", icon: FaLinkedin, gradient: "from-blue-600 to-blue-400" },
  instagram: { label: "Instagram", icon: FaInstagram, gradient: "from-pink-600 via-purple-600 to-orange-500" },
  github: { label: "GitHub", icon: FaGithub, gradient: "from-zinc-800 to-zinc-600" },
  mail: { label: "Mail", icon: FaEnvelope, gradient: "from-cyan-600 to-blue-500" },
  facebook: { label: "Facebook", icon: FaFacebook, gradient: "from-blue-700 to-blue-500" },
  x: { label: "X", icon: FaXTwitter, gradient: "from-zinc-900 to-zinc-600" },
  dribbble: { label: "Dribbble", icon: FaDribbble, gradient: "from-pink-600 to-pink-400" },
  website: { label: "Website", icon: FaGlobe, gradient: "from-emerald-600 to-teal-500" },
  whatsapp: { label: "WhatsApp", icon: FaWhatsapp, gradient: "from-emerald-600 to-green-500" },
}

export function SocialLinks({ links, showOnMobile = true, floatingButtonColor = "bg-muted" }: SocialLinksProps) {
  const [showDock, setShowDock] = React.useState(false)
  React.useEffect(() => { const onScroll = () => setShowDock(window.scrollY > window.innerHeight * 0.65); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  const allowedPlatforms: Platform[] = ['instagram', 'mail', 'github', 'linkedin']
  const uniqueLinks = Array.from(new Map([...links, { platform: 'mail' as Platform, href: 'mailto:hello@vaibhav.dev' }].filter(link => allowedPlatforms.includes(link.platform)).map(link => [link.platform, link])).values())
  return <>
    <div className={`${showDock ? 'flex' : 'hidden'} hidden lg:flex fixed right-0 top-[72%] z-40 flex-col gap-2`} aria-label="Social links">
      {uniqueLinks.map(({ platform, href }) => { const item = styles[platform]; const Icon = item.icon; return <a key={`desktop-${platform}`} href={href} target="_blank" rel="noreferrer" className={`group relative mr-[-118px] flex h-12 w-36 items-center justify-between overflow-hidden rounded-l-xl border border-border bg-gradient-to-r ${item.gradient} px-4 text-white shadow-md transition-all duration-500 hover:mr-[-10px] hover:shadow-lg`}><span className="relative z-0 -translate-x-2 text-sm font-semibold opacity-80 transition-transform group-hover:-translate-x-1">{item.label}</span><span className="relative z-20 -mr-4 flex h-full w-14 items-center justify-center bg-inherit shadow-[-8px_0_14px_rgba(0,0,0,.12)]"><Icon size={22} className="transition-transform group-hover:scale-125" /></span></a> })}
    </div>
    {showOnMobile && <div key="mobile-social-dock" className={`${showDock ? 'mobile-social-dock mobile-social-dock-visible' : 'mobile-social-dock mobile-social-dock-hidden'}`} aria-label="Social links">{uniqueLinks.map(({ platform, href }) => { const item = styles[platform]; const Icon = item.icon; return <a key={`mobile-${platform}`} href={href} target="_blank" rel="noreferrer" className={`mobile-social-link bg-gradient-to-r ${item.gradient}`} aria-label={item.label}><Icon size={19} /></a> })}</div>}
  </>
}

export default SocialLinks
