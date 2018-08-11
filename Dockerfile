FROM node:8.11.3

MAINTAINER KJSMAN <contact@kjsman.me>

RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN npm install

EXPOSE 6537

CMD ["npm", "start"]
