'use strict'

const puppeteer = require('puppeteer-extra-base')
puppeteer.use(require('puppeteer-extra-base-plugin-click-and-wait')())
;(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto('https://example.com/', { waitUntil: 'domcontentloaded' })
  console.log('clicking on first link')
  await page.clickAndWaitForNavigation('a')
  console.log('all done')
})()
