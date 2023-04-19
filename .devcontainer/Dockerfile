# Use the official lightweight Node.js 18 image.
# https://hub.docker.com/_/node
FROM node:19-alpine

WORKDIR /usr/src/app

RUN apk add git

RUN touch /var/log/anymapp-error.log && touch /var/log/anymapp-data.log \
  && chmod 777 /var/log/anymapp-error.log && chmod 777 /var/log/anymapp-data.log \
  && chown node:node /var/log/anymapp-error.log && chown node:node /var/log/anymapp-data.log

# # Copy application dependency manifests to the container image.
# # A wildcard is used to ensure both package.json AND package-lock.json are copied.
# # Copying this separately prevents re-running npm install on every code change.
# COPY package*.json ./

# # Install dependencies.
# # If you add a package-lock.json speed your build by switching to 'npm ci'.
# # RUN npm ci --only=production
# RUN npm install --omit=dev

# # Copy local code to the container image.
# COPY . ./



# # Run the web service on container startup.
# CMD ["node", "./bin/www.js"]
