<p>
  <a href="https://github.com/tryToCode/podcastclub/blob/layout-v2/LICENSE">
    <img src="https://img.shields.io/github/license/tryToCode/podcastclub" alt="mit license">
  </a>
  <a href="http://podcastclub.net/">
    <img src="https://img.shields.io/website?url=http%3A%2F%2Fpodcastclub.net%2F" alt="Podcast Club">
  </a>
</p>

# Podcast club

###### **Introduction**

[Podcast Club](http://podcastclub.net/) is a daily updated podcast aggregator inspired from [AllTop](https://alltop.com).
We focus on the topics IT, Entrepreneurship and Finance.

Podcast Club consumes Data from the [Podcast API](https://github.com/tryToCode/podcast-api) which is built 
with the [Django Rest API](https://www.django-rest-framework.org).

All Podcast we currently cover, check out [Here](http://podcastclub.net/about)


## Getting Started

First, check out the source code:

```bash
cd <your project folder>
git clone https://github.com/tryToCode/podcastclub.git
```

Then install all dependencies in the project's root folder:

``` bash
# install dependencies
npm run install
```

You are good to go, run the following command to start local server:

``` bash
# serve with hot reload at localhost:3000
npm run dev
```

## Runnig the tests

Podcast Club is currently covered by [nightwatch](https://nightwatchjs.org/) for End-To-End testing.
Tests are executed under Firefox, if you prefer other browser, check out the [documentation](https://nightwatchjs.org/gettingstarted/installation/#install-geckodriver) for installation.

Testcase are located under the [test](https://github.com/tryToCode/podcastclub/tree/layout-v2/test) folder.

Run test under window:

```bash
node nightwatch.js test/index.test.js
```

## Build With
* [Nuxt.js](https://nuxtjs.org/)
* [Tailwindcss](https://tailwindcss.com/)

## Documentation

Learn more about the Podcast backend API [here](http://podcastclub.net/api/docs).

## License

Podcast Club ist ![MIT licensed](https://github.com/tryToCode/podcastclub/blob/layout-v2/LICENSE)
