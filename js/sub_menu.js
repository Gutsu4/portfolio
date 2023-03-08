document.addEventListener('DOMContentLoaded', function() {
  const workLink = document.getElementById("work-link");
  const workSubMenu = document.getElementById("work-sub-menu");

  // Workリンクにマウスが乗ったときのイベント
  workLink.addEventListener("mouseover", function() {
    // Workリンクの下にあるサブメニューを表示する
    workSubMenu.style.display = "block";
  });

  // Workリンクからマウスが離れたときのイベント
  workLink.addEventListener("mouseout", function() {
    setTimeout(function() {
      if (!workSubMenu.matches(":hover") && !workLink.matches(":hover")) {
        // Workリンクの下にあるサブメニューを非表示にする
        workSubMenu.style.display = "none";
      }
    }, 500);
  });

  // サブメニューにマウスが乗ったときのイベント
  workSubMenu.addEventListener("mouseover", function() {
    // サブメニューを表示したままにする
    workSubMenu.style.display = "block";
  });

  // サブメニューからマウスが離れたときのイベント
  workSubMenu.addEventListener("mouseout", function() {
    setTimeout(function() {
      if (!workSubMenu.matches(":hover") && !workLink.matches(":hover")) {
        // Workリンクの下にあるサブメニューを非表示にする
        workSubMenu.style.display = "none";
      }
    }, 500);
  });

  // ページロード時にサブメニューを非表示にする
  workSubMenu.style.display = "none";
});
