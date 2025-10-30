
````markdown
# 🚗 **FASTag Recharge**

A **modern web application** built with **React 19**, **Vite 7**, and **Tailwind CSS v4** that enables users to recharge FASTags, check balances, and estimate tolls — all enhanced with **AI-powered assistance**.

---

## 🌟 **Features**

- 🔋 **FASTag Recharge** — Recharge from multiple providers easily  
- 💰 **Wallet Management** — View and manage your wallet balance  
- 📜 **Recharge History** — Track previous transactions  
- 🧠 **AI-Powered FAQ** — Get instant answers with Google Generative AI  
- 🛣️ **Toll Estimator** — Estimate toll costs before your trip  

---

## ⚙️ **Tech Stack**

| Category         | Technology                     |
|------------------|--------------------------------|
| Frontend         | React 19 + Vite 7              |
| Styling          | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Authentication   | Firebase 12                    |
| AI Integration   | `@google/generative-ai`        |
| Routing          | React Router DOM 7             |

---

## 🚀 **Getting Started**

Follow these steps to set up and run the project locally:

### 1️⃣ **Prerequisites**

Make sure you have these installed:
- **Node.js** (v18 or later)  
- **npm** (v9 or later)

Check your versions:
```bash
node -v
npm -v
````

---

### 2️⃣ **Clone the Repository**

```bash
git clone https://github.com/your-username/fastag-recharge.git
cd fastag-recharge
```

---

### 3️⃣ **Install Dependencies**

```bash
npm install
```

---

### 4️⃣ **Setup Tailwind CSS**

Install Tailwind and the Vite plugin:

```bash
npm install tailwindcss @tailwindcss/vite
```

Edit your `vite.config.js` and add the plugin:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

---

### 5️⃣ **Add Tailwind to Your CSS**

In your main CSS file (`src/index.css` or `src/style.css`), add:

```css
@import "tailwindcss";
```

✨ *That’s it — no `tailwind.config.js` or `postcss.config.js` needed!*

---

### 6️⃣ **Add Firebase & API Credentials**

Create a `.env` file in the project root and add your credentials:

```bash
VITE_API_KEY="YOUR_API_KEY"
VITE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
VITE_PROJECT_ID="YOUR_PROJECT_ID"
VITE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
VITE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
VITE_APP_ID="YOUR_APP_ID"
```

> 🛡️ Make sure `.env` is included in your `.gitignore` for security.

---

### 7️⃣ **Start the Development Server**

```bash
npm run dev
```

Then open your browser and go to:
👉 [http://localhost:5173](http://localhost:5173)

---

### 8️⃣ **Build for Production**

```bash
npm run build
```

---

## 📦 **Scripts**

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start development server     |
| `npm run build`   | Build project for production |
| `npm run lint`    | Run ESLint checks            |
| `npm run preview` | Preview production build     |

---

## 📚 **Dependencies**

| Package                 | Version | Description                 |
| ----------------------- | ------- | --------------------------- |
| `@google/generative-ai` | ^0.24.1 | Google AI SDK               |
| `@headlessui/react`     | ^2.2.9  | Accessible UI components    |
| `dotenv`                | ^17.2.3 | Environment variable loader |
| `firebase`              | ^12.4.0 | Authentication & Firestore  |
| `react`                 | ^19.1.1 | UI Library                  |
| `react-dom`             | ^19.1.1 | React DOM Renderer          |
| `react-router-dom`      | ^7.9.5  | Routing Library             |

---

## 🧑‍💻 **Dev Dependencies**

| Package                       | Version  |
| ----------------------------- | -------- |
| `@eslint/js`                  | ^9.36.0  |
| `@types/react`                | ^19.1.16 |
| `@types/react-dom`            | ^19.1.9  |
| `@vitejs/plugin-react`        | ^5.0.4   |
| `eslint`                      | ^9.36.0  |
| `eslint-plugin-react-hooks`   | ^5.2.0   |
| `eslint-plugin-react-refresh` | ^0.4.22  |
| `globals`                     | ^16.4.0  |
| `vite`                        | ^7.1.7   |
| `tailwindcss`                 | ^4.0.0   |
| `@tailwindcss/vite`           | ^4.0.0   |

---

## 🧠 **Example Usage**

```html
<h1 class="text-3xl font-bold underline text-blue-600">
  Welcome to FASTag Recharge 🚗
</h1>
```

---

## 🤝 **Contributing**

Pull requests are welcome!
For major changes, please open an issue first to discuss what you'd like to change.

---

## 🛡️ **License**

This project is licensed under the **MIT License** — feel free to use and modify it.

---

## ❤️ **Credits**

Developed with 💙 by **[Alok Dwivedi](https://github.com/Dwivedi-Alok)**

```

---


