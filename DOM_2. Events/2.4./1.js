  function handler(e) {
    alert( "..." );
    e.preventDefault()
  }

<a href="https://w3.org" onclick="handler(e)">браузер не откроет w3.org</a>