
# use a node base image
FROM node:16

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:8000 || exit 1

# Set working directory and install node
WORKDIR /var/www
COPY package.json /var/www/
COPY main.js /var/www/
RUN npm install

# tell docker what port to expose
EXPOSE 8000

# Run main.js
CMD [ "node", "main.js" ]
