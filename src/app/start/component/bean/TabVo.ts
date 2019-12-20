export class TabVo {
  private _tabName: string;
  private _pageId: string;
  private _child: TabVo[];

  constructor(tabName: string, pageId: string, child: TabVo[]) {
    this._tabName = tabName;
    this._pageId = pageId;
    this._child = child;
  }

  get pageId(): string {
    return this._pageId;
  }

  set pageId(value: string) {
    this._pageId = value;
  }

  get tabName(): string {
    return this._tabName;
  }

  set tabName(value: string) {
    this._tabName = value;
  }

  get child(): TabVo[] {
    return this._child;
  }

  set child(value: TabVo[]) {
    this._child = value;
  }
}
