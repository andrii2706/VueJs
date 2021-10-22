<template>
  <div>
    <div class="bages bg-yellow-400 my-6">
      <span class="span-block">
        <a href="#">sick leave</a>
      </span>
    </div>
    <div class="bages-danger bg-red-600 my-6">
      <span class="span-block">
        <a href="#">day off</a>
      </span>
    </div>
    <div class="bages-green bg-green-400 my-6">
        <span class="span-block">
      <a href="#">Independance Day</a>
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bages',
};
</script>

<style scoped>
.bages {
  width: 24px;
  height: 8px;
  border-radius: 4px;
}

.bages-danger {
  width: 24px;
  height: 8px;
  border-radius: 4px;
}

.bages-green {
  width: 24px;
  height: 8px;
  border-radius: 4px;
}
.span-block{
  display: none;
}
.bages:hover .span-block{
  width: 83px;
  height: 32px;
  margin: 25px;
  background: white;
  border: 1px solid #FBB911;
  box-sizing: border-box;
  border-radius: 14px;
  display: block;

}

.bages-danger:hover .span-block{
  width: 66px;
  height: 32px;
  margin: 25px;
  background: white;
  border: 1px solid #CB2525;
  box-sizing: border-box;
  border-radius: 14px;
  display: block;

}
.bages-green:hover  .span-block{
  width: 139px;
  height: 32px;
  margin: 25px;
  background: white;
  border: 1px solid #69AA9E;
  box-sizing: border-box;
  border-radius: 14px;
  display: block;

}

</style>
