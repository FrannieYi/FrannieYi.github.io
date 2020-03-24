const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,                 //开启吸底模式
    autoplay: false,              //音频自动播放
    mini: false,                  //迷你模式 
    // theme: '#66ccff',             //主题颜色
    loop: 'all',                  //音频循环播放, 可选值: 'all', 'one', 'none'
    order: 'random',              //音频循环顺序, 可选值: 'list', 'random'
    preload: 'auto',              //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7,                  //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true,                  //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: true,            //列表默认折叠  
    listMaxHeight: 90,            //列表最大高度
    audio: [
      {
        name: '亦是此间少年',
        artist: '枯木逢春',
        url: 'http://music.163.com/song/media/outer/url?id=1385646451.mp3',
        cover: '/images/music1.png',
      },
	  // {
    //     name: 'Umbrella (Matte Remix)',
    //     artist: 'Matte / Ember Island',
    //     url: 'http://music.163.com/song/media/outer/url?id=164209623.mp3',
    //     cover: '/images/1.jpg',
    //   },
	  // {
    //     name: '大眠 (完整版)原唱：王心凌',
    //     artist: '小乐哥',
    //     url: 'http://music.163.com/song/media/outer/url?id=3778678.mp3',
    //     cover: '/images/2.jpg',
    //   },
	  {
        name: '世间美好与你环环相扣',
        artist: '柏松',
        url: 'http://music.163.com/song/media/outer/url?id=1363948882.mp3',
        cover: '/images/music2.png',
      }
    ]
});