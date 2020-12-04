const anaSayfa = function(req, res, next) {
  res.render('mekanlar-liste',
    { title : 'Anasayfa',
      'footer' : 'Tarık Buğra KAYA 2020',
      'sayfaBaslik' : {
        'siteAd' : 'Mekan32',
        'aciklama' : 'Isparta civarındaki mekanları keşfedin!'
      },
      'mekanlar' : [
        {
          'ad' : 'Starbucks',
          'adres' : 'Centrum Garden',
          'puan' : '5',
          'imkanlar' : ['Kahve', 'Çay', 'Pasta'],
          'mesafe' : '750m'
        },
        {
          'ad' : 'Gloria Jeans',
          'adres' : 'Iyaş Avm',
          'puan' : '3',
          'imkanlar' : ['Kahve', 'Kek', 'Çay'],
          'mesafe' : '5km'
        },
        {
          'ad' : 'Eddwards',
          'adres' : 'Kafeler Caddesi',
          'puan' : '2',
          'imkanlar' : ['Kahve', 'Cheese Kek', 'Pasta'],
          'mesafe' : '1km'
        },
        {
          'ad' : 'MackBear',
          'adres' : 'Fatih Mahallesi',
          'puan' : '5',
          'imkanlar' : ['Kahve Çeşitleri', 'Kek', 'Pasta'],
          'mesafe' : '6km'
        },
        {
          'ad' : 'Rabbit',
          'adres' : 'İyaş AVM Civarı',
          'puan' : '1',
          'imkanlar' : ['Kahve', 'Kek', 'Çay', 'Tost', 'Çalışma Alanları'],
          'mesafe' : '100km'
        }
      ]
    }
  );
}

const mekanBilgisi = function(req, res, next) {
  res.render('mekan-detay', 
    { title : 'Mekan Bilgisi',
      'sayfaBaslik' : 'Starbucks',
      'footer' : 'Tarık Buğra KAYA 2020',
      'mekanBilgisi' : {
        'ad' : 'Starbucks',
        'adres' : 'Centrum Garden',
        'puan' : 5,
        'imkanlar' : ['Kahve', 'Çay', 'Pasta'],
        'koordinatlar' : {
          'enlem': '37.781885',
          'boylam' : '30.566034'
        },
        'saatler' : [
          {
            'gunler' : 'Pazartesi - Cuma',
            'acilis' : '7:00',
            'kapanis' : '23:00',
            'kapali' : false
          },
          {
            'gunler' : 'Cumartesi',
            'acilis' : '9:00',
            'kapanis' : '22:00',
            'kapali' : false
          },
          {
            'gunler' : 'Pazar',
            'kapali' : true
          }
        ],
        'yorumlar' : [
          {
            'yorumYapan' : 'Ahmet Görkem ALAN',
            'puan' : '5',
            'tarih' : '04.12.2020',
            'yorumMetni' : 'Mükemmel bir mekan.'
          },
          {
            'yorumYapan' : 'İbrahim Aktan SANHAL',
            'puan' : '1',
            'tarih' : '03.12.2020',
            'yorumMetni' : 'Böyle bir rezillik görmedim.'
          },
          {
            'yorumYapan' : 'Melikşah Furkan YILDIZ',
            'puan' : '2',
            'tarih' : '01.11.2012',
            'yorumMetni' : 'İdare eder.Daha iyilerini yapmışlığım var.'
          }
        ]
      }
    }
  ); 
}

const yorumEkle = function(req, res, next) {
  res.render('yorum-ekle', 
    { 
      title : 'Yorum Ekle',
      'footer' : 'Tarık Buğra KAYA 2020'
    }
  );
}


module.exports = {
  anaSayfa,
  mekanBilgisi, 
  yorumEkle
}