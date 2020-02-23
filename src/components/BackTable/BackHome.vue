<template>
  <div class="backhome">
    <Head v-on:childByValue="childByValue" />

    <div class="slide">
      <div class="top">
        <a v-show="!flag" class="back_title chinese-font" href="/">
          <img src="./../../assets/media_icon/clover leaf.png" alt />
        </a>
        <a v-show="flag" class="back_title chinese-font" href="/">Clover</a>
      </div>

      <ul class="menu">
        <li>
          <router-link to="/backhome/center">
            <i class="fab fa-fort-awesome"></i>
            <span>首页</span>
          </router-link>
        </li>
        <li class="menu-title">我的</li>
        <li>
          <router-link to="/backhome/personal">
            <i class="fas fa-user"></i>
            <span>账号</span>
          </router-link>
        </li>

        <li class="menu-title">功能</li>

        <li>
          <router-link to="/backhome/post-new">
            <i class="fas fa-feather"></i>
            <span>撰写</span>
          </router-link>
        </li>

        <li>
          <router-link to="/backhome/edit">
            <i class="fas fa-edit"></i>
            <span>编辑</span>
          </router-link>
        </li>

        <li @click="readComment">
          <router-link to="/backhome/comment">
            <i class="fas fa-comment-dots"></i>
            <span>评论</span>
          </router-link>
        </li>

        <li class="menu-title">个性化</li>
        <li>
          <router-link to="/backhome/home_picture">
            <i class="fas fa-comment-dots"></i>
            <span>封面设置</span>
          </router-link>
        </li>
        <li>
          <router-link to="/backhome/top_column">
            <i class="fas fa-comment-dots"></i>
            <span>顶栏定制</span>
          </router-link>
        </li>
        <li>
          <router-link to="/backhome/background">
            <i class="fas fa-comment-dots"></i>
            <span>背景模式</span>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <!-- 内容 -->

    <Foot />
  </div>
</template>

<script>
import Head from './Head'
import { mapState } from 'vuex'
import Foot from './Foot'
import $ from 'jquery'
import '../../assets/css/back_home.css'
import store from './../../store/store'
export default {
  name: 'backhome',
  components: { Head, Foot },

  data() {
    return {
      flag: true
    }
  },
  methods: {
    childByValue: function(childValue) {
      // childValue就是子组件传过来的值
      this.flag = childValue
    },
    readComment() {
      this.$store.commit('settingList', {
        username: this.username,
        mode: 'readComment',
        data: 1
      })
      this.$axios.post('/api/optionStatistical', this.statistical)
    }
  },

  mounted() {
    $(function() {
      let index = sessionStorage.getItem('sliderStatus')
      $('.menu li').removeClass('actives')
      $('.menu li')
        .eq(index)
        .addClass('actives')
      $('.menu li').on('click', function() {
        store.commit('sliderList', $(this).index())

        $('.menu li').removeClass('actives')
        $(this).addClass('actives')
      })
    })
  },
  created() {
    let info = JSON.parse(localStorage.getItem('token'))
    this.username = info.data.username
    this.$axios
      .get('/api/optionStatistical', {
        params: {
          username: this.username
        }
      })
      .then(res => {
        if (res.data.length != 0) {
          this.$store.commit('settingList', ...res.data)
        }
        delete this.statistical._id
        this.settingData = this.statistical
      })
  },
  computed: {
    ...mapState({
      statistical: state => state.setting
    })
  }
}
</script>

