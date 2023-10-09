function calculateDemeritPoints() {
    // Get the speed from the input field.
    const speed = Number(document.getElementById("speed").value);

    // Calculate the number of demerit points.
    let demeritPoints = 0;
    if (speed > 70) {
      demeritPoints = Math.floor((speed - 70) / 5);
    }

    // Check if the driver's license is suspended.
    if (demeritPoints > 12) {
      document.getElementById("demeritPoints").innerHTML = "License suspended";
      return;
    }

    // Display the number of demerit points.
    document.getElementById("demeritPoints").innerHTML = `Demerit points: ${demeritPoints}`;
  }