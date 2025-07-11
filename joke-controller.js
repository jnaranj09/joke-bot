export default class JokeController {
  
  constructor(jokesUrl){
    this.jokesUrl = jokesUrl;
  }
  
  async callApi() {
    try {
      const r = await fetch(this.jokesUrl);
      if (!r.ok || r.status !== 200){
        throw new Error(`[Error] response_ok: ${r.ok} http_status: ${r.status}`);
      }
      return r
    } catch (e) {
    throw e
    }
  }

  async getJoke() {
    try {
      const r = await this.callApi(this.jokesUrl);
      const joke = await r.json();
      return {
        setup: joke.setup,
        punchline: joke.punchline
      }
    } catch (e) {
      console.log(e.message);
    }
  }
  
}