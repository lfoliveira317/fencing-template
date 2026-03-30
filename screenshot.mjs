import puppeteer from 'puppeteer'
import { mkdirSync } from 'fs'

const URL = 'https://fencing-template-delta.vercel.app'

mkdirSync('screenshots', { recursive: true })

const browser = await puppeteer.launch({ headless: 'new' })

// Desktop
const desktop = await browser.newPage()
await desktop.setViewport({ width: 1440, height: 900 })
await desktop.goto(URL, { waitUntil: 'networkidle2', timeout: 30000 })
await new Promise(r => setTimeout(r, 4000))
await desktop.screenshot({ path: 'screenshots/desktop.png', fullPage: true })
console.log('✅ desktop.png saved')

// Mobile
const mobile = await browser.newPage()
await mobile.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 })
await mobile.goto(URL, { waitUntil: 'networkidle2', timeout: 30000 })
await new Promise(r => setTimeout(r, 4000))
await mobile.screenshot({ path: 'screenshots/mobile.png', fullPage: true })
console.log('✅ mobile.png saved')

await browser.close()
