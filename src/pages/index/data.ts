/**
 * 首页状态
 * advance按钮显示：sub 立即申请，get 我要借钱/我要还钱
 */
export enum HomePageStatus {
  /**
   * 未登录
   */
  NotLoggedIn = "notLogin",
  /**
   * 已登录未使用
   */
  LoggedInNotUsed = "sub",
  /**
   * 已登录有记录
   */
  LoggedInHasRecord = "get",
}
