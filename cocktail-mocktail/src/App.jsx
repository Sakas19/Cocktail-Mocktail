import React, { useState } from 'react'
import './App.css'



function getActiveClassName (activeArticle, currentArticle) {
  if (activeArticle ===  currentArticle) {
    return 'show-article'
  } else {
    return 'hide-article'
  }
}

function App() {
  const [activeArticle, setActiveArticle] = useState('First Article')

  return (
    <>
    <header className='App-header'>
      <h1>Coktail & Moktail</h1>
      </header>
      <article className={`active ${getActiveClassName(activeArticle, 'First Article')}`} >
        <h1>About Us</h1>
        <p>Here we have a recipe for any occasion for you,booze or no booze. you dont need to compermise in taste.</p>
      </article>
      <article className={`active ${getActiveClassName(activeArticle, '2nd Article')}`} >
        <h1>Mojito</h1>
        <p>
        Ingredients:
        <li>juice of 1 lime</li>
        <li>granulated suger 1 tsp</li>
        <li>small handfull of mint leaves</li>
        <li>white rum 60ml</li>
        <li>soda water or sprite, to taste</li>
        Method:
        <li>STEP 1</li>
        Muddle the lime juice, sugar and mint leaves in a small jug, crushing the mint as you go – you can use the end of a rolling pin for this. Pour into a tall glass and add a handful of ice.
        <li>STEP 2</li>
        Pour over the rum, stirring with a long-handled spoon. Top up with soda water, garnish with mint and serve.
        </p>
      </article>
      <article className={`active ${getActiveClassName(activeArticle, '3rd Article')}`} >
      <h1>Mojito Mocktail</h1>
      <p>
      Ingredients:
      <li>Juice of 3 limes</li>
      <li>small bunch of mint</li>
      <li>1 tbsp suger</li>
      <li>soda water or sprite</li>
      Method:
      <li>STEP 1</li>
      Muddle the sugar with leaves from the mint using a pestle and mortar (or use a small bowl and the end of a rolling pin).
      <li>STEP 2</li>
      Put a handful of crushed ice into 2 tall glasses. Divide the lime juice between the glasses with the mint mix. Add a straw and top up with soda water.
      </p>
      </article>
      <article className={`active ${getActiveClassName(activeArticle, '2nd Article')}`} >
        <h1>Daiquiri</h1>
        <p>
        Ingredients:
        <li>2 ounces light rum</li>
        <li>1 ounce lime juice, freshly squeezed</li>
        <li>3/4 ounce demerara sugar syrup</li>
        <li>Garnish: lime twist</li>
        Method:
        <li>STEP 1</li>
        Add the rum, lime juice and demerara sugar syrup to a shaker with ice, and shake until well-chilled.
        <li>STEP 2</li>
        Strain into a chilled coupe and garnish with a lime twist.
        </p>
      </article>
      <article className={`active ${getActiveClassName(activeArticle, '3rd Article')}`} >
      <h1>Daiquiri Mocktail</h1>
      <p>
      Ingredients:
      <li>100g caster sugar</li>
      <li>3-4 tbsp apple juice</li>
      <li>a dash almond extract</li>
      <li>30ml lime juice</li>
      <li>15ml sugar syrup</li>
      <li>lime wedge, to garnish</li>
      Method:
      <li>STEP 1</li>
     To make the sugar syrup, put the sugar and 100ml water in a pan and heat gently, stirring, until the sugar dissolves. Cool. This will make more than you need but will keep in the fridge for a couple of weeks.
      <li>STEP 2</li>
      Put the lime and apple juice, almond extract and sugar syrup in a cocktail shaker with ice and shake well. Strain into a small coupe glass and serve.
      </p>
      </article>

      <div className='article'>
      <button onClick={() => {
  setActiveArticle((currentArticle) => {
    if (currentArticle === 'First Article') {
      return '2nd Article'
    } else if (currentArticle === '2nd Article') {
      return '3rd Article'
    } else {
      return 'First Article'
    }
  })
}}>Next Drink!</button>
      </div>
    </>
  )
}

export default App