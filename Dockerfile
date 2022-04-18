
# use a node base image
FROM node:7-onbuild

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:8000 || exit 1

#WORKDIR /var/www
#COPY package.json /var/www/
#RUN npm install
#COPY main.js /var/www/

# tell docker what port to expose
EXPOSE 8000
