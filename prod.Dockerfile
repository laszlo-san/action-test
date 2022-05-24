FROM strapi/base:14

ENV NODE_ENV production

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .
RUN yarn build

RUN echo "in production"

EXPOSE 1337
CMD ["yarn", "start"]
