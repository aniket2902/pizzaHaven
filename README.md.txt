# 🍕 PizzaHaven - Online Pizza Ordering System

PizzaHaven is a seamless and efficient online pizza ordering system. Customers can browse the menu, customize their pizzas, place orders, and make secure payments. The system features location-based store selection, real-time order tracking, and role-based authentication for a smooth user experience.

Built with a microservices architecture, the backend is powered by Spring Boot, while the frontend is developed using React.js and Tailwind CSS. The app ensures efficient state management with Redux and is fully responsive on both desktop and mobile. Deployed on AWS with Dockerized services, it guarantees scalability and reliability.

## 🚀 Features

- **User Roles**:
  - 👥 **Customers**: Browse menu, place orders, track order status.
  - 🏪 **Outlet Managers**: Manage orders, update inventory.
  - 🛠️ **Admins**: Oversee all outlets, assign/remove managers.

- **Key Functionalities**:
  - 📍 Location-based outlet selection
  - 🔐 Secure authentication with JWT
  - 📢 Real-time order status updates
  - ✅ Multi-step order processing
  - 💳 Secure payments via Razorpay
  - ⭐ Customer reviews & feedback

## 🛠️ Tech Stack

### 🎨 Frontend:
- ⚛️ React.js
- 🗂️ Redux for state management
- 🎨 Tailwind CSS for styling

### ⚙️ Backend:
- ☕ Spring Boot (Microservices architecture)
- 🌐 API Gateway for authentication & routing
- 🛢️ MySQL for database management

### 📡 Additional Services:
- ⏳ Background task processing
- 🐳 Dockerized deployment on AWS

## 📌 Setup Instructions

### ✅ Prerequisites:
- 🖥️ Maven
- ☕ Java 17+
- 🛢️ MySQL
- 🏗️ IntelliJ IDEA (Recommended for backend development)

### 📥 Installation:

1. **Clone the Repository**
   ```sh
   git clone https://github.com/aniket2902/pizzaHaven.git
   cd pizzahaven
   ```

2. **Setup Backend**
   - Configure the database connection in `application.yml`.
   - Start microservices in the following order:
     1. **Discovery Service** - Start Eureka Server
     2. **API Gateway** - Run API Gateway service
     3. **Other Microservices** - Start each backend service one by one
   - Build and run backend services:
     ```sh
     mvn clean install
     mvn spring-boot:run
     ```

3. **Setup Frontend**
   - Navigate to the frontend folder:
     ```sh
     cd frontend
     ```
   - Install dependencies and start the development server:
     ```sh
     npm install
     npm run dev
     ```

Enjoy your PizzaHaven experience! 🍕🚀

