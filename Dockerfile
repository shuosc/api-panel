FROM node:alpine as builder
COPY . /api-panel
WORKDIR /api-panel
RUN yarn && yarn build

FROM nginx:alpine
COPY --from=builder /api-panel/dist/api-panel /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx","-g daemon off;"]
EXPOSE 80
