import '/home/tom-bombadil/cherrybrookcodes/testing/bug-shrine/bug-shrine/src/styles/welcometext.css'

const Daydisp = ({daydif}) => {
    return (
            <div2 className="welcome">I have loved my Bug for {daydif} days! 
            <br></br>
            So i made her this website.</div2>
    )
};

const Daycalc = () =>{

    const anniversary = new Date("July 27, 2015 10:45:00");
    console.log(anniversary);
    const secdif = Date.now()-anniversary;
    console.log(secdif);
    const output = Math.round(secdif/(1000*60*60*24))
    console.log(output);

    return (
            <Daydisp daydif = {output} />
    )
}

export default Daycalc;