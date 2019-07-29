import { render, html } from "lit-html";

export default class TestUC extends HTMLElement
{

	/**
	 * Adds this container to document container collection.
	 * @callback
	 */
	public connectedCallback(): void
	{
		render(html`
		<table>
			<caption>Here are some German test words:</caption>
			<tbody>
				<tr>
					<th>Unescaped</th>
					<th>Hexadecimal escaped</th>
					<th>HTML escaped</th>
				</tr>
				<tr>
					<td>Gärtner</td>
					<td>G\xe4rtner</td>
					<td>G&auml;rtner</td>
				</tr>
				<tr>
					<td>müßig</td>
					<td>m\xfc\xdfig</td>
					<td>m&uuml;&szlig;ig</td>
				</tr>
				<tr>
					<td>Köln</td>
					<td>K\xf6ln</td>
					<td>K&ouml;ln</td>
				</tr>
				<tr>
					<td>Äpfel</td>
					<td>\xc4pfel</td>
					<td>&Auml;pfel</td>
				</tr>
			</tbody>
		</table>
		`, this);
	}
}





// register the new web component in the browser
customElements.define("test-uc", TestUC);
