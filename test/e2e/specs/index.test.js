module.exports = {
    'step one: navigate to home page' : function (browser) {
        browser
            .pause(1000)
            .url('http://localhost:3000')
            .waitForElementVisible('body')
            .verify.titleContains('Podcast Club')
    },

    'step two: perform select option change event': function(browser) {
        browser
            .pause(1000)
            .click('select[id="categorySelect"] option[value="IT"]')
            .verify.urlContains('category=')
            .pause(1000)
            .click('select[id="dateSelect"] option[value="Past Month"]')
            .verify.urlEquals('http://localhost:3000/?category=IT&date=Past%20Month')
    },

    'step three: reset select option': function(browser) {
        browser
            .pause(1000)
            .click('select[id="categorySelect"] option[value="All"]')
            .verify.not.urlContains('category=')
            .pause(1000)
            .click('select[id="dateSelect"] option[value="All Time"]')
            .verify.not.urlContains('date=')
    },

    'step four: perform pagination click': function(browser) {
        browser
            .pause(1000)
            .click('span[id="trigger-2"]')
            .verify.urlContains('page=')
    },

    'step five: reset pagination to page 1': function(browser) {
        browser
            .pause(1000)
            .click('span[id="trigger-1"]')
            .verify.not.urlContains('page=')
    },

    'step six: perform search input change event': function(browser) {
        browser
            .pause(1000)
            .verify.visible('input[type=search]')
            .setValue('input[type=search]', 'hu la pa lu')
            .verify.urlContains('search=hu%20la%20pa%20lu')
    },

    'step seven: refresh home page and check the route': function(browser) {
        browser
            .pause(1000)
            .waitForElementVisible('body')
            .refresh()
            .verify.urlContains('search=')
    }
  }