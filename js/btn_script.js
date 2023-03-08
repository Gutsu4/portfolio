//現在のページにactiveをつける
function menu_active() {
  const menuLinks = document.querySelectorAll('.menu > a');
  // 現在のページのURLを取得する
  const currentPage = window.location.href;
  // メニューのリンクをすべて見て、現在のページと同じリンクに対しては.activeクラスを付ける
  menuLinks.forEach(function(link) {
    if (link.href === currentPage) {
      link.classList.add('active');
    }
  });
}

window.onload = function() {
  menu_active();
};

