FROM mcr.microsoft.com/playwright:v1.25.0-focal

WORKDIR /work

COPY package*.json ./

RUN yarn

CMD ["npx", "playwright", "test"]
