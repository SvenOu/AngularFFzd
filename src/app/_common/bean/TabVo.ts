export class TabVo {
  private _tabName: string;
  private _tabIndex: number|string;
  private _child: TabVo[];

  constructor(tabName: string, tabIndex: number|string, child: TabVo[]) {
    this._tabName = tabName;
    this._tabIndex = tabIndex;
    this._child = child;
  }

  get tabIndex(): number|string {
    return this._tabIndex;
  }

  set tabIndex(value: number|string) {
    this._tabIndex = value;
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
