<template>
  <div class="community" v-title data-title="鸿佳餐饮|膳食标准">
    <div class="part1 container">
      <div class="title">公司自创建之日就秉诚“以食为天，以人为本”的宗旨,为各个年龄段推荐了适合的膳食标准</div>
      <div class="line"></div>
    </div>
    <div class="part2 container">
      <div class="title">1、中学生膳食标准</div>
      <p>中学生一般指12-18周岁的青少年。一般讲，每日供应热能2600-3000千卡，蛋白质75-90克，钙为1000-1200毫克，铁15毫克，碘150毫克，要求平均每人每天吃500克主食、豆15克、肉35克、鱼20克、蛋15克、绿叶蔬菜500克、水果80克、蔗糖10克。</p>
      <div class="title">2、大学生膳食标准</div>
      <p>每日供应热能2000千卡左右，蛋白质89-95克，钙为800毫克，要求平均每人每天吃250克面粉，玉米面50克、油条50克、豆浆300毫升、油豆腐100克、瘦肉190克、牛奶50克、大白菜250克以及其他适量的蔬菜、水果等。</p>
      　　<div class="title">3、体重为55kg的成年女性 （每天设为半小时键美锻炼）</div>
      　　<p>大约应摄入2400-2600千卡热量；具体每天摄取糖类 270-400克；脂肪60克；蛋白质100克。具体吃什么才可以摄取这些营养呢？如主食米饭馒头等450克；猪肝100克；鸡肉150克；鱼肉100克；豆腐干100克；黄豆芽100克；烹调用植物油15克；蔬菜水果等。</p>
      　　<div class="title">4、孕妇的膳食标准</div>
      　　<p>每日供应热能2500-2700千卡，蛋白质89-90克，钙为2500毫克，铁15-20毫克，可吃鸡蛋1-2个，瘦肉类50-100克、豆类50-199克、蔬菜500-750克，谷类400-500克，烹调油20-25克。</p>
      　　<div class="title">5、员工每日膳食标准</div>
      　　<p>谷类400-500克，牛奶或豆奖200毫升，豆制品100-200克，鱼、肉类制品50-100克，蔬菜类（主要为深色蔬菜）400-500克，糖10克，烹调油10-20克。</p>
      　　<div class="title">6、老年人的膳食标准</div>
      　　<p>60岁以上的老人：每日供应热能2000千卡，蛋白质70克，其中主食500克。75岁以上的热能1800千卡，蛋白质65克，其中主食400克。80岁以上的热能1690千卡，蛋白质60克，主食225克。90岁以上的热能1200千卡，蛋白质59克，主食200克。</p>　
    </div>
  </div>
</template>

<script>
    export default {
        name: "community"
    }
</script>

<style scoped lang="less">
  .community {


    .part2 {
      p{
        padding-top: 10px;
        padding-bottom: 20px;
      }
      .title{
        font-weight: bold;
      }
      img {
        width: 100%;
      }
    }

    .part1 {
      padding-top: 8%;
      margin: 0 auto;

      .title {
        color: #ea150b;
        font-size: 20px;
        text-align: center;
        line-height: 30px;
        padding: 0 20px;
        @media (max-width: 576px) {
          font-size: 1rem;
        }
      }

      .line {
        height: 2px;
        width: 50px;
        background: #ea150b;
        margin: 20px auto;
      }

      .zhsq {
        display: flex;
        justify-content: space-between;
        padding-top: 30px;

        .left, .right {
          .title {
            text-align: left;
            font-size: 18px;
            color: #00cfc8;
          }

          ul {
            width: 320px;

            li {
              p {
                font-size: 14px;
                line-height: 20px;
              }
            }
          }

          &.left {
            li {
              height: 200px;
              padding: 0 0 0 35px;

              &:nth-child(2) {
                height: 175px;
              }
            }
          }

          &.right {
            ul {
              li {
                height: 160px;
                padding: 0 0 0 76px;

                &:nth-child(2) {
                  height: 215px;
                }
              }
            }
          }
        }
      }

      @media (max-width: 768px) {
        text-align: center;
        .title {
          text-align: center !important;
          padding: 10px 20px;
        }

        padding: 60px 0 20px 0;
        .zhsq {
          flex-wrap: wrap;
          justify-content: center;

          ul li {
            padding: 10px !important;
            height: auto !important;

            p {
              font-size: 1rem !important;
              line-height: 1.5rem !important;
            }
          }
        }
      }
      @media (max-width: 576px) {
        padding: 40px 0 20px 0;
      }
    }

  }
</style>
