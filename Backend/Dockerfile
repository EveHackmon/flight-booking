# Use a base Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the server listens on
EXPOSE 8080

# Start the server
CMD ["npm", "start"]
