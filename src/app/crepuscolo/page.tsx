import Dusk from "../../components/Dusk";
import Script from 'next/script'
import Image from 'next/image'

export default function Crepuscolo() {
  return (
    <main className="flex min-h-screen flex-col align-start bg-black">
      <div className="relative">
        <Image src="/background.png" width="992" height="614" alt="background" style={{ width: "100%" }} />
        <div className="background-gradient"></div>
        <div className="absolute inset-0 top-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            crepuscolo
          </h1>
          <p className="text-center text-2lg md:text-2lg lg:text-lg w-100 md:w-2/5 px-5 md:px-0 text-white">ci vediamo al crepuscolo per sperimentare e creare su tutto quello per cui non abbiamo tempo durante il giorno.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center px-5 md:px-10 mt-10">
        <div className="flex justify-between items-center border border-transparent dark:border-white/[0.2] rounded-2xl p-5 overflow-hidden mb-20">
          <div className="mr-1 md:mr-4">
            <h2 className="text-2lg md:text-2lg lg:text-lg font-semibold text-white ">ci vediamo al crepuscolo</h2>
            <h3 className="text-gray-400 text-white">prossimo incontro mercoledì otto gennaio</h3>
          </div>
          <a
            href="https://lu.ma/event/evt-yXfKqDUpLmw8ggX"
            className="luma-checkout--button px-4 py-2 text-white bg-blue-600 rounded-full text-white"
            data-luma-action="checkout"
            data-luma-event-id="evt-yXfKqDUpLmw8ggX"
          >
            registrati
          </a>
        </div>
        <div className="flex flex-row justify-around mb-10">
          <div className="rotate-3 bg-cover bg-center rounded-md" style={{ width: 240, height: 150, backgroundImage: "url('/crepuscolo_1.jpg')" }}  />
          <div className="-rotate-6 bg-cover bg-center rounded-md" style={{ width: 240, height: 150, backgroundImage: "url('/crepuscolo_2.jpg')" }}  />
          <div className="rotate-3 bg-cover bg-center rounded-md" style={{ width: 240, height: 150, backgroundImage: "url('/crepuscolo_3.jpg')" }}  />
        </div>
        <p className="text-sm md:text-base text-white">crepuscolo è un <a className="underline" target="_blank" href="https://www.wellnesswisdom.xyz/p/what-is-a-forth-place">quarto spazio</a> per tecnici e creativi. qui potrai lavorare ai tuoi progetti e condividere idee con altri creativi.<br/> le sessioni sono intime, sei persone per volta, per mantenere un buon livello di concentrazione e condivisione.</p><br/>
        <p className="text-sm md:text-base text-white mb-8">
          se stai sviluppando un app puoi venire a farlo.<br/>
          ​se stai costruendo hardware puoi venire a farlo.<br/>
          ​se stai montando un progetto video puoi venire a farlo.<br/>
          ​se stai imparando una cosa nuova puoi venire a farlo.
        </p>
        <h2 className="text-3xl font-semibold mb-4 text-white">cosa aspettarti</h2>
        <ol className="list-decimal list-inside text-white">
          <li>condividi il tuo obiettivo per la serata</li>
          <li>prima sessione di lavoro da un&apos;ora e mezza</li>
          <li>pausa di trenta minuti</li>
          <li>seconda sessione di lavoro di un&apos;ora e mezza</li>
          <li>demo su base volontaria</li>
        </ol>
        {/* <p className="text-sm md:text-base text-white"></p><br/> */}
        <p className="text-sm md:text-base text-white">crepuscolo è organizzato da italian dynamism e moonstone vc.</p>
      </div>
      <p className="text-center my-10 px-2 text-white text-sm md:text-base">Made from Milan 🇮🇹 and San Francisco 🇺🇸 for creative builder&apos;s minds.</p>
      <Script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js"></Script>
    </main>
  );
}