function emotionOnomatopoeia(targetDiv, emotions){
  let categories =
  `
  <div class="category">
    <div class="title">
      <h1>Category</h1>
    </div>
    <div class="category-content d-flex justify-content-center flex-wrap">
    <div class="section d-flex row col-8 bg-light">
  `
  emotions.forEach(emotionObj => {
    categories +=
    `
    <div style="background-color:${emotionObj.color};" class="emotion-block container col-3 mr-2">
      <a href="#sec${emotionObj.emotion}">
        <div class="d-flex justify-content-center align-items-center">
          <p>${emotionObj.emotion}</p>
        </div>
        <div class="emotion-img d-flex justify-content-center align-items-center">
          <img src="" alt="img">
        </div>
      </a>
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
      new EmotionObject("angry", "feeling or showing strong annoyance, displeasure, or hostility; full of anger.", "red", ["bark","grunt", "roar","whack","smack","hiss"]),
      new EmotionObject("happy", "feeling or showing pleasure or contentment.", "yellow", ["bling","chatter","chant","giggle"]),
      new EmotionObject("bad", "not such as to be hoped for or desired; unpleasant or unwelcome.", "beige", ["ahem","clatter","clunk"]),
      new EmotionObject("sad", "feeling or showing sorrow; unhappy.", "grey", ["bawl","whine","waah"]),
      new EmotionObject("surprised", "to feel mild astonishment or shock.", "purple", ["boom","honk","zing"]),
      new EmotionObject("fearful", "feeling afraid; showing fear or anxiety.", "green", ["buzz","caw","crawl"]),
      new EmotionObject("disgusted", "feeling or showing strong annoyance, displeasure, or hostility; full of anger.", "orange", ["flick","gargle","oink"])
  ];

  emotionOnomatopoeia(document.getElementById("target"), emotions);
})
