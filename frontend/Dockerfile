FROM node:20-alpine AS build

WORKDIR /app

# COPY ONLY PACKAGE FILES
COPY package*.json ./

# INSTALL DEPENDENCIES
RUN npm ci --silent

# COPY SOURCE CODE
COPY . .

ENV CI=false

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]