FROM energievoorjou:php-fpm-alpine

USER root

COPY crontab /crontab

RUN crontab /crontab

RUN mkdir /var/log/cron
RUN touch /var/log/cron/cron.log

RUN chown -R www-data:www-data /var/log/cron

CMD ["crond", "-f", "-l", "8"]
