import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;/*
  @Output() delete = new EventEmitter(); */
  
  onDelete() {
  	console.log('deleted');
    //this.delete.emit(this.mediaItem);
  }
}
