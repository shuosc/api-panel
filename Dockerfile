FROM kkarczmarczyk/node-yarn:4.3.2-slim as builder
COPY . /root/api-panel
WORKDIR /root/api-panel
RUN yarn && yarn build

FROM nginx: 1.15.11-alpine
MAINTAINER ferryvan@163.com
#COPY ./nginx.conf /data/nginx/conf/nginx.conf
COPY --from=builder /root/api-panel/* /usr/share/nginx/html
CMD ["nginx"]
