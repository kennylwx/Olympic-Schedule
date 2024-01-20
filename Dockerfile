FROM node:21-alpine

# will initialize a working directory in your new OS
WORKDIR /web-apps

# will copy package.json into the working directory that we initialized in previous step.
COPY package*.json ./

# will install all the dependencies of your project.
RUN npm install

# will copy all the files from your current directory to the working directory of the container, 
# You can use .dockerignore if you don't want to copy some files into your docker container.
COPY . .

EXPOSE 3000

CMD npm run dev