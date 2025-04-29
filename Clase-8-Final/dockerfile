FROM node:18.20.2-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 8080
CMD ["npm","run","dev"]
