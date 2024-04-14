<template>
  <div
    id="about"
    class="min-h-svh px-2 md:px-24 w-full text-white bg-gray-100 flex items-center justify-center py-32"
  >
    <div class="flex justify-between gap-0 w-full items-center ml-14">
      <div
        class="text-2xl font-semibold mb-4 w-full flex justify-between gap-10"
      >
        <div class="flex flex-col w-3/5 justify-start ml-20">
          <img
            src="../assets/user.png"
            class="user border-8 border-[#252529]"
          />
          <div class="mt-10 flex items-center gap-3">
            <img src="../assets/twitter.png" class="w-3 h-3" />
            <div class="text-base font-bold">Follow on X</div>
          </div>
          <div class="mt-5 flex items-center gap-3">
            <img src="../assets/github.png" class="w-4 h-4" />
            <div class="text-base font-bold">Follow on Github</div>
          </div>
          <div class="mt-5 flex items-center gap-3">
            <img src="../assets/linkedin.png" class="w-4 h-4" />
            <div class="text-base font-bold">Follow on LinkedIn</div>
          </div>
          <div class="mt-5 flex items-center gap-3">
            <img src="../assets/facebook.png" class="w-4 h-4" />
            <div class="text-base font-bold">Follow on Facebook</div>
          </div>
          <hr class="mt-6 mr-14" />
          <div class="mt-6 flex items-center gap-3">
            <img src="../assets/email.png" class="w-4 h-4" />
            <div class="text-base font-bold">loki.laufeson@email.com</div>
          </div>
        </div>
        <div class="mr-28 text-left w-full">
          <h1 class="greetings">
            I’m Loki Laufeyson. I lived in Earth 313 where I develop softwares.
          </h1>
          <p class="font-normal text-base mt-5">
            I’m Loki Laufeyson, a senior and lead software engineer based in
            Earth 313. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p class="font-normal text-base mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p class="font-normal text-base mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <p class="font-normal text-base mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p class="font-normal text-base mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.user {
  width: 254px;
  height: 254px;
  border-radius: 50px;
}
.greetings {
  font-weight: 700;
  font-size: 48px;
  line-height: 56.35px;
  color: #eeeef0;
}
#about {
  background-image: url("../assets/bg.png");
  background-size: 120;
  background-repeat: no-repeat;
}
</style>
