import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let store;

store = new Vuex.Store({
  state: {
    //存储共有数据
    flag: true,
    avatar: null,
    slider: 0,
    setting: {
      username: "",
      alterPass: 0,
      setData: 0,
      updateData: 0,
      editEssay: 0,
      readComment: 0,
      coverSetting: 0,
      bgSetting: 0,
      topColumnSet: 0,
      loginCounts: 0
    }
  },
  mutations: {
    initstoreList(state, payload) {
      state.flag = payload;
    },
    sliderList(state, payload) {
      state.slider = payload;

      sessionStorage.setItem("sliderStatus", payload);
    },
    userAvatar(state, payload) {
      state.avatar = payload;
    },
    settingList(state, payload) {
      let data = payload.data;
      if (payload.mode) {
        console.log("liu");
        Object.keys(state.setting).forEach(item => {
          if (payload.mode == key) {
            state.setting[key] += data;
            state.setting.username = payload.username;
          }
        });
      } else {
        state.setting = payload;
        console.log("找到了");
      }
    }
  }
});

export default store;
