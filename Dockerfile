FROM mcr.microsoft.com/playwright:v1.36.2-focal

WORKDIR /work

COPY package*.json ./

RUN apt-get update && apt-get install -y \
    build-essential \
    python3

RUN yarn install
RUN yarn build
RUN npx playwright install --with-deps

CMD ["yarn", "vrt"]
