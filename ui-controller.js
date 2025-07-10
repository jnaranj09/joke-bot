export class UIController {
  constructor() {
    this.mainPanel = document.querySelector("main");
    this.chatPanel = document.getElementById("chat-panel");
    this.jokeButton = document.getElementById("joke-btn");
    this.reloadButton = document.getElementById("startover-btn");
  }
  
  scroll(){
    this.mainPanel.scrollTop = this.mainPanel.scrollHeight;
  }
  
  reload(){
    location.reload();
  }
  
  post(message){
    this.chatPanel.appendChild(message);
    this.scroll();
  }
  
  disableButton(button, action){
    button.disabled = action;
  }
  
  addClickHandler(button, handler){
    button.addEventListener("click", handler);
  }
  
  async wait(miliseconds){
    return new Promise(resolve => {
      setTimeout(resolve, miliseconds);
    }); 
  }
  
}

