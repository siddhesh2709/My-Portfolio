# Dark UI/Glassmorphism Theme Conversion Guide

## Color Palette

### Primary Colors
- **Canvas Background**: `#121212` (Deep Charcoal)
- **Primary Text**: `#FFFFFF` (Pure White)
- **Secondary Text**: `#E5E7EB` / `text-gray-200`
- **Muted Text**: `#9CA3AF` → `#D1D5DB` (text-gray-300)

### Accent Colors
- **Primary Accent**: `#792D21` (Muted Rust/Orange)
- **Accent Hover**: `#A84632` (Lighter Rust)
- **Accent Light**: `#C85A3F` (Lightest Rust)

### Component Styles
- **Border**: `1px solid rgba(255,255,255,0.1)` or `border-white/10`
- **Border Radius**: `28px` minimum (`rounded-[28px]`)
- **Card Background**: `bg-white/[0.02]` with `backdrop-blur-xl`
- **Hover Border**: `border-[#792D21]/30`

### Glow Effect
- Position: Top-right corner of each section
- Style: `w-[600px] h-[600px] bg-[#792D21]/10 rounded-full blur-[150px]`
- Placement: `absolute top-0 right-0`

## Component Updates Needed

### Global
- [x] Background: `bg-[#0B0F1A]` → `bg-[#121212]`
- [x] Text: `text-[#E5E7EB]` → `text-white`
- [x] Scrollbar colors updated
- [x] Selection colors updated

### Cards/Containers
- Border radius: `rounded-3xl` → `rounded-[28px]`
- Background: `from-purple-500/10 to-cyan-500/10` → `bg-white/[0.02]`
- Border: `border-purple-500/20` → `border-white/10`
- Hover: Add `hover:border-[#792D21]/30`

### Interactive Elements
- Progress bars: Purple/cyan → `#792D21`
- Buttons: Purple/cyan gradients → Rust/orange
- Active states: Use `#792D21`
- Links: Cyan → `#A84632`

### Gradients
Replace all:
- `from-purple-400 via-blue-400 to-cyan-400` → `from-[#792D21] to-[#A84632]`
- `from-purple-500 to-cyan-500` → `from-[#792D21] to-[#A84632]`
- `from-cyan-400 to-blue-400` → `from-[#792D21] to-[#A84632]`

## Files to Update

1. ✅ src/styles/index.css
2. ✅ src/app/PortfolioHome.tsx (partial)
3. ⏳ src/app/components/Hero.tsx
4. ⏳ src/app/components/Skills.tsx
5. ⏳ src/app/components/Projects.tsx
6. ⏳ src/app/components/Experience.tsx
7. ⏳ src/app/components/Education.tsx
8. ⏳ src/app/components/Certifications.tsx
9. ⏳ src/app/components/Achievements.tsx
10. ⏳ src/app/components/Contact.tsx
11. ⏳ src/app/components/Footer.tsx
12. ⏳ src/app/components/Navbar.tsx
13. ⏳ src/app/components/RightSidebar.tsx
14. ⏳ src/app/components/Admin/AdminPanel.tsx
