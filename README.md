# Ecommerce-in-springBoot-Backend-end-

# 🛒 Ecommerce Backend — Spring Boot

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white)
![Lombok](https://img.shields.io/badge/Lombok-pink?style=for-the-badge)

> A RESTful e-commerce backend built with Spring Boot, MySQL, and JPA/Hibernate.
> Supports product management, cart operations, stock tracking, and price filtering.


---

## 🏗️ Architecture



<img width="893" height="867" alt="WhatsApp Image 2026-04-19 at 1 49 10 PM" src="https://github.com/user-attachments/assets/2d98f627-869e-4bc9-9ca1-2422e365c837" />


## 🚀 Tech Stack

| Layer       | Technology                  |
|-------------|----------------------------|
| Language    | Java 25                    |
| Framework   | Spring Boot                |
| Database    | MySQL                      |
| ORM         | Spring Data JPA / Hibernate|
| Build Tool  | Maven                      |
| Utilities   | Lombok                     |

---

## 📁 Project Structure

```
com.ecommerce
├── Controller/     → REST API endpoints
├── Database/       → JPA Entities (Products, Cart)
├── Repository/     → Spring Data JPA repositories
├── Service/        → Business logic
└── Exception/      → Global exception handling
```

---

## 📌 API Endpoints

| Method   | Endpoint                                        | Description                        |
|----------|-------------------------------------------------|------------------------------------|
| POST     | `/addProducts`                                  | Add a new product                  |
| GET      | `/AllProducts`                                  | Get all products                   |
| GET      | `/AllProducts/getproduct/{id}`                  | Get product by ID                  |
| POST     | `/AllProducts/getproduct/{id}/add_to_cart?q=2`  | Add product to cart                |
| GET      | `/getproduct/add_to_cart/buynow`                | Calculate total & checkout         |
| PUT      | `/update_product/{id}?cr=5`                     | Update product + restock           |
| DELETE   | `/cancel_order`                                 | Clear the cart                     |
| GET      | `/price_range?min=100&max=500`                  | Filter products by price range     |
| DELETE   | `/restart_db`                                   | Clear all products (dev only)      |

---

## ⚙️ Setup & Run

### Prerequisites
- Java 17+
- MySQL running on port `3306`
- Maven

### 1. Clone the repository
```bash
git clone https://github.com/acharnikhil72-commits/Ecommerce-in-springBoot-Backend-end-.git
cd Ecommerce-in-springBoot-Backend-end-
```

### 2. Configure the database
Update `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

### 3. Run
```bash
mvn spring-boot:run
```
Server starts at `http://localhost:8080`

---

## 📦 Sample Request — Add Product

```json
POST /addProducts
Content-Type: application/json

{
  "P_name": "Wireless Mouse",
  "P_quantity": "50",
  "P_price": 999
}
```

---

## ⚠️ Exception Handling

| Exception        | HTTP Status | Trigger                              |
|------------------|-------------|--------------------------------------|
| `ProductNotFound`| 404         | Product ID doesn't exist             |
| `OutofStock`     | 404         | Requested quantity > available stock |
| Generic          | 500         | Unexpected server errors             |

---

## 🔐 Coming Soon

- [ ] Spring Security integration
- [ ] JWT authentication & authorization
- [ ] User entity with login/register
- [ ] DTO layer for clean API contracts


---

## 🔗 Author

**Nikhil** — [@acharnikhil72-commits](https://github.com/acharnikhil72-commits)

> ⭐ If you found this helpful, consider giving the repo a star!
