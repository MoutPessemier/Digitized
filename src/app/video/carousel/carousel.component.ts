import { Component, OnInit, Output } from '@angular/core';
import { Video } from '../video.model';
import { Observable } from 'rxjs';
import { VideoDataService } from '../video-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  private _videos: Video[];
  @Output() public currentVid: Video;
  private _index = 0;
  private _fetchVideos$: Observable<Video[]> = this._videoDataService.videos$;
  public loadingErrors$ = this._videoDataService.loadingError$;

  constructor(private _videoDataService: VideoDataService, private route: ActivatedRoute) {
    this._videoDataService.videos$.subscribe(vids => (this._videos = vids));
    this.route.data.subscribe(item => (this.currentVid = item['video']));
  }

  ngOnInit() {}

  get videos$(): Observable<Video[]> {
    return this._fetchVideos$;
  }

  get videos(): Video[] {
    return this._videos;
  }

  get currentVideo(): Video {
    return this.currentVid;
  }

  previous() {
    if (this.currentVid) {
      this._index = (this._index - 1 + this._videos.length) % this._videos.length;
    } else {
      this._index = 0;
      this.fillCurrentVideo();
    }
    this.currentVid = this._videos[this._index];
  }

  next() {
    if (this.currentVid) {
      this._index = (this._index + 1) % this._videos.length;
    } else {
      this._index = 0;
      this.fillCurrentVideo();
    }
    this.currentVid = this._videos[this._index];
  }

  fillCurrentVideo() {
    this.currentVid = this._videos[this._index];
  }
}
