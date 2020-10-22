FROM node
COPY . /app
WORKDIR /app
EXPOSE 8000
CMD pm2 start npm --watch --name danboard-be-ts -- run start