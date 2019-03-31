import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/video.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Input('video') public video: Video;
  constructor() {}

  ngOnInit() {}
}
