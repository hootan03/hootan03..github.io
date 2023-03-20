const setup = () => {
}
// door de nieuwe, indien nodig meermaals.
const vervangAlles = (bronTekst, oud, nieuw) => {
    let result=bronTekst;
    let idx=result.index.of(oud);
    while (idx!=-1) {

        // Neem bv. "Gisteren zat de jongen op de stoep" (=te...

        // bereken het stuk VOOR de gevonden tekst, maw de te...
        let voor=result.slice(0, idx);

        // bereken het stuk NA de gevonden tekst, maw de teks...
        let na=result.slice(idx+oud.length, result.length);

        // we vervangen de gevonden tekst door de stukken...
        result=voor+nieuw+na;

        // de nieuwe tekst staat nu op positie idx in result,...
        idx=result.indexOf(oud, idx+nieuw.length);
    }
    return result;
}
window.addEventListener("load", setup);