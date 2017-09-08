//清除其他配置，只剩下如下配置
fis.match("public/(**)",{
	release: '/static/$1',
	url : '/$1'
});

fis.match("public/js/(*.js)", {
  useHash: true,
  release: '/static/js/$1',
  url : '/js/$1'
});
fis.match("public/html/(**.js)", {
  useHash: true,
  release: '/static/js/$1',
  url : '/js/$1'
});

fis.match("{public/css/(*.css),public/html/(**.css)}", {
  useHash: true,
  release: '/static/css/$1',
  url : '/css/$1'
  
});

fis.match("{public/images/(**),public/html/(**.jpg)}", {
  useHash: true,
  release: '/static/images/$1',
  url : '/images/$1'

});
