import { UIController } from './ui-controller.js';

import { UserMessage, BotMessage } from './message.js';

import Joker from './joke-controller.js';

async function tellAJoke() {
  ui.disableButton(ui.jokeButton, true);
  const userMessage = new UserMessage("Tell me a joke");
  ui.post(userMessage.getHtml());
  const waitMessage = new BotMessage("wait...");
  await ui.wait(800);
  ui.post(waitMessage.getHtml());
  try {
    const joke = await comedian.getJoke();
    const setup = new BotMessage(joke.setup);
    const punchline = new BotMessage(joke.punchline);
    await ui.wait(1000);
    ui.post(setup.getHtml());
    await ui.wait(2000);
    ui.post(punchline.getHtml());
  } catch (error) {
    const errorMessage = new BotMessage("Sorry, I couldn't fetch a joke right now. Please try again later.");
    ui.post(errorMessage.getHtml());
  }
  ui.disableButton(ui.jokeButton, false);
}

const ui = new UIController();
const comedian = new Joker("https://official-joke-api.appspot.com/jokes/random");
ui.addClickHandler(ui.jokeButton, tellAJoke);
ui.addClickHandler(ui.reloadButton, ui.reload);
