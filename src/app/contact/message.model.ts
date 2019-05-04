export class Message {
  constructor(
    private _topic: string,
    private _message: string,
    private _date = new Date(),
    private _author: string
  ) {}

  get topic(): string {
    return this._topic;
  }

  get message(): string {
    return this._message;
  }

  get date(): Date {
    return this._date;
  }

  get author(): string {
    return this._author;
  }

  toJSON(): any {
    return {
      topic: this.topic,
      content: this.message,
      date: this.date,
      author: this._author
    };
  }
}
