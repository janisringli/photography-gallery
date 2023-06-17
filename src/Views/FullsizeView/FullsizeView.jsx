import "./FullsizeView.css";

function FullsizeView({imageUrl, FullsizeWrapperRef  }) {
  function closeFullsize() {
    const fullsize = document.querySelector(".FullsizeView-container");
    fullsize.style.display = "none";
  }
  return (
    <div onClick={closeFullsize} className="FullsizeView-container" ref={FullsizeWrapperRef}>
     <img src={imageUrl} alt="" />
    </div>
  );
}
export default FullsizeView;
