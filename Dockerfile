###################
# BUILD STAGE
###################
FROM node:lts-alpine3.21 AS build

# Create app directory
WORKDIR /app

ENV ASTRO_TELEMETRY_DISABLED=1

# Copy package files
COPY package.json package-lock.json ./

# Install all dependencies
RUN npm ci

# Copy the application source code
COPY . .

# Analytics settings are baked into the pages while building
ARG GOOGLE_TAG_MANAGER_ENABLED
ARG GOOGLE_TAG_MANAGER_ID
ARG UMAMI_ENABLED
ARG UMAMI_URL
ARG UMAMI_SITE_ID
ARG CLARITY_ENABLED
ARG CLARITY_PROJECT_ID

# Build the static site
RUN npm run build

###################
# PRODUCTION STAGE
###################
# Runs nginx as a non-root user for security
FROM nginxinc/nginx-unprivileged:stable-alpine AS prod

ENV PORT=7000

# Rendered into /etc/nginx/conf.d on startup with $PORT filled in
COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template

# Copy the built site
COPY --from=build /app/dist /usr/share/nginx/html
