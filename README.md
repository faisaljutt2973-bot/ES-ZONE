# ES Battle Arena

Production-style esports tournament platform architecture for Pakistan-only operations.

## Stack
- Frontend: React (Vite), Tailwind CSS, Framer Motion, Socket.io Client
- Backend: Node.js, Express.js, MongoDB (Mongoose), JWT, RBAC, Socket.io
- Security: Helmet, Rate Limiting, Validation Middleware, Pakistan IP Guard

## Modules Implemented
- Authentication + RBAC (`admin`, `manager`, `user`)
- Tournament CRUD foundations (public/private)
- Slot booking with real-time updates
- Wallet system (ES Coins): deposit, withdraw, transaction history
- Admin manager creation limit (max 5)
- Notifications API + socket broadcast
- Contact management (admin editable)

## Folder Structure
- `src/` frontend app shell, pages, context, API client
- `server/src/config` environment + DB config
- `server/src/models` User/Admin/Manager/Tournament/Slot/Wallet/Transaction/Notification/Contact
- `server/src/controllers` auth + platform controllers
- `server/src/routes` REST API routes
- `server/src/middleware` auth/security/error/validation
- `server/src/sockets` socket room handlers

## Environment Variables
- Frontend: copy `.env.example`
- Backend: copy `server/.env.example`

## Run Locally
1. Install frontend deps: `npm install`
2. Install backend deps: `cd server && npm install`
3. Start frontend: `npm run dev`
4. Start backend: `npm run dev:server`
5. Start both: `npm run dev:full`

## One-Command Flow
1. `npm run flow:setup`
2. `npm run flow:seed`
3. `npm run flow:start`

### Seeded Admin (default)
- Email: `admin@esbattlearena.pk`
- Password: `Admin@12345`
- Mobile: `+923001234567`
- Override via env:
  - `SEED_ADMIN_EMAIL`
  - `SEED_ADMIN_PASSWORD`
  - `SEED_ADMIN_MOBILE`

## API Base
- `http://localhost:5000/api/v1`

## Notes
- Mobile validation is locked to Pakistan format (`+92xxxxxxxxxx`).
- Country is locked to `Pakistan` in auth validator.
- Tournament limits are enforced by game mode mapping.
- Private room creation charges 50 ES Coins for user-created private tournaments.
- If local MongoDB is unavailable, backend auto-uses embedded MongoDB (`mongodb-memory-server`) for development.
