var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (!isMobile) {
    document.getElementById('home-index-callus-button').remove
}
else {
  var lookingforajobtext = document.getElementById('lookingforajobtext-index-home');
  lookingforajobtext.style.transform = " rotate(-10deg) translate(-50%,40%)";
  lookingforajobtext.style.animation = " home-index-text-werehiring-anim-phone 1s infinite"
}