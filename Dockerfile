FROM node
COPY . /app
WORKDIR /app
RUN yarn config set registry 'https://registry.npm.taobao.org'
RUN yarn
EXPOSE 8000
CMD pm2 start npm --watch --name danboard-be-ts -- run start