function emotionOnomatopoeia(targetDiv, emotions){
  let categories =
  `
  <div class="category bg-light">
    <div class="title" id="top">
      <h1>Category</h1>
    </div>
    <div class="category-content d-flex justify-content-center">
      <div class="section d-flex row col-8 flex-wrap">
  `
  emotions.forEach(emotionObj => {
    categories +=
    `
    <div style="background-color:${emotionObj.color};" class="emotion-block col-3 ml-4 mb-2">
      <a href="#sec${emotionObj.emotion}">
        <div class="d-flex justify-content-center align-items-center">
          <h3>${emotionObj.emotion}</h3>
        </div>
      </a>
      <div class="emotion-img d-flex justify-content-center align-items-center">
        ${emotionObj.icon}
      </div>
    </div>

    `;
  })
  categories += "</div></div></div>";

  let htmlStringArray = [];
  emotions.forEach(emotionObj => htmlStringArray.push(emotionObj.getHtmlContainerString()));

  targetDiv.innerHTML = categories;
  htmlStringArray.forEach(htmlString => targetDiv.innerHTML += htmlString);
}


document.addEventListener("DOMContentLoaded", () => {
  const emotions = [
      new EmotionObject("angry", "feeling or showing strong annoyance, displeasure, or hostility; full of anger.", "red", ["bark","grunt", "roar","whack","smack","hiss"], '<i class="fas fa-angry"></i>'),
      new EmotionObject("happy", "feeling or showing pleasure or contentment.", "yellow", ["bling","chatter","chant","giggle"], '<i class="fas fa-smile-wink"></i>'),
      new EmotionObject("bad", "not such as to be hoped for or desired; unpleasant or unwelcome.", "beige", ["ahem","clatter","clunk"], '<i class="fas fa-flushed"></i>'),
      new EmotionObject("sad", "feeling or showing sorrow; unhappy.", "grey", ["bawl","whine","waah"], '<i class="fas fa-sad-tear"></i>'),
      new EmotionObject("surprised", "to feel mild astonishment or shock.", "purple", ["boom","honk","zing"], '<i class="fas fa-surprise"></i>'),
      new EmotionObject("fearful", "feeling afraid; showing fear or anxiety.", "green", ["buzz","caw","crawl"], '<i class="fas fa-tired"></i>'),
      new EmotionObject("disgusted", "feeling or showing strong annoyance, displeasure, or hostility; full of anger.", "orange", ["flick","gargle","oink"], '<i class="fas fa-mask"></i>')
  ];

  emotionOnomatopoeia(document.getElementById("target"), emotions);
})
