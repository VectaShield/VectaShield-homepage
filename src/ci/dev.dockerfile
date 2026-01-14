FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

# Leave out the COPY . . so we rely on volume mount

EXPOSE 5173

CMD ["npm", "run", "dev"]
