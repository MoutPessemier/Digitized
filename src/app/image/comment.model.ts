export class Comment {
  constructor(
    private _id: number,
    private _author: string,
    private _content: string,
    private _date: Date,
    private _imageID: number,
    private _visitorId: number
  ) {}

  get id(): number {
    return this._id;
  }

  get author(): string {
    return this._author;
  }

  get content() {
    return this._content;
  }

  get date(): Date {
    return this._date;
  }

  get imageId(): number {
    return this._imageID;
  }

  get visitorId(): number {
    return this._visitorId;
  }

  static fromJSON(json: any): Comment {
    return new Comment(
      json.id,
      json.author,
      json.content,
      json.date,
      json.myImageId,
      json.visitorId
    );
  }

  toJSON(): any {
    return {
      id: this._id,
      author: this._author,
      content: this._content,
      date: this._date,
      myImageId: this._imageID,
      visitorId: this._visitorId
    };
  }
}
