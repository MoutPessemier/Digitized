export class Video {
  constructor(private _id: number, private _url: string) {}

  get id(): number {
    return this._id;
  }

  get url(): string {
    return this._url;
  }

  static fromJson(json: any): Video {
    return new Video(json.id, json.url);
  }
}
