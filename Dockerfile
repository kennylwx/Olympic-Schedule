# Use a multi-platform base image
FROM --platform=linux/amd64 node:21-alpine AS build

# Set the working directory inside the container
WORKDIR /web-apps

# ARG is used to declare build arguments
ARG TST_STR=default_value

# Set environment variable inside the container
ENV MY_ENV_VAR=$TST_STR

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

# Stage 2 - Use Nginx for serving the app
FROM --platform=linux/amd64 nginx:latest
COPY --from=build /web-apps/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]