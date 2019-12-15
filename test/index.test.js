module.exports = {
    'step one: navigate to localhost home page' : function (browser) {
      browser
        .url('http://localhost:3000')
        .waitForElementVisible('body')
        .verify.titleContains('Podcast Club')
    },

    'step two: perform category select option change event': function(browser) {
        browser
            .click('select[id="categorySelect"] option[value="IT"]')
            .pause(1000)
            .verify.urlEquals('http://localhost:3000/?category=IT')
    },

    'step three: perform date select option change event': function(browser) {
        browser
            .click('select[id="dateSelect"] option[value="Past Month"]')
            .pause(1000)
            .verify.urlEquals('http://localhost:3000/?category=IT&date=PastMonth')
    },

    'step four: perform search input change event': function(browser) {
        browser
            .pause(1000)
            .verify.visible('input[type=search]')
            .setValue('input[type=search]', 'hu la pa lu')
            .verify.urlEquals('http://localhost:3000/?category=IT&date=PastMonth&search=hu%20la%20pa%20lu')
    }
  }