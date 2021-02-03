require('dotenv').config()
const pupeeter = require('puppeteer')

async function robo () {
  const browser = await pupeeter.launch(
    {
      headless: true,
      executablePath: '/usr/bin/chromium'
    })
  const page = await browser.newPage()
  await page.goto('https://unsplash.com')

  await page.click('[href="/login"]')

  await page.type('[name="user[email]"]', process.env.UNSPLASH_EMAIL)
  await page.type('#user_password', process.env.UNSPLASH_PASSWORD)
  await page.click('[type="submit"]')

  await page.waitForNavigation()

  await page.screenshot({ path: 'screenshot.png' })

  // await browser.close()
}

robo()
