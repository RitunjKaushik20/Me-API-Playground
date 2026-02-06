# Me-API-Playground

A full-stack portfolio application with Express.js backend and React frontend.

## 📁 Project Structure

```
me-api-playground/
├── backend/           # Express.js API (Deploy on Render)
│   ├── src/
│   ├── prisma/
│   ├── __tests__/
│   ├── logs/
│   ├── package.json
│   └── .gitignore
├── frontend/          # React + Vite App (Deploy on Vercel)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── package.json       # Root workspace config
└── README.md
```

## 🚀 Deployment

### Backend - Render

1. **Create a new Web Service on Render**
   - Connect your GitHub repository
   - Build Command: `cd backend && npm install`
   - Start Command: `cd backend && npm start`
   - Root Directory: `backend`

2. **Environment Variables on Render**
   ```
   DATABASE_URL=your_postgresql_connection_string
   BASIC_AUTH_USER=your_username
   BASIC_AUTH_PASSWORD=your_password
   ```

3. **Render will automatically:**
   - Run `postinstall` script to generate Prisma client
   - Run database migrations
   - Start the Express server

### Frontend - Vercel

1. **Create a new project on Vercel**
   - Connect your GitHub repository
   - Framework Preset: `Vite`
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`

2. **Environment Variables on Vercel**
   ```
   VITE_API_URL=your_render_backend_url
   ```

3. **Important:** Update `frontend/src/api.js` to point to your Render backend URL

## 🛠️ Local Development

### Prerequisites
- Node.js >= 18.x
- PostgreSQL (for local development)
- Git

### Quick Start

```bash
# Clone the repository
git clone https://github.com/RitunjKaushik20/Me-API-Playground.git
cd me-api-playground

# Install all dependencies
npm install
cd backend && npm install
cd ../frontend && npm install
cd ..

# Setup environment variables
cp backend/.env.example backend/.env
# Edit backend/.env with your PostgreSQL connection string

# Run database migrations
cd backend && npx prisma migrate dev

# Start development servers
npm run dev
```

### Individual Commands

```bash
# Backend only
cd backend
npm run dev          # Start with nodemon
npm run test         # Run Jest tests

# Frontend only
cd frontend
npm run dev          # Start Vite dev server
npm run build        # Production build
npm run preview      # Preview production build
```

## 📡 API Documentation

Your backend API will be available at:
- **Local:** `http://localhost:3000`
- **Production:** `https://your-backend.onrender.com`

### Available Endpoints
- `GET /api/health` - Health check
- `GET /api/profile` - User profile
- `GET /api/projects` - List all projects
- `GET /api/skills` - List all skills
- `GET /api/search?q=query` - Search projects and skills

## 🔧 Technologies

### Backend
- **Framework:** Express.js 5.x
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** Basic Auth
- **Rate Limiting:** express-rate-limit
- **Logging:** Winston
- **Testing:** Jest + Supertest

### Frontend
- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **HTTP Client:** Axios

## 📝 Environment Variables

### Backend (.env)
```env
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"
PORT=3000
NODE_ENV=development
BASIC_AUTH_USER=admin
BASIC_AUTH_PASSWORD=securepassword
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3000
```

## 🧪 Testing

```bash
# Run backend tests
cd backend && npm test

# Run tests with coverage
cd backend && npm test -- --coverage
```

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 👤 Author

**Ritunj Kaushik**
- GitHub: [@RitunjKaushik20](https://github.com/RitunjKaushik20)

