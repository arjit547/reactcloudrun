# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the React app
RUN npm run build

# Serve using a simple Node static server
RUN npm install -g serve

# Default port for serve is 3000
EXPOSE 3000

# Serve the build folder
CMD ["serve", "-s", "build"]
