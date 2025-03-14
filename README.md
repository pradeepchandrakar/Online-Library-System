# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



Here’s a **README.md** file for your book management app. It includes setup instructions, features, and usage details.  

---

### 📖 **Book Management App**  

A simple book management app built with **React, Redux Toolkit, and React Router**. Users can add, browse, and delete books, with data stored **persistently in `localStorage`**.  

---

## 🚀 **Features**  
✔️ Add new books with details like title, author, publish date, and cover image.  
✔️ Browse and search books by category.  
✔️ View book details on a separate page.    
 

---

## 🛠 **Tech Stack**  
- **Frontend:** React, Redux Toolkit, React Router  
- **State Management:** Redux Toolkit    
- **Styling:** Tailwind CSS  

---

## 📂 **Project Structure**  
```
📦 book-management-app
├── 📂 src
│   ├── 📂 components
│   │   ├── Navbar.jsx
│   ├── 📂 pages
│   │   ├── Home.jsx
│   │   ├── BrowseBooks.jsx
│   │   ├── BookDetails.jsx
│   │   ├── AddBookForm.jsx
│   │   ├── NotFound.jsx
│   ├── 📂 redux
│   │   ├── booksSlice.js
│   |   |── store.jsx
    ├── App.jsx
│   ├── main.jsx
├── 📜 package.json
├── 📜 README.md
```

---

## 🏗 **Installation & Setup**  
1️⃣ **Clone the repository:**  
```sh
git clone https://github.com/pradeepchandrakar/Online-Library-System
cd ONLINE_LIBRARY
```

2️⃣ **Install dependencies:**  
```sh
npm install
```

3️⃣ **Run the app:**  
```sh
npm run dev
```

4️⃣ **Open in browser:**  
```
http://localhost:5173/
```

---

## 🔥 **Usage**  

### ➕ **Add a Book**  
- Go to the "Add Book" page and enter book details.  
- You can upload an image or provide an image URL.  
- Click "Add Book" to save it permanently.  

### 📚 **Browse Books**  
- Navigate to the "Browse Books" page.  
- View all added books along with their details.  
 

---

## 📌 **Future Improvements**  
✅ Implement a **search** feature.  
✅ Add **categories & filters**.  
✅ Integrate with a **backend (MongoDB, Firebase, or Supabase)**.  
✅ Implement **user authentication**.  

---

## 💡 **Contributing**  
Feel free to contribute! Fork the repository and submit a pull request.  

---

## 📜 **License**  
MIT License © 2025 pradeep chandrakar 

