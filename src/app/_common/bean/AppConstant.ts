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
  private static _profileMyCollectUrl: string = 'pMyCollect';
  private static _profileMyCustomerServiceUrl: string = 'pMyCustomerService';
  private static _profileMyDownloadListUrl: string = 'pMyDownloadList';
  private static _profileMyHelpUrl: string = 'pMyHelp';

  public static typeFfChild: string = 'ffChild';
  public static typeChildRearing: string = 'childRearing';
  public static typeVIPOrder: string = 'VIPOrder';

  /*
   * url 页面配置
   */
  public static pageMain: string = 'page_main';
  public static pageStart: string = 'page_start';

  public static pageVipOrder: string = 'page_vip_order';

  // profiles
  public static pageProfile: string = 'page_profile';
  public static pageProfileMyCourse: string = 'page_profile_my_course';
  public static pageMyCollect: string = 'page_my_collect';
  public static pageMyCustomerService: string = 'page_my_costomer_service';
  public static pageMyHelp: string = 'page_my_help';
  public static pageMyDownloadList: string = 'page_my_download_list';

  //

  static get profileMainUrl(): string {
    return this.profileUrlPrefix + this._profileMainUrl;
  }

  static get profileMyCourseUrl(): string {
    return this.profileUrlPrefix + this._profileMyCourseUrl;
  }

  static get profileMyCollectUrl(): string {
    return this.profileUrlPrefix + this._profileMyCollectUrl;
  }

  static get profileMyCustomerServiceUrl(): string {
    return this.profileUrlPrefix + this._profileMyCustomerServiceUrl;
  }

  static get profileMyDownloadListUrl(): string {
    return this.profileUrlPrefix + this._profileMyDownloadListUrl;
  }

  static get profileMyHelpUrl(): string {
    return this.profileUrlPrefix + this._profileMyHelpUrl;
  }
}
