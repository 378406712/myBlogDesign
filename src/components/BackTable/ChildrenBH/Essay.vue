<template>
  <div class="essay">
    <div class="grey_bg">
      <div class="content">
        <div class="content-header">
          <div class="container">
            <h1 class="content-heading">撰写文章</h1>
          </div>
        </div>

        <!-- 内容 -->
        <div class="container">
          <section class="list">
            <!-- 待循环 -->
            <div class="card">
              <div class="card-main">
                <ul class="card-inner essay-card">
                  <li v-changeColor="{ font: 32 + 'px' }">
                    <p class="tit"><i class="el-icon-edit"></i>博文总览</p>
                  </li>
                  <li>
                    <span>文章标题:{{ caption | limit }}</span>
                  </li>
                  <li>
                    <span>文章内容:{{ content | limit }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section class="list">
            <!-- 待循环 -->
            <div class="card">
              <div class="card-main">
                <ul class="card-inner">
                  <li>
                    <p class="tit">文章标题</p>
                    <input
                      type="text"
                      @focus="flag = !flag"
                      @blur="flag = !flag"
                      :class="{ orange: flag }"
                      class="essay-title"
                      placeholeder="标题"
                      v-model.lazy="caption"
                    />
                  </li>
                  <li>
                    <div class="essay-content">
                      <textarea
                        @focus="changeStyle"
                        @blur="removeStyle"
                        ref="textarea"
                        :class="{ orange: tag }"
                        name="content"
                        class="area"
                        rows="5"
                        col="4"
                        v-model.lazy="content"
                      ></textarea>
                      <label :class="labelStyle">等一个菠萝包 ...</label>
                    </div>
                  </li>

                  <li>
                    <div class="submit-btn">
                      <a @click="publish" href="javascript:;" class="publish"
                        >发布~</a
                      >
                      <div class="wrap-custom-file">
                        <input
                          type="file"
                          name="image2"
                          id="image2"
                          accept=".gif, .jpg, .png"
                        />
                        <label for="image2">
                          <span>Select Image</span>
                          <i class="fa fa-plus-circle"></i>
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

import "../../../assets/css/essay_compile_edit.css";
export default {
  name: "essay",
  data() {
    return {
      content: "",
      caption: "",
      flag: false,
      tag: false,
      reg: false,
      labelStyle: {
        input_label: true,
        active_essay: false
      }
    };
  },

  methods: {
    changeStyle() {
      this.tag = true;
      this.labelStyle.active_essay = true;
    },
    removeStyle() {
      if (this.$refs.textarea.value == "") {
        this.labelStyle.active_essay = false;
      }
      this.tag = false;
    },
    publish() {
      if (this.caption != "" && this.content != "") {
        this.$axios
          .post("https://myblog-bb162.firebaseio.com/essay.json", {
            content: this.content,
            caption: this.caption
          })
          .then(res => {
            console.log(res);
            this.$message({
              message: "恭喜你，这是一条成功消息",
              type: "success"
            });
          });
      } else if (this.caption != "") {
        this.$message({
          message: "标题为空~",
          type: "warning"
        });
      } else if (this.content != "") {
        this.$message({
          message: "写点内容吧~",
          type: "warning"
        });
      } else {
        this.$message({
          message: "错误：请输入内容",
          type: "warning"
        });
      }

      this.caption = "";
      this.content = "";
    }
  },

  mounted() {
    //上传图片
    $('input[type="file"]').each(function() {
      // Refs
      var $file = $(this),
        $label = $file.next("label"),
        $labelText = $label.find("span"),
        labelDefault = $labelText.text();

      // When a new file is selected
      $file.on("change", function(event) {
        var fileName = $file
            .val()
            .split("\\")
            .pop(),
          tmppath = URL.createObjectURL(event.target.files[0]);
        //Check successfully selection
        if (fileName) {
          $label
            .addClass("file-ok")
            .css("background-image", "url(" + tmppath + ")");
          $labelText.text(fileName);
        } else {
          $label.removeClass("file-ok");
          $labelText.text(labelDefault);
        }
      });

      // End loop of file input elements
    });
  }
};
</script>
<style scoped>
.area {
  background-image: url("./../../../assets/bg/icon/comment-icon.png");
}

.submit-btn {
  margin: 30px 0;
}

.content-header {
  background-image: url("./../../../assets/bg/bg_back/bg-essay.png");
}
</style>
