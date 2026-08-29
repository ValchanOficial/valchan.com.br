FROM node:24-alpine

WORKDIR /usr/src/app

COPY . ./

RUN corepack enable

# --immutable falha o build se o lockfile divergir do package.json, evitando
# que versões não revisadas entrem na imagem.
RUN yarn install --immutable

EXPOSE 8000

CMD ["yarn", "dev"]
