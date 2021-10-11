FROM php:8.0.7-fpm-alpine3.12

RUN apk update
RUN apk add \
    zlib \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    imagemagick \
    imagemagick-dev \
    gnupg \
    imap-dev \
    krb5-dev \
    openssl-dev \
    libzip-dev \
    icu-dev \
    $PHPIZE_DEPS \
    mysql-client \
    nodejs \
    npm 

RUN docker-php-ext-install exif pdo pdo_mysql

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

ARG user
ARG uid

RUN adduser -D -u $uid -h /home/$user $user
RUN addgroup $user root
RUN addgroup $user www-data
RUN mkdir -p /home/$user/.composer && \
    chown -R $user:$user /home/$user

WORKDIR /var/www

USER $user