

````markdown
🎉 Blogging Platform

This is a full-stack **Blogging Platform** built using Node.js, Express, and MongoDB. It allows users to create, edit, and interact with blog posts. Users can also upload images, like posts, and search for content. Admins can moderate content through an admin panel.

📚 Table of Contents
✨ Features
🛠️ Installation and Setup
🚀 How to Run the Project
📂 File Structure
🖼️ Screenshots
📋 How to Use the App
💡 Key Functions Explained
🛠️ Dependencies
🌟 Credits
❓ FAQ
📧 Contact

---

✨ Features

- User authentication (Sign up / Login)
- Create, edit, and delete blog posts
- Upload images for posts
- Like posts and interact
- Admin panel to manage content
- Search functionality
- Responsive UI with EJS templates

---

🛠️ Installation and Setup

Follow these steps to set up and run the project on your local machine:

1. **Clone the Repository**

```bash
git clone https://github.com/abhishek0628/Blog.git
cd Blog
````

2. **Install Node.js**
   Ensure Node.js (version 18 or higher) is installed. You can download it from [nodejs.org](https://nodejs.org/).

3. **Install Dependencies**

```bash
npm install
```

4. **Set Up Environment Variables**

Create a `.env` file in the root directory and add:

```env
DB_URI=mongodb+srv://abhishek0628:<YourPassword>@cluster0.wvlla0f.mongodb.net/myblob?retryWrites=true&w=majority&appName=Cluster0
SESSION_SECRET=YourSuperSecretKey
PORT=3000
```

> Replace `<YourPassword>` with your actual MongoDB password.
> Do **not** push `.env` to GitHub. Add `.env` to `.gitignore`.

---

🚀 How to Run the Project

1. Open a terminal in the project directory.
2. Run the server:

```bash
npm start
```

3. Open your browser and visit: `http://localhost:3000`

---

📂 File Structure

```
Blog/
├── public/             # Static files (CSS, JS, images)
├── routes/             # Express route files
├── views/              # EJS templates
├── models/             # MongoDB models
├── controllers/        # Route controllers
├── .gitignore
├── package.json
└── server.js
```

---

🖼️ Screenshots (Example UI)

### Home Page

![Home Page](screenshots/Screenshot%202025-04-10%20at%2010.56.56%E2%80%AFPM.png)

### Create Post

![Create Post](screenshots/Screenshot%202025-04-10%20at%2010.58.54%E2%80%AFPM.png)

### Admin Panel

![Admin Panel](screenshots/Screenshot%202025-04-10%20at%2010.58.10%E2%80%AFPM.png)

> Replace the image paths with your actual screenshots.

---

📋 How to Use the App

1. **Sign Up / Login:** Create a user account or log in.
2. **Create a Post:** Add a blog post with title, content, and optional image.
3. **Interact:** Like posts or search content.
4. **Admin Panel:** Moderate posts and manage users (admin only).

---

💡 Key Functions Explained

* `createPost(data)` – Adds a new blog post to the database.
* `editPost(id, data)` – Updates an existing blog post.
* `deletePost(id)` – Deletes a post from the database.
* `uploadImage(file)` – Handles image uploads for posts.
* `searchPosts(query)` – Returns posts matching the search keywords.

---

🛠️ Dependencies

* **Node.js & Express.js:** Backend server
* **MongoDB & Mongoose:** Database
* **EJS:** Frontend templating
* **Express-session & bcrypt:** Authentication
* **Multer:** File uploads

---

🌟 Credits

* **MongoDB Atlas:** For the database
* **Express.js & Node.js:** Backend framework
* **EJS:** Frontend templates
* **Multer:** File upload handling

---

❓ FAQ

**Q: What is `DB_URI`?**
A: This is the connection string to your MongoDB database.

**Q: How to keep credentials safe?**
A: Use a `.env` file and add it to `.gitignore` to avoid pushing credentials to GitHub.

---

📧 Contact

For any questions or feedback, feel free to reach out:

* Email: [abhijn124@gmail.com](mailto:abhijn124@gmail.com)
* GitHub: [abhishek0628](https://github.com/abhishek0628)

```

```
