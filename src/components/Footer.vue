<template>
  <div
    class="min-h-36 w-full bg-gray-100 flex flex-col items-center justify-center px-32"
  >
    <div class="border-t flex justify-between w-full py-9">
      <div class="text-white">
        <ul class="flex justify-between gap-8">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
        </ul>
      </div>
      <div class="text-sm text-[#666666]">
        CC BY 4.0 - Designed by <strong>Jeric Eduarte</strong>. All rights
        reserved.
      </div>
    </div>
  </div>
</template>
<script>
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("ul li a");
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
