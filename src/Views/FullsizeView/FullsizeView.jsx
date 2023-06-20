import "./FullsizeView.css";

function FullsizeView({imageUrl, FullsizeWrapperRef  }) {
  function closeFullsize() {
    const fullsize = document.querySelector(".FullsizeView-container");
    fullsize.style.display = "none";
  }
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.key === "Escape") {
      closeFullsize();
    }
  };
  let url = imageUrl
let slicedUrl = url.replace("/b_rgb:000000,c_limit,h_200,o_90,w_400/ar_1:1,b_rgb:000000,c_lfill,co_rgb:ffffff,l_text:arial_80:%C2%AE,o_60,r_max/", "/");
slicedUrl = slicedUrl.replace("/upload/c_thumb,w_400/", "/upload/");
console.log(slicedUrl)
  return (
    <div onClick={closeFullsize} className="FullsizeView-container" ref={FullsizeWrapperRef}>
        <div className="fullsize-content">
        <img className="fullsize-image" src={slicedUrl} alt="" />
        </div>
     
    </div>
  );
}
export default FullsizeView;
