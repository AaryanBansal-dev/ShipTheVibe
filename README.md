<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Bun-1.0+-F9F1E1?style=for-the-badge&logo=bun" alt="Bun" />
</p>

<h1 align="center">🚀 ShipTheVibe</h1>

<p align="center">
  <strong>The Ultimate Vibe Coder's Dream Template</strong>
</p>

<p align="center">
  Build modern web applications with AI, Payments, and Authentication — all pre-configured and ready to ship.
</p>

<p align="center">
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-documentation">Documentation</a> •
  <a href="#-deployment">Deployment</a>
</p>

---

## ⚡ Quick Start

Get up and running in seconds with Bun:

```bash
# Clone the repository
git clone https://github.com/AaryanBansal-dev/ShipTheVibe.git
cd ShipTheVibe

# Install dependencies with Bun (recommended)
bun install

# Or use npm
npm install

# Set up environment variables
cp .env.example .env.local

# Start the development server
bun run dev
# Or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

---

## ✨ Features

### 🎯 Core Features
- **Next.js 15** - Latest React framework with App Router and Server Components
- **TypeScript** - Full type safety with strict mode enabled
- **TailwindCSS v4** - Utility-first CSS for rapid, responsive UI development
- **Bun Runtime** - Blazing fast JavaScript runtime and package manager

### 🔌 API & Backend
- **tRPC** - End-to-end typesafe APIs without code generation
- **Supabase** - Open source Firebase alternative for auth & database
- **Zod** - TypeScript-first schema validation

### 🤖 AI Integration
- **OpenAI API** - Ready for ChatGPT and GPT-4 integration
- **Gemini API** - Google's multimodal AI model support

### 💳 Payments
- **Polar API** - Modern payment processing for SaaS products

### 🐳 DevOps
- **Docker** - Multi-stage Dockerfile with production optimization
- **Docker Compose** - Development and production configurations
- **ESLint** - Code quality and consistency

### 🧪 Testing
- **Jest** - JavaScript testing framework
- **React Testing Library** - Component testing utilities

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | 15 |
| Runtime | React | 19 |
| Language | TypeScript | 5 |
| Styling | TailwindCSS | 4 |
| Package Manager | Bun | 1.0+ |
| Database | Supabase | 2 |
| API Layer | tRPC | 11 |
| Validation | Zod | 3 |
| Testing | Jest | 29 |

---

## 📁 Project Structure

```
/ShipTheVibe
├── /public                 # Static assets
├── /src
│   ├── /app               # Next.js App Router pages
│   │   ├── globals.css    # Global styles & animations
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Homepage
│   ├── /components        # Reusable React components
│   │   ├── Alert.tsx      # Alert notifications
│   │   ├── Avatar.tsx     # User avatars
│   │   ├── Badge.tsx      # Status badges
│   │   ├── Button.tsx     # Buttons with variants
│   │   ├── Card.tsx       # Card containers
│   │   ├── Input.tsx      # Form inputs
│   │   ├── Loading.tsx    # Loading spinners
│   │   ├── Modal.tsx      # Modal dialogs
│   │   └── index.ts       # Component exports
│   ├── /hooks             # Custom React hooks
│   │   └── index.ts       # useLocalStorage, useDebounce, etc.
│   ├── /lib               # Library configurations
│   │   └── supabaseClient.ts
│   ├── /api               # tRPC configurations
│   │   └── trpc.ts
│   ├── /pages/api         # API routes
│   │   └── users.ts
│   ├── /utils             # Utility functions
│   │   └── helpers.ts     # cn, formatDate, tryCatch, etc.
│   └── /types             # TypeScript definitions
│       └── index.ts
├── /tests                  # Test files
├── .env.example           # Environment template
├── Dockerfile             # Multi-stage Docker config
├── docker-compose.yml     # Docker Compose config
├── bun.lockb             # Bun lock file
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── jest.config.mjs       # Jest configuration
```

---

## 📦 Components

### Button
```tsx
import { Button } from '@/components';

<Button 
  label="Click me" 
  onClick={() => {}} 
  variant="primary"  // primary | secondary | outline | ghost | danger
  size="md"          // sm | md | lg
  loading={false}
/>
```

### Card
```tsx
import { Card } from '@/components';

<Card hover className="p-4">
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### Input
```tsx
import { Input } from '@/components';

<Input 
  label="Email"
  placeholder="Enter your email"
  error="Invalid email"
  helperText="We'll never share your email"
/>
```

### Modal
```tsx
import { Modal } from '@/components';

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="md"  // sm | md | lg | xl
>
  <p>Modal content</p>
</Modal>
```

### Alert, Badge, Avatar, Loading
```tsx
import { Alert, Badge, Avatar, Loading } from '@/components';

<Alert variant="success" title="Success">Operation completed!</Alert>
<Badge variant="info">New</Badge>
<Avatar src="/avatar.jpg" fallback="JD" size="lg" />
<Loading size="md" text="Loading..." />
```

---

## 🪝 Custom Hooks

### useLocalStorage
```typescript
const [value, setValue] = useLocalStorage<string>('key', 'defaultValue');
```

### useDebounce
```typescript
const debouncedValue = useDebounce(searchTerm, 500);
```

### useMediaQuery
```typescript
const isMobile = useMediaQuery('(max-width: 768px)');
```

### useToggle
```typescript
const [isOpen, toggle, setIsOpen] = useToggle(false);
```

### useClickOutside
```typescript
const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));
```

### useClipboard
```typescript
const [copied, copyToClipboard] = useClipboard();
await copyToClipboard('Text to copy');
```

### useWindowSize
```typescript
const { width, height } = useWindowSize();
```

---

## 🔧 Utility Functions

### cn (className merge)
```typescript
import { cn } from '@/utils/helpers';
const className = cn('base-class', isActive && 'active', customClass);
```

### formatDate
```typescript
formatDate(new Date()); // "December 31, 2024"
```

### formatCurrency
```typescript
formatCurrency(29.99, 'USD'); // "$29.99"
```

### tryCatch
```typescript
const [data, error] = await tryCatch(fetchData());
```

### Other utilities
- `generateId()` - Generate unique IDs
- `sleep(ms)` - Delay execution
- `truncate(text, maxLength)` - Truncate text
- `capitalize(text)` - Capitalize first letter
- `deepClone(obj)` - Deep clone objects
- `isEmpty(value)` - Check if value is empty

---

## 🔐 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Gemini API Configuration
GEMINI_API_KEY=your_gemini_api_key_here

# Polar API Configuration (Payment Processing)
POLAR_API_KEY=your_polar_api_key_here
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run start` | Start production server |
| `bun run lint` | Run ESLint |
| `bun run test` | Run tests |
| `bun run test:watch` | Run tests in watch mode |

> 💡 All commands also work with `npm run` instead of `bun run`

---

## 🐳 Docker Deployment

### Development with Docker Compose
```bash
docker-compose up
```

### Production Deployment
```bash
docker-compose --profile production up app-prod
```

### Build Docker Image Manually
```bash
docker build -t ship-the-vibe .
docker run -p 3000:3000 ship-the-vibe
```

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push

### Docker
Deploy to any cloud provider that supports Docker:
- AWS ECS / Fargate
- Google Cloud Run
- Azure Container Apps
- DigitalOcean App Platform
- Railway
- Fly.io

---

## 🧪 Testing

```bash
# Run all tests
bun run test

# Run tests in watch mode
bun run test:watch

# Run with coverage
bun run test --coverage
```

---

## 📖 API Configuration

### Supabase Client
```typescript
// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

### tRPC Setup
```typescript
// src/api/trpc.ts
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

---

## ✅ Success Criteria

- [x] Fully functional Next.js 15 application with TypeScript
- [x] Modern TailwindCSS v4 with custom animations
- [x] Supabase client for authentication and database
- [x] tRPC setup for type-safe API communication
- [x] Multi-stage Docker configuration for dev and production
- [x] Comprehensive UI component library
- [x] Custom hooks collection
- [x] Utility functions
- [x] Type definitions for common data structures
- [x] Bun as primary package manager
- [x] Jest testing setup with React Testing Library

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with 💜 by <a href="https://github.com/AaryanBansal-dev">Aaryan Bansal</a>
</p>

<p align="center">
  <strong>Happy Shipping! 🚀</strong>
</p>