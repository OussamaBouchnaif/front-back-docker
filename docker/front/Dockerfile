# Base image for Node.js
FROM node:20

# Set working directory for frontend
WORKDIR /app

# Install frontend dependencies
COPY ../../frontend/package.json ../../frontend/package-lock.json ./
RUN npm install

# Copy frontend files
COPY ../../frontend .

# Build the frontend app
RUN npm run build

# Expose port for frontend
EXPOSE 3000

# Start the frontend server in production mode
CMD ["npm", "run", "dev"]
