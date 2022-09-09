import { Component, OnDestroy, OnInit } from '@angular/core';
import { KafkaServiceClientService } from './kafka-service-client.service';

@Component({
  selector: 'app-message-client',
  templateUrl: './message-client.component.html',
  styleUrls: ['./message-client.component.css']
})
export class MessageClientComponent implements OnInit, OnDestroy {


  constructor(public kafka_service : KafkaServiceClientService) {
  }

  ngOnInit(): void {
    this.kafka_service.openWebSocket();
  }

  ngOnDestroy(): void {
    this.kafka_service.closeWebSocket();
  }

}
