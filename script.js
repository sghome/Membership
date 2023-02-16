const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')





const nameInput = document.getElementById('name')
const downloadBtn = document.getElementById('download-btn')

const img = new image()



image = new Image()
image.src = 'cert.png'

img.src = 'm.gif'

image.onload = function () {
	drawImage()
}


img.onload = function () {
	drawImage()
}



function imgChange() {
	if(image.src.indexOf('cert.jpg') > -1)
	image.src='cert.png';
	else
	img.src='m.gif';
	image.onload = function(){
		drawImage()
  };

}
function drawImage() {
ctx.drawImage(img.frames[0].image,0,0)

	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '55px Sans-Serif'
	
	ctx.fillStyle = 'white'


	if(image.src.indexOf('cert.png') > -1)
	ctx.fillText(nameInput.value, 70, 179)
	
	else
	ctx.fillText(nameInput.value, 800, 580)
}

nameInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'Certificate - ' + nameInput.value 
})










// translate mouse movement into 3D rotation
window.addEventListener("mousemove", e => {
  w = window.innerWidth;
  h = window.innerHeight;

  const rotx = 7 - e.pageY * (14 / h);
  const roty = -8 + e.pageX * (16 / w);

  document.getElementById(
  "card").
  style.transform = `rotateY(${roty}deg) rotateX(${rotx}deg)`;
});

// translate touch movement into 3D rotation
window.addEventListener("touchmove", e => {
  w = window.innerWidth;
  h = window.innerHeight;

  const rotx = 7 - e.changedTouches[0].pageY * (14 / h);
  const roty = -10 + e.changedTouches[0].pageX * (20 / w);

  document.getElementById(
  "card").
  style.transform = `rotateY(${roty}deg) rotateX(${rotx}deg)`;
});


