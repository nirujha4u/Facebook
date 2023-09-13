const list = document.getElementById("list")
const post = document.getElementById("post-display")
const close = document.getElementById("close")
const cont = document.getElementById("cont")

const pic = document.getElementById("pic")
const h = document.querySelector(".heart")
const hred = document.querySelector(".heart-red")

list.addEventListener("click", function (e) {
    if (post.style.display === "block") {
        post.style.display = "none";
    } else {
        post.style.display = "block";
    }
})

close.addEventListener("click", function () {
    if (cont.style.display == "block") {
        cont.style.display = "none";
    } else {
        cont.style.display = "none";
    }
})

// -------------------------
const list1 = document.getElementById("list1")
const post1 = document.getElementById("post-display1")
const close1 = document.getElementById("close1")
const cont1 = document.getElementById("cont1")


list1.addEventListener("click", function (e) {
    if (post1.style.display === "block") {
        post1.style.display = "none";
    } else {
        post1.style.display = "block";
    }
})

close1.addEventListener("click", function () {
    if (cont1.style.display == "block") {
        cont1.style.display = "none";
    } else {
        cont1.style.display = "none";
    }
})

