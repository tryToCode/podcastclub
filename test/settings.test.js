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
    },

    'step three: perform date select option change event': function(browser) {
        browser
            .pause(1000)
            .click('select[id="dateSelect"] option[value="Past Week"]')
    },

    'step four: apply changes': function(browser) {
        browser
            .pause(1000)
            .click('button')
    },

    'step five: check home page route path': function(browser) {
        browser
            .pause(1000)
            .verify.urlEquals('http://localhost:3000/?date=PastWeek&pageSize=10')
            .verify.value('select[id="dateSelect"]', 'Past Week')
    },

    'step six: go back to setting page': function(browser) {
        browser
            .pause(1000)
            .url('http://localhost:3000/settings')
            .waitForElementVisible('body')
            .verify.titleContains('Settings')
    },

    'step seven: check selected value and reset': function(browser) {
        browser
            .pause(1000)
            .verify.value('select[id="pageSizeSelect"]', '10')
            .click('select[id="pageSizeSelect"]', '20')
            .verify.value('select[id="dateSelect"]', 'Past Week')
            .click('select[id="dateSelect"]', 'All Time')
            .pause(1000)
            .click('button')
    },

    'step eight: check home route': function(browser) {
        browser
            .pause(1000)
            .verify.urlEquals('http://localhost:3000')
    }
}