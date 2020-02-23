<template>
  <div class="post-new">
    <div class="grey_bg">
      <div class="content">
        <div class="content-header">
          <div class="container">
            <h1 class="content-heading">撰写新文章</h1>
          </div>
        </div>

        <!-- 内容 -->
          <div class="container">
            <section class="list">
              <!-- 待循环 -->
              <div class="card">
                <div class="card-main">
                  <ul class="card-inner">
                    <li>
                      <p class="tit">文章标题</p>
                      <input type="text" class="essay-title" placeholeder="标题" />
                    </li>

                    <li></li>
                    <li class="card-search">
                      <quillEditor />
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
      
      </div>
      <div class="links">
        <a>
          <div class="linear-btn" id="toPublish">发布</div>
        </a>
        <a>
          <div class="linear-btn" id="toReset">清空</div>
        </a>
        <a>
          <div class="linear-btn" id="toResolve">保存</div>
        </a>
        <a>
          <div class="linear-btn" id="toDocu">目录</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
// import Editor from '../Components/Editor'
import { quillEditor } from 'vue-quill-editor'
import Scroll from '../Components/Scroll'
import '../../../assets/css/essay_compile_edit.css'
export default {
  components: { quillEditor }
}
</script>

<style scoped>
.area {
  background-image: url('./../../../assets/bg/icon/comment-icon.png');
}

.submit-btn {
  margin: 30px 0;
}

.content-header {
  background-image: url('./../../../assets/bg/bg_back/bg-essay.png');
}
</style>
<style>
.el-scrollbar__wrap {
  overflow-x: hidden;
}
.linear-btn {
  text-align: center;
  line-height: 45px;
  width: 45px;
  height: 45px;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: bold;
}
#toPublish {
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgb(209, 255, 26) 0%,
    rgb(26, 209, 255) 100%
  );
}
#toReset {
  border-radius: 35%;
  background: linear-gradient(to right, #ff9569 0%, #e92758 100%);
}
#toResolve {
  border-radius: 35%;
  background-image: linear-gradient(
    to top,
    #d5dee7 0%,
    #ffafbd 0%,
    #c9ffbf 100%
  );
}
#toDocu{
   border-radius: 50%;
background:linear-gradient(#fff1eb,#ace0f9);


}
.links {
  position: fixed;
  left: 96.8%;
  top: 50%;
}
.links a {
  cursor: pointer;
  display: block;
  margin-bottom: 10px;
}
</style>