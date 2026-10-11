document.addEventListener("DOMContentLoaded", function () {
  const volumeModal = document.getElementById("volumeModal");
  const volumeTitle = document.getElementById("volumeModalTitle");
  const volumeText = document.getElementById("volumeModalText");
  if (volumeModal) {
    volumeModal.addEventListener("show.bs.modal", function (event) {
      const trigger = event.relatedTarget;
      const number = trigger ? trigger.getAttribute("data-volume") : "1";
      volumeTitle.textContent = "VOLUME " + String(number).padStart(2, "0");
      volumeText.textContent = "เลือกชมปกหนังสือ Vanitas no Carte เล่มที่ " + Number(number) + " ในคอลเลกชันนี้ได้ที่ด้านล่างของเว็บไซต์";
    });
  }
  const navbarMenu = document.getElementById("navbarMenu");
  if (navbarMenu && window.bootstrap) {
    navbarMenu.querySelectorAll("a.nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth < 992) {
          const collapse = bootstrap.Collapse.getInstance(navbarMenu);
          if (collapse) collapse.hide();
        }
      });
    });
  }
});
