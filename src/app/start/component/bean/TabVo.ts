export class TabVo {
  private _tabName: string;
  private _tabId: string;
  private _child: TabVo[];

  constructor(tabName: string, tabId: string, child: TabVo[]) {
    this._tabName = tabName;
    this._tabId = tabId;
    this._child = child;
  }

  get tabId(): string {
    return this._tabId;
  }

  set tabId(value: string) {
    this._tabId = value;
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
