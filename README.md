# climbing-route-name-generator

A name generator inspired by Docker container names

---

If you've ever worked with Docker you might have been pleasantly surprised by container names such as `furious_einstein`, `agitated_curie`, `wizardly_lovelace`, and `romantic_darwin`. 

The code responsible for generating names such as these [(names-generator.go)](https://github.com/moby/moby/blob/master/pkg/namesgenerator/names-generator.go) works by pairing a long list of adjectives together with a list of last names.

I wanted to write a tool that generates similar strings, but with a climbing flair, such as `beautiful_honnold`, `amazing_sharma`, and `cool_hill` and get the route setters at my local climbing gym to use it to name our indoor routes so me and my friends could have an easier time referring to routes when we aren't on site.

However, I am much too lazy to write down all of these last names by hand. And instead, I wanted to automagically scrape as many of them as I could off of the internet instead. Conveniently, Wikipedia has a page listing several well-known [climbers and mountaineers](https://en.wikipedia.org/wiki/List_of_climbers_and_mountaineers) that we can, of course, scrape.

In this repository, you'll find,

1. A Jupyter Notebook for scraping Wikipedia for suitable names, and
2. a small website for rendering these out.

# Building and Running

If you do not already have Docker installed then [begin by doing that first.](https://docs.docker.com/v17.12/install/)

Afterwards, continue by building the Dockerfile,

```
docker build -t "jupyterbs4" .
```

and then you can spin up the Jupyter Notebook stack by executing the following command in this directory,

```
docker run -p 8888:8888 -v $PWD:/home/jovyan jupyterbs4
```
