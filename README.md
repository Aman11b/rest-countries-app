# Frontend Mentor - REST Countries API with color theme switcher

![Design preview for the REST Countries API with color theme switcher coding challenge](preview.jpg)

## Overview

A responsive **REST Countries** application built with **Next.js, TypeScript, and Tailwind CSS**.

The application allows users to browse countries, search by country name, filter countries by region, and view detailed information about each country. It also includes a responsive light/dark theme switcher.

## Features

- View all countries in a responsive grid
- Search countries by name
- Filter countries by region
- Combine search and region filters
- View detailed information about each country
- Navigate between neighboring/border countries
- Responsive design for mobile, tablet, and desktop
- Light and dark color themes
- Population formatting for better readability
- Custom 404 handling for invalid country routes
- Keyboard focus states
- Responsive country detail pages

## Built With

- Next.js
- TypeScript
- Tailwind CSS
- Lucide React
- Next.js Image component
- Local JSON country data

## What I Learned

While building this project, I practiced:

- Building reusable React components
- Managing state with `useState`
- Implementing search and filtering logic
- Working with dynamic routes in Next.js
- Using route parameters with the App Router
- Handling missing routes with `notFound()`
- Using `next/image` with external images
- Creating responsive layouts with Tailwind CSS
- Implementing a light/dark theme
- Working with TypeScript types
- Passing data and state between components

## Project Structure

```text
app/
├── components/
│   ├── BackButton.tsx
│   ├── CountryCard.tsx
│   ├── CountryList.tsx
│   ├── Filter.tsx
│   ├── Header.tsx
│   └── Searchbar.tsx
│
├── country/
│   └── [code]/
│       └── page.tsx
│
├── data/
│   └── data.json
│
├── lib/
│   ├── types.ts
│   └── utils.ts
│
├── page.tsx
├── layout.tsx
└── globals.css
```

## Getting Started

### Clone the repository

```bash
git clone <your-repository-url>
```

### Navigate to the project

```bash
cd <project-directory>
```

### Install dependencies

```bash
pnpm install
```

### Run the development server

```bash
pnpm dev
```

Open http://localhost:3000 in your browser.

## Responsive Design

The application is designed to work across different screen sizes:

- Mobile
- Tablet
- Desktop

The layout adapts the country grid, search and filter controls, country cards, and country detail page based on the viewport size.

## Frontend Mentor

This project is based on the **REST Countries API with color theme switcher** challenge from [Frontend Mentor](https://www.frontendmentor.io/).

Frontend Mentor challenges are a great way to practice building responsive, real-world interfaces from professional designs.

## Author

**Aman**

- GitHub: [Aman11b](https://github.com/Aman11b)
- LinkedIn: [Aman Singh](https://www.linkedin.com/in/aman-singh-120a76234/)
