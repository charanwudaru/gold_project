# JewelBridge - Elite B2B Collective

JewelBridge is a premier B2B wholesale marketplace for luxury jewellery, timepieces, and precious metals. It is designed to be an exclusive, invite-only platform where master craftsmen and top-tier vendors meet discerning buyers.

## Features

- **Luxury Design System**: A high-end dark theme (`#1A1200` base) with premium gold accents (`#D4A017`) designed specifically for luxury items.
- **Secure Authentication**: Focused login experience for an invite-only collective.
- **Dynamic Marketplace Feed**: Responsive masonry and grid layouts showcasing timepieces, rings, chains, and bracelets.
- **Advanced Filtering**: Amazon-style filters to narrow down collections by status, metal type, stone type, carats, and weight.
- **Interactive Studio**: Upload, manipulate (brightness, contrast, saturation), and enhance high-resolution product imagery directly within the app before posting.
- **Profile Management**: Custom vendor profiles with editable bios, avatars, and contact information.
- **Request Design System**: Direct B2B inquiries for modifications and bulk orders right from the product card.

## Technology Stack

- **Framework**: Next.js 14
- **UI & Styling**: React, CSS Modules (Custom pure CSS design system, no external UI frameworks used).
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app/globals.css`: Contains the complete design system and responsive media queries.
- `/app/login`: Centralized, distraction-free authentication flow.
- `/app/home`: Main collective feed with advanced filtering.
- `/app/post`: New listing studio with image manipulation capabilities.
- `/app/profile`: Vendor profiles and collection display with List/Grid toggle.
- `/components`: Shared UI components such as `Topbar`, `BottomNav` (Instagram-style), `ProductCard`, and `RequestModal`.
