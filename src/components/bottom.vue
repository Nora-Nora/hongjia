<template>
  <div class="bottom">
    <div class="btBox container">
      <div class="row">
        <div class="left col-sm-8">
          <h3>深圳鸿佳餐饮管理有限公司</h3>
          <div class="navList">
            <ul class="row">
              <li><router-link to="/">首页</router-link></li>
              <li><router-link to="/module">菜谱系列</router-link></li>
              <li><router-link to="/community">膳食标准</router-link></li>
              <li><router-link to="/family">卫生管理</router-link></li>
            </ul>
          </div>
          <div class="add">
            ADD：广东省深圳市光明区凤凰街道塘尾社区塘祠30号102
          </div>
          <div class="toTop" @click="toTop">
            ↑↑ RETURN TO TOP
          </div>

        </div>
        <div class="right col-sm-4">
          <div class="ewmList row">
            <div class="item1 col-sm-6"><img src="~img/home/ewm.png" alt=""><br>联系微信号</div>
            <div class="item2 col-sm-6"><img src="~img/home/ewm.png" alt=""><br>扫一扫</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "bottom",
    methods: {
      toTop() {
        $('html , body').animate({scrollTop: 0},'slow');
      },
    }
  }
</script>

<style scoped lang="less">
  .bottom{
    padding: 3% 0;
    box-shadow: 0 -10px 10px -3px #efefef;
    margin-top: 5%;
  }
  .ewmList{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  .ewmList img{
    width: 100%;
  }
  .toTop{
    cursor: pointer;
    color: #00a1ea;
    margin-bottom: 20px;
  }
  .toTop:hover{
    color: #00a0ea;
  }
  .bottom .btBox .navList .row{
    margin: 0;
    margin-bottom: 30px;
  }
  .bottom .add,.tel,.tel2{
    line-height: 40px;
  }
  .bottom .btBox .navList ul li{
    padding: 0 7px;
    line-height: 30px;
    border-bottom: 1px solid #333;
  }
  .bottom .btBox .right .ewmList div{
    @media (max-width: 576px){
    margin-bottom: 20px;
    img{
      width: 50%;
      text-align: center;
    }
  }
    @media (max-width: 990px){
      padding: 0 5px;
      &.item1{
        padding-top: 24px;
      }
    }
  }
  .logo{
    width: 150px;
    padding: 30px 0;
  }
  @media (max-width: 576px){
    .logo{
      display: none;
    }
    .navList{
      padding-top: 40px;
    }

  }
  a{
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #333!important;
  }
  a:hover{
    color: #333!important;
    text-decoration: none!important;
  }
  .logo a img{
    width: 100%;
  }

  .btBottom{
    padding: 5px 0;
    background: #333;
    .btBox{
      color: #898989;
      .beian{
        padding: 0 10px;
        display: flex;
        align-items: center;
        font-size: 14px;
      }
    }
    .share ul{
      display: flex;
      justify-content: space-between;
      margin: 5px 0;
      text-align: center;
      flex-wrap: wrap;
      li{
        margin-bottom: 6px;
      }
    }
  }
</style>
