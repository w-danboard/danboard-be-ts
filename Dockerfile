FROM node
COPY . /app
WORKDIR /app
RUN yarn config set registry 'https://registry.npm.taobao.org'
RUN yarn
RUN npm install pm2 -g
EXPOSE 8000
CMD npm start