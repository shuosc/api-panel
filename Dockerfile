FROM node:10.15.3-alpine as builder
COPY . /root/api-panel
WORKDIR /root/api-panel
RUN npm install -g yarn && yarn && yarn build

FROM nginx:1.15.11-alpine
MAINTAINER ferryvan@163.com
#COPY ./nginx.conf /data/nginx/conf/nginx.conf
COPY --from=builder /root/api-panel/* /usr/share/nginx/html
EXPOSE 80
CMD ["nginx"]
