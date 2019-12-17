<template>
    <div class="moduleCont" v-title data-title="鸿佳餐饮|菜谱系列">
      <div class="moduleTop container">
        <h1 class="title mCol">鸿佳餐饮｜菜谱系列</h1>
        <p>丰富的菜系，制定不同的营养搭配，满足你的味蕾</p>
      </div>
      <div class="advantageList container">
        <ul class="listBox">
          <li>
            <div class="imgBox"><img src="~img/module/1.png" alt=""></div>
            <div class="detail">
              <div class="title">10元菜谱</div>
              <div class="cont">深圳鸿佳餐饮管理有限公司专业食堂承包，公司宗旨以食为天，以人为本”，推出各种系列菜谱，有10元菜谱、11元菜谱、12元菜谱、14元菜谱、16元菜谱、18元菜谱等。</div>
            </div>
          </li>
          <li>
            <div class="imgBox"><img src="~img/module/2.png" alt=""></div>
            <div class="detail">
              <div class="title">11元菜谱</div>
              <div class="cont">深圳鸿佳餐饮管理有限公司专业食堂承包，公司宗旨以食为天，以人为本”，推出各种系列菜谱，有10元菜谱、11元菜谱、12元菜谱、14元菜谱、16元菜谱、18元菜谱等。</div>
            </div>
          </li>
          <li>
            <div class="imgBox"><img src="~img/module/3.png" alt=""></div>
            <div class="detail">
              <div class="title">12元菜谱</div>
              <div class="cont">深圳鸿佳餐饮管理有限公司专业食堂承包，公司宗旨以食为天，以人为本”，推出各种系列菜谱，有10元菜谱、11元菜谱、12元菜谱、14元菜谱、16元菜谱、18元菜谱等。</div>
            </div>
          </li>
          <li>
            <div class="imgBox"><img src="~img/module/7.png" alt=""></div>
            <div class="detail">
              <div class="title">14元菜谱</div>
              <div class="cont">深圳鸿佳餐饮管理有限公司专业食堂承包，公司宗旨以食为天，以人为本”，推出各种系列菜谱，有10元菜谱、11元菜谱、12元菜谱、14元菜谱、16元菜谱、18元菜谱等。</div>
            </div>
          </li>
          <li>
            <div class="imgBox"><img src="~img/module/5.png" alt=""></div>
            <div class="detail">
              <div class="title">16元菜谱</div>
              <div class="cont">深圳鸿佳餐饮管理有限公司专业食堂承包，公司宗旨以食为天，以人为本”，推出各种系列菜谱，有10元菜谱、11元菜谱、12元菜谱、14元菜谱、16元菜谱、18元菜谱等。</div>
            </div>
          </li>
          <li>
            <div class="imgBox"><img src="~img/module/6.png" alt=""></div>
            <div class="detail">
              <div class="title">18元菜谱</div>
              <div class="cont">深圳鸿佳餐饮管理有限公司专业食堂承包，公司宗旨以食为天，以人为本”，推出各种系列菜谱，有10元菜谱、11元菜谱、12元菜谱、14元菜谱、16元菜谱、18元菜谱等。</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: "module"
  }
</script>

<style scoped lang="less">
  .moduleCont {
    padding-top: 8%;
    .moduleTop {
      text-align: center;
      line-height: 30px;

      p {
        padding-top: 20px;
      }
    }

    .advantageList {
      ul.listBox{
        display: flex;
        justify-content: space-between;
        text-align: center;
        flex-wrap: wrap;
        padding: 60px 0;
        li {
          display: flex;
          justify-content: left;
          text-align: left;
          padding: 20px 0;
          border-bottom: 1px solid #ccc;
          .imgBox{
            width: 20%;
            img{
              width: 100%;
            }
          }
          .detail{
            width: 80%;
            padding: 0 20px;
            line-height: 30px;
            .title{
              margin-bottom: 10px;
              font-weight: bold;
            }
          }
          &:hover{
            .title{
              color: #ea150b;
            }
          }
        }
      }

      .jrCont {
        .title {
          text-align: center;
          padding-top: 60px;
        }

        .line {
          height: 2px;
          width: 50px;
          background: #00cfc8;
          margin: 20px auto;
        }
        .jrBox{
          margin-top: 50px;
          ul{
            &.line2{
              display: flex;
              justify-content: space-around;
              flex-wrap: wrap;
              @media (max-width: 768px){
                justify-content: space-between;
              }
            }
            display: flex;
            justify-content: space-between;
            text-align: center;
            color: #fff;
            flex-wrap: wrap;
            li{
              width: 20%;
              font-size: 1.2rem;
              line-height: 55px;
              letter-spacing: 2px;
              border-radius: 6px;
              margin-bottom: 2rem;
              @media (max-width: 768px){
                width: 40%;
                &.null,&.none{
                  display: none;
                }
                font-size: 0.9rem;
              }
              @media (max-width: 576px){
                width: 45%;
                font-size: 0.8rem;
                height: 3rem;
                line-height: 3rem;
              }
              &.null{
                width: 10%;
              }
              &.color1{
                background-image: linear-gradient(90deg,#e9f3f9,#e9f3f9);
              }
              &.color2{
                background-image: linear-gradient(90deg,#64cdfc,#00a1fb);
              }
              &.color3{
                background-image: linear-gradient(90deg,#8477ed,#5a4ad6);
              }
              &.color4{
                background-image: linear-gradient(90deg,#ebe8ff,#ebe8ff);
              }
              &.color5{
                background-image: linear-gradient(90deg,#6495ed,#00f);
              }
              &.color6{
                background: #ff8b5d;
              }
              &.color7{
                background-image: linear-gradient(90deg,#50c187,#229e5f);
              }
              &.color8{
                background-image: linear-gradient(90deg,#db7093,#c71585);
              }
              &.color9{
                background: #fff2f1;
              }
              &.color10{
                background-image: linear-gradient(90deg,#5f9afd,#2c73f3);
              }
              &.color11{
                background-image: linear-gradient(90deg,#ff6f6f,#f93d3e);
              }
              &.color12{
                background: #f4f0ff;
              }
            }

          }
        }
      }
    }
  }

</style>
