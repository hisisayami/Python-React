# 🧠 Skin Disease Classifier (Full Stack Project)

A full-stack machine learning web app that predicts skin diseases from uploaded images using a PyTorch (ResNet-18) model served via FastAPI, and a React (Vite + TypeScript) frontend for user interaction.

⚙️ Tech Stack
Backend: Python, FastAPI, PyTorch, Torchvision, Uvicorn
Frontend: React (Vite + TypeScript), TailwindCSS, Axios

📁 Project Structure
skin-disease-classifier/
├── backend/ → FastAPI + PyTorch backend
│   ├── api.py | main.py | requirements.txt | skin_disease_model.pth
├── frontend/ → React + TypeScript frontend
│   ├── src/ | package.json | vite.config.ts
└── README.md

🚀 Getting Started
1️⃣ Clone Repo
git clone https://github.com/<your-username>/skin-disease-classifier.git
cd skin-disease-classifier

2️⃣ Backend Setup
cd backend
python -m venv venv
venv\Scripts\activate   # (Windows)
# or
source venv/bin/activate   # (macOS/Linux)
pip install -r requirements.txt

Example requirements.txt:
torch
torchvision
fastapi
uvicorn
pillow
scikit-learn
seaborn
matplotlib
python-multipart

Run backend:
uvicorn api:app --host 0.0.0.0 --port 8000 --reload
→ Open http://localhost:8000/docs and test POST /predict

3️⃣ Frontend Setup
Open new terminal (keep backend running)
cd ../frontend
npm install
npm run dev
→ Open http://localhost:5173

🧪 Test the App
1. Backend running on port 8000
2. Frontend running on port 5173
3. Go to frontend, upload an image → view predicted disease

🛠 Common Issues
ModuleNotFoundError: fastapi → pip install fastapi uvicorn
CORS error in browser → Add CORSMiddleware in api.py with allow_origins=["*"]
Address already in use → Change port (--port 8001)
Model not found → Ensure skin_disease_model.pth exists in backend/

🐳 Optional Docker Setup
docker-compose.yml
version: "3.8"
services:
  backend:
    build: ./backend
    ports:
      - "8000:8000"
  frontend:
    build: ./frontend
    ports:
      - "5173:5173"

Run everything:
docker compose up --build

🧾 License
MIT License — free to use and modify.

👨‍💻 Author
Your Name
github.com/<your-username>
