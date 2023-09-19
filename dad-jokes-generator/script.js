const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")
const apiKey = "yDxNmmk3IxABJbWJLaQC4Q==1Zw6By70rYq2jNhE"

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
}
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {
  try {
    jokeEl.innerText = "updating..."
    btnEl.disabled = true
    btnEl.innerText = "Loading..."
    const response = await fetch(apiURL, options)
    const data = await response.json()
    jokeEl.innerText = data[0].joke
    btnEl.disabled = false
    btnEl.innerText = "Tell me a joke"
  } catch (error) {
    jokeEl.innerText = "An error happend, try again later"
    btnEl.disabled = true
    btnEl.innerText = "Tell me a joke"

    console.log(error)
  }
}

btnEl.addEventListener("click", getJoke)
