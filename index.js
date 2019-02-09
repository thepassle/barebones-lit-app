import { LitElement, html, css } from 'lit-element';

class MyApp extends LitElement {
	render() {
		return html`
			<h1>Hello world!</h1>
		`;
	}
}

customElements.define('my-app', MyApp);