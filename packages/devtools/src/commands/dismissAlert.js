/**
 * 
 * The Dismiss Alert command dismisses a simple dialog if present, otherwise error. 
 * A request to dismiss an alert user prompt, which may not necessarily have a dismiss button, 
 * has the same effect as accepting it.
 */

export default async function dismissAlert () {
    if (!this.activeDialog) {
        throw new Error('no such alert')
    }

    await this.activeDialog.dismiss()
    delete this.activeDialog
    return null
}
