<p align="center">
  <img src="frontend/public/chat_app_svg.svg" alt="SyncNode Logo" width="80" height="80" />
</p>

<h1 align="center">SyncNode — Real-Time Chat Application</h1>

<p align="center">
  A full-stack, real-time chat application built with the MERN stack and Socket.io. Features instant messaging, image sharing, online user tracking, profile management, and 32+ customizable themes.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-Express_5-339933?logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose_9-47A248?logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Socket.io-4-010101?logo=socket.io&logoColor=white" alt="Socket.io" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/DaisyUI-5-5A0EF8?logo=daisyui&logoColor=white" alt="DaisyUI" />
</p>

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
- [WebSocket Events](#-websocket-events)
- [Deployment](#-deployment)
- [License](#-license)

---

## ✨ Features

| Category | Details |
|---|---|
| **Authentication** | Secure signup, login, and logout with JWT stored in HTTP-only cookies |
| **Real-Time Messaging** | Instant one-to-one chat powered by Socket.io |
| **Image Sharing** | Send images in chat — uploaded and hosted via Cloudinary |
| **Profile Management** | Update your profile picture (Cloudinary upload) and view account info |
| **Online Presence** | See which users are currently online with live green indicators |
| **Theme Engine** | 32+ themes (dark, light, synthwave, cyberpunk, dracula, etc.) persisted in localStorage |
| **Responsive Design** | Fully responsive — sidebar collapses on mobile, adapts to all screen sizes |
| **Production Ready** | Single-command build & deploy; backend serves the React frontend in production |

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React 19** | UI library |
| **Vite 7** | Build tool & dev server |
| **React Router DOM 7** | Client-side routing |
| **Zustand 5** | Lightweight state management |
| **Tailwind CSS 4** + **DaisyUI 5** | Styling & component library |
| **Socket.io Client** | Real-time WebSocket connection |
| **Axios** | HTTP client |
| **Lucide React** | Icon library |
| **React Hot Toast** | Toast notifications |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** + **Express 5** | Server & REST API |
| **MongoDB** + **Mongoose 9** | Database & ODM |
| **Socket.io 4** | Real-time WebSocket server |
| **JWT (jsonwebtoken)** | Authentication tokens |
| **bcryptjs** | Password hashing |
| **Cloudinary** | Cloud image storage |
| **cookie-parser** | Cookie parsing middleware |
| **dotenv** | Environment variable management |

---

## 📁 Project Structure

```
chat-app/
├── package.json              # Root scripts (build & start)
├── .gitignore
│
├── backend/
│   ├── package.json
│   ├── .env                  # Environment variables (not committed)
│   └── src/
│       ├── index.js          # Express server entry point
│       ├── controllers/
│       │   ├── auth.controller.js      # Signup, login, logout, profile, auth check
│       │   └── message.controller.js   # Get users, get/send messages
│       ├── models/
│       │   ├── user.model.js           # User schema (email, fullName, password, profilePic)
│       │   └── message.model.js        # Message schema (senderId, receiverId, text, image)
│       ├── routes/
│       │   ├── auth.route.js           # /api/auth/*
│       │   └── message.route.js        # /api/messages/*
│       ├── middleware/
│       │   └── auth.middleware.js       # JWT verification & route protection
│       └── lib/
│           ├── db.js                   # MongoDB connection
│           ├── cloudinary.js           # Cloudinary configuration
│           ├── socket.js              # Socket.io server setup & online tracking
│           └── utils.js               # JWT token generation & cookie config
│
└── frontend/
    ├── package.json
    ├── index.html
    ├── vite.config.js
    ├── public/
    │   ├── avatar.png                 # Default avatar
    │   └── chat_app_svg.svg           # App favicon
    └── src/
        ├── App.jsx                    # Root component, routing, auth gating
        ├── main.jsx                   # React DOM entry
        ├── index.css                  # Global styles
        ├── components/
        │   ├── Navbar.jsx             # Top navigation bar
        │   ├── Sidebar.jsx            # User list with online filter
        │   ├── ChatContainer.jsx      # Active chat view
        │   ├── ChatHeader.jsx         # Selected user info header
        │   ├── MessageInput.jsx       # Message composer with image upload
        │   ├── NoChatSelected.jsx     # Empty state placeholder
        │   ├── AuthImagePattern.jsx   # Decorative pattern for auth pages
        │   └── skeletons/             # Loading skeleton components
        ├── pages/
        │   ├── HomePage.jsx           # Main chat page (sidebar + chat)
        │   ├── LoginPage.jsx          # Login form
        │   ├── SignUpPage.jsx         # Registration form
        │   ├── ProfilePage.jsx        # User profile view & avatar upload
        │   └── SettingsPage.jsx       # Theme selector with live preview
        ├── store/
        │   ├── useAuthStore.js        # Auth state, socket connection, online users
        │   ├── useChatStore.js        # Messages, users, real-time subscriptions
        │   └── useThemeStore.js       # Theme persistence
        ├── lib/
        │   ├── axios.js               # Axios instance with env-aware base URL
        │   └── utils.js               # Utility functions (formatMessageTime)
        └── constants/
            └── index.js               # Available DaisyUI theme list
```

---

## 📋 Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x
- **MongoDB** — A MongoDB Atlas cluster (or local instance)
- **Cloudinary** — A free Cloudinary account for image uploads

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/chat-app.git
cd chat-app
```

### 2. Set up environment variables

Create a `.env` file inside the `backend/` directory:

```bash
cp backend/.env.example backend/.env
```

Then fill in the values (see [Environment Variables](#-environment-variables) below).

### 3. Install dependencies & run (Development)

**Backend** (Terminal 1):
```bash
cd backend
npm install
npm run dev       # Starts with nodemon on port 5001
```

**Frontend** (Terminal 2):
```bash
cd frontend
npm install
npm run dev       # Starts Vite dev server on port 5173
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production

From the project root:
```bash
npm run build     # Installs deps for both & builds the frontend
npm start         # Starts the backend which serves the frontend
```

---

## 🔐 Environment Variables

Create a `backend/.env` file with the following keys:

| Variable | Description | Example |
|---|---|---|
| `PORT` | Server port | `5001` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/chat_db` |
| `JWT_SECRET` | Secret key for signing JWTs | `your-super-secret-key` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | `your-cloud-name` |
| `CLOUDINARY_API_KEY` | Cloudinary API key | `123456789012345` |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | `your-api-secret` |
| `NODE_ENV` | Environment mode | `development` or `production` |

> ⚠️ **Important:** Never commit your `.env` file. It is already included in `.gitignore`.

---

## 📡 API Reference

All endpoints are prefixed with `/api`. Protected routes require a valid JWT cookie.

### Authentication — `/api/auth`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/signup` | ✗ | Register a new user |
| `POST` | `/login` | ✗ | Login with email & password |
| `POST` | `/logout` | ✗ | Clear JWT cookie |
| `PUT` | `/update-profile` | ✓ | Upload/update profile picture |
| `GET` | `/check` | ✓ | Verify auth status & get user data |

### Messages — `/api/messages`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/users` | ✓ | Get all users for sidebar (excludes self) |
| `GET` | `/:id` | ✓ | Get message history with a specific user |
| `POST` | `/send/:id` | ✓ | Send a text/image message to a user |

---

## 🔌 WebSocket Events

| Event | Direction | Payload | Description |
|---|---|---|---|
| `connection` | Client → Server | `query: { userId }` | User connects with their ID |
| `getOnlineUsers` | Server → Client | `string[]` (user IDs) | Broadcasts list of online user IDs |
| `newMessage` | Server → Client | `Message` object | Delivers a new message to the receiver in real-time |
| `disconnect` | Client → Server | — | User disconnects; removed from online list |

---

## 🌐 Deployment

This project is configured for single-server deployment (e.g., **Render**, **Railway**, **Heroku**).

### Deploy to Render (Recommended)

1. Push your code to GitHub
2. Create a new **Web Service** on [Render](https://render.com)
3. Connect your GitHub repository
4. Configure:
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
   - **Environment Variables:** Add all variables from [Environment Variables](#-environment-variables) with `NODE_ENV=production`
5. Deploy!

In production mode, the Express backend automatically serves the React build from `frontend/dist`.

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

<p align="center">
  Built with ❤️ using the MERN Stack + Socket.io
</p>
