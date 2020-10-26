$(function() {
    var book_data = [];
    var book_data = [{
        img: "images/page_12.jpg",
        num: 0,
        text: ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—— ——205小队小队文化宣传H5作品"],
        title: "2020年软件学院暑期社会实践",
        type: 4 /*第二页*/
    }, {
        img: "images/page_2.png",
        num: 0,
        text: [""],
        title: "院校历史",
        type: 2
            /*第三页*/
    }, {
        img: "",
        num: 0,
        text: ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;清光绪二十七年七月（1901年），顺天府尹奏请设立西文东文学堂，八月初八被批准，在府内试办。九月，光绪皇帝批准顺天府尹的请求，降地安门外兵将局旧址拨给顺天府办学。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师大最早起源于1902年创建于北京的顺天府学堂和1906年创建于天津的北洋女师范学堂。1996年6月，原河北师范大学、河北师范学院与创建于1952年的河北教育学院、创建于1984年的河北职业技术师范学院合并，组建成新的河北师范大学。2011年9月，原各校区迁至现址实现集中办学。2014年11月，河北省人民政府、教育部决定共建河北师范大学。</br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 截至2020年4月，学校新校区占地1829亩，馆藏图书303万册，中外文数据库67个；设25个专业学院，1个独立学院（汇华学院），有博士学位授权一级学科11个，博士专业学位授权点1个；硕士学位授权一级学科29个，硕士专业学位授权点14个；博士后科研流动站9个，本科专业95个；有在职教职工2598人，在校本科生24303人，硕士研究生4837人，博士研究生366人，成人教育学生10592人。化学学科、植物学与动物学学科进入ESI世界排名前1%。"],
        title: "",
        type: 1
            /*第四页*/
    }, {
        img: "images/3.png",
        num: 1,
        title: "师大精神",
        text: [],
        type: 2
    }, {
        img: "",
        num: 1,
        title: "",
        text: ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;校标采用“线装书”作为创意的源点，体现教书育人的属性特征以及“百年学府”的历史感和文化感，将书的“订口部分”变成河北师范大学的英文缩写“HEBNU”，传统与现代达到有机的融合。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;打开的书形自然而巧妙的构成“逗号”的形态，同时标注出建校时间“1902”，形象的表明河北师范大学历经110年后，又将翻开新的一页，寓意河北师范大学不断向前发展的美好前景。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将“怀天下，求真知”的校训放置在书的封面先要位置，表明河北师范大学一如既往的贯彻其优良的校风并使之深入每一位同学心中。"],
        type: 1
    }, {
        img: "",
        num: 2,
        title: "校友事迹",
        text: ["为“一带一路”奉献青春——河北师范大学王永根事迹</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学西班牙语系2017届毕业生王永根，现就职于安徽建工集团玻利维亚分公司，在公司担任西班牙语翻译并兼任对外商务经理。一年的时间里，由一名大学毕业生成功蜕变为公司的一名商务翻译人员。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在玻利维亚的传统和习俗,双方主要负责人需将事先准备好的陶罐装满酒并一同摔碎在奠基石上。面对这一形式，中方的负责人是极力反对的，因为这一举动在我们中国传统文化中具有特定的文化含义，只有在丧葬仪式上我们才会这么做，面对这一僵局时，他积极思考，终于想出了一个折中的办法：让中方人员直接摔香槟酒瓶，而玻方人员按当地习俗进行，这样双方都能接受，并且各自保持了特色。办法虽然简单，但也起到了良好的效果。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过相应的解说，反而让双方对彼此的文化习俗都有了初步的了解。就这样，一个尖锐的问题不但迎刃而解，还收到了意想不到的效果。当他把我国的“一带一路”蓝图和公司的施工经营理念翻译给台下的民众时，他们用热烈的掌声表达了发自内心的肯定。"],
        type: 2
    }, {
        img: "images/page_L4.png",
        num: 2,
        title: "",
        text: ["</br></br></br>要我选择职业，我还是选择当教师——河北师大邓颖超事迹</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;胡锦涛总书记曾这样评价她：“邓颖超同志是伟大的无产阶级革命家、政治家，著名社会活动家，坚定的马克思主义者，党和国家的卓越领导人，中国妇女运动的先驱。无论是在革命战争年代还是在社会主义建设和改革时期，她都勇于探索、不懈奋斗，经受住了各种艰难困苦的考验，始终保持坚定的共产主义信念，表现出共产党人坚忍不拔的奋斗精神。”</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在河北师范大学东大门的主干路上，绿树掩映着老校友邓颖超同志的半身铜制塑像，雕像仿照邓颖超参加建校八十周年庆典时的形象制作，浓郁的短发向后自然垂落，面部丰满，两眼炯炯有神，充满仁爱和温存，正面镌刻有邓颖超当时说的话“要我选择职业，我还是选择当教师。”以及他回母校时留下的亲笔签名“邓颖超”三个字。</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们的邓大姐，她的名字将同她的业绩一起，载入河北师范大学校史和中华民族光荣的史册。她的精神，她的优秀品格，永远鼓舞着广大青年学生奋发进取，成为时代新型大学生。" ],
        type: 1
    }, {
        img: "images/j1.jpg",
        num: 3,
        title: "校园景观",
        text: ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这里，你可以感受到大自然的优美景象，在你烦恼时，在你无聊苦闷时，这里都将会是一个完美的去处，想象一下，当风划过湖面吹拂在你的脸上，谁又舍得离开呢？"],
        type: 2
    }, {
        img: "images/j2.jpg",
        num: 3,
        title: "",
        text: ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;进入大学后，除了学习，更多的是要动起来，跑起来了，一味地坐着，躺着，对我们的身心健康很不利，所以要经常去操场上运动一下，操场就是我们挥洒汗水的地方，那里也有我们逝去的青春，所以我们需要更好的保护我们自己，这里的全套保护当然也必不可少",],
        type: 4
    }, {
        img: "images/j3.jpg",
        num: 3,
        title: "校园景观",
        text: ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;校园景观是校园文化的重要组成部分，每一个大学校园里都有属于自己的标志型建筑。当然我们大学也有啊，就是这美丽的时光塔了，“时光塔”主要分为三个部分，分别代表了百年师大的过去、现在和未来。该工程底部为砼结构坚实敦厚，代表了百年师大过去的深厚沉淀，中部为钢结构简单明快，代表了百年师大高效的运作，顶部为玻璃幕墙结构闪闪发光，代表了百年师大未来的美好前景。"],
        type: 2
    }, {
        img: "images/j4.jpg",
        num: 3,
        title: "",
        text: ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最后，在位你们献上我们学校的一副黄昏时刻的美景吧，想要可以收藏哟^_^", ],
        type: 4
    }, ];
    creat_html(book_data)

    function creat_html(data, num) {

        $('.flipbook').html('');
        var b_ok = true,
            b_num = 0;
        var html = '';

        for (var i = 0; i < data.length; i++) {
            if (b_ok) {
                var type = data[i].type,
                    p_text = data[i].text,
                    page_html = '',
                    title = data[i].title,
                    isImg = data[i].isimg;

                var isshow = 'block';

                if (i == data.length - 1) {
                    isshow = 'none';

                }
                if (type == 1) {
                    var pic_html = '',
                        pH = '',
                        pImg = '';

                    if (isImg) {
                        pImg = '<img src="' + data[i].img + '" alt="">'
                    }

                    for (var j = 0; j < p_text.length; j++) {
                        var p_arr = [],
                            arr_html = '';
                        if (p_text[j].indexOf('@') > 0) {
                            p_arr = p_text[j].split('@');
                            for (var k = 0; k < p_arr.length; k++) {
                                arr_html += p_arr[k] + "</br>"
                            }
                            pH += '<p class="text_pl">' + arr_html + '</p>'
                        } else {
                            pH += '<p class="text_pl">' + p_text[j] + '</p>'
                        }
                    }

                    page_html += '<div class="page_d">' +
                        '<div class="book_text">' +
                        pic_html +
                        pImg +
                        pH +
                        '</div>' +
                        '<p class="next_page" style="display:' + isshow + '">下一页</p>' +
                        '</div>'
                }

                if (type == 2) { /*用于所有奇数页*/
                    var pic_html = '',
                        pH = '';
                    page_html += '<div class="page_L1 cover"><img class="my_img" src="' + data[i].img + '" alt="">' +
                        '<p class="w_title">' + title + '</p>' +'</br>'+ '</br>'+ '</br>'+ '</br>'+ '</br>'+ '</br>'+ '<p class="text_pl">'+p_text+'</p>'+
                        '<p class="pre_page">上一页</p> ' +
                        '</div>'
                }

                if (type == 4) { /*只能用于p2*/
                    var pic_html = '',
                        pH = '',
                        pImg = '';

                    for (var j = 0; j < p_text.length; j++) {
                        var p_arr = [],
                            arr_html = '';
                        if (p_text[j].indexOf('@') > 0) {
                            p_arr = p_text[j].split('@');
                            for (var k = 0; k < p_arr.length; k++) {
                                arr_html += p_arr[k] + "</br>"
                            }
                            pH += '<p class="w_title2 style="font-size:27px;">' + arr_html + '</p>'
                        } else {
                            pH += '<p class="w_title2 style="font-size:27px;">' + p_text[j] + '</p>'
                        }
                    }

                    page_html += '<div class="page_L1 cover"><img src="' + data[i].img + '" alt="">' +
                        '<p class="w_title" style="font-size:20px;">' + title + '</p>' +
                        pH +
                        '<p class="next_page" style="display:' + isshow + '">下一页</p>' +
                        '</div>'
                }
                html += page_html;
            }
        }
        if (b_ok) {
            $('.flipbook').append(html);
            var turnWidth = $('#cover').outerWidth(),
                turnHeight = $('#cover').outerHeight();

            $('.flipbook').turn({
                width: turnWidth * 2 + 20,
                height: turnHeight,
                elevation: 50,
                gradients: true,
                autoCenter: true,
                display: 'double',
                when: {
                    turning: function(event, page, pageObject) {

                    }
                }
            });

            $('.bookmark').on('click', 'li', function() {
                var self = $(this),
                    id = self.attr('data-id');
                $('.flipbook').turn('page', id);
            })

            $('.back_catalog').click(function() {
                $('.flipbook').turn('page', 1);
            })
        }

    }
})