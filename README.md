# Bare and Best Frontend

A modern, responsive pharmacy e-commerce and management system built with React.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A running instance of the backend server

## Environment Setup

1. Create a `.env` file in the root directory:
```env
VITE_SERVER_URL=http://your-backend-url
```

## Installation

1. Clone the repository:
```bash
git 
cd pharma_frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## Key Features

- **User Authentication**
  - Login/Signup system
  - JWT-based authentication
  - Protected routes

- **Product Management**
  - Browse medicines and healthcare products
  - Search functionality
  - Category filtering

- **Shopping Cart**
  - Add/remove items
  - Quantity management
  - Cart persistence

- **User Dashboard**
  - Order history
  - Profile management
  - Prescription uploads

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Icons:** React Icons
- **HTTP Client:** Native Fetch API

## Project Structure

```
pharma_frontend/
├── src/
│   ├── components/
│   │   ├── forms/
│   │   ├── layout/
│   │   └── shared/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   └── assets/
├── public/
└── package.json
```

## Running Tests

```bash
npm run test
```

## Building for Production

```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@Bare and Best.com or open an issue in the repository.
