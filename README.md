# Joke Bot

A tiny, dependency-free web app that shows a chat-style interface where a bot tells you a random joke. It uses ES Modules in the browser and fetches jokes from the Official Joke API.

## Overview
- **UI:** Chat-like bubbles for user and bot messages.
- **Action:** Click “Tell me a Joke” to fetch a random joke.
- **Source of truth:** `main.js` wires UI and data; `joke-controller.js` fetches jokes; `message.js` renders chat bubbles; `ui-controller.js` manipulates the DOM.
- **No build step:** Pure HTML/CSS/JS served statically.

## Project Structure
- `index.html`: Base page, loads Font Awesome and `main.js` as an ES module.
- `style.css`: Layout and theme for the chat UI.
- `main.js`: App entry point. Wires UI events, orchestrates fetching and posting messages with small delays for a natural flow.
- `joke-controller.js`: `JokeController` class that fetches a random joke from an API endpoint and returns `{ setup, punchline }`.
- `message.js`: `Message`, `UserMessage`, and `BotMessage` classes to build DOM nodes for chat bubbles.
- `ui-controller.js`: `UIController` for DOM access, scrolling, button state, click handlers, and simple timing (`wait`).

## How It Works
1. The user clicks the “Tell me a Joke” button.
2. `main.js` disables the button, posts the user’s message, shows a temporary “wait…” bot message, and calls `JokeController.getJoke()`.
3. `JokeController` fetches from `https://official-joke-api.appspot.com/jokes/random` and returns the JSON `{ setup, punchline }`.
4. `main.js` posts the setup and, after a short delay, the punchline as bot messages.
5. On error, a friendly fallback message is shown and the button is re-enabled.
6. “Start Over” reloads the page to reset the chat.

## Run Locally
Because this uses ES modules, serving over HTTP is recommended.

- Python 3: `python3 -m http.server 5500` then open `http://localhost:5500/`
- Node (http-server): `npx http-server -p 5500` then open `http://localhost:5500/`

You can also try opening `index.html` directly in a modern browser, but some browsers restrict module imports via the `file://` protocol.

## Configuration
- **API endpoint:** Defined in `main.js`:
  ```js
  const comedian = new Joker("https://official-joke-api.appspot.com/jokes/random");
  ```
  Replace with another endpoint that returns a JSON object with `setup` and `punchline` fields to use a different jokes source.

## Dependencies
- Runtime: Modern browser with fetch and ES Modules support.
- Icons: Font Awesome via CDN in `index.html`.
- Build tools: None.

## Troubleshooting
- **Module import or CORS errors when opening `index.html` directly:** Serve via a local HTTP server (see Run Locally).
- **Network errors / empty jokes:** Ensure you’re online and the API is reachable. If you customize the endpoint, confirm it returns `{ setup, punchline }`.
- **Blocked requests:** If you swap APIs, CORS policies may block requests unless the server allows your origin.

## Notes
- Delays between messages (`ui.wait`) are used to simulate a conversational cadence.
- Buttons are disabled during fetch to prevent spamming the API.
