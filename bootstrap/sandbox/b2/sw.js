self.addEventListener('install', function(event) {
  // Perform install steps
    console.log('installed');
    if( 'Notification' in self) {
        console.log( 'notification exist.')
    }
    else {
        console.log( 'notification not exist.')
    }
    ab() ;
    setInterval( ab(), 10000 );
});
self.addEventListener('fetch', function(event) {
    console.log('fetch');
});

self.addEventListener('activate', function(event) {
    console.log('activate');
                      
});



function ab() {
    console.log('ab');
                   var n = new Notification(
      'test',
      {
        body: '本文です',
        icon: 'img/xxx.png',
        tag: '',
        data: {
          xxx: '任意のデータ'
        }
      }
    );
    // 確実に通知を閉じる
    setTimeout(n.close.bind(n), 5000);
    
}