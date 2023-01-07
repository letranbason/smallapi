fetch('https://api.example.com/endpoint')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let root = document.getElementById('root');
    for (let item of data) {
      let div = document.createElement('div');
      div.innerHTML = item.name;
      root.appendChild(div);
    }
  });
