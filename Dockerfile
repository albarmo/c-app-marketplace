# Secret Env
FROM alpine:3 as environment

RUN apk update && \
    apk add --no-cache git

RUN git clone https://MrAndreBRI:glpat-9BEyzjqtTysH8U3wxDbn@gitlab.ipnet.co.id/fruits/devops/secret.git

# Use official Node.js image as the base
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first for caching dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Copy Env
COPY --from=environment /secret/dragonfruit/.env-develop .env

# Set environment to production
ENV NODE_ENV=production

# Build the React app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start Nginx server
CMD ["npm", "start"]
