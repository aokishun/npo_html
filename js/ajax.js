;(function () {
// ajax_test
  //ページを表示させる箇所の設定
  var $content = $('.pageDisplay');
  //ボタンをクリックした時の処理
  $(document).on('click', '.gnavi a', function(event) {
    //バー消す
     $('.gnavi li' ).removeClass("fh5co-active");
     //クリックしたところのバーを追加
     $(this).addClass("fh5co-active");
    event.preventDefault();
    //.gnavi aのhrefにあるリンク先を保存
    var link = $(this).attr("href");
    //リンク先が今と同じであれば遷移しない
    if(link == lastpage){
      $('li' ).removeClass("fh5co-active");
      return false;
    }else{
      $content.fadeOut(600, function() {
        getPage(link);
      });
      //今のリンク先を保存
      lastpage = link;
    }

  });
  //初期設定
  getPage("top.html");
  var lastpage = "top.html";

  //ページを取得してくる
    function getPage(elm){
      $.ajax({
            type: 'GET',
            url: elm,
            dataType: 'html',
            success: function(data){
                $content.html(data).fadeIn(600);
            },
            error:function() {
                       alert('問題がありました。');
                   }
      });
    }
}());
