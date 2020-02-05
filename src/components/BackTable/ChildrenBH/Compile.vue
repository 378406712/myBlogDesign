<template>
  <div class="compile">
    <div class="grey_bg">
      <div class="content">
        <!-- 内容 -->
        <div class="container">
          <section class="list">
            <!-- 待循环 -->
            <div class="card">
              <div class="card-main">
                <ul class="card-inner">
                  <li>
                    <p class="tit">文章标题</p>
                    <input
                      type="text"
                      @focus="flag = true"
                      @blur="flag = false"
                      :class="{ orange: flag }"
                      class="essay-title"
                      placeholeder="标题"
                      v-model="caption"
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
                        tabindex="4"
                        rows="5"
                        col="4"
                        v-model="content"
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
import "../../../../assets/css/essay_compile_edit.css";
export default {
  name: "compile",
  data() {
    return {
      id: this.$route.params.id,
      content: "",
      caption: "",
      flag: false,
      tag: false,
      reg: false,
      labelStyle: {
        input_label: true,
        active_essay: true
      }
    };
  },
  computed: {
    captions() {
      if (this.caption !== "" && this.caption.length > 15) {
        return this.caption.slice(0, 15) + "...";
      } else {
        return this.caption;
      }
    },
    contents() {
      if (this.content !== "" && this.content.length > 30) {
        return this.content.slice(0, 30) + "...";
      } else {
        return this.content;
      }
    }
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
            this.$router.push("/backhome/edit");
          });
      } else if (this.caption != "") {
        this.$message({
          message: "标题为为空~",
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
    //请求数据
    // console.log(this.id)
    this.$axios
      .get("https://myblog-bb162.firebaseio.com/essay/" + this.id + ".json")
      .then(res => {
        console.log(res.data);
        this.content = res.data.content;
        this.caption = res.data.caption;
      });

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
<style>
.area {
  background-image: url("./../../../assets/bg/icon/comment-icon.png");
}
.card {
  margin-top: 65px;
}
</style>
