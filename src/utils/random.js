const getRandomElement = (elements) => {
    const i_random = Math.floor(Math.random() * elements.length)
    return elements[i_random]
  }

  export{
    getRandomElement
  }