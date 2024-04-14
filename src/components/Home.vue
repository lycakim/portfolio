<template>
  <div
    id="home"
    class="min-h-screen px-2 md:px-24 w-full text-white bg-gray-100 flex items-center justify-center"
  >
    <div class="flex justify-between gap-0 w-full items-center ml-14">
      <div class="text-2xl font-semibold mb-4 w-full flex flex-col gap-6">
        <h1 class="text-5xl font-bold text-left greetings">
          Hi! I’m Loki Laufeyson
        </h1>
        <h1 class="text-md font-normal text-left profession">
          Senior Software Engineer
        </h1>
        <div class="flex flex-row gap-6 font-normal text-sm">
          <a href="https://www.x.com" target="_blank"
            ><img src="../assets/twitter.png" class="w-4 h-4"
          /></a>
          <a href="https://www.github.com" target="_blank"
            ><img src="../assets/github.png" class="w-4 h-4"
          /></a>
          <a href="https://www.linkedin.com" target="_blank"
            ><img src="../assets/linkedin.png" class="w-4 h-4"
          /></a>
          <a href="https://www.facebook.com" target="_blank"
            ><img src="../assets/facebook.png" class="w-4 h-4"
          /></a>
        </div>
        <div class="flex flex-row gap-3 font-medium text-sm">
          <button class="bg-mainGreen py-2 px-5 rounded-full text-white">
            Download CV
          </button>
          <button
            class="border border-mainGreen text-mainGreen hover:bg-mainGreen hover:text-white py-2 px-10 rounded-full"
          >
            Hire me
          </button>
        </div>
      </div>
      <div class="flex w-full justify-end mr-14">
        <img
          src="../assets/user.png"
          class="user rounded-full border-8 border-[#252529]"
        />
      </div>
    </div>
  </div>
</template>
<script>
import About from "@/components/About.vue";

export default {
  name: "HomeView",
  components: {
    About
  }
};
</script>
<style scoped>
.user {
  width: 358px;
  height: 351px;
}
.greetings {
  line-height: 56.35px;
  font-weight: 700;
}
.profession {
  font-size: 16px;
  font-weight: 400;
  line-height: 18.78px;
}
#home {
  background-image: url("../assets/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
