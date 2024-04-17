const fs = require('fs');
const path = require('path');

// Function to recursively collect tokens from a directory
function collectTokens(dirPath) {
	let tokens = [];

	// Read contents of the directory
	const files = fs.readdirSync(dirPath);

	// Iterate over each file
	files.forEach(file => {
		// Construct full path
		const filePath = path.join(dirPath, file);

		// Check if the file is a directory
		if (fs.statSync(filePath).isDirectory()) {
			// Recursively collect tokens from subdirectory
			tokens = tokens.concat(collectTokens(filePath));
		} else {
			// If file is a TypeScript file and not lightTheme.css or darkTheme.css, collect tokens
			if (file.endsWith('.ts') && file !== 'lightTheme.css' && file !== 'darkTheme.css') {
				// Add a comment with the name of the file at the beginning of each new file
				tokens.push(`\n/* ${file} */\n`.replace(/.ts/, ''));
				tokens = tokens.concat(extractTokens(filePath));
			}
		}
	});

	return tokens;
}

// Function to extract tokens from a TypeScript file
function extractTokens(filePath) {
	const content = fs.readFileSync(filePath, 'utf8');

	// Assuming tokens are defined using Linaria's css function
	const tokenRegex = /css`\s*(.*?)\s*`/gs; // Regex for css function with tokens

	const matches = Array.from(content.matchAll(tokenRegex));
	if (!matches) {
		return [];
	}

	// Extract tokens from matched strings and remove leading and trailing whitespace
	return matches.map(match => match[1].trim());
}

// Collect tokens from all files in the tokens directory
const allTokens = collectTokens(path.join(__dirname, '..', 'src', 'utils', 'styles', 'tokens'));

// Filter out duplicate tokens (optional)
const uniqueTokens = [...new Set(allTokens)]; // Creates a Set to remove duplicates and converts back to array

// Generate the content for tokens.css
const cssContent = uniqueTokens.map(token => `\t${token}`).join('\n');

// Write the content to tokens.css
fs.writeFileSync(path.join(__dirname, '..', 'src', 'utils', 'styles', 'tokens', 'tokens.css'), `:root {\n${cssContent}\n}`); // Adjusted output path

console.log('tokens.css generated successfully!');
