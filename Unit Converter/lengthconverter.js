var input = document.getElementById('Meter');
var result = document.getElementById('Centimeter');
var inputType = document.getElementById('InputUnitFrom');
var resultType = document.getElementById('resultUnitFrom');
var inputTypeValue,resultTypeValue, convertedInputValue, convertedResultValue;


//now add listener
input.addEventListener("input",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

//taking initial value
inputTypeValue = inputType.value;



function myResult(){

    
        // convert input value in centimeter
    
        switch(inputType.value) {
            case "meter" :
                convertedInputValue = input.value * 100
                break;
            case "centimeter" :
                convertedInputValue = input.value
                break;
            case "decimeter" :
                convertedInputValue = input.value * 10
                break;
            case "kilometer" :
                convertedInputValue = input.value * 100000
                break;
            case "foot" :
                convertedInputValue = input.value * 30.48
                break;
            case "inch" :
                convertedInputValue = input.value * 2.54
                break;
            case "mile" :
                convertedInputValue = input.value * 160934
                break;
            case "yard" :
                convertedInputValue = input.value * 91.44
                break;
            default : convertedInputValue = input.value
        }
    
    
        switch(resultType.value) {
            case "meter" :
                convertedResultValue = convertedInputValue * 0.01
                break;
            case "centimeter" :
                convertedResultValue = convertedInputValue
                break;
            case "decimeter" :
                convertedResultValue = convertedInputValue * 0.1
                break;
            case "kilometer" :
                convertedResultValue = convertedInputValue *  0.00001
                break;
            case "foot" :
                convertedResultValue = convertedInputValue*0.0328084
                break;
            case "inch" :
                convertedResultValue = convertedInputValue * 0.393701
                break;
            case "mile" :
                convertedResultValue = convertedInputValue * 0.00000621371
                break;
            case "yard" :
                convertedResultValue = convertedInputValue* 0.0109361
                break;
            default : convertedResultValue = convertedInputValue

        }
       

        console.log("converted input value in cm is",convertedInputValue)
        console.log("resulted input value in cm", convertedResultValue)
        result.value = convertedResultValue;
      


        

        

  

    

    // when we change the input and output type value we need to update the 
     //inputTypeValue and resultTypeValue

    //  inputTypeValue = inputType.value;
    //  resultTypeValue = resultType.value;
//now compare the input and resultType value and add formula
// if(inputTypeValue === "meter" && resultTypeValue === "kilometer"){

//     //this is meter to kilometer formula
//     result.value = Number(input.value) * 0.001;
// } else if(inputTypeValue === "meter" && resultTypeValue === "Centimeter"){

//     //this is meter to Centimeter formula
//     result.value = Number(input.value) * 100;
// } else if(inputTypeValue === "meter" && resultTypeValue === "meter"){

//     //this is meter to Centimeter formula
//     result.value = input.value ;
// 










}