const eyeIcon = document.querySelector(".eye-icon");
const nftImg = document.querySelector(".nft-card-img");

nftImg.addEventListener("mouseover", function() {

nftImg.classList.add("nft-blue-bg");
eyeIcon.classList.add("block")

})

nftImg.addEventListener("mouseleave", function() {

nftImg.classList.remove("nft-blue-bg");
eyeIcon.classList.remove("block")

})