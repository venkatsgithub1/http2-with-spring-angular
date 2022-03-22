FROM node:lts-alpine3.15 as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build
# nginx
FROM nginx:alpine
ADD ./nginx-https-res/default.conf /etc/nginx/conf.d/default.conf
ADD ./nginx-https-res/creds/*.key /etc/ssl/private/
ADD ./nginx-https-res/creds/*.crt /etc/ssl/certs/
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
#copy static files from builder to nginx
COPY --from=builder /app/dist/angular-app .
# run nginx with daemon off
ENTRYPOINT [ "nginx", "-g", "daemon off;"]
