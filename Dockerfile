FROM node:18

WORKDIR /home
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

CMD ["yarn", "dev:server"]