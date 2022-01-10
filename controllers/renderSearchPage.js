const crypto = require("crypto");

const renderSearchPage = (req, res) => {
	const randomNonce = crypto.randomBytes(32).toString("base64"); // Generates a new random nonce value for every response.
	// Set the strict nonce-based CSP response header
	const csp = `script-src 'nonce-${randomNonce}' 'strict-dynamic' https:; object-src 'none'; base-uri 'none';`;
	res.set("Content-Security-Policy", csp);
	res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // Prevent browser from caching our nonce value from header
	res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
	res.setHeader("Expires", "0"); // Proxies.
	// Set the nonce attribute of every <script> tag to this randomNonce value.
	res.render("searchClinic", { nonce: randomNonce });
};

module.exports = renderSearchPage;
