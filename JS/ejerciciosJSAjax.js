document.querySelector("#ejercicio1").addEventListener("click", ejerciciojs1);
document.querySelector("#ejercicio2").addEventListener("click", ejerciciojs2);
document.querySelector("#ejercicio3").addEventListener("click", ejerciciojs3);
document.querySelector("#ejercicio4").addEventListener("click", ejerciciojs4);

function ejerciciojs1() {
  let eje1 = document.querySelector("#formpalindromo");
  let eje2 = document.querySelector("#nummayor");
  eje2.innerHTML = `
    `;
  let eje3 = document.querySelector("#contarvocales");
  eje3.innerHTML = `
    `;
  let eje4 = document.querySelector("#cadavocal");
  eje4.innerHTML = `
    `;
  eje1.innerHTML = `
        
            <div class="text-center d-flex justify-content-center row mb-1"><br>
                <h2 class="p-3 mb-2 bg-primary text-white">Ejercicio 1</h2> 
                    <h2 class= "p-3 mb-2 bg-light text-primary">Digita una cadena de texto para saber si es palíndromo</h2> 
                    <br><br>
                    <input class= "text-center d-flex col-sm-6 row mb-3" type="text" placeholder="Digita una cadena" name="palindrome" id="palindrome" required ><br>

                    <div class="d-grid gap-1 col-6 mx-auto justify-content-center">
                    <button type="button" class="btn btn-success" onclick="verificarPalindrome()">Verificar</button>
                    </div>

            </div>
        `;
}

function ejerciciojs2() {
  let eje2 = document.querySelector("#nummayor");
  let eje3 = document.querySelector("#contarvocales");
  eje3.innerHTML = `
    `;
  let eje4 = document.querySelector("#cadavocal");
  eje4.innerHTML = `
    `;
  let eje1 = document.querySelector("#formpalindromo");
  eje1.innerHTML = `
    `;
  eje2.innerHTML = `

                <div class="text-center d-flex justify-content-center row mb-1" ><br>
                    <h2 class="p-3 mb-2 bg-primary text-white">Ejercicio 2</h2> 
                    <h2 class= "p-3 mb-2 bg-light text-primary">Digita dos números para verificar cual es mayor</h2> 
                    <br><br>
                    <input class= "text-center d-flex col-sm-2 row mb-1" type="text" placeholder="Digita número 1" name="num1" id="num1" required ><br>
                    <input class= "text-center d-flex col-sm-2 row mb-1" type="text" placeholder="Digita número 2" name="num2" id="num2" required ><br>

                </div>

                <div class="d-grid gap-1 col-6 mx-auto justify-content-center">
                     <button type="button" class="btn btn-success" onclick="numeroMayor()">Verificar</button><br>
                </div>
            
            `;
}

function ejerciciojs3() {
  let eje3 = document.querySelector("#contarvocales");
  let eje4 = document.querySelector("#cadavocal");
  eje4.innerHTML = `
    `;
  let eje2 = document.querySelector("#nummayor");
  eje2.innerHTML = `
    `;
  let eje1 = document.querySelector("#formpalindromo");
  eje1.innerHTML = `
    `;
  eje3.innerHTML = `
            <div class="text-center d-flex justify-content-center row mb-3"><br>
                <h2 class="p-3 mb-2 bg-primary text-white">Ejercicio 3</h2> 
                <h2 class= "p-3 mb-2 bg-light text-primary">Digita una frase y te diremos cuántas vocales contiene</h2> 
                <br><br>
                <input class= "text-center d-flex col-sm-6 row mb-3" type="text" placeholder="Digita una frase" name="contVocales" id="contVocales" required ><br>
                <div class="d-grid gap-1 col-6 mx-auto justify-content-center">
                <button type="button" class="btn btn-success" onclick="contarvocales()">Verificar</button>
                </div>
            </div>
            
            `;
}

function ejerciciojs4() {
  let eje4 = document.querySelector("#cadavocal");
  let eje3 = document.querySelector("#contarvocales");
  eje3.innerHTML = `
    `;
  let eje2 = document.querySelector("#nummayor");
  eje2.innerHTML = `
    `;
  let eje1 = document.querySelector("#formpalindromo");
  eje1.innerHTML = `
    `;
  eje4.innerHTML = `
            <div class="text-center d-flex justify-content-center row mb-3"><br>
                <h2 class="p-3 mb-2 bg-primary text-white">Ejercicio 4</h2> 
                <h2 class= "p-3 mb-2 bg-light text-primary">Digita una frase y te diremos cuántas veces aparece cada una de las vocales</h2> 
                <br><br>
                <input class= "text-center d-flex col-sm-6 row mb-3" type="text" placeholder="Digita una frase" name="contcadavocal" id="contcadavocal" required ><br>
                <div class="d-grid gap-1 col-6 mx-auto justify-content-center">
                <button type="button" class="btn btn-success" onclick="contvocal()">Verificar</button>
                </div>
            </div>
            
            `;
}
