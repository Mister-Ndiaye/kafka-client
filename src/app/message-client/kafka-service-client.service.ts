import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KafkaServiceClientService {

  websocket! : WebSocket;
  messages : string[] = []

  constructor() { }

  public openWebSocket(){
    console.log("open web socket beginning ..")
    //mettre l'url à l'url du broker
    this.websocket = new WebSocket('ws:localhost:/R1');

    this.websocket.onopen = (event) => {
      console.log('Open: ', event);
    }

    this.websocket.onmessage = (event) => {
      let m = JSON.parse(event.data);
      this.messages.push(m);
      console.log(m);
    }

    this.websocket.onclose = (event) => {
      console.log(event);
    }
  }

  public closeWebSocket(){
    this.websocket.close();
  }

}
