import Dusk from "../../components/Dusk";
import Script from 'next/script'

export default function Crepuscolo() {
  return (
    <main className="flex min-h-screen flex-col align-start bg-black w-100">
      <div className="flex relative w-100">
        <Dusk />
        <div className="background-gradient"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col mb-5">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            crepuscolo
          </h1>
          <p className="text-center text-2lg md:text-2lg lg:text-lg w-3/4">ci vediamo al crepuscolo per sperimentare e creare su tutto quello per cui non abbiamo tempo durante il giorno.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center px-5 md:px-10 mt-10">
        <div className="flex justify-between items-center border border-transparent dark:border-white/[0.2] rounded-2xl p-5 overflow-hidden mb-20">
          <div className="mr-4">
            <h2 className="text-2lg md:text-2lg lg:text-lg font-semibold text-white ">ci vediamo al crepuscolo</h2>
            <h3 className="text-gray-400">prossimo incontro mercoledi sei novembre</h3>
          </div>
          <a
            href="https://lu.ma/event/evt-J8Erwou0OUf1t0Z"
            className="luma-checkout--button px-4 py-2 text-white bg-blue-600 rounded-full"
            data-luma-action="checkout"
            data-luma-event-id="evt-J8Erwou0OUf1t0Z"
          >
            Registrati
          </a>
        </div>
        <h2 className="text-3xl font-semibold mb-4 text-white">cosa aspettarti</h2>
        <p className="text-sm md:text-base">il crepuscolo segna la fine della giornata,</p><br/>
        <p className="text-sm md:text-base">durante la giornata rischiamo di farci guidare troppo dalla pianificazione, fa che il crepuscolo sia un momento di sperimentazione, per provare quelle cose che l&apos;intuizione ti dice possano avere potenziale ma la strategia ti dice che non è il momento.</p><br/>
        <p className="text-sm md:text-base">during our workdays we are driven by rationality, planning and strategy; let the dusk be a moment of experimentation, try that thing your gut is telling you could incredibly improve your business but doesn&apos;t fit in your current planning, try a new technology or try out that idea that&apos;s living rent-free in the back of your mind.</p><br/>
        <p className="text-sm md:text-base">crepuscolo è organizzato da italian dynamism e moonstone vc.</p>
      </div>
      <p className="text-center my-10 px-2 text-white text-sm md:text-base">Made from Milan 🇮🇹 and San Francisco 🇺🇸 for creative builder&apos;s minds.</p>
      <Script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js"></Script>
    </main>
  );
}