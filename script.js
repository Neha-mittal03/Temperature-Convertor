const tempSelected = document.getElementById('temp_diff');
console.log(tempSelected.options[1].value);






const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    // The selectedIndex property sets or returns the index of the selected option in a drop-down list.

    // The index starts at 0.

    // Note: If the drop-down list allows multiple selections it will only return the index of the first option selected.

    // Note: The value "-1" will deselect all options (if any).

   // Note: If no option is selected, the selectedIndex property will return -1.

    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
    }
}
