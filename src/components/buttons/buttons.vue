<template>
  <div>
    <div class="flex justify-center items-center">
      <h1 class="text-2xl my-10">Buttons form figma</h1>
      <a href="https://www.figma.com/file/IcWkjlovTdECsxHFz1l8tj/log-my-hours?node-id=0%3A1"></a>
    </div>
    <div class="inline-block flex-wrap justify-center items-center bg-red-300 mx-5 p-5">
      <h2>First Button</h2>
      <span
        class="bg-blue-700
         rounded-custom-1
         hover:bg-white
         hover:text-blue-700
         hover:border-blue-700
          text-white p-5
          flex justify-center
           items-center mx-2 w-customWidth h-customHeight"><a
        href="#">Copy</a></span>
    </div>
    <div class="inline-block flex-wrap justify-center items-center bg-red-300 mx-5 p-5">
      <h2>Second Button</h2>
      <span
        class="bg-blue-700
        rounded-custom-1
        hover:bg-white
        hover:text-blue-700
        text-white p-5 flex
         justify-center
          items-center
          mx-2 w-customWidth
           h-customHeight">
        <button>Copy</button>
      </span>
    </div>
    <div class="inline-block flex-wrap justify-center items-center bg-red-300 mx-5 p-5">
      <h2>Third button</h2>
      <span>
        <button :disabled="!isActive"
                class="bg-blue-700
                 rounded-custom-1
                 hover:bg-white
                 hover:text-blue-700
                  text-white
                  p-5
                  flex
                  justify-center
                   items-center
                    mx-2
                    w-customWidth
                     h-customHeight
                     disabledButton">Copy</button>
      </span>
    </div>
  </div>
</template>

<script>
import '@/assets/tailwind.css';

export default {
  name: 'buttons',
  methods() {
  },
  data() {
    return {
      isActive: false,
    };
  },
};

</script>

<style scoped>
.disabledButton:disabled {
  background: silver;
  color: white;
}
</style>
