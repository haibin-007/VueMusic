const baseUrl = "/api";
// const baseUrl = "http://169.254.25.131:3004";


const apiMusic = {
  loginCellphone: '/login/cellphone',  // 手机登陆
  userPlaylist: '/user/playlist',  // 获取用户歌单
  playlistDetail: '/playlist/detail',  // 获取歌单详情
  musicUrl: '/music/url', // 获取音乐url
  search: '/search',  // 搜素音乐
  lyric: '/lyric',  // 获取歌词
  comment: '/comment',  // 获取评论
  album: '/album', //  获取专辑内容
  artists: '/artists',  // 获取歌手单曲列表
  artistAlbum: '/artist/album',  // 获取歌手专辑列表
  artistDesc: '/artist/desc', //  获取歌手信息
  recommendResource: '/recommend/resource', // 获取每日推荐歌单（用户级）
  recommendSongs: '/recommend/songs',  // 获取每日推荐歌曲（用户级）
  personalFm: '/personal_fm', // 私人FM(用户级)
  dailySignin: '/daily_signin',  // 签到(用户级)
  likeMusic: '/like', // 添加喜欢的音乐(用户级)
  fmTrash: '/fm_trash', // 将音乐从私人FM中移除至垃圾桶
  topPlaylist: '/top/playlist', //  歌单(网友精选歌单)
  newAlbum: '/top/albums',  // 新碟上架
  topArtists: '/top/artists', //  热门歌手
  topList: '/top/list', //  音乐排行榜
  personalized: '/personalized', //  推荐歌单
  privatecontent: '/personalized/privatecontent',  // 独家放送
  personalizedMv: '/personalized/mv',  // 推荐MV
  newSong: '/personalized/newsong', // 推荐音乐
  djProgram: '/personalized/djprogram',  // 推荐电台
  mv: '/mv', // 获取mv数据
  simiMv: '/simi/mv', // 获取相似mv
  mvComment: '/comment/mv',  // 获取mv评论
  playlistComment: '/comment/playlist',  // 获取歌单评论
  albumComment: '/comment/album',  // 获取专辑评论
  artistMv: '/artist/mv'  // 获取歌手MV
};

export const LoginCellphoneResource = baseUrl.concat(apiMusic.loginCellphone);
export const UserPlaylistResource = baseUrl.concat(apiMusic.userPlaylist);
export const PlaylistDetailResource = baseUrl.concat(apiMusic.playlistDetail);
export const MusicUrlResource = baseUrl.concat(apiMusic.musicUrl);
export const SearchResource = baseUrl.concat(apiMusic.search);
export const LyricResource = baseUrl.concat(apiMusic.lyric);
export const CommentResource = baseUrl.concat(apiMusic.comment);
export const AlbumResource = baseUrl.concat(apiMusic.album);
export const ArtistsResource = baseUrl.concat(apiMusic.artists);
export const ArtistAlbumResource = baseUrl.concat(apiMusic.artistAlbum);
export const ArtistDescResource = baseUrl.concat(apiMusic.artistDesc);
export const RecommendResource = baseUrl.concat(apiMusic.recommendResource);
export const RecommendSongsResource = baseUrl.concat(apiMusic.recommendSongs);
export const PersonalFmResource = baseUrl.concat(apiMusic.personalFm);
export const DailySigninResource = baseUrl.concat(apiMusic.dailySignin);
export const LikeMusicResource = baseUrl.concat(apiMusic.likeMusic);
export const FmTrashResource = baseUrl.concat(apiMusic.fmTrash);
export const TopPlaylistResource = baseUrl.concat(apiMusic.topPlaylist);
export const NewAlbumResource = baseUrl.concat(apiMusic.newAlbum);
export const TopArtistsResource = baseUrl.concat(apiMusic.topArtists);
export const TopListResource = baseUrl.concat(apiMusic.topList);
export const PersonalizedResource = baseUrl.concat(apiMusic.personalized);
export const PrivatecontentResource = baseUrl.concat(apiMusic.privatecontent);
export const PersonalizedMvResource = baseUrl.concat(apiMusic.personalizedMv);
export const NewSongResource = baseUrl.concat(apiMusic.newSong);
export const DjProgramResource = baseUrl.concat(apiMusic.djProgram);
export const MvResource = baseUrl.concat(apiMusic.mv);
export const SimiMvResource = baseUrl.concat(apiMusic.simiMv);
export const MvCommentResource = baseUrl.concat(apiMusic.mvComment);
export const PlaylistCommentResource = baseUrl.concat(apiMusic.playlistComment);
export const AlbumCommentResource = baseUrl.concat(apiMusic.albumComment);
export const ArtistMvResource = baseUrl.concat(apiMusic.artistMv);
