<template>
    <main class="container mains">
        <div class="details">
            <div class="row">
                <div class="columns row-left">
                    <div class="left-img">
                        <img class="left-img-target" :src="product.img_title" alt="">
                    </div>
                    <div class="left-info">
                        <div class="left-info-price">
                            <h3 class="left-info-price-text">￥{{product.price.toFixed(2)}}</h3>
                        </div>
                        <div>
                            <button class="add-to-cart button">
                                <div class="cart-title">加入购物篮</div>
                            </button>
                        </div>
                        <div>
                            <button class="add-to-favorite button">
                                <div class="cart-title favorite">添加至收藏夹</div>
                            </button>
                        </div>
                        <hr class="left-hr">
                        <div>
                            <div class="play-title">播放设备:</div>
                            <div class="play-bottom">
                                <a href="index.html" class="play-bottom-text button">PS4</a>
                            </div>
                            <a href="#" class="plan">点击此处了解方法</a>
                        </div>
                    </div>
                    <div class="tech-specs">
                        <div class="tech-specs-header">详细信息</div>
                        <div class="tech-specs-menu">
                            类型
                        </div>
                        <div class="tech-specs-menu-items">{{product.type}}</div>
                        <div class="tech-specs-menu">
                            文件大小
                        </div>
                        <div class="tech-specs-menu-items">{{product.gb}}GB</div>

                    </div>
                </div>
                <div class="row-right">
                    <h2 class="game-title">
                        {{product.title}}
                    </h2>
                    <div class="provider-info">
                        <h5 class="provider-info-text">{{product.subtitle}}</h5>
                        <h5 class="provider-info-text">
                            <span>制品版游戏&nbsp;&nbsp;</span>
                            <span>
                            |&nbsp;
                            发行日期&nbsp;
                            {{product.date}}
                        </span>
                        </h5>
                    </div>
                    <div>
                        <div class="carousel">
                            <div class="carousel_screen">
                                <img :src="pics[i].md" alt="">
                            </div>
                            <div class="carousel_carousel">
                                <button class="shift-button button-left">
                                    <img src="img/hovers/hover-prev.png" alt="">
                                </button>
                                <button class="shift-button button-right">
                                    <img src="img/hovers/hover-next.png" alt="">
                                </button>
                                <div class="carousel-pages">
                                    <div class="carousel-pages-center">
                                        <div :key="i" v-for="(p,i) of pics" class="carousel-pages-items">
                                            <img :src="p.sm" @mousemove="change(i)" class="carousel-pages-item"  alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="description">
                        <h4>
                            说明
                        </h4>
                        <p>
                            所购买的内容或服务均不可退款或转让，亦不可用以赎回现金或记账。
                            <br>
                            警告： 本物品内容可能令人反感；不可将本物品派发、传阅、出售、出租、交给或出借予年龄未满18岁的人士或将本物品向该等人士出示、播放或放映。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        data:function () {
            return{
                product:{
                    title:"",
                    subtitle:"",
                    price:0,
                    gb:"",
                    date:"",
                    type:"",
                    img_title:""
                },
                pics:[{sm:"",md:"",lg:""}],
                i:0
            }
        },
        created(){
            this.loadDetails()
        },
        methods:{
            change(i){
               this.i=i
            },
            loadDetails(){
                this.axios.get(
                    "http://localhost:3000/details",{
                        params:{
                            lid:this.$route.params.lid
                        }
                    }
                ).then(res=>{
                    console.log(res.data);
                    this.product=res.data.product;
                    this.pics=res.data.pics;
                })
            }
        }
    }
</script>

<style scoped>
    .mains{
        margin-top: 190px;
    }
    div{
        margin: 0;
        padding: 0;
    }
    body{
        direction: ltr;
        min-height: 100%;
        height: auto;
        background-color: #002055;
        background-image: radial-gradient(ellipse 50% 70% at 50% 0,#002c74 20%,#001536);
        background-attachment: fixed;
        margin: 0;
        line-height: 1.5;
        color: rgba(255,255,255,.9);
    }
    a{
        background-color: transparent;
        text-decoration: none;
        cursor: pointer;
    }
    .details{
        font-family: "Open Sans",Helvetica,Roboto,Arial,sans-serif;
        font-weight: 600;
        background: rgba(0,0,0,.6);
        width: 990px;
        margin: 20px auto;
        padding: 17px;
    }
    .row{
        width: 75rem;
        margin-left: auto;
        margin-right: auto;
    }
    .row-left{
        padding: 0;
        width: 239px;
        float:left;
    }
    .left-img{
        font-size: 1.5em;
        width: 240px;
        height: 240px;
    }
    .left-img-target{
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: relative;
    }
    button{
        overflow: visible;
        background: 0 0;
        border-radius: 0;
        line-height: 1;
    }
    .button {
        display: inline-block;
        cursor: pointer;
        -webkit-appearance: none;
        transition: background-color .25s ease-out,color .25s ease-out;
        border-radius: 0;
        padding: .85em 1em;
        margin: 0 0 1rem;
        font-size: .9rem;
        background-color: #2199e8;
        color: #fefefe;
    }
    .button:hover{
        background-color: rgba(255,255,255,.4);
    }
    .left-info{
        background-color: #262b34;
        padding: 10px 13px;
        /*width: 71%;*/
    }
    .left-info-price{
        font-weight: 600;
        font-family: "Open Sans",Helvetica,Roboto,Arial,sans-serif;
    }
    .left-info-price-text{
        padding: 0;
        margin: 0;
        margin-bottom: 5px;
        font-size: 25px;
    }
    .add-to-cart{
        padding: .625rem 1.25rem;
        margin: .3125rem 0 .75rem;
        border: none;
        border-radius: .125rem;
        background-color: #d6d6d6;
        font-family: "Open Sans",Helvetica,Roboto,Arial,sans-serif;
        font-weight: 400;
        color: #373737;
        line-height: 1.25rem;
        width: 210px;
    }
    .cart-title{
        font-size: 18px;
    }
    .add-to-favorite{
        padding: .625rem 1.25rem;
        margin: .3125rem 0 .75rem;
        border: none;
        border-radius: .125rem;
        background-color: #63666d;
        font-family: "Open Sans",Helvetica,Roboto,Arial,sans-serif;
        font-weight: 400;
        color: #373737;
        line-height: 1.25rem;
        width: 210px;
    }
    .favorite{
        color: #fff;
    }
    hr{
        box-sizing: content-box;
        max-width: 75rem;
        height: 0;
        border-right: 0;
        border-top: 0;
        border-bottom: 1px solid #cacaca;
        border-left: 0;
        margin: 1.25rem auto;
    }
    .left-hr{
        margin-top: 5px;
        border-color: #000;
        padding-bottom: 0;
        margin-bottom: 7px;
    }
    .play-title{
        font-size: 14px;
        margin-bottom: 14px;
    }
    .play-bottom{
        margin-left: 5px;
        margin-bottom: 8px;
    }
    .play-bottom-text{
        color: rgba(255,255,255,.6);
        background-color: #333;
        border: none;
        box-shadow: 0 0 1px rgba(0,0,0,.8);
        font-weight: 700;
        font-size: 11px;
        padding: 5px 10px;
        margin: 0;
    }
    .plan{
        color: #e6e6e6;
        font-size: 13px;
        text-decoration: underline;
    }
    .tech-specs{
        border: 1px solid rgba(255,255,255,.1);
        padding: 10px 13px;
        margin-top: 17px;
        background:rgba(255,255,255,.05);
        overflow: hidden;
    }
    .tech-specs-header{
        font-size: 21px;
        border-bottom: 1px solid rgba(255,255,255,.2);
        padding-bottom:10px;
        margin-bottom: 10px;
    }
    .tech-specs-menu{
        padding-top: 5px;
        font-size: 17px;
        font-weight: 700;
    }
    ul{
        list-style: none;
        margin-bottom: 1rem;
    }
    ul>li{
        line-height: 1.2rem;
    }
    .tech-specs-menu-items{
        font-weight: 300;
        color: #888;
        font-family: "Open Sans",Helvetica,Roboto,Arial,sans-serif;
        font-size: 15px;
        padding-top: 4px;
        margin-bottom: 5px;
    }
    .row-right{
        width: 700px;
        padding-left: 30px;
    }
    .game-title{
        padding: 20px 0 0;
        font-size: 40px;
        line-height: 1.4;
        margin-bottom: 0;
    }
    h2,h5{
        font-weight: 400;
        font-style: normal;
        color: inherit;
        margin-top: 0;
        margin-bottom: .5rem;
        line-height: 1.4;
    }
    .provider-info{
        color: #8a8a8a;
        margin-top: 0;
        border-bottom: 1px solid #8a8a8a;
        padding-bottom: 5px;
        margin-bottom: 17px;
    }
    .provider-info-text{
        font-size: 20px;
    }
    .carousel{
        width: 682px;
        padding: 10px 0 20px;
        background: #000;
        margin-bottom: 30px;
    }
    .carousel_screen>img{
        width: 100%;
        height: auto;
    }
    .carousel_carousel{
        position: relative;
        margin-top: 20px;
    }
    .shift-button{

        position: absolute;
        width: 35px;
        height: 100%;
        border: 1px solid #282828;
        transition: border .2s;
        line-height: 100%;
        color: #8a8a8a;
        font-weight: 700;
    }
    .shift-button:disabled{
        border-color: #171717;
        cursor: default;
    }
    .button-left{
        left: 0;
    }
    .button-right{
        right: 0;
    }
    /*.button-left:before{*/
    /*content: "<";*/
    /*}*/
    /*.button-right:before{*/
    /*content:">";*/
    /*}*/
    .carousel-pages{
        width: 620px;
        overflow: hidden;
        margin: 0 auto;
    }
    .carousel-pages-center{
        position: relative;
        height: 81px;
        left: 0;
    }
    .carousel-pages-items{
        display: inline-block;
    }
    .carousel-pages-item{
        margin-left: 15px;
        height: 79px;
        width: 146px;
        vertical-align: middle;
        display: inline-block;
        cursor:pointer
    }
    .description{
        margin-top: 10px;
        font-weight: 400;
    }
    .description h4{
        font-weight: 700;
        font-size: 21px;
    }
    p{
        font-size: inherit;
    }
</style>