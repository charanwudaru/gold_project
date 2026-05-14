# Jwala Lakshmi Jewellers

Private jewellery marketplace with a Next.js frontend and FastAPI backend.

## What This App Does

- Vendor login with forced password change for new vendor accounts.
- Vendor home feed showing real designs from other vendors.
- Vendor post studio with camera/upload, up to 4 images, crop/rotate/enhance/text overlay, and Cloudinary upload.
- Vendor profile with post visibility controls, delete post, and multi-image sliders.
- Vendor request tracking page.
- Admin dashboard for vendors, requests, collections, prices, profit, and request status.

## Project Structure

```text
.
├── app/                 # Next.js app routes
├── components/          # Shared frontend components
├── backend/             # FastAPI backend
│   ├── api/             # API routers
│   ├── core/            # Config/security
│   ├── db/              # SQLAlchemy models/session
│   ├── schemas/         # Pydantic schemas
│   ├── services/        # Cloudinary upload service
│   └── alembic/         # Database migrations
└── public/              # Static assets
```

## Requirements

- Node.js 20 or newer
- Python 3.11 or newer
- PostgreSQL 13 or newer
- Cloudinary account

## Database Setup

Create a PostgreSQL database named `jewelbridge`.

Using `psql`:

```bash
psql -U postgres
CREATE DATABASE jewelbridge;
\q
```

Or from the backend folder, after setting your PostgreSQL password in `backend/.env`, run:

```bash
cd backend
python create_db.py
```

## Backend Setup

From the project root:

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
```

Edit `backend/.env`:

```env
DATABASE_URL=postgresql+asyncpg://postgres:YOUR_POSTGRES_PASSWORD@localhost:5432/jewelbridge
SECRET_KEY=change-this-to-a-long-random-secret
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=1440
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Run migrations:

```bash
alembic upgrade head
```

Create the admin user:

```bash
python seed_admin.py
```

Default admin credentials from `seed_admin.py`:

```text
Email: admin@jl-jewellers.local
Password: Admin@2003
```

Start FastAPI:

```bash
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

Backend runs at:

```text
http://localhost:8000
http://localhost:8000/docs
```

## Frontend Setup

Open a new terminal from the project root:

```bash
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:3000
```

The frontend automatically calls the backend at `http://127.0.0.1:8000/api` when opened on localhost.

Optional frontend environment override:

```env
NEXT_PUBLIC_API_BASE=http://127.0.0.1:8000/api
```

## Run Everything Locally

Terminal 1:

```bash
cd backend
venv\Scripts\activate
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

Terminal 2:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Important Notes

- Do not commit `backend/.env`.
- Do not commit `backend/venv`, `.next`, or `node_modules`.
- Cloudinary upload requires valid `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`.
- If port `8000` is blocked on Windows, run the backend as administrator or free the port and try again.

## Useful Commands

Frontend:

```bash
npm run lint
npm run build
```

Backend:

```bash
cd backend
alembic upgrade head
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```
