import consumer from "./consumer"

document.addEventListener('turbolinks:load', () => {
  /**
   * Map
   */
  mapboxgl.accessToken = 'pk.eyJ1Ijoib2lzaGktZ29oYW4iLCJhIjoiY2t0eTJpdHBoMnltaTJwbzIydzYwaGZnZCJ9.huyeJH0eaXmtCL7a4klCOw'
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [139.745451, 35.658577],
    minZoom: 2,
    maxZoom: 6,
    zoom: 4
  }).addControl(
      new MapboxLanguage({
        defaultLanguage: 'ja'
      })).addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: false
        },
        trackUserLocation: true,
        showUserHeading: true
      }))

  //マーカー押下時のサウンド
  const soundEffect = new Audio()
  function startSoundEffect(src) {
          // エフェクト音
          soundEffect.preload = 'auto'
          soundEffect.src = src
          soundEffect.load()
          soundEffect.currentTime = 0;
          soundEffect.play()
      }

  function pin(lat, lng) {
    const marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map);

    startSoundEffect('assets/start.mp3')
    console.log('sound')

    setTimeout(function(){
      marker.remove();
    }, 5000);
  }

  consumer.subscriptions.create("GohanChannel", {
    connected() {
      // Called when the subscription is ready for use on the server
      // console.log('test')
      // pin(35.658577, 139.745451)
    },

    disconnected() {
      // Called when the subscription has been terminated by the server
    },

    received(data) {
      // Called when there's incoming data on the websocket for this channel
      let lat = data['params']['lat']
      let lng = data['params']['lng']
      pin(lat, lng)
    }
  })

})


