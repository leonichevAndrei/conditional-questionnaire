# Conditional Questionnaire

A React + TypeScript demo project that demonstrates **conditional questionnaire logic** — where certain questions appear dynamically depending on previous answers.  
It uses `json-server` as a lightweight mock API to store and fetch question data.

---

## 🧠 Features

- Dynamic question rendering based on conditions (e.g., “If answer is X → show next question”)
- TypeScript & React 18 architecture with reusable components
- Local mock backend (`json-server`) for storing questions and answers
- Styled-components for layout and UI design
- Modular structure (client/server separation)
- Popup start and finish screens

---

## 🧩 Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React 18, TypeScript, React Router 6, Styled-components |
| **Backend (Mock API)** | JSON Server |
| **Tools** | Concurrently, npm scripts, Fetch API |

---

## 📂 Project Structure

```
conditional-questionnaire/
│
├── client/                   # React application
│   ├── src/
│   │   ├── components/       # Questionnaire components
│   │   ├── styled-components/
│   │   ├── settings/
│   │   ├── types/
│   │   └── utils/
│   ├── package.json
│   └── tsconfig.json
│
├── server/
│   └── db.json               # Mock data for questions & answers
│
├── package.json              # Root-level scripts
└── README.md
```

---

## 🚀 Setup & Run

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Run both client and mock server
```bash
npm start
```
This will start:
- React app → http://localhost:3000  
- Mock API → http://localhost:3001/questionnaires

### 3️⃣ Or run separately
```bash
npm run client   # Only frontend
npm run server   # Only backend
```

---

## 📘 Example API (`db.json`)

```json
{
  "questionnaires": [
    {
      "id": 1,
      "questions": [
        {
          "id": 1,
          "type": { "select": true, "text": false },
          "conditional": false,
          "required": true,
          "question": "What language is your favorite?",
          "answer": ["JavaScript", "TypeScript", "CoffeeScript"]
        },
        {
          "id": 2,
          "type": { "select": false, "text": true },
          "conditional": { "questionId": 1, "answer": "TypeScript" },
          "required": false,
          "question": "Why do you like TypeScript?"
        }
      ]
    }
  ]
}
```