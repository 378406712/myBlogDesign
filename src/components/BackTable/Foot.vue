<template>
  <div class="foots">
    <div class="about">
      <p class="copyright">Copyright &copy; by 轻度喵症 All Rights Reserved.</p>
      <p class="from">2019.11.7 | start</p>
      <p class="maxim">
        <a href="">当你的才华还撑不起你的野心时，那你就应该静下来学习</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "foots",
  data() {
    return {}
  }
};
</script>

<style scoped>
.foots {
  margin-top: 50px;
  margin-left: 240px;
  text-align: center;
  font-size: 13px;
}
.copyright {
  margin-bottom: 8px;
  color: #666666;
}
.from {
  margin-bottom: 8px;

  color: #b9b9b9;
}
.maxim a {
  color: #13c2c2;
}
</style>
