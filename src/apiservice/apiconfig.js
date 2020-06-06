/**
 * url 接口的地址（必填）
 * method 请求方式 post or get（没有则为post）
 * @type {{Login: {url: string, method: string}}}
 */
module.exports = {
  All_Pokemons: { url: '/pokemon/Plist', method: 'get' }, //所有宝可梦列表
  More_Pokemons: { url: '/pokemon/Plistmore' }, //更多宝可梦列表

  Single_Pokemon_Info: { url: '/pokemon/Pquerry', method: 'get' }, //单个宝可梦详细信息
  Pokemon_Ability: { url: '/pokemon/Ability', method: 'get' }, //宝可梦能力值
  Prev_Next_Pokemon: { url: '/pokemon/prevnext/', method: 'get' }, //查询上下宝可梦的名字

  Update_Pokemon_Team: { url: '/pokemon/myteam' }, //创建/修改我的队伍
  My_Pokemon_Team: { url: '/pokemon/team', method: 'get' }, //查询我的队伍

  User_Register: { url: '/user/reg' }, //用户注册页面
  User_List: { url: '/user/list', method: 'get' }, //用户列表
  User_Login: { url: '/user/login', method: 'get' }, //用户登录
};
