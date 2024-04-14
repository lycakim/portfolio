<template>
  <div
    class="min-h-40 bg-[#272727] py-10 flex justify-between gap-4 w-full overflow-y-hidden"
  >
    <div class="flex justify-between gap-5 items-center mx-auto">
      <div v-for="(image, index) in images" :key="index">
        <img
          :src="image.url"
          alt="Carousel Image"
          :class="image.class"
          class="thumbnail transform object-cover"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        {
          url: require("@/assets/kopikap_full.png"),
          class: "rotate-3 mr-10"
        },
        { url: require("@/assets/geezmo_full.png"), class: "-rotate-3 mr-10" },
        { url: require("@/assets/para_full.png"), class: "rotate-3 mr-10" },
        {
          url: require("@/assets/tighubad_full.png"),
          class: "-rotate-3 mr-10"
        }
      ]
    };
  }
};
</script>
<style scoped>
.scrollable-div {
  max-width: 100%;
}
.thumbnail {
  width: 368px;
  height: 221px;
}
</style>
