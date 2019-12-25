export class AppConstant {
  /*
   * url 前缀配置
   */
  public static operationUrlPrefix: string = 'product/operation/';
  public static profileUrlPrefix: string = 'product/profile/';

  /*
   * url 配置
   */
  private static _profileMainUrl: string = 'pMain';
  private static _profileMyCourseUrl: string = 'pMyCourse';

  public static typeFfChild: string = 'ffChild';
  public static typeChildRearing: string = 'childRearing';
  public static typeVIPOrder: string = 'VIPOrder';

  /*
   * url 页面配置
   */
  public static pageMain: string = 'page_main';
  public static pageStart: string = 'page_start';
  public static pageProfile: string = 'page_profile';
  public static pageProfileMyCourse: string = 'page_profile_my_course';
  public static pageVipOrder: string = 'page_vip_order';

  static get profileMainUrl(): string {
    return this.profileUrlPrefix + this._profileMainUrl;
  }

  static get profileMyCourseUrl(): string {
    return this.profileUrlPrefix + this._profileMyCourseUrl;
  }
}
