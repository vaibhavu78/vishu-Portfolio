# Vaibhav Upadhyay Portfolio — Design Brain

## Direction
Technical editorial portfolio: deep navy canvas, crimson primary accent, cool gray supporting text, and a crisp monospace system layer. The design intentionally balances developer-tool precision with a warm human welcome.

## Color system
- Background: `#080b18`
- Foreground: `#f5f5f3`
- Muted: `#8a8c99`
- Panel/line: `#101425` / translucent white
- Accent: `#ff1744`

## Typography
- Inter for readable interface and headings
- Geist Mono for labels, status, code floats, indices, and admin controls

## Interaction decisions
- Admin UI is hidden from the public surface and opens only with `Ctrl + Shift + A`.
- The admin drawer currently provides local editing controls for profile note, accent color, animation speed, skill levels, save feedback, and apply/close.
- Social links use official-style black marks supplied by the user for WhatsApp and LinkedIn.
- The welcome video is displayed with `object-fit: contain` so the full frame is visible.
- Browser speech synthesis says “Welcome back to my portfolio” once after first load. Browser autoplay/security policies can prevent audible playback until the visitor interacts with the page.
- The public rotating welcome notification was removed from the visible page.

## Content system
Skills and projects are represented as typed arrays in `app/page.tsx`, making them straightforward to move into a database-backed CMS later. The current UI is intentionally dependency-light and keeps the portfolio preview fast.

## Asset inventory
- `public/portfolio-welcome.mp4` — supplied portfolio welcome video
- `public/whatsapp-black.png` — supplied black WhatsApp mark
- `public/linkedin-black.png` — supplied black LinkedIn mark
- `public/hero-portrait.png` — generated fallback portrait artwork

## Next production step
For persistent multi-device editing and secure admin login, connect the Supabase CMS to a server-side route with RLS and use Supabase Auth. Do not store admin passwords in client code or localStorage.
