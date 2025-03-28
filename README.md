
# Employee Management System

## 📌 Project Overview
The **Employee Management System** is a full-stack web application built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). It provides role-based access where **admins** can manage employees and **employees** can view their details.

## 🚀 Features
### **Admin Features**
- 🔹 **Add** new employees
- 🔹 **Delete** employees
- 🔹 **Update** employee details
- 🔹 **View** all employee details
- 🔹 **Add and remove users** (admin can manage system users)

### **Employee Features**
- 🔹 **View** their personal details

## 🛠️ Technologies Used
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **State Management:** Context API
- **Other:** JWT Authentication, Mongoose ORM

## 📂 Project Structure
```
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│
├── frontend
│   ├── components
│   ├── pages
│   ├── App.js
│
├── database
│   ├── schema.js (MongoDB schema)
│
├── README.md
```

## 🚀 Getting Started
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/employee-management.git
cd employee-management
```

### **2️⃣ Install Dependencies**
```sh
# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install
```

### **3️⃣ Configure Database**
- Create a `.env` file in the **backend** folder and add the following:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### **4️⃣ Start the Application**
```sh
# Start backend server
cd backend && npm run dev

# Start frontend
cd ../frontend && npm start
```

## 📌 Future Enhancements
- ✅ Employee login system with authentication
- ✅ Role-based access control (RBAC)
- ✅ Performance tracking system

## 📜 License
This project is licensed under the **MIT License**.

![Screenshot 2024-04-28 123637](https://github.com/user-attachments/assets/09eec48f-1a32-4674-a19d-d220fa283aaa)
![Screenshot 2024-04-28 123706](https://github.com/user-attachments/assets/62f99d01-07aa-4914-90eb-94ff60a310be)
![Screenshot 2024-04-28 124035](https://github.com/user-attachments/assets/85ffd3c4-9e5d-4b43-9389-1b470b48efb6)

![Screenshot 2024-04-28 133949](https://github.com/user-attachments/assets/485bd520-5d4e-4b84-8876-f42ac96df217)


