// services/MessagingService.ts
import * as amqp from 'amqplib';

interface IMessagingService {
  send_message(queue: string, message: any): Promise<void>;
  receive_message(queue: string): Promise<any>;
}

class MessagingService implements IMessagingService {
  private connection: amqp.Connection;
  private channel: amqp.Channel;

  constructor() {
    this.connection = amqp.connect('amqp://localhost');
    this.channel = this.connection.createChannel();
  }

  async send_message(queue: string, message: any): Promise<void> {
    await this.channel.assertQueue(queue, { durable: true });
    await this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
  }

  async receive_message(queue: string): Promise<any> {
    await this.channel.assertQueue(queue, { durable: true });
    const msg = await this.channel.get(queue);
    if (msg!== null) {
      return JSON.parse(msg.content.toString());
    } else {
      return null;
    }
  }
}

export default MessagingService;