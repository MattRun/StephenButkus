# Project Overview

npx prisma studio

rm -rf .next
npm run dev
|
git status
git add -A
git commit -m "WIP"
git push origin aehstraining


## Project Stack and Libraries

### Backend & Database
- **Framework**: Next.js `14.2.12`
- **Database**: PostgreSQL, managed with Prisma ORM
- **Authentication**: Custom authentication using email verification, integrated with Prisma and PostgreSQL
- **Password Hashing**: Bcrypt for secure password storage
- **JWT Handling**: JSON Web Token (JWT) for API authentication and session handling
- **Email Service**: SendGrid and Nodemailer for sending verification and notification emails

### Frontend Libraries
- **Chakra UI** & **Headless UI**: UI components and icons for styling and accessibility
- **Framer Motion**: For smooth animations across the UI
- **Lottie**: Handles animations for enhanced UX
- **React GA4**: Tracks user behavior with Google Analytics
- **React Responsive**: Manages responsive layouts

### Global State Management
- **Redux Toolkit**: Simplified global state management integrated with `react-redux`

### Styling
- **Tailwind CSS** with PostCSS and Autoprefixer for utility-first styling
- **Emotion**: Provides CSS-in-JS styling alongside Tailwind

### Development Tools
- **TypeScript**: Static typing support for robustness
- **ESLint**: Code quality tool, configured with Next.js ESLint settings
- **PostCSS**: Processes CSS with plugins like Autoprefixer for cross-browser compatibility

---

## Key Commands and Utilities

### Database and ORM Commands
1. **Run Prisma Studio**: Opens a graphical user interface for managing database records.
   ```bash
   npx prisma studio
Generate Prisma Client: Re-generates the Prisma Client, which is required when the schema is updated.

bash
Copy code
npx prisma generate
Run Database Migrations: Creates or updates database structure based on the Prisma schema.

bash
Copy code
npx prisma migrate dev --name <migration_name>
Reset Prisma Database (Local Development): Removes all data and re-applies migrations, resetting the database.

bash
Copy code
npx prisma migrate reset
Next.js Development Commands
Start Development Server: Runs the app in development mode on http://localhost:3000.

bash
Copy code
npm run dev
Build for Production: Creates a production-ready version of the application.

bash
Copy code
npm run build
Run Production Build: Runs the production build locally to simulate a deployed environment.

bash
Copy code
npm run start
Clear Next.js Cache: Removes the .next folder, forcing Next.js to rebuild files in development.

bash
Copy code
rm -rf .next
Frontend Styling Commands
Build Tailwind CSS: Compiles Tailwind CSS classes into a CSS file for deployment.
bash
Copy code
npx tailwindcss build

Environment Variables (Expected in .env)
Ensure the following environment variables are set up in .env:

SENDGRID_API_KEY: API key for SendGrid email service
DATABASE_URL: Connection string for PostgreSQL database
JWT_SECRET: Secret key for JWT token signing and verification
NEXT_PUBLIC_URL: Base URL of the app for use in verification links
Folder Structure
Key Directories & Files
/app: Contains Next.js routing and API endpoints.
/dashboard: All user-related pages and features.
/auth: Authentication-related pages (sign-in, sign-up, etc.).
/api: API routes, including custom endpoints for authentication and verification.
/lib: Utility libraries such as Prisma setup.
/components: Shared React components, including navigation.
/utils: Utility functions (e.g., send-email.js for email logic).
prisma/schema.prisma: Prisma database schema definition.
/styles: Global and custom styles, including Tailwind configuration.
Planned Pages & Features
Authentication Flow (To be Completed)
Automatic Sign-in After Verification: After email verification, auto-sign-in and update the header.
User Portal: Personalized dashboard and settings for authenticated users.
Account & Billing: Integration with payment API to manage user subscriptions/payments.
TalentLMS Integration: Link courses and track progress with TalentLMS.
Navigation Features
Dynamic Header Updates: Update user email and links based on authentication status.
Dropdowns for Courses: Include nested dropdowns for course categories.
Backend Overview
Prisma + PostgreSQL
This project uses Prisma as the ORM with PostgreSQL as the database. Prisma is configured to manage database models, relationships, and migrations. Key commands for working with Prisma and PostgreSQL are included in the Database and ORM Commands section.

To view and manage the database:

bash
Copy code
npx prisma studio
To create or update database schema, use migrations:

bash
Copy code
npx prisma migrate dev --name <migration_name>
Libraries & Their Uses
Dependencies
@chakra-ui/icons: Provides icons compatible with Chakra UI.
@chakra-ui/react: UI component library for creating accessible layouts.
@emotion/react & @emotion/styled: CSS-in-JS styling for Chakra UI.
@fontsource/source-sans-pro: Custom font for a consistent UI appearance.
@headlessui/react: Unstyled accessible components.
@heroicons/react: Icon library for React.
@next-auth/prisma-adapter: NextAuth adapter to integrate with Prisma.
@nextui-org/navbar & @nextui-org/react: Custom UI components.
@prisma/client: Prisma client to access and manipulate PostgreSQL data.
@react-email/components: React components for creating email templates.
@reduxjs/toolkit: Simplifies Redux state management.
@sendgrid/mail: SendGrid client to send emails from the backend.
bcrypt: Used for password hashing.
framer-motion: Animation library for React.
jsonwebtoken: For creating and verifying JWT tokens.
lottie-react: Used for rendering animations in the app.
next: Next.js framework for the project.
next-auth: Authentication library for managing user sessions.
nodemailer: For sending emails via SMTP.
react: Main library for building the user interface.
react-dom: DOM bindings for React.
react-ga4: Google Analytics 4 integration.
react-icons: Icon component library for React.
react-redux: Integrates Redux with React for state management.
react-responsive: Helps render different components based on screen size.
Dev Dependencies
@types/bcrypt: Type definitions for bcrypt.
@types/jsonwebtoken: Type definitions for jsonwebtoken.
@types/node-fetch: Type definitions for node-fetch.
@types/react: Type definitions for React.
@types/redux-logger: Type definitions for Redux logger.
autoprefixer: Adds vendor prefixes to CSS for cross-browser compatibility.
eslint & eslint-config-next: Linting tools configured for Next.js.
postcss: Processes CSS with plugins like Autoprefixer.
tailwindcss: Utility-first CSS framework.
typescript: Adds static typing to JavaScript for robustness.



1. Mobile-First Approach:
We design for the smallest screens first (mobile). This sets a solid, foundational layout that works on any device. From there, we add layers for larger screens without duplicating the work.
2. CSS Grid & Flexbox:
Using CSS Grid and Flexbox allows elements to automatically adjust to screen sizes. For instance, a grid can be set to display items in a single column on mobile and shift to two or three columns on larger screens with just a couple of CSS rules.
3. Responsive Units (%, vw, vh, rem):
By using units like percentages, vw (viewport width), vh (viewport height), and rem, elements can scale proportionally with the screen, reducing the need to specify exact sizes at every breakpoint.
4. Reusable CSS Components:
Setting up a component-based CSS system (like Tailwind or CSS modules) allows us to define styles once and reuse them, making responsive adjustments consistent and fast.
5. Media Queries for Key Breakpoints Only:
We don’t actually need a media query for every possible screen size. Instead, we focus on a few key breakpoints (e.g., mobile, tablet, desktop) that cover most devices. Modern CSS frameworks handle the fine details, like adjusting for landscape mode or ultrawide screens.
6. Testing Tools:
Responsive testing tools, like Chrome DevTools or apps like BrowserStack, let us preview and test designs on multiple devices without needing physical access to each one. This allows us to spot issues early and make adjustments.
Why It’s Not as Much Work as It Seems
Once you set up the initial responsive framework, a lot of the elements naturally adjust with minimal extra effort. Plus, CSS frameworks like Tailwind or Bootstrap provide built-in responsive utilities, meaning a single class can automatically make a button, grid, or section responsive. For example, setting md:grid-cols-2 on a container will make it switch to two columns on medium screens and up without additional styling.

So while it sounds overwhelming, modern tools and strategies make responsive design surprisingly efficient. Let me know if you want to dive into any specific part or try out a responsive framework to simplify things even further!