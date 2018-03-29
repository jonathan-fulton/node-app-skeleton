FROM node:8.8
MAINTAINER Jonathan Fulton <bogus.email@gmail.com>

# Create our core app & src folders
RUN mkdir /app

# Make /app our working directory
WORKDIR /app

# Copy over package.json so we can later run npm install
COPY package.json package.json

# Install our dependencies
RUN npm install --loglevel warn --no-progress # --production

# Copy over all of our code - note for local dev we'll mount over this from docker-compose
# DO THIS AFTER npm install so we get benefits of caching for npm install which takes a while
COPY ./newrelic.js newrelic.js
COPY ./src/config src/config
COPY ./src/bin src/bin
COPY ./src/migrations src/migrations
COPY ./src/app src/app
COPY ./src/test src/test

EXPOSE 9000

# Start the web web
CMD npm start
#CMD while :; do echo 'Hit CTRL+C'; sleep 1; done


# Note, you can either use LABEL logic below combined with fancy tag/push methodology or you should add test code
# to the image above to ensure CI works appropriately

### ----- Test Logic Below ----- (From http://blog.terranillius.com/post/docker_testing/#comment-2841483432)
#LABEL image=test-layer

# Install all dependencies (including test)
#RUN npm install --loglevel warn --no-progress

# Copy test sources
#COPY ./src/test src/test

# Test command
#CMD npm test