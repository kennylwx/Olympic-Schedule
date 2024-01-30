# Use a multi-platform base image
FROM --platform=linux/amd64 node:21-alpine

# Set the working directory inside the container
WORKDIR /web-apps

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "dev"]