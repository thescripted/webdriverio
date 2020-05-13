/**
 * 
 * The Get Window Rect command returns the size and position on the screen of the operating system window 
 * corresponding to the current top-level browsing context.
 * 
 */

import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from '../constants'

export default async function getWindowRect () {
    const page = this.getPageHandle()
    const viewport = await page.viewport() || {}
    return Object.assign(
        { width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT, x: 0, y: 0 },
        viewport
    )
}
