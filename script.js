function reChange(iconID) {
  if (document.getElementById(iconID).className == "fas fa-times") {
    document.getElementById(iconID).className = "fas fa-bars";
  } else {
    document.getElementById(iconID).className = "fas fa-times";
  }
}

// slideshow

var img = document.getElementById("img");
var images = [
  "https://th.bing.com/th/id/R.cd7eff6aa9de4bca07ccbe7992edf3a4?rik=ftSwji%2bO9JS06w&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.da05449fd67533ff0f1d3d940fa57d9c?rik=mfHYToIKpRcv3w&riu=http%3a%2f%2fimg.xcitefun.net%2fusers%2f2014%2f07%2f359772%2cxcitefun-bosphorus-bridge-5.jpg&ehk=iIpsDKGsuSXZPBarFD%2bg7ltL8TYJlzk5fwiN3eDuqTU%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.33ee5bec2e99063e82760d09a760355a?rik=CsFz0iPzowho9g&riu=http%3a%2f%2famolife.com%2fen%2fwp-content%2fuploads%2f2015%2f12%2fdubai.jpg&ehk=%2b9vAdbmSxVJYUfaakZeDtmBHILwZ%2fnxUVwC16BLUyao%3d&risl=&pid=ImgRaw&r=0",
];

var i = 0;

function prev() {
  if (i <= 0) i = images.length;
  i--;
  return setImg();
}

function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return img.setAttribute("src", images[i]);
}

// Numbers
