FROM node:16 as build 
WORKDIR /app
COPY package.json ./
RUN npm install

COPY . .
RUN npm run build
EXPOSE 3000

FROM ngnix:stable-alpine
COPY --from=build /app/build /usr/share/ngnix/html
COPY --from=build /app/ngnix /etc/ngnix/conf.d/
