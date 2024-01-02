// scroll to top

const scrollBtn = document.querySelector(".top");
const rootElement = document.documentElement;

// scrollBtn.addEventListener("scroll", showButton);

const showButton = () => {
  const scrollTotal = rootElement.scrollHeight = rootElement.clientHeight;

  if( rootElement.scrollTop / scrollTotal > 0.1){
    scrollBtn.classList.add("show-btn");
  } else {
    scrollBtn.classList.remove("show-btn");
  }
}

const scrollToTop = () => {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
    })
}

document.addEventListener("scroll", showButton);
scrollBtn.addEventListener("click", scrollToTop);