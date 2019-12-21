module.exports = {
    'step one: navigate to settings page': function(browser) {
        browser
            .pause(1000)
            .url('http://localhost:3000/settings')
            .waitForElementVisible('body')
            .verify.titleContains('Settings')
    },

    'step two: change item size per page': function(browser) {
        browser
            .pause(1000)
            .click('select[id="pageSizeSelect"] option[value="10"]')
            .pause(1000)
            .click('select[id="dateSelect"] option[value="Past Week"]')
            .pause(1000)
            .click('button')
    },

    'step five: check home page route path': function(browser) {
        browser
            .pause(1000)
            .verify.urlContains('date=Past%20Week')
            .verify.urlContains('pageSize=10')
            .verify.value('select[id="dateSelect"]', 'Past Week')
    },

    'step six: go back to setting page and verify selected value': function(browser) {
        browser
            .pause(1000)
            .url('http://localhost:3000/settings')
            .waitForElementVisible('body')
            .verify.titleContains('Settings')
            .verify.value('select[id="pageSizeSelect"]', '10')
            .verify.value('select[id="dateSelect"]', 'Past Week')
    },

    'step seven: reset selected value': function(browser) {
        browser
            .pause(1000)
            .click('select[id="pageSizeSelect"] option[value="20"]')
            .pause(1000)
            .click('select[id="dateSelect"] option[value="All Time"]')
            .pause(1000)
            .click('button')
    },

    'step eight: back to home page and check the route': function(browser) {
        browser
            .pause(1000)
            .verify.urlEquals('http://localhost:3000/')
    }
}