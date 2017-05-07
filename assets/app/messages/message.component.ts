import { Component, Input,   } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent {
    @Input('inputMessage') message: Message;
   
    onEdit() {
        this.messageService.editMessage(this.message);
    }

    constructor(private messageService: MessageService) {}

    onDelete() {
        this.messageService.deleteMessage(this.message)
            .subscribe(
                result => console.log(result)
            );
    }
}