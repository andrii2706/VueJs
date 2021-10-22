<template>
  <div>
    <h2>{{ text }}</h2>
    <div>
      <paginate
        :page-count="20"
        :click-handler="pageHandler"
        :prev-text="'Previous'"
        :next-text="'Next'"
        :container-class="'flex'"
        :page-class="'page-item'">
      </paginate>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  data() {
    return {
      text: 'Hello Its Pagination Component',
    };
  },
  methods: {
    pageHandler(hello) {
      console.log(hello);
    },
  },
};
</script>

<style style="css">
.page-item {
  font-size: 14px;
  color: #6A6A6A;
  margin-right: 6px;
  margin-left: 6px;
}

.active {
  width: 24px;
  background: rgba(1, 85, 210, 0.1);
  border-radius: 3px;
  color: darkblue;
}

.disabled {
  color: #6A6A6A;
}

ul > li > a {
  color: #6A6A6A;
}
</style>
