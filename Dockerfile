FROM node:19-alpine

RUN mkdir -p /home/app

COPY . /home/app

CMD ["node", "/home/app/dist/index.js"]

EXPOSE 3001