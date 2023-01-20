import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

      player.on('play', function() {
    });

      player.getVideoTitle().then(function(title) {
    });

    const TIME_DATA_PLAYER = 'videoplayer-current-time';
      player.on("timeupdate", throttle(function (data) {
    const time = data.seconds;
      localStorage.setItem(TIME_DATA_PLAYER, time)},1000));
    
    const CURRENT_TIME = 'videoplayer-current-time';
    const time = +localStorage.getItem(CURRENT_TIME);
      player.setCurrentTime(time);
      document.addEventListener('touchstart', { passive: true });