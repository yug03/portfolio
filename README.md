# Yug Pratap Gupta — Portfolio

**AI Automation & Business Systems Engineer**

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles, fonts, and custom utilities
├── components/
│   ├── Navbar.tsx          # Fixed navigation with scroll tracking
│   ├── Hero.tsx            # Hero section with stats and CTA buttons
│   ├── About.tsx           # About section with pillars
│   ├── Skills.tsx          # Categorized skills with animated bars
│   ├── Projects.tsx        # 3 expandable case study cards
│   ├── Experience.tsx      # Timeline-style experience section
│   ├── Certifications.tsx  # Google Cloud and Data Analytics certs
│   ├── Solutions.tsx       # 8 service offering cards
│   ├── Contact.tsx         # Contact form and info
│   └── Footer.tsx          # Footer with navigation
├── public/
│   └── resume-yug-pratap-gupta.pdf   # Add your resume PDF here
├── portfolio-preview.html  # Standalone HTML preview (open in browser)
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Customization

### Update Personal Info
Edit the relevant component files to update:
- Contact email in `Contact.tsx`
- LinkedIn URL in `Contact.tsx`
- Resume PDF link in `Hero.tsx` and `public/` folder
- Project details in `Projects.tsx`
- Experience details in `Experience.tsx`

### Colors
The color palette is defined in `tailwind.config.js` and `globals.css`:
- **Cyan accent**: `#00d4ff`
- **Gold accent**: `#f0a500`
- **Canvas background**: `#07090f`

### Fonts
Using Google Fonts:
- **Display**: Sora (headings)
- **Body**: DM Sans
- **Mono**: JetBrains Mono

## Deployment

Deploy to Vercel with one click:

```bash
npx vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

## Preview
Open `portfolio-preview.html` directly in your browser for an instant preview without running the Next.js server.
