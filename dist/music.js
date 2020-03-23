const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: '亦是此间少年',
        artist: '枯木逢春',
        url: 'http://music.163.com/song/media/outer/url?id=1385646451.mp3',
        cover: '/images/alone.jpg',
      }
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
	  // {
    //     name: '世间美好与你环环相扣',
    //     artist: '柏松',
    //     url: 'http://music.163.com/song/media/outer/url?id=1363948882.mp3',
    //     cover: '/images/3.jpg',
    //   }
    ]
});