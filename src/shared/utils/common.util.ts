 class CommonUtil {
  static copy = (str:string) => {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    const isIOS = navigator.userAgent.match(/ipad|iphone/i)
    if (isIOS) {
      const range = document.createRange()
      range.selectNodeContents(el)
      const selection = window.getSelection()
      if(selection){
        selection.removeAllRanges()
        selection.addRange(range)
      }
      el.setSelectionRange(0, str.length)
    } else {
      el.select()
    }
    document.execCommand('copy')
    document.body.removeChild(el)

  }
}
 export default CommonUtil;