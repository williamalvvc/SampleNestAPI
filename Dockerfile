FROM node:16.13.1-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -D
COPY . .
RUN npm run build

FROM node:16.13.1-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .
COPY --from=build /usr/src/app/dist ./dist
EXPOSE 5000
CMD npm run start:prod