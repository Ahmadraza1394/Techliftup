# TechLiftUp Project Documentation

## Project Overview
TechLiftUp is a full-stack web application built with a React frontend and Node.js/Express backend. The application includes a chatbot feature and lead management system, utilizing Firebase for data storage.

## Technology Stack

### Frontend
- **Framework**: React (v18.3.1)
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Key Libraries**:
  - `react-router-dom`: For routing
  - `framer-motion`: For animations
  - `chart.js` & `react-chartjs-2`: For data visualization
  - `emailjs-com`: For email functionality
  - `axios`: For API requests

### Backend
- **Framework**: Express.js
- **Database**: Firebase Firestore
- **Authentication**: Basic Auth for admin routes
- **Key Features**:
  - CORS configuration
  - Environment variable support
  - Firebase Admin SDK integration

## System Architecture

### Backend Components

1. **Server Configuration (`server.js`)**
   - Express server setup
   - CORS configuration with allowed origins
   - Firebase Admin initialization
   - Firestore database connection
   - Global middleware setup

2. **Routes (`/routes`)**
   - `chatRoutes.js`: Handles all chat-related endpoints
     - `/health`: Health check endpoint
     - `/test-email`: Email testing endpoint
     - `/chat`: Main chat functionality
     - `/leads`: Protected endpoint for lead management (Basic Auth)

3. **Services**
   - `emailService.js`: Handles email functionality
   - `openaiService.js`: Integrates with OpenAI for chatbot functionality

4. **Models**
   - `leadModel.js`: Defines the structure for lead data

### Frontend Structure

1. **Core Components**
   - Built with React and Vite
   - Utilizes modern React features (hooks, context)
   - Responsive design with TailwindCSS

2. **Key Features**
   - Interactive UI with Framer Motion animations
   - Data visualization using Chart.js
   - Form handling and validation
   - Email integration
   - Responsive design

## Security Features

1. **Backend Security**
   - CORS protection with whitelisted origins
   - Basic Authentication for admin routes
   - Environment variable usage for sensitive data
   - Firebase Admin SDK for secure database access

2. **Frontend Security**
   - API key protection
   - Protected routes
   - Form validation and sanitization

## API Endpoints

### Public Endpoints
- `GET /health`: Health check
- `POST /chat`: Chat functionality
- `GET /test-email`: Email testing

### Protected Endpoints
- `GET /leads`: Retrieve leads (requires Basic Auth)
  - Username: admin
  - Password: Protected via Basic Auth

## Development Setup

### Backend Setup
1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Set up environment variables:
   - Create `.env` file with:
     - `PORT`
     - `FRONTEND_URL`
     - `FIREBASE_SERVICE_ACCOUNT`

### Frontend Setup
1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```

## Build and Deployment

### Frontend Build
```bash
npm run build
```
- Outputs to `dist` directory
- Optimized for production

### Backend Deployment
- Requires Node.js environment
- Set up environment variables
- Configure Firebase credentials
- Set up CORS allowed origins

## Maintenance and Updates

### Backend
- Monitor Firebase usage and quotas
- Keep dependencies updated
- Check server logs for errors
- Monitor email service functionality

### Frontend
- Regular dependency updates
- Performance monitoring
- Browser compatibility testing
- UI/UX improvements

## Best Practices

1. **Code Organization**
   - Modular component structure
   - Separation of concerns
   - Consistent naming conventions

2. **Security**
   - Regular dependency updates
   - Secure environment variable handling
   - Input validation and sanitization

3. **Performance**
   - Code splitting
   - Lazy loading
   - Image optimization
   - Caching strategies

## Troubleshooting

Common issues and solutions:

1. **CORS Issues**
   - Check allowed origins in backend configuration
   - Verify request headers
   - Check frontend API call configuration

2. **Firebase Connection**
   - Verify service account credentials
   - Check Firebase rules
   - Monitor quota usage

3. **Email Service**
   - Verify email service configuration
   - Check spam filters
   - Monitor email delivery rates
