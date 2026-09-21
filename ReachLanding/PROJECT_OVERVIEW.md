# ReachLanding Project Overview

This is a modern landing page application built using **React**, **TypeScript**, and **Vite**.

## Tech Stack
- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Language:** TypeScript
- **Icons:** `lucide-react`
- **Routing:** `react-router-dom`

## Project Structure
The project is organized into a standard React app structure with a `src` directory containing the main code:

- **`src/App.tsx`**: The root component which currently renders the `LandingPage`.
- **`src/pages/LandingPage.tsx`**: The main page component that composes the entire landing page. It includes an intersection observer for scroll animations (`animate-on-scroll`).
- **`src/components/`**: Contains modular sections of the landing page:
  - `Hero`: The introductory section with navigation.
  - `OrchestrateSection`: "01 / Orchestrate" features.
  - `UnderstandSection`: "02 / Understand" features.
  - `HowItWorksSection`: An abstract diagram/explanation of how the product works.
  - `DeliverabilitySection`: "03 / Deliver" features.
  - `AnalyticsSection`: Analytics and additional features.
  - `CTA`: Final Call to Action section.
  - `Footer`: Page footer.
- **`src/index.css`**: Global styles and styling for components.

## Features
- **Scroll Animations**: Uses `IntersectionObserver` to trigger CSS animations when elements scroll into view.
- **Responsive Design**: Built to be responsive across different device sizes.

## Getting Started
To run the project locally:

1. Navigate to the project directory:
   ```bash
   cd ReachLanding
   ```
2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Dependencies Explained
- **`lucide-react`**: A popular icon library providing the SVG icons used throughout the UI (like checkmarks, arrows, etc.).
- **`react-router-dom`**: The routing library for React. While the current landing page is a single-page layout using scrolling anchor links, this package is installed to support future multi-page navigation.

## Navigation & Links
The application primarily uses anchor links to navigate to different sections on the single landing page:
- **"Start free" / `#start`**: Directs the user to the signup or onboarding flow.
- **"Book a demo" / `#demo`**: Directs the user to the demo booking section.
- **Navbar Links**: Direct to their corresponding sections down the page (e.g., the Hero section has an `id="top"` for 'Back to top' functionality).
