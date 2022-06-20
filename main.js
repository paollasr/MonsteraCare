const control = document.querySelectorAll("[data-controle]")
const stats = document.querySelectorAll("[data-estatistica]")
console.log(stats);

const pecas = {
  "sunlight": {
    "force": 10,
    "power": 20,
    "energy": 30,
    "speed": 40,
  },
  "water": {
    "force": 100,
    "power": 11,
    "energy": 12,
    "speed": 13,
  },
  "humidity": {
    "force": 70,
    "power": 80,
    "energy": 90,
    "speed": 100,
  },
  "temperature": {
    "force": 1,
    "power": 2,
    "energy": 3,
    "speed": 4,
  },
}


control.forEach((element) => {
  element.addEventListener("click", (e) => {
    manipulateData(e.target.dataset.control, e.target.parentNode)
    updateStats(e.target.dataset.peca)
  })
})


//operation function
function manipulateData(operation, control) {
  const item = control.querySelector("[data-contador]")

  if (operation === "-") {
    item.value = parseInt(item.value) - 1
  } else {
    item.value = parseInt(item.value) + 1
  }
}

//update values function
function updateStats(peca) {
  console.log(pecas[peca]);

  stats.forEach((element) => {
    element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica]

  })
}
