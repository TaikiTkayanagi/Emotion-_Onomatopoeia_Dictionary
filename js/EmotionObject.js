class EmotionObject{
  constructor(emotion, description, color, onomatopoeia, icon){
    this.emotion = emotion;
    this.description = description;
    this.color = color;
    this.onomatopoeia = onomatopoeia;
    this.icon = icon
  }

  getOnomatopoeiaWords(){
    let wordArray = [];
    this.onomatopoeia.forEach(element => wordArray.push(new Word(element, dictionary[element], pictureDictionary[element])));

    return wordArray;
  }

  getHtmlContainerString(){
    let containerSection =
    `
  <div style="background-color:${this.color};" class="d-flex justify-content-center align-items-center" id="sec${this.emotion}">
    <div class="content">
      <div class="emotion d-flex justify-content-center">
        <a href="#top"><h3>${this.emotion}</h3></a>
      </div>
      <div class="describe d-flex justify-content-around">
        <h3>${this.description}</h3>
      </div>
      <div class="d-flex justify-content-between flex-wrap content onomatope-target">
    `
    let wordArray = this.getOnomatopoeiaWords();
    wordArray.forEach(word => {
      containerSection +=
      `
        <div class="col-4 pl-5 pb-5 onomatopoeia-container">
          <div class="onomatope-block">
            <div>
              <h3>${word.word}</h3>
              <p>${word.defintion}</p>
            </div>
            <div class="d-flex justify-content-end onomatopoeia-img-block">
              <img src="${word.pictureUrl}" alt="img" class="onomatopoeia-img">
            </div>
          </div>
        </div>
      `;
    })
    containerSection += '</div></div></div>'

    return containerSection;
  }
}
