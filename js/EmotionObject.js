class EmotionObject{
  constructor(emotion, description, color, onomatopoeia){
    this.emotion = emotion;
    this.description = description;
    this.color = color;
    this.onomatopoeia = onomatopoeia;
  }

  getOnomatopoeiaWords(){
    let wordArray = [];
    this.onomatopoeia.forEach(element => wordArray.push(new Word(element, dictionary[element], pictureDictionary[element])));

    return wordArray;
  }
  //コンテナのHTMLを文字列を返します。このコンテナの背景は感情の色で、コンテナの上部には、感情と感情の説明が表示されています。次にこの感情の各擬音語とその定義、画像を含んだカードが表示されます。
  getHtmlContainerString(){
    let containerSection =
    `
  <div style="background-color:${this.color};" class="d-flex justify-content-center align-items-center container" id="sec${this.emotion}">
    <div class="content">
      <div class="emotion d-flex justify-content-center">
        <p>${this.emotion}</p>
      </div>
      <div class="describe d-flex justify-content-around">
        <p>${this.description}</p>
      </div>
      <div class="d-flex justify-content-between flex-wrap content onomatope-target">
    `
    let wordArray = this.getOnomatopoeiaWords();
    wordArray.forEach(word => {
      containerSection +=
      `
        <div class="container col-8 pr-5 pb-5">
          <div class="d-flex justify-content-between onomatope-block">
            <div>
              <p>${word.word}</p>
              <p>${word.defintion}</p>
            </div>
            <div class="d-flex align-items-center">
              <img src="${word.pictureUrl}" alt="img">
            </div>
          </div>
        </div>
      `;
    })
    containerSection += '</div></div></div>'

    return containerSection;
  }
}
