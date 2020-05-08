FROM nginx:1.14.0-alpine
MAINTAINER ljgeng <ljgeng@iflytek.com>
ADD ./dist /etc/nginx/html
ADD nginx.conf /etc/nginx/nginx.conf.default
EXPOSE 80