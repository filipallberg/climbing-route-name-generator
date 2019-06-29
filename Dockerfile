ARG BASE_CONTAINER=filipallberg/jupyterbs4
FROM $BASE_CONTAINER

USER root

RUN apt-get update && apt-get install -y \
    jq

USER $NB_UID

