<template>
    <div class="news" v-title data-title="多对多物联平台｜新闻资讯">
      <div class="newsList container">
        <ul>
          <li class="item row" @click="toContent(item.id)" v-for="(item,index) in newsList" :key="index">
            <div class="newsImg col-sm-5"><img :src="item.thumb" alt="多对多物联平台"></div>
            <div class="newsCont col-sm-7">
              <div class="newstit">{{ item.title }}</div>
              <div class="newsTime">{{ item.create_time}}</div>
              <div class="line"></div>
              <div class="text">{{ item.description}}</div>
            </div>
          </li>
        </ul>
        <div class="page">
          <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="count" @prev-click="prevPage" :page-size="pageSize" @next-click="nextPage" @current-change="toPage">
          </el-pagination>
        </div>
      </div>

    </div>
</template>

<script>
  export default {
    name: "news",
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
        pageIndex:1,
        newsList:[],
        //总条数
        count:0,
        //一页条数
        pageSize:6
      }
    },
    mounted(){
      this.getNews();
    },
    watch:{
      '$route' (to, from) {
        //路由参数发生改变，触发事件
        this.getNews();
      }
    },
    methods:{
      //页数跳转
      toPage(pageIndex){
        this.pageIndex = pageIndex;
        this.getNews();
      },
      //上一页
      prevPage(pageIndex){
        this.pageIndex = pageIndex;
        this.getNews();
      },
      //下一页
      nextPage(pageIndex){
        this.pageIndex = pageIndex;
        this.getNews();
      },
      //跳转至新闻内容页
      toContent(id){
        this.$router.push({
          path:'/newsContent/'+id,
          params: { id }
        })
      },
      //获取新闻列表数据
      getNews(){
        let keyboard = this.$route.query.keyboard;
        if(keyboard){
          keyboard = keyboard;
        }else{
          keyboard = '';
        }

        this.sendHttp({
          url:this.baseUrl + '/article/newslist',
          method:'post',
          data:{
            alias:'www',
            key:keyboard,
            page:this.pageIndex
          }
        }).then(res=>{
          if(res.code=='0') {
            //console.log(res);
            this.newsList = res.data;
            this.count = res.count;
            //推荐新闻发布时间取年月日
            for(let i=0;i<res.data.length;i++){
              let time = res.data[i].create_time;
              let createTime = [];
              createTime= time.split(' ');
              this.newsList[i].create_time = createTime[0];
            }
          }
        });
      }
    }
  }
</script>

<style scoped lang="less">
  .page {
    display: flex;
    justify-content: center;
    padding-top: 40px;
  }
  .news{
    padding: 100px 0;
    box-shadow: 0 10px 10px -3px #efefef;
    @media (max-width: 768px){
      padding: 50px 0;
    }
    .newsList{
      @media (max-width: 992px){
        max-width: 90%;
      }
      @media (max-width: 576px){
        max-width: 100%;
      }
      ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .item{
          cursor: default;
          width: 45%;
          @media (max-width: 992px){
            width: 48%;
          }
          @media (max-width: 768px){
            width: 90%;
            margin: 0 auto;
            margin-bottom: 40px;
          }
          display: flex;
          justify-content: space-between;
          background: #fff;
          font-size: 8px;
          line-height: 15px;
          margin-bottom: 40px;
          box-shadow: #d9d9d9 0px 0px 10px;
          .line{
            background: #b5b5b5;
            width: 50px;
            margin: 6px 0;
            height: 2px;
          }
          .newsImg{
            padding: 0;
            background: #eee;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .newsCont{
            text-align: left;
            padding: 15px 10px;
            color: #9fa0a0;
            font-size: 14px;
            line-height: 17px;
            .newstit{
              font-size: 16px;
              font-weight: bold;
              height: 18px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .newsTime{
              padding-top: 4px;
            }
            .text{
              height: 66px;
              overflow: hidden;
              @media (max-width: 992px){
                height: 36px;
              }

            }
          }
          &:hover{
            .tit{
              color: #0863cd;
            }
            .newsCont{
              .newstit{
                color: #0863cd;
              }
            }
          }
        }
      }
    }



  }

</style>