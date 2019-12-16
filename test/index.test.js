module.exports = {
    'step one: navigate to localhost home page' : function (browser) {
      browser
        .pause(1000)
        .url('http://localhost:3000')
        .waitForElementVisible('body')
        .verify.titleContains('Podcast Club')
    },

    'step two: perform category select option change event': function(browser) {
        browser
            .pause(1000)
            .click('select[id="categorySelect"] option[value="IT"]')
            .verify.urlEquals('http://localhost:3000/?category=IT')
    },

    'step three: perform date select option change event': function(browser) {
        browser
            .pause(1000)
            .click('select[id="dateSelect"] option[value="Past Month"]')
            .verify.urlEquals('http://localhost:3000/?category=IT&date=PastMonth')
    },

    'step four: perform search input change event': function(browser) {
        browser
            .pause(1000)
            .verify.visible('input[type=search]')
            .setValue('input[type=search]', 'hu la pa lu')
            .verify.urlEquals('http://localhost:3000/?category=IT&date=PastMonth&search=hu%20la%20pa%20lu')
    },

    'step five: reset category select option': function(browser) {
        browser
            .pause(1000)
            .click('select[id="categorySelect"] option[value="All"]')
            .verify.not.urlContains('?category=')
    },

    'step six: reset date select option': function(browser) {
        browser
            .pause(1000)
            .click('select[id="dateSelect"] option[value="All Time"]')
            .verify.not.urlContains('date=')
    },

    'step seven: clear search input': function(browser) {
        browser
            .pause(1000)
            .getValue('input[type=search]', function(result) {
                const length = result.value.length
                for (let i = 0; i < length; i++) {
                    browser.keys([browser.keys.BACK_SPACE]);
                }
            })
            .verify.not.urlContains('search=')
    },

    'step eight: reload home page': function(browser) {
        browser
            .pause(1000)
            .waitForElementVisible('body')
            .verify.visible('a[id="reloadPage"]')
            .click('a[id="reloadPage"]')
            .pause(5000)
            .verify.urlEquals('http://localhost:3000')
    }
  }