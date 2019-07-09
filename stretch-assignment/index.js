const blocks = document.querySelectorAll(".block");
blocks.forEach(function(block) {
  block.addEventListener("click", event => {
    blocks.forEach(function(block) {
      block.style.order = "1";
    });
    event.target.style.order = "0";
  });

  let pos = 0;
  block.addEventListener("mousedown", event => {
    let id = setInterval(frame, 10);
    function frame() {
      if (pos === 1000) {
        clearInterval(id);
      } else {
        pos++;
        event.target.style.left = pos + "px";
      }
    }

    block.addEventListener("mouseup", event => {
      clearInterval(id);
      let back = setInterval(backwards, 10);
      function backwards() {
        if (pos === 0) {
          clearInterval(back);
        } else {
          pos--;
          event.target.style.left = pos + "px";
        }
      }
    });
  });
});
