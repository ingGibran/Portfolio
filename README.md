# 🚀 Alejandro Gibrán Zavala González - Personal Portfolio

A modern, responsive personal portfolio website built with React, Vite, and TailwindCSS, featuring a FastAPI backend for contact form functionality.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-teal)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Data Structure](#data-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)

---

## 🌟 Overview

This portfolio showcases the professional profile of **Alejandro Gibrán Zavala González**, a Backend & ML Developer specializing in Python-based backend systems and machine learning solutions.

---

## 📊 Data Structure

All portfolio data is centralized in `src/data/constants.js`. Here's what the application stores:

### 👤 Personal Information

| Field            | Description                                    |
|------------------|------------------------------------------------|
| `name`           | Full name of the developer                     |
| `role`           | Professional title/role                        |
| `valueStatement` | Brief professional value proposition           |
| `cvLink`         | Link to downloadable CV/Resume                 |
| `email`          | Contact email address                          |

---

### 📝 About Section

| Field       | Description                                |
|-------------|--------------------------------------------|
| `background`| Detailed professional background paragraph |
| `highlights`| Array of key highlights with title, description, and icon |

**Highlights Structure:**
- `title` - Highlight title (e.g., "Python Backend")
- `description` - Brief description of the highlight
- `icon` - Lucide React icon component

---

### 🛠️ Skills Data

Skills are organized by category:

| Category    | Skills                                                              |
|-------------|---------------------------------------------------------------------|
| **Backend** | Python, Java, Django, Django Rest Framework, FastAPI, Pydantic, SQLModel |
| **Frontend**| HTML, CSS, JavaScript                                               |
| **Databases**| PostgreSQL, MySQL, SQLite, Apache                                  |
| **Tools**   | Git / GitHub, Linux, Render, Vercel                                 |

Each category includes:
- `icon` - Lucide React icon
- `color` - Gradient color classes
- `skills` - Array of skill names

---

### 💼 Projects Data

| Field        | Description                                     |
|--------------|-------------------------------------------------|
| `id`         | Unique project identifier                       |
| `name`       | Project name                                    |
| `description`| Brief project description                       |
| `image`      | Path to project screenshot/image                |
| `techStack`  | Array of technologies used                      |
| `githubLink` | GitHub repository URL                           |
| `liveLink`   | Live demo/deployment URL                        |
| `featured`   | Boolean indicating if project is featured       |

**Current Projects:**
1. **Heart Failure Prediction** - ML-based REST API for health risk detection
2. **House Price Predictor** - ML-powered housing price estimation API

---

### 💻 Experience Data

| Field         | Description                               |
|---------------|-------------------------------------------|
| `id`          | Unique experience identifier              |
| `company`     | Company/organization name                 |
| `role`        | Job title/position                        |
| `period`      | Employment period (e.g., "Aug 2023 - Dec 2023") |
| `description` | Detailed description of responsibilities  |
| `technologies`| Array of technologies used in the role    |

**Current Experience Entries:**
1. **Citelis** - Software Development Intern (Aug 2023 - Dec 2023)
2. **Citelis** - Analyst Intern (Aug 2025 - Present)
3. **Home** - Personal Projects (Ongoing)

---

### 🎓 Education Data

| Field        | Description                               |
|--------------|-------------------------------------------|
| `id`         | Unique education identifier               |
| `institution`| School/university name                    |
| `degree`     | Degree title                              |
| `period`     | Study period                              |
| `description`| Description of coursework/focus areas     |
| `status`     | Current status (e.g., "In Progress")      |
| `logo`       | Path to institution logo (optional)       |

**Current Education Entries:**
1. **Instituto Tecnológico de Morelia** - B.Eng. in Computer Systems Engineering
2. **Self-Study** - Continuous independent learning

---

### 🔗 Social Links

| Field  | Description                    |
|--------|--------------------------------|
| `name` | Platform name                  |
| `url`  | Profile/contact URL            |
| `icon` | Lucide React icon component    |

**Available Social Links:**
- 📧 Email
- 💼 LinkedIn
- 🐙 GitHub

---

### 🧭 Navigation Links

| Field  | Description                    |
|--------|--------------------------------|
| `name` | Section name                   |
| `href` | Anchor link to section         |

**Navigation Sections:**
- About
- Skills
- Projects
- Experience
- Education
- Contact

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool
- **TailwindCSS 4.1.18** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Backend
- **FastAPI** - Python web framework
- **FastAPI Mail** - Email functionality
- **Pydantic** - Data validation

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Python 3.9+
- npm or yarn

### Frontend Setup

```bash
cd design
npm install
npm run dev
```

The frontend runs on `http://localhost:5173`

### Backend Setup

```bash
cd api
python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate
pip install fastapi fastapi-mail python-dotenv uvicorn
uvicorn main:app --reload
```

The API runs on `http://localhost:8000`

### Environment Variables

Create a `.env` file in the `api` directory:

```env
MAIL_PASSWORD=your_gmail_app_password
```

---

## 📡 API Documentation

### Contact Endpoint

**POST** `/contact`

Sends a contact form submission via email.

**Request Body:**
```json
{
  "email_visitor": "visitor@example.com",
  "subject": "Hello!",
  "message": "Your message here..."
}
```

**Response:**
```json
{
  "message": "Gracias por contactarnos. Hemos recibido tu mensaje."
}
```

---

## 📁 Project Structure

```
Portfolio/
├── api/                    # FastAPI Backend
│   ├── main.py            # API endpoints & email logic
│   └── .env               # Environment variables
│
└── design/                 # React Frontend
    ├── public/            # Static assets (images, logos)
    ├── src/
    │   ├── components/    # React components
    │   │   ├── About.jsx
    │   │   ├── Contact.jsx
    │   │   ├── Education.jsx
    │   │   ├── Experience.jsx
    │   │   ├── Hero.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── Projects.jsx
    │   │   └── Skills.jsx
    │   ├── data/
    │   │   └── constants.js  # All portfolio data
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── package.json
    ├── tailwind.config.js
    └── vite.config.js
```

---

## 📄 License

This project is personal and not intended for redistribution.

---

## 📬 Contact

- **Email:** alegizago@gmail.com
- **LinkedIn:** [Alejandro Gibrán Zavala González](https://www.linkedin.com/in/alejandro-gibr%C3%A1n-zavala-gonz%C3%A1lez-517384358/)
- **GitHub:** [ingGibran](https://github.com/ingGibran)
