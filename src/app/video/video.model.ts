export class Video {
  constructor(private _url: string) {}

  get url(): string {
    return this._url;
  }

  public static fromJson(json: any): Video {
    return new Video(json.url);
  }
}
