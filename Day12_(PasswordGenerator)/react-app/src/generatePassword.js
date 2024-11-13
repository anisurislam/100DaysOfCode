export function generatePassword() {
    let alphabets = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let specialChars = ["@", "#", "$", "%", "&", "*"];
    let passwordLength = 15;

    // #################################################
    // #### Main Random Password Generator Function ####
    // #################################################
    let randomPassword = (
      alphabet = [],
      number = [],
      specialChar = [],
      passwordLength = 8
    ) => {
      let joinedArr = [...alphabet, ...number, ...specialChar];
      let password = generate(joinedArr, passwordLength).join("");
      return password;
    };

    function generate(joinedArr, passwordLength) {
      let outputArr = [];

      // ##### Creating the outputArr #####
      outputArr.push(specialChars[getRndInteger(0, specialChars.length - 1)]);
      outputArr.push(numbers[getRndInteger(0, numbers.length - 1)]);
      while (outputArr.length < passwordLength) {
        let randomNumber = getRndInteger(0, joinedArr.length - 1);
        outputArr.push(joinedArr[randomNumber]);
      }

      // #### Shuffling the outputArr ####
      let currentIndex = outputArr.length;
      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        let randomIndex = getRndInteger(0, currentIndex - 1);
        currentIndex--;
        // And swap it with the current element.
        [outputArr[currentIndex], outputArr[randomIndex]] = [
          outputArr[randomIndex],
          outputArr[currentIndex],
        ];
      }

      return outputArr;
    }
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let result = randomPassword(
      alphabets,
      numbers,
      specialChars,
      passwordLength
    );
    return result;
  }