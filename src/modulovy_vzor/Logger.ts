export class Logger {
  private static instance: Logger
  private logs: string[] = []
  private constructor() {}
  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  getLogs(): string[] {
    return this.logs
  }
  logMessage(message: string) {
    this.logs.push(message)
  }
}

/* 
Implementujte třídu Logger jako Singleton. Tato třída bude uchovávat záznamy o událostech v aplikaci. Každá událost bude mít metodu logMessage(message: string), která vypíše zprávu a uchová ji v seznamu zpráv.
Požadavky:
Zajistěte, aby byla vytvořena pouze jedna instance Logger třídy.
Přidejte metodu getLogs(), která vrátí všechny zaznamenané zprávy.
Použijte logMessage() na více místech v kódu a ujistěte se, že všechny zprávy jsou uloženy na jednom místě.
 */
