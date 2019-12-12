/**
 *
 *
 * @export
 * @interface artworkdetail
 */
export interface artworkdetail{
    url:string;//link 链接
    artworktype: string;//类型 暂时支持(support) youtube,local video,photo
    poster: string; //海报
}
/**
 *
 *
 * @export
 * @interface comment
 */
export interface comment{//评论
    comment:string; //内容
    comid:string;//评论人
}
/**
 *
 *
 * @export
 * @interface artwork
 */
export interface artwork {
    id:string;  //id
    name: string;//name
    createdate:Date;
    description: string;
    auth:string; //作者
    artworkdetail: artworkdetail;
    like:Array<string>;//喜欢
    comments:Array<comment>;//评论
}








