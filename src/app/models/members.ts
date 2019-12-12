/**
 *
 *
 * @export
 * @interface Member
 */
export interface Member {
  id: string;
  name: string;
  email: string;
  password: string;
  bio: string;
  profileImg: string;
  location: string;
  follower:[];
  following:[];
  favorites:Array<string>;
}
