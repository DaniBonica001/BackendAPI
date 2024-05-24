# Use the official Node.js image as a base image
FROM node:21

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json from the root directory to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code from the src directory to the working directory
COPY src ./src

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
