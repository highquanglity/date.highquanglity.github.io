let leftPos = 0
let bottomPos = 0
document.getElementById('yessir').addEventListener('click', () => {
alert('Hiii Chíp 💕\n\nAnh có một lời mời rất đặc biệt dành cho em.\n\n⏰ 19:00 – 06/02/2026\n📍 ZAO Hanoi, No.4 Ng. Huế, Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội\n\nMột buổi hẹn hò, một bữa ăn ngon, và một photobooth vintage mà em thích ✨\n\nEm siêu xinh.\nCòn anh thì siêu háo hức💖 Anh yêu em nhiềuuuuuuuuu')
})
document.getElementById('nooo').addEventListener('mouseover', () => {
    leftPos = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    document.getElementById('nooo').style.position = "absolute"
    document.getElementById('nooo').style.left = leftPos + "%"
    document.getElementById('nooo').style.bottom = bottomPos + "%"
})
document.getElementById('nooo').addEventListener('click', () => {
    leftPos = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    document.getElementById('nooo').style.position = "absolute"
    document.getElementById('nooo').style.left = leftPos + "%"
    document.getElementById('nooo').style.bottom = bottomPos + "%"
})
