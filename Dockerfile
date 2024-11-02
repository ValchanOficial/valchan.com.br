FROM node:18-alpine

WORKDIR /usr/src/app

COPY . ./

RUN corepack enable

RUN yarn cache clean && yarn install 

COPY . .

EXPOSE 8000

CMD ["yarn", "dev"]
