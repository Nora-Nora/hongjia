<template>
    <div class="newsCont container-fluid" v-title data-title="多对多物联平台｜新闻资讯">
      <div class="container">
        <div class="tit">
          <div class="title">{{ newsData.title }}</div>
          <div class="date">{{ newsData.create_time }}</div>
        </div>
        <div class="article" v-html="newsData.content">
        </div>
      </div>
      <!--    <div class="pageBox w1000">-->
      <!--      <div class="prev" @click="prevNews(newsData.prev)">{{ newsData.prev?'上一篇':'没有了' }}</div>-->
      <!--      <div class="home"><router-link to="/">首页</router-link></div>-->
      <!--      <div class="next" @click="nextNews(newsData.next)">{{ newsData.next?'下一篇':'没有了' }}</div>-->
      <!--    </div>-->
    </div>

</template>

<script>
  import topNav from "../../components/topNav";
  import bottom from "../../components/bottom";

  export default {
    name: "newsContent",
    components: {
      topNav,
      bottom
    },
    metaInfo:{
      meta:[
        {
          name:'keywords',
          content:'多对多,智慧社区,智慧小区,智慧地产,智慧家庭,智慧商业,智慧城市,智慧产业,智慧家居,智慧综合体,多多智慧管家,多对多物联'
        },
        {
          name:'discription',
          content:'多对多物联平台-智慧社区、智慧小区（智慧地产）、智慧家庭、智慧商业，四位一体物联网系统及应用解决方案.赋能各产业实现高效率、优体验、健康生态可持续发展.'
        }
      ]
    },
    data(){
      return{
        newsData:{}
      }
    },
    mounted() {
      let id = this.$route.params.id;
      //console.log(this.$route.params.id);
      this.getNewsCont(id);
    },
    watch: {
      '$route' (to, from) {
        //路由参数发生改变，触发事件
        let id = this.$route.params.id;
        this.getNewsCont(id);
      }
    },
    methods:{
      getNewsCont(id){
        this.sendHttp({
          url:this.baseUrl + '/article/getarticle',
          method:'post',
          data:{id}
        }).then(res=>{
          if(res.code=='0') {
            //console.log(res.data);
            this.newsData = res.data;
          }
        })
      },
      prevNews(id){
        if(id){
          this.$router.push({
            path:'/news/'+id+'.html',
            params:{id}
          });
        }
      },
      nextNews(id){
        if(id){
          this.$router.push({
            path:'/news/'+id+'.html',
            params:{id}
          });
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .newsCont {
    padding-bottom: 50px;
    box-shadow: 0 10px 10px -3px #efefef;
    .tit {
      margin: 100px 0;
      position: relative;
      @media (max-width: 992px){
        margin: 60px 0;
      }

      .title {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
      }

      .date {
        text-align: center;
        margin-top: 20px;
      }
    }
  }

  .pageBox {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    margin: 100px auto;
    box-shadow: #E6E6E6 0px 0px 10px;
    div{
      padding: 0 40px;
      cursor: pointer;
    }
    .next{
      color: #00cfc8;
    }
  }

</style>