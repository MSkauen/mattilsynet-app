# syntax=docker/dockerfile:1
FROM postgres as produksjonsplass-db
ENV POSTGRES_PASSWORD docker
ENV POSTGRES_DB produksjonsplass 
COPY produksjonsplass.sql /docker-entrypoint-initdb.d/
COPY produksjonsplass-api.sh /usr/local/bin/
COPY entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod 755 ./usr/local/bin/*.sh
RUN apt-get update && apt-get install -y openjdk-11-jre-headless procps
VOLUME /tmp
COPY produksjonsplass-api.jar app.jar
