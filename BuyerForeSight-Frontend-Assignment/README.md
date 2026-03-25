# BuyerForeSight Frontend Assignment

The goal is to Build a **User Directory Dashboard** using the API: https://jsonplaceholder.typicode.com/users.

---

## 🚀 User Directory Dashboard (React)

### 🧠 Key Concepts Used

  - API fetching
  - State management (useState, useEffect)
  - Client-side search & sorting
  - Routing with React Router
  - Component-based architecture

---


## 🧱 Project Setup :

``` 
  npx create-react-app user-directory
  cd user-directory
  npm install react-router-dom
  npm start

```

---

## 📁 Folder Structure

```
    src/
  ├── components/
  │    ├── UserTable.js
  │    ├── SearchBar.js
  │
  ├── pages/
  │    ├── Dashboard.js
  │    ├── UserDetail.js
  │
  ├── services/
  │    └── api.js
  │
  ├── App.js
  └── index.js

```

---

## ✅ Features Covered

  ✔ Fetch users from API
  ✔ Display in table (Name, Email, Phone, Company)
  ✔ Search (name + email)
  ✔ Sorting (Name & Company, ASC/DESC)
  ✔ Click row → Navigate to detail page
  ✔ Full user detail view

---

## 💡Bonus Ideas (to stand out)

  - [Add loading spinner]
  - [Add pagination]
  - [Add debounce for search]
  - [Add UI library (Material UI)]
  - [Add error handling]

---