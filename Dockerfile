# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Install Bun
RUN apk add --no-cache curl bash && \
    curl -fsSL https://bun.sh/install | bash && \
    mv /root/.bun/bin/bun /usr/local/bin/

COPY package.json bun.lockb* ./
RUN bun install || npm install

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]
