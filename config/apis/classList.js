const filterData = require('./common');

module.exports =function (url, cb) {
    filterData(url, $ => {
        const typeList = [];
        const mainList = [];
        $('.channel-m.main .channel-list-l').each(function () {
            const list = $(this).find('ul a').map(function(item) {
                return {
                    name: $(this).text(),                    
                    link: $(this).attr('href')
                };
            }).toArray();
            typeList.push({
                title: $(this).find('h3').text(),
                list
            });
        });
        $('.modo_title.top').each(function () {
            const imgList = $(this).next().find('#resize_list li').map(function(item) {
                return {
                    link: $(this).find('a').attr('href'),
                    pic: $(this).find('img').attr('data-original'),
                    name: $(this).find('a').attr('title'),
                    title: $(this).find('.title').text(),
                    score: $(this).find('.score').text()
                }
            }).toArray();
            const textList = $(this).next().find('.list-txt li').map(function(item) {
                return {
                    link: $(this).find('a').attr('href'),
                    name: $(this).find('a').text(),
                    subName: $(this).find('span').text()
                }
            }).toArray();
            mainList.push({
                title: $(this).find('h2 a').text(),
                link: $(this).find('h2 a').attr('href'),
                imgList,
                textList
            })
        })
        cb({
            typeList,
            mainList
        })
    })
}
// )('http://z.qukansha.com/?s=vod-show-id-2.html', item => {
//     console.log(item)
//     fs.writeFile(__dirname+'/json/textlist.json', JSON.stringify(item), function (err) {
//         if (err) throw err;
//         console.log('It\'s saved!');
//     });
// })