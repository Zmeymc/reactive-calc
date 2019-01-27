FROM ubuntu

RUN apt update && apt --yes install curl gnupg2 bash git && \
apt update && \
curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh && \
bash nodesource_setup.sh && \
apt update &&\
apt --yes install nodejs 


EXPOSE 8080

COPY ./run-script.sh run-script.sh 

CMD ["bash","/run-script.sh"]
