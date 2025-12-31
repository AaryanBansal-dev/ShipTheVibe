# ShipTheVibe
Vibe Coder's Dream Template

## Overview
This template serves as a foundational setup for a modern web application using Next.js with TypeScript, integrating various technologies including TailwindCSS for styling, Supabase for database and authentication, and APIs for payment and interaction.

## Requirements
- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **APIs**: Polar API for Payment Processing, tRPC for API communication, OpenAI API for AI capabilities, Gemini API for additional services
- **Database**: Supabase for backend and authentication
- **Containerization**: Docker for deployment
- **Package Manager**: Bun for dependency management (npm also supported)

## Project Structure
```
/ShipTheVibe
├── /public
├── /src
│   ├── /app            # Next.js App Router pages
│   ├── /components     # Reusable React components
│   ├── /pages          # Next.js Pages Router (for API routes)
│   ├── /styles         # CSS styles
│   ├── /hooks          # Custom React hooks
│   ├── /lib            # Library configurations (Supabase, etc.)
│   ├── /api            # tRPC and API configurations
│   ├── /utils          # Utility functions
│   └── /types          # TypeScript type definitions
├── /tests              # Test files
├── .env.local          # Environment variables (create from .env.example)
├── .env.example        # Environment variables template
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project dependencies
├── tailwind.config.js  # TailwindCSS configuration
├── jest.config.js      # Jest configuration
└── next.config.ts      # Next.js configuration
```

## Setup Instructions

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/ShipTheVibe.git
cd ShipTheVibe
```

### Step 2: Install Dependencies
Using npm:
```bash
npm install
```

Using Bun:
```bash
bun install
```

### Step 3: Configure Environment Variables
Copy the `.env.example` file to `.env.local` and fill in your values:
```bash
cp .env.example .env.local
```

Update `.env.local` with your credentials:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `OPENAI_API_KEY`: Your OpenAI API key
- `GEMINI_API_KEY`: Your Gemini API key
- `POLAR_API_KEY`: Your Polar API key for payment processing

### Step 4: Create Supabase Project
1. Go to [Supabase](https://supabase.io) and create a new project.
2. Obtain your `SUPABASE_URL` and `SUPABASE_ANON_KEY` and add them to your `.env.local` file.

### Step 5: Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Docker Deployment

### Build and Run with Docker Compose
```bash
docker-compose up --build
```

### Build Docker Image Manually
```bash
docker build -t ship-the-vibe .
docker run -p 3000:3000 ship-the-vibe
```

## API Configuration

### Supabase Client
The Supabase client is configured at `src/lib/supabaseClient.ts`:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### tRPC Setup
The tRPC router is configured at `src/api/trpc.ts`:
```typescript
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const appRouter = t.router({
  getUser: t.procedure
    .input(z.string())
    .query((opts) => {
      return { id: opts.input };
    }),
});

export type AppRouter = typeof appRouter;
```

## Testing

Tests are located in the `/tests` directory. Run tests with:
```bash
npm run test
```

### Example Component Test
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/Button';

describe('Button Component', () => {
  it('renders the button with the correct label', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

## Component Documentation

### Button Component
```typescript
/**
 * Button Component
 * @param {string} label - The label for the button
 * @param {function} onClick - Click handler
 * @returns {JSX.Element}
 */
const Button = ({ label, onClick }: { label: string; onClick: () => void }): JSX.Element => (
  <button onClick={onClick} className="bg-blue-500 text-white p-2 rounded">
    {label}
  </button>
);
```

## Custom Hooks

### useLocalStorage
```typescript
const [value, setValue] = useLocalStorage<string>('key', 'defaultValue');
```

### useDebounce
```typescript
const debouncedValue = useDebounce(value, 500);
```

## Success Criteria
- ✅ Fully functional Next.js application with TypeScript
- ✅ Integrated TailwindCSS for styling
- ✅ Supabase client for user authentication and data storage
- ✅ tRPC setup for type-safe API communication
- ✅ Docker configuration for containerized deployment
- ✅ Comprehensive test coverage for components and APIs
- ✅ Custom hooks and utility functions
- ✅ Type definitions for common data structures

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy

### Docker
Deploy your Docker container to any cloud provider that supports Docker:
- AWS ECS
- Google Cloud Run
- Azure Container Instances
- DigitalOcean App Platform

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
MIT License