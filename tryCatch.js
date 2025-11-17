  function dividir(a, b) {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
  }

function exemploTryCatchFinallyThrow() {
  // Exemplo simples: força um erro dentro do try para que o fluxo vá para o catch
  console.log("Iniciando try/catch demonstrativo...");

  try {
    console.log("Tentando dividir 10 por 0...");
    console.log("Resultado:", dividir(10, 0));
  } catch (err) {
    console.error("Entrou no catch.\nErro capturado:", err.message);
  } finally {
    console.log("Finally executado.");
  }

  console.log("Fim do script.");
}

// exemploTryCatchFinallyThrow();

function exemploTryCatch() {
  // Exemplo simples: força um erro dentro do try para que o fluxo vá para o catch
  console.log("Iniciando try/catch demonstrativo...");
  try {
    console.log("Tentando executar código que gera um erro...");
    // Código que gera um erro
    // Em vez de usar uma variável não declarada (x), geramos um erro controlado
    throw new Error("Erro forçado para demonstração: variável 'x' não declarada.");
    console.log("Isto não será executado porque ocorreu um erro acima.");
  } catch (error) {
    // Aqui o catch é atingido
    console.error("Entrou no catch. Erro capturado:", error.name + ": " + error.message);
    
  }
}


// exemploTryCatch();

function exemploFinally() {
  console.log("Iniciando exemplo com finally...");
    try {
    console.log("Executando código dentro do try...");
    // Código que pode ou não gerar um erro
    let valor = 42;
    console.log("Valor é:", valor);
  }catch(err){
    console.error("Erro capturado:", err.message);
  } finally {
    // finally sempre executa
    console.log("Deseja continuar? ");
  }
}
// exemploFinally();

// Versão ainda mais simples: recebe parâmetros ou usa valores padrão
function executarExemploReal(a = 10, b = 0) {
    console.log("--- Calculadora simples ---");
    a = Number(a);
    b = Number(b);

    try {
        if (!Number.isFinite(a) || !Number.isFinite(b)) throw new Error("Os valores devem ser números válidos.");
        const resultado = dividir(a, b); // dividir já lança erro em divisão por zero
        console.log(`Resultado: ${a} / ${b} = ${resultado}`);
    } catch (err) {
        console.error("Erro:", err.message);
    } finally {
        console.log("Fim do exemplo.");
    }
}


// executarExemploReal();


