console.log("Bem-vindo ao programinha que calcula seu imc");

imc(700,1.8);
function imc(peso, altura){
  const imc = peso /altura**2;

  if((imc >=18.5) && (imc<=24.9)){
    console.log("Seu imc esta normal e é",imc);
  }
  else if((imc >=25) && (imc <=29.9)){

    console.log("Seu imc esta acusando um sobrepeso e é",imc);
  }
  else if((imc >=30)&& (imc <40)){

    console.log("Seu imc esta acusando obesidade e é:",imc)

  }
  else if(imc <18.5){
    console.log("Seu imc esta acusando um nivel abaixo do peso",imc)
  }
  else{
    console.log("Seu imc esta acusando uma obesidade grave:",imc)
  }


}

