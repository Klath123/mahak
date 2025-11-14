# Mahak

![License](https://img.shields.io/badge/license-ISC-green)

## 📝 Description

**Mahak** is a full-stack e-commerce application for a luxury perfume shop. It features a responsive frontend built with React, Vite, and styled using Material-UI and Tailwind CSS. The backend is a Node.js/Express API that manages product data, reviews, and testimonials from a MongoDB database, with image assets handled by Cloudinary.

## 🚀 Deployment

**Live Application(for desktop only)**: [Add Your Deployed Link Here](https://mahak-1.onrender.com/)

## ✨ Features

- **Product Catalog**: Browse perfume collections and view detailed product pages with multiple images, descriptions, ingredients, and available sizes
- **Customer Engagement**: Users can submit product reviews with ratings and comments
- **Dynamic Content**: A dedicated section displays testimonials fetched from the backend
- **User Interaction**: Includes a functional contact form for inquiries and a newsletter subscription feature
- **Data Seeding**: A script is provided to populate the database with sample products and testimonials for quick setup and demonstration

## 🛠️ Tech Stack

**Frontend**: React, Vite, Material-UI, Tailwind CSS, Axios

**Backend**: Node.js, Express.js, Mongoose

**Database**: MongoDB

**Image Storage**: Cloudinary

## 📦 Key Dependencies

### Backend
```
express: ^5.1.0
mongoose: ^8.19.3
cloudinary: ^2.8.0
cors: ^2.8.5
dotenv: ^17.2.3
nodemon: ^3.1.11
```

### Frontend
```
@mui/icons-material: ^7.3.5
react: Latest
vite: Latest
axios: Latest
tailwindcss: Latest
```

## 📁 Project Structure

```
.
├── backend
│   ├── config
│   │   └── db.js
│   ├── images
│   │   ├── aurora-1.webp
│   │   ├── aurora-2.webp
│   │   ├── citrus-1.webp
│   │   ├── citrus-2.webp
│   │   ├── lavender-1.webp
│   │   ├── lavender-2.webp
│   │   ├── noir-1.webp
│   │   ├── ocean-1.webp
│   │   ├── ocean-2.webp
│   │   ├── oud-1.webp
│   │   ├── oud-2.webp
│   │   ├── oudrose-1.webp
│   │   ├── oudrose-2.webp
│   │   ├── saffron-1.webp
│   │   └── saffron-2.webp
│   ├── models
│   │   ├── Contact.js
│   │   ├── Newsletter.js
│   │   ├── Product.js
│   │   ├── Review.js
│   │   └── Testimonial.js
│   ├── routes
│   │   ├── contact.js
│   │   ├── newsletter.js
│   │   ├── product.js
│   │   └── testimonialRoutes.js
│   ├── seed.js
│   ├── server.js
│   └── package.json
└── frontend
    ├── public
    │   └── logo.ico
    ├── src
    │   ├── assets
    │   │   ├── clean-textile.png
    │   │   └── snowflake.png
    │   ├── components
    │   │   ├── AboutBanner.jsx
    │   │   ├── AddReview.jsx
    │   │   ├── CollectionsSection.jsx
    │   │   ├── ContactSection.jsx
    │   │   ├── FeaturedProducts.jsx
    │   │   ├── Footer.jsx
    │   │   ├── HeroBanner.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── ProductCard.jsx
    │   │   ├── ProductDetails.jsx
    │   │   ├── ProductFeaturesBar.jsx
    │   │   ├── TestimonialSection.jsx
    │   │   └── WhyChooseUs.jsx
    │   ├── pages
    │   │   ├── Collections.jsx
    │   │   ├── ContactPage.jsx
    │   │   ├── Home.jsx
    │   │   └── ProductDetailPage.jsx
    │   ├── App.jsx
    │   ├── App.css
    │   ├── api.js
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    ├── eslint.config.js
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (Node Package Manager)
- MongoDB (local instance or a cloud service like MongoDB Atlas)
- Cloudinary account for image management

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   
   Create a `.env` file in the backend directory and add the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Seed the Database (Optional):**
   
   To populate the database with sample products and testimonials, run the seed script:
   ```bash
   npm run seed
   ```

5. **Start the Server:**
   ```bash
   npm run dev
   ```
   
   The backend API will now be running on `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   
   Create a `.env` file in the frontend directory and add the backend API URL:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   
   The application will be available at the URL provided in your terminal (usually `http://localhost:5173`).

## ⚡ Run Commands

### Backend
- **start**: `npm run start` (For production)
- **dev**: `npm run dev` (For development with hot-reloading)
- **seed**: `npm run seed` (To populate the database)

### Frontend
- **dev**: `npm run dev` (Start development server)
- **build**: `npm run build` (Build for production)
- **preview**: `npm run preview` (Preview production build)

## 🔌 API Endpoints

The backend provides the following endpoints:

- `GET /api/products` - Get a list of all products
- `GET /api/products/:slug` - Get details for a single product by its slug
- `POST /api/products/:slug/reviews` - Add a new review to a specific product
- `GET /api/testimonials` - Get all customer testimonials
- `POST /api/newsletter` - Subscribe an email to the newsletter
- `POST /api/contact` - Submit a message from the contact form

## 🔮 Future Additions

- **Admin Dashboard**: A secure admin panel to manage the application
- **Product Management**: Ability for admins to add, update, and delete products from the dashboard
- **Newsletter Broadcasting**: A feature for the admin to write and send newsletters to all subscribed email addresses
- **Enhanced Responsiveness**: Further optimizations for all device sizes, especially tablets and large monitors
- **User Authentication**: Allow users to create accounts, log in, and manage their profiles

## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/Klath123/mahak.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.

## 📜 License

This project is licensed under the ISC License.

---
