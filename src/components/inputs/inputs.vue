<template>
  <div>
    <form>
      <section>
        <label>Input default</label>
        <section>
          <input class="border">
        </section>
      </section>
      <section>
        <label>Input focused</label>
        <section>
          <input class="border">
        </section>
      </section>
      <section>
        <section><label>Input Success</label></section>
        <section>
          <input class="border-success">
        </section>
      </section>
      <section>
        <section><label>Input False</label></section>
        <section>
          <input class="w-293 h-32 p-5 border-false">
        </section>
      </section>
    </form>
  </div>
</template>

<script>
export default {
  name: 'inputs',
  data() {
    return {
      isActive: false,
      valueSuccess: '',
      valueDanger: '',
    };
  },
};
</script>

<style scoped>
.border {
  width: 293px;
  height: 32px;
  border: 1px solid #C0C0C0;
  border-radius: 5px;
  outline: none;
  padding: 5px;
}

.border:focus {
  border: 1px solid #0155D2;
}
.border-success{
  width: 293px;
  height: 32px;
  border: 1px solid #69AA9E;
  border-radius: 5px;
  outline: none;
  padding: 5px;
}
.border-false{
  border: 1px solid red;
  border-radius: 5px;
  outline: none;
}
</style>
