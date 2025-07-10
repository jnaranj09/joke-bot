export class Message {
  constructor(text){
    this.text = text;
    this.container = document.createElement('div');
  }
  
  render(){
    const renderedMessage =
`
${this.text}
`;
    return renderedMessage;
  }
  
  getHtml(){
    this.container.innerHTML = this.render();
    return this.container;
  }
  
}

export class UserMessage extends Message {
  constructor(text){
    super(text);
    this.container.classList.add("user-message");
    this.bubble =
`
      <div class="user-bubble">
        ${text}
      </div>
`;
    this.icon =
`
      <div class="icon">
        <span class="fa-solid fa-user"></span>
      </div>
`;
  }
  
  render(){
    const renderedMessage =
`
${this.bubble}
${this.icon}
`;
   return renderedMessage;
  }
}

export class BotMessage extends Message {
  constructor(text){
    super(text);
    this.container.classList.add("bot-message");
    this.bubble =
`
      <div class="bot-bubble">
        ${text}
      </div>
`;
    this.icon =
`
      <div class="icon">
        <span class="fa-solid fa-robot"></span>
      </div>
`;
  }
  
  render(){
    const renderedMessage =
`
${this.icon}
${this.bubble}
`;
   return renderedMessage;
  }
}