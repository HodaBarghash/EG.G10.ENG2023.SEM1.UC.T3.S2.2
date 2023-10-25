function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6EXVMnsyJrc":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwZ4NmrAy0MlR1xTKgxToLQPbmghN4LEhkXRocU-6pACTJAHVkgDPK_HZWTFWxscg9W/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v11q1attempts:player.GetVar("v19q1attempts"),v19q1answeredcorrect:player.GetVar("v19q1answeredcorrect"),v19q2attempts:player.GetVar("v19q2attempts"),v19q2answeredcorrect:player.GetVar("v19q2answeredcorrect"),v19q3attempts:player.GetVar("v19q3attempts"),v19q3answeredcorrect:player.GetVar("v19q3answeredcorrect")})
	}
	)
}

