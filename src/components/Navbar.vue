<template>
  <div>
    <nav class="px-2 md:px-28 fixed w-full top-0 z-50" id="navbar">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <img src="../assets/icon.png" class="w-9 h-9" />
          </div>

          <!-- Navbar links -->
          <div class="hidden md:block">
            <div class="flex items-center space-x-4 gap-3">
              <a
                href="#home"
                class="active px-9 py-2 text-md font-medium text-white hover:bg-[#252529] hover:text-mainGreen rounded-full"
                >Home</a
              >
              <a
                href="#about"
                class="px-9 py-2 text-md font-medium text-white hover:bg-[#252529] hover:text-mainGreen rounded-full"
                >About</a
              >
              <a
                href="#project"
                class="px-9 py-2 text-md font-medium text-white hover:bg-[#252529] hover:text-mainGreen rounded-full"
                >Projects</a
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");

  window.addEventListener("scroll", function () {
    const fromTop = window.scrollY;
    var navbar = document.getElementById("navbar");

    links.forEach(function (link) {
      const section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop + 100 &&
        section.offsetTop + section.offsetHeight > fromTop + 100
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    if (window.scrollY > 0) {
      navbar.style.backdropFilter = "blur(5px)"; // Adjust the blur radius as needed
    }
  });

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
</script>
<style scoped>
.active {
  background-color: #252529;
  color: #17a898;
}
</style>
