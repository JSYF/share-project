FROM nginx:latest
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./dist /usr/share/nginx/html/web
EXPOSE 80
CMD ["nginx","-g","daemon off;"]