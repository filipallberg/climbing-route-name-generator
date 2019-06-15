ARG BASE_CONTAINER=jupyter/minimal-notebook
FROM $BASE_CONTAINER

USER root

RUN conda install --quiet --yes \
    'beautifulsoup4=4.7.*' \
    'lxml=4.3.3'

# Switch back to jovyan to avoid accidental container runs as root
USER $NB_UID
