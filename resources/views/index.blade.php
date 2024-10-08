<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PMTCT Mother Evaluation</title>
    <link rel="stylesheet" href="{{asset("assets/css/style.css")}}" />
</head>

<body>
    <h2>Please answer the following questions for a new PMTCT mother:</h2>

    <form onsubmit="event.preventDefault(); evaluateMother();">
        <p>
            Did the mother attend ANC late? (Visit above 12 weeks) (Y/N)
            <input type="text" id="lateANC" required />
        </p>
        <p>
            What is the mother's viral load? (in copies/ml)
            <input type="number" id="viralLoad" required />
        </p>
        <p>
            Is the mother a chronic defaulter (missed 2/5 visits)? (Y/N)
            <input type="text" id="defaulted" required />
        </p>
        <p>
            Does the mother have any opportunistic infections? (Y/N)
            <input type="text" id="oi" required />
        </p>
        <p>
            What is the mother's age? (in years)
            <input type="number" id="age" required />
        </p>
        <p>
            Has the mother disclosed to her partner? (Y/N)
            <input type="text" id="disclosed" required />
        </p>

        <input type="submit" value="Evaluate" />
    </form>

    <h3 id="result"></h3>

    <script src="{{ asset('assets/js/script.js') }}"></script>
</body>

</html>