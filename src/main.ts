import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("my-element")
class MyElement extends LitElement {
  render() {
    return html`
      <div>hello from my element!</div>
    `
  }
}

const rootEl = document.getElementById("__root") as HTMLDivElement

rootEl.innerHTML = `
  <my-element></my-element>
`
