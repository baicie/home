$(function () {
    var book_data = [];
    var book_data = [{
        img: "images/page_12.jpg",
        num: 0,
        text: [""],
        title: "",
        type: 4 /*第二页*/
    }, {
        img: "images/page_2.jpg",
        num: 0,
        text: ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;　　这是一部“又热烈又恬静，又深刻又朴素，又温柔又高傲，又微妙又率直”的书信集：一位中国父亲给远在欧洲学艺的孩子的家书。傅雷以一个过来人的身份，把自己的人生的智慧、生活的经验、艺术的体会、文化的感悟，都毫无保留地贡献了出来。"],
        title: "《傅雷家书》",
        type: 2
        /*第三页*/
    }, {
        img: "",
        num: 0,
        text: ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一九五四年十月二日<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;聪，亲爱的孩子。收到九月二十二晚发的第六信，很高兴。我们并没为你前信感到什么烦恼或是不安。我在第八信中还对你预告，这种精神消沉的情形，以后还是会有的。<br/>我是过来人，决不至于大惊小怪。你也不必为此耽心，更不必硬压在肚里不告诉我们。心中的苦闷不在家信中发泄，又哪里去发泄呢？孩子不向父母诉苦向谁诉呢？我们不来安慰你，又该谁来安慰你呢？<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人一辈子都在高潮----低潮中浮沉，唯有庸碌的人，生活才如死水一般；或者要有极高的修养，方能廓然无累，真正的解脱。只要高潮不过分使你紧张，低潮不过分使你颓废，就好了。太阳太强烈，会把五谷晒焦；雨水太猛，也会淹死庄稼。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们只求心理相当平衡，不至于受伤而已。你也不是栽了筋斗爬不起来的人。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我预料国外这几年，对你整个的人也有很大的帮助。这次来信所说的痛苦，我都理会得；我很同情，我愿意尽量安慰你，鼓励你。克利斯朵夫不是经过多少回这种情形吗？他不是一切艺术家的缩影与结晶吗？慢慢的你会养成另外一种心情对付过去的事：就是能够想到而不再惊心动魄，能够从客观的立场分析前因后果，做将来的借鉴，以免重蹈覆辙。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个人唯有敢于正视现实，正视错误，用理智分析，彻度感悟，终不至于被回忆侵蚀。我相信你逐渐会学会这一套，越来越坚强的。我以前在信中和你提过感情的，就是要你把这些事当做心灵的灰烬看，看的时候当然不免感触万端，但不要刻骨铭心的伤害自己，而要像对着古战场一般的存着凭吊的心怀。倘若你认为这些话是对的，对你有些启发作用，那末将来在遇到因回忆而痛苦的时候（那一定免不了会再来的），拿出这封信来重读几遍。"],
        title: "",
        type: 1
        /*第四页*/
    }, {
        img: "images/3.png",
        num: 1,
        title: "《梁启超家书》",
        text: ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在家书中，梁启超对子女们读书、写字、学习课程，选择学校、选择专业、选择职业等等各方面都给予指导，但从不强迫命令。他与孩子们之间除父亲与子女之情外还是亲切的导师、知心的朋友。孩子们也向他坦诚地诉说学习和思想上的困惑，并发表自己的观点，提出不解的问题及个人前途的选择，这一切梁启超均能逐个给以详尽的解答并予以鼓励。他特别关注子女们人格道德品质方面的修养，希望自己的子女都具有“不惑”、“不忧”、“不惧”的君子德行，养成健全的人格，成为新民。无论遇到何事都能有睿智的判断，坚定的信念和勇敢不惧的精神。梁启超注重把自己的爱国情怀传给子女们，在家书中他常教育孩子们把个人努力和对社会的贡献紧密地联系在一起，以报效祖国。梁氏9个子女7个留学海外，皆学有所成，却无一例外都回到祖国，体现了爱国家风的良好传承。"],
        type: 2
    }, {
        img: "",
        num: 1,
        title: "",
        text: ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;孟子说：“能与人规矩，不能使人巧。”凡学校所教与所学总不外规矩方面的事，若巧则要离了学校方能发见。规矩不过求巧的一种工具，然而终不能不以此为教，以此为学者，正以能巧之人，习熟规矩后，乃愈益其巧耳。不能巧者，依着规矩无大过。你的天才到底怎样，我想你自己也未能测定，因为终日在师长指定的范围与条件内用功，还没有自由发挥自己性灵的余地。况且一位大文学家、大美术家之成就，常常还要许多环境及附带学问的帮助。中国先辈说要“读万卷书，行万里路”。你两三年来蛰居于一个学校的图案室之小天地中，许多潜伏的机能如何便会发育出来，即如此你到波士顿一趟，便发生许多刺激，区区波士顿算得什么，比起欧洲来真是“河伯”之与“海若”，若和自然界的崇高伟丽之美相比，那更不及万分之一了。然而令你触发者已经如此，将来你学成之后，常常找机会转变自己的环境，扩大自己的眼界和胸怀，到那时候或者天才会爆发出来，今尚非其时也。今在学校只有把应学的规矩，尽量学足，不惟如此，将来到欧洲回中国，所有未学的规矩也还须补学，这种工作乃为一生历程所必须经过的，而且有天才的人绝不会因此而阻抑他的天才，你千万别要对此心生厌倦，一厌倦即退步矣。至于将来能否大成，大成到什么程度，当然还是天才为之分限。我平生最服膺曾文正两句话：“莫问收获，但问耕耘。”将来成就如何，现在想他则甚？着急他则甚？一面不可骄盈自慢，一面又不可怯弱自馁，尽着自己能力做去，做到哪里是哪里，如此则可以无入不自得，而于社会亦总有多少贡献。我一生学问得力专在此一点，我盼你们都能应用我这点精神。 "],
        type: 1
    },
    {
        img: "images/7.jpg",
        num: 3,
        title: "《曾国藩家书》",
        text: ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《曾国藩家书》是曾国藩的书信集，成书于清19世纪中叶。该书信集记录了曾国藩在清道光30年至同治10年前后达30年的翰苑和从武生涯，近1500封。所涉及的内容极为广泛，是曾国藩一生的主要活动和其治政、治家、治学之道的生动反映。曾氏家书行文从容镇定，形式自由，随想而到，挥笔自如，在平淡家常中蕴育真知良言，具有极强的说服力和感召力。尽管曾氏留传下来的著作太少，但仅就一部家书中可以体现他的学识造诣和道德修养。曾国藩作为清代著名的理学家、文学家，对书信格式极为讲究，显示了他恭肃、严谨的作风。"],
        type: 2
    }, {
        img: "images/6.jpg",
        num: 3,
        title: "",
        text: ["士人读书，第一要有志，第二要有识，第三要有恒。有志，则断不甘为下流。有识，则知学问无尽，不敢以一得自足；如河伯之观海，如井蛙之窥天，皆无见识也。有恒，则断无不成之事。此三者缺一不可。<br/>凡人做一事，便须全副精神注在此一事，首尾不懈，不可见异思迁，做这样，想那样，坐这山，望那山。人而无恒，终身一无所成。<br/>唯天下之至诚能胜天下之至伪；唯天下之至拙能胜天下之至巧。<br/>家勤则兴，人勤则俭，永不贫贱。<br/>胸襟广大，宜从“平”“淡”二字用功，凡人我之际须看得平，功名之际须看得淡，庶几胸怀日阔。<br/>先静之，再思之，五六分把握即做之。7，另起炉灶，重开世界。8，男儿自立，必须有倔强之气。9，困心横虑，正是磨练英雄时。10， 功不独居，过不推诿。<br/>士人读书，第一要有志，第二要有识，第三要有恒。有志，则断不甘为下流。有识，则知学问无尽，不敢以一得自足；如河伯之观海，如井蛙之窥天，皆无见识也。有恒，则断无不成之事。此三者缺一不可。<br/>社会大乱之前，必有三前兆1.无论何事，均黑白不分。2.善良的人越来越谦虚客气；无用之人越来越猖狂胡为。3.问题到了严重程度之后，凡事皆被合理化，一切均被默认，不痛不痒，莫名其妙地虚应一番。<br/>古来豪杰，吾家祖父教人，以“懦弱无刚”四字为大耻，故男儿自立必须有倔强之气。惟数万人困于坚城之下，最易暗销锐气。弟能养数万人之刚气而久不销损，此是过人之处，更宜从此加功。"],
        type: 1
    },
     {
        img: "images/4.jpg",
        num: 2,
        title: "《洛克菲勒留给儿子的３８封信》",
        text: ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;约翰·baiD·洛克菲勒（1839-1937），美国du第一位亿万富翁的赚钱智慧，zhi借巨人思想之光照耀你财富之路。一个dao伟大的家族。《洛克菲勒留给儿子的三十八封信》，真实记录了洛克菲勒创造财富神话的种种业绩。从书中人们不仅仅可以看到洛克菲勒优良的品德、卓越的经商才能，还可窥见一代巨富创造财富的谋略与秘密。"],
        type: 2
    }, {
        img: "",
        num: 2,
        title: "",
        text: ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但这并不意味着，每个人的起点不同，其人生结果也不同。在这个世界上，永远没有穷、富世袭之说，也永远没有成、败世袭之说，有的只是我奋斗我成功的真理。我坚信，我们的命运由我们的行动决定，而绝非完全由我们的出身决定。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp就像你所知道的那样，在我小的时候，家境十分贫寒，记得我刚上中学时所用的书本都是好心的邻居为我买的，我的人生开始时也只是一个周薪只有5元钱的簿记员，但经由不懈的奋斗我却建立了一个令人艳羡的石油王国。在他人眼里这似乎是个传奇，我却认为这是对我持之以恒、积极奋斗的回报，是命运之神对我艰苦付出的奖赏。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp约翰，机会永远都会不平等，但结果却可能平等。在历史上，无论是在政界还是在商界，尤其在商界，白手起家的事例俯拾皆是，他们都曾因贫穷而少有机会，他们却都因奋斗而功成名就。然而，历史上也充斥着富家子弟拥有所有优势，却走向失败的事例。麻州的一项统计数字说，十七个有钱人的孩子里面，竟然没有一个在离开这个世界时还是富翁。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp一个真正快乐的人，是能够享受他的创造的人。那些像海绵一样，只取不予的人，只会失去快乐乐。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp我相信没有不渴望过上快乐、高贵生活的人，但真正懂得高贵快乐生活从何而来的人却不多。在我看来，高贵快乐的生活，不是来自高贵的血统，也不是来自高贵的生活方式，而是来自高贵的品格——自立精神，看看那些赢得世人尊重、处处施展魅力的高贵的人，我们就知道自立的可贵。"],
        type: 1
    }, 
     {
        img: "images/5.jpg",
        num: 3,
        title: "抗疫家书",
        text: [""],
        type: 2
    }, {
        img: "",
        num: 3,
        title: "",
        text: ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长沙市中医医院重症医学科刘映霞<br/>亲爱的爸爸妈妈：<br/>你们好！<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;又是一年除夕，又是一年的爽约。自从工作后，越来越少的陪伴，成了我生活里最大的遗憾。 四年，我总是在往前走,走向更远更明亮的路。却忽略了背后默默付出和担心的你们。自从那天长沙被证实有新型冠状病毒肺炎感染的案例之后，你们每天电话里，从最开始的担忧，后来变成了理解。 你们说：虽然我不知道你现在在经历着什么，但这是你自己的选择。当然我们是支持你的，我们唯一的要求就是你要保护好自己，要平安。所以即使你很忙很累，也想听听你的声音，我才安心。我瞬间泪目。这是在星城的第五个大年三十，游子思乡，在年味里最能体会，写在旅途中的话语，与对春节的期盼，被工作搁浅。但当朋友说：你可以不用那么拼，可以试着缓缓的时候。 我说我没有选择，当我五年前踏进那扇门的时候，我就做好了准备。听看你们失望的话语，我自己也很难过，但，这是选择呀，你们的问候，很暖心，但是也害怕你们陪着担心和恐慌，所以很多事情都不想告诉你们。我记得你们在我刚工作的时对于坚决要去监护室的我说：世界那么大，如果有那份心力支持你自己的选择，那么你的世界你决定就好我们只管全力支持。那时候的自己不懂，现在才明白，或许你们的爱就是那种，从舍不得到想保护再到给你自由的全部吧。谢谢你们，让我成长的这么好。也谢谢你们，一直以来的支持、理解与包容。此刻，我在一百多公里的地方，提前祝你们新年快乐，道声新年祝福。愿岁月同我继续爱你，伴你左右望星辰浩瀚。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你们的女儿：刘映霞<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020年1月24日"],
        type: 1
    }, {
        img: "",
        num: 3,
        title: "备注",
        text: ["这是暑期实践时期做的H5作品，拿出来稍作修改以及润色。其中借用了大佬写的jquery插件配套的base.js与base.css是我与舍友两人暑假用了一个星期写的每一页的图片来源都已在右侧注明，并且与原图多多少少有了些许不同。（不求获奖，只为了参加科创嘿嘿嘿）"],
        type: 2
    }, {
        img: "",
        num: 3,
        title: "备注",
        text: ["第一页图片来源：https://image.baidu.com/search/index?tn=baiduimage&ps=1&ct=201326592&lm=-1&cl=2&nc=1&ie=utf-8&word=%E4%B8%80%E5%B0%81%E5%AE%B6%E4%B9%A6<br/>第二页图片来源：http://rizhao.dzwww.com/zhuanti/xzjs/11/js/201504/t20150422_12269861.html<br/>第三页图片来源： http://www.62a.net/s.php?id=557793801973<br/>第四页图片来源：https://baike.baidu.com/pic/%E5%9B%BE%E8%A7%A3%E6%9B%BE%E5%9B%BD%E8%97%A9%E5%AE%B6%E4%B9%A6/2500300/0/5882b2b7d0a20cf47f4ed6d170094b36adaf99e5?fr=lemma&ct=single#aid=0&pic=5882b2b7d0a20cf47f4ed6d170094b36adaf99e5<br/>第五页图片来源：https://www.zhihu.com/topic/20123313/hot<br/>第六页图片来源：http://hunan.sina.com.cn/news/2020-03-04/detail-iimxxstf6265845.shtml?from=<br/>jquery turn.js文件来源：https://www.jq22.com/jquery-info21654"],
        type: 1
    },];
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
                        '<p class="w_title">' + title + '</p>' + '</br>' + '</br>' + '</br>' + '</br>' + '</br>' + '</br>' + '<p class="text_pl">' + p_text + '</p>' +
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
                    turning: function (event, page, pageObject) {

                    }
                }
            });

            $('.bookmark').on('click', 'li', function () {
                var self = $(this),
                    id = self.attr('data-id');
                $('.flipbook').turn('page', id);
            })

            $('.back_catalog').click(function () {
                $('.flipbook').turn('page', 1);
            })
        }

    }
})